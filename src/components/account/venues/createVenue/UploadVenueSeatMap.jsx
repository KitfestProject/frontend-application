import { useState, useRef, useContext, useEffect } from "react";
import {
  BiError,
  BiImage,
  BiSolidTrash,
  BiCloudUpload,
  BiCheckCircle,
} from "react-icons/bi";
import { CreateVenueContext } from "@/context/CreateVenueFormContext";
import useScreenSize from "@/hooks/useScreenSize.mjs";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const UploadVenueSeatMap = () => {
  const { venueFormData, setVenueFormData, isVenueImageFilled } =
    useContext(CreateVenueContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileName, setFileName] = useState(null);
  const fileInputRef = useRef(null);
  const isMobile = useScreenSize();

  useEffect(() => {
    if (venueFormData.seatMap) {
      setSelectedImage(URL.createObjectURL(venueFormData.seatMap));
      setFileName(venueFormData.seatMap.name);
    } else {
      setSelectedImage(null);
      setFileName(null);
    }
  }, [venueFormData.seatMap]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setFileName(file.name);
      setVenueFormData((prevData) => ({
        ...prevData,
        seatMap: file,
      }));
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
      return isVenueImageFilled && isMobile ? (
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
      <p className="text-xs text-gray">
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

export default UploadVenueSeatMap;
