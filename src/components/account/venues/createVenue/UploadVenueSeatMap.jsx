import { useState, useRef, useContext, useEffect } from "react";
import {
  BiError,
  BiImage,
  BiSolidTrash,
  BiCloudUpload,
  BiCheckCircle,
} from "react-icons/bi";
import ProgressBar from "@ramonak/react-progress-bar";
import axiosClient from "@/axiosClient";
import { CreateVenueContext } from "@/context/CreateVenueFormContext";
import useScreenSize from "@/hooks/useScreenSize.mjs";
import toast from "react-hot-toast";

const UploadVenueSeatMap = () => {
  const { venueFormData, setVenueFormData, isVenueImageFilled } =
    useContext(CreateVenueContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileName, setFileName] = useState(null);
  const fileInputRef = useRef(null);
  const isMobile = useScreenSize();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (venueFormData.seatMap) {
      setSelectedImage(venueFormData.seatMap);
      setFileName("Uploaded Seat Map");
    } else {
      setSelectedImage(null);
      setFileName(null);
    }
  }, [venueFormData.seatMap]);

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
          setVenueFormData((prevData) => ({
            ...prevData,
            seatMap: data.uri,
          }));
          setSelectedImage(URL.createObjectURL(file));
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
    setSelectedImage(null);
    setFileName(null);
    setVenueFormData((prevData) => ({
      ...prevData,
      seatMap: null,
    }));
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const renderMobileError = () => {
    if (isMobile) {
      return isVenueImageFilled ? (
        <BiCheckCircle className="text-green-600 text-xl ml-2" />
      ) : (
        <BiError className="text-2xl inline ml-2 text-yellow-600" />
      );
    }
  };

  return (
    <div className="border-b border-slate-200 dark:border-slate-700 pb-5 mt-5">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold flex justify-between items-center">
          <BiImage className="text-2xl inline mr-2 text-primary dark:text-gray" />
          <span>Upload Seat Map</span>
          {renderMobileError()}
        </h1>
      </div>
      <p className="text-xs text-gray dark:text-gray ">
        Upload a seat map for your venue. This will be visible to all users.
      </p>

      {/* Select Image Area */}
      <div
        className="w-full h-[290px] rounded-md border-[2px] border-dotted border-slate-300 dark:border-gray mt-3 flex justify-center items-center mb-3 cursor-pointer"
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
        <div className="flex justify-between items-center">
          {/* Image Size */}
          <p className="text-xs text-gray">
            {loading ? "Uploading File. please wait..." : fileName}
          </p>

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

export default UploadVenueSeatMap;
