import { useState, useRef, useContext, useEffect } from "react";
import {
  BiCloudUpload,
  BiError,
  BiImage,
  BiSolidTrash,
  BiCheckCircle,
} from "react-icons/bi";
import { CreateArtistContext } from "@/context/CreateArtistFormContext";
import useScreenSize from "@/hooks/useScreenSize";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import ProgressBar from "@ramonak/react-progress-bar";
import toast from "react-hot-toast";
import axiosClient from "@/axiosClient";

const UploadArtistImage = () => {
  const { artistFormData, setArtistFormData, isImageFilled } =
    useContext(CreateArtistContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileName, setFileName] = useState(null);
  const fileInputRef = useRef(null);
  const isMobile = useScreenSize();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (artistFormData.image) {
      setSelectedImage(artistFormData.image);
      setFileName("Uploaded Image");
    } else {
      setSelectedImage(null);
      setFileName(null);
    }
  }, [artistFormData.image]);

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
          setArtistFormData((prevData) => ({
            ...prevData,
            image: data.uri,
          }));
          setSelectedImage(data.uri);
        } else {
          toast.error(message);
          setErrorMessage(message);
        }
      } catch (error) {
        toast.error("An error occurred while uploading the image");
        setErrorMessage("An error occurred while uploading the image");
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const handleRemoveImage = () => {
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage); // Revoke the object URL
    }
    setSelectedImage(null);
    setFileName(null);
    setArtistFormData((prevData) => ({
      ...prevData,
      image: null,
    }));
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const renderMobileError = () => {
    if (isMobile) {
      return isImageFilled && isMobile ? (
        <BiCheckCircle className="text-green-600 text-xl ml-2" />
      ) : (
        <BiError className="text-2xl inline ml-2 text-yellow-600" />
      );
    }
  };

  return (
    <div className="border-b border-slate-200 dark:border-gray pb-5">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold flex justify-between items-center">
          <BiImage className="text-2xl inline mr-2 text-primary dark:text-gray" />
          <span>Upload Artist Image</span>
          {renderMobileError()}
        </h1>

        {/* Back to Auth blogs page */}
        <div className="">
          <Link
            to="/my-artist-profile"
            className="bg-primary text-slate-100 text-sm px-8 py-2 rounded-md flex justify-center items-center gap-2"
          >
            <FaArrowLeftLong />
            Back
          </Link>
        </div>
      </div>
      <p className="text-xs text-gray dark:text-gray">
        Upload a cover image for your artist profile. This image will be used as
        the main image for your artist profile.
      </p>

      {/* Select Image Area */}
      <div
        className="w-[40%] h-[250px] rounded-md border-[2px] border-dotted border-slate-300 dark:border-gray mt-3 flex justify-center items-center mb-3 cursor-pointer"
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
        <div className="flex gap-3 flex-wrap items-center w-1/2">
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

export default UploadArtistImage;
