import React, { useState, useRef, useContext, useEffect } from "react";
import {
  BiCloudUpload,
  BiError,
  BiImage,
  BiSolidTrash,
  BiCheckCircle,
} from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { CreateEventFormContext } from "../../../context/CreateEventFormContext";
import useScreenSize from "../../../hooks/useScreenSize.mjs";

const UploadEventCover = () => {
  const { eventFormData, setEventFormData, isCoverImageFilled } = useContext(
    CreateEventFormContext
  );
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileName, setFileName] = useState(null);
  const fileInputRef = useRef(null);
  const isMobile = useScreenSize();

  useEffect(() => {
    if (eventFormData.coverImage) {
      setSelectedImage(URL.createObjectURL(eventFormData.coverImage));
      setFileName(eventFormData.coverImage.name);
    } else {
      setSelectedImage(null);
      setFileName(null);
    }
  }, [eventFormData.coverImage]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setFileName(file.name);
      setEventFormData((prevData) => ({
        ...prevData,
        coverImage: file,
      }));
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setFileName(null);
    setEventFormData((prevData) => ({
      ...prevData,
      coverImage: null,
    }));
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const renderMobileError = () => {
    if (isMobile) {
      return isCoverImageFilled && isMobile ? (
        <BiCheckCircle className="text-green-600 text-xl ml-2" />
      ) : (
        <BiError className="text-2xl inline ml-2 text-yellow-600" />
      );
    }
  };

  return (
    <div className="border-b border-slate-200 dark:border-slate-700 pb-5">
      <div className="flex justify-between items-center mb-1">
        <h1 className="text-xl font-bold flex justify-between items-center">
          <BiImage className="text-2xl inline mr-2 text-primary dark:text-gray" />
          <span>Upload Cover</span>
          {renderMobileError()}
        </h1>
        <FaChevronDown className="text-xl text-gray" />
      </div>
      <p className="text-xs text-gray">
        Upload the event cover to capture your audience's attention
      </p>

      {/* Select Image Area */}
      <div
        className="w-full h-[250px] rounded-md border-[2px] border-dotted border-slate-300 dark:border-gray mt-3 flex justify-center items-center mb-3 cursor-pointer"
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

export default UploadEventCover;
