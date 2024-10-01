import { useState, useRef, useContext, useEffect } from "react";
import {
  BiError,
  BiImage,
  BiSolidTrash,
  BiCloudUpload,
  BiCheckCircle,
} from "react-icons/bi";
import axiosClient from "@/axiosClient";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaArrowLeftLong } from "react-icons/fa6";
import useScreenSize from "@/hooks/useScreenSize.mjs";
import { CreateBlogFromContext } from "@/context/CreateBlogFromContext";
import ProgressBar from "@ramonak/react-progress-bar";

const UploadBlogCover = () => {
  const { blogFormData, setBlogFormData, isCoverImageFilled } = useContext(
    CreateBlogFromContext
  );
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileName, setFileName] = useState(null);
  const fileInputRef = useRef(null);
  const isMobile = useScreenSize();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (blogFormData.cover_image) {
      setSelectedImage(blogFormData.cover_image);
      setFileName("Uploaded Image");
    } else {
      setSelectedImage(null);
      setFileName(null);
    }
  }, [blogFormData.cover_image]);

  const handleImageChange = async (e) => {
    setLoading(true);
    setProgress(0);
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);

      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axiosClient.post("/files", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted);
          },
        });

        const { success, message, data } = response.data;

        if (success) {
          toast.success(message);
          setBlogFormData((prevData) => ({
            ...prevData,
            cover_image: data.uri,
          }));
          setSelectedImage(URL.createObjectURL(file));
        } else {
          toast.error(message);
          setErrorMessage(message);
        }
      } catch (error) {
        toast.error("An error occurred while uploading the image");
        setErrorMessage("An error occurred while uploading the image");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setFileName(null);
    setBlogFormData((prevData) => ({
      ...prevData,
      cover_image: null,
    }));
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const renderMobileError = () => {
    if (isMobile) {
      return isCoverImageFilled ? (
        <BiCheckCircle className="text-green-600 text-xl ml-2" />
      ) : (
        <BiError className="text-2xl inline ml-2 text-yellow-600" />
      );
    }
  };

  return (
    <div className="border-b border-gray/30 dark:border-gray/30 pb-5">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold flex justify-between items-center">
          <BiImage className="text-2xl inline mr-2 text-primary dark:text-gray" />
          <span>Upload Cover</span>
          {renderMobileError()}
        </h1>

        {/* Back to Auth blogs page */}
        <div className="">
          <Link
            to="/auth-blogs"
            className="bg-primary text-slate-100 text-sm px-8 py-2 rounded-md flex justify-center items-center gap-2"
          >
            <FaArrowLeftLong />
            Back
          </Link>
        </div>
      </div>
      <p className="text-xs text-gray dark:text-gray">
        Upload a cover image for your blog. This will be displayed as the
        thumbnail for your blog.
      </p>

      {/* Select Image Area */}
      <div
        className="w-full h-[390px] rounded-md border-[2px] border-dotted border-slate-300 dark:border-gray mt-3 flex justify-center items-center mb-3 cursor-pointer"
        onClick={handleClick}
      >
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected"
            className="object-cover w-full h-full rounded-md"
          />
        ) : (
          <div className="flex flex-col justify-center items-center">
            <BiCloudUpload
              size={55}
              className="text-slate-300 dark:text-gray"
            />
            <span className="text-slate-300 dark:text-gray text-xs">
              Select Image to upload
            </span>

            {loading && (
              <div className="flex flex-col justify-center items-center gap-2 mt-3 w-full">
                <div className="w-full">
                  <ProgressBar
                    completed={progress}
                    bgColor="#732e1c"
                    height="13px"
                    borderRadius="8px"
                    isLabelVisible={false}
                    // baseBgColor={`${isDarkMode ? "#111827" : "#e0e0e0"}`}
                  />
                </div>

                <p className="text-xs text-gray dark:text-gray font-semibold w-full text-center">
                  {progress}% Completed
                </p>
              </div>
            )}

            {errorMessage && (
              <div className="w-full">
                <p className="text-xs text-red-500 dark:text-red-500 mt-3">
                  {errorMessage}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {/* Image Size remove and change button */}
      {selectedImage && (
        <div className="flex justify-between items-center">
          {/* Image Size */}
          <p className="text-xs text-gray">{fileName}</p>

          {/* Image Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleRemoveImage}
              className="text-xs py-1 px-3 bg-red-200 rounded text-red-600 hover:text-slate-100 hover:bg-red-600"
            >
              <BiSolidTrash className="inline mr-2" />
              Remove
            </button>
            <button
              onClick={handleClick}
              className="text-xs py-1 px-3 bg-primary/50 dark:bg-gray dark:text-white text-primary rounded hover:text-slate-100 hover:bg-primary"
            >
              Change
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadBlogCover;
