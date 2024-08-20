import { useState, useRef, useContext, useEffect } from "react";
import {
  BiCloudUpload,
  BiError,
  BiImage,
  BiSolidTrash,
  BiCheckCircle,
  BiInfoCircle,
} from "react-icons/bi";
import useScreenSize from "@/hooks/useScreenSize";
import { FaArrowLeftLong } from "react-icons/fa6";
import ProgressBar from "@ramonak/react-progress-bar";
import toast from "react-hot-toast";
import axiosClient from "@/axiosClient";
import { CreateTeamMemberContext } from "@/context/CreateTeamMemberContext";
import { ModalTransparent, ActionWarningComponent } from "@/components";

const UploadTeamMemberImage = () => {
  const {
    teamMemberFormData,
    clearTeamMemberForm,
    setTeamMemberFormData,
    isImageFilled,
  } = useContext(CreateTeamMemberContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileName, setFileName] = useState(null);
  const fileInputRef = useRef(null);
  const isMobile = useScreenSize();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const toggleShowWarning = () => setShowWarning((previous) => !previous);

  useEffect(() => {
    if (teamMemberFormData.image) {
      setSelectedImage(teamMemberFormData.image);
      setFileName("Uploaded Image");
    } else {
      setSelectedImage(null);
      setFileName(null);
    }
  }, [teamMemberFormData.image]);

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
          setTeamMemberFormData((prevData) => ({
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
    setTeamMemberFormData((prevData) => ({
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

  // Handle navigate back
  const handleNavigateBack = () => {
    setShowWarning(false);
    clearTeamMemberForm();
    window.history.back();
  };

  return (
    <div className="border-b border-slate-200 dark:border-gray pb-5">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold flex justify-between items-center">
          <BiImage className="text-2xl inline mr-2 text-primary dark:text-gray" />
          <span>Upload Team Member Profile</span>
          {renderMobileError()}
        </h1>

        {/* Back to Auth blogs page */}
        <div className="">
          <button
            onClick={toggleShowWarning}
            className="bg-primary text-slate-100 text-sm px-8 py-2 rounded-md flex justify-center items-center gap-2"
          >
            <FaArrowLeftLong />
            Back
          </button>
        </div>
      </div>
      <p className="text-xs text-gray dark:text-gray">
        Upload a profile image for team member. This image will be used as the
        main image for your artist profile.
      </p>

      {/* Select Image Area */}
      <div
        className="w-full h-[350px] rounded-md border-[2px] border-dotted border-slate-300 dark:border-gray mt-3 flex justify-center items-center mb-3 cursor-pointer"
        onClick={handleClick}
      >
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected"
            className="object-contain w-full h-full rounded-md"
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

      {/* Show Warning Modal */}
      {showWarning && (
        <ModalTransparent
          title="Navigate back!"
          onClose={toggleShowWarning}
          icon={<BiInfoCircle className="text-white text-2xl" />}
        >
          <ActionWarningComponent
            handleClick={handleNavigateBack}
            cancel={toggleShowWarning}
            loading={loading}
            message={
              <p>
                Are you sure you want to close this page? <br /> All or some of
                your changes might be lost.
              </p>
            }
          />
        </ModalTransparent>
      )}
    </div>
  );
};

export default UploadTeamMemberImage;
