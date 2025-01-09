import axiosClient from "@/axiosClient";
import { BsShift } from "react-icons/bs";
import Select from "react-dropdown-select";
import { IoIosReturnLeft } from "react-icons/io";
import useScreenSize from "@/hooks/useScreenSize";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useEffect, useState, useContext } from "react";
import { BiError, BiInfoCircle, BiCheckCircle } from "react-icons/bi";
import { CreateEventFormContext } from "@/context/CreateEventFormContext";
import {
  MessageInput,
  CustomInput,
  TagsInput,
  ModalTransparent,
  ActionWarningComponent,
} from "@/components";
import toast from "react-hot-toast";

const GeneralInformation = () => {
  const {
    eventData,
    eventFormData,
    clearEventForm,
    setEventFormData,
    isGeneralInfoFilled,
  } = useContext(CreateEventFormContext);
  const [tags, setTags] = useState(eventFormData.tags || []);
  const isMobile = useScreenSize();
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const toggleShowWarning = () => setShowWarning((previous) => !previous);

  useEffect(() => {
    const getEventCategories = async () => {
      setLoading(true);

      try {
        // API Call to get event categories
        const response = await axiosClient.get("/categories");

        const { success, message, data } = response.data;

        if (!success) {
          return toast.error("Something went wrong. try again later.", {
            duration: 4000,
            position: "top-right",
          });
        }

        // Map data to options
        const categoryOptions = data.map((category) => ({
          value: category._id,
          label: category.name,
        }));

        setOptions(categoryOptions);

        // Update event form data category if available
        if (eventFormData && eventFormData.category) {
          const selectedOption = categoryOptions.find(
            (option) => option.value === eventFormData.category
          );

          if (selectedOption) {
            setEventFormData((prev) => ({
              ...prev,
              category: selectedOption.value,
            }));
          }
        }

        setLoading(false);
        console.log(message);
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          "An error occurred while getting categories.";
        console.log(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    getEventCategories();
  }, []);

  useEffect(() => {
    setTags(eventFormData?.tags || []);
  }, [eventFormData]);

  useEffect(() => {
    setEventFormData((prev) => ({
      ...prev,
      tags: tags,
    }));
  }, [tags, setEventFormData]);

  const handleSetMessage = (ev) => {
    const message = ev.target.value;
    setEventFormData((prev) => ({
      ...prev,
      description: message,
    }));
  };

  const handleCategoryChange = (selectedValue) => {
    if (selectedValue && selectedValue.length > 0) {
      setEventFormData((prev) => ({
        ...prev,
        category: selectedValue[0].value,
      }));
    } else {
      setEventFormData((prev) => ({
        ...prev,
        category: "",
      }));
    }
  };

  const renderMobileError = () => {
    if (isMobile) {
      return isGeneralInfoFilled ? (
        <BiCheckCircle className="text-green-600 text-xl ml-2" />
      ) : (
        <BiError className="text-2xl inline text-yellow-600" />
      );
    }
  };

  // Handle navigate back
  const handleNavigateBack = () => {
    setShowWarning(false);
    clearEventForm();
    window.history.back();
  };

  return (
    <div
      className={`${
        eventData ? "" : "mt-5"
      } border-b border-slate-200 dark:border-slate-700 pb-5`}
    >
      {eventData ? (
        <div className="flex justify-between items-center mb-1">
          <h1 className="text-xl font-bold flex gap-2 items-center mb-5">
            <BiInfoCircle className="text-2xl text-primary dark:text-gray" />
            General Information
            {renderMobileError()}
          </h1>
        </div>
      ) : (
        <div className="flex justify-between items-center mb-1">
          <h1 className="text-xl font-bold flex gap-2 items-center mb-5">
            <BiInfoCircle className="text-2xl text-primary dark:text-gray" />
            General Information
            {renderMobileError()}
          </h1>

          {/* Back to Events page */}
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
      )}

      {/* Event Title */}
      <CustomInput
        name="title"
        value={eventFormData.title}
        type="text"
        data={eventFormData}
        setData={setEventFormData}
        title="Name"
        info="Make it catchy and memorable"
        required={true}
      />

      {/* Event Description */}
      <div className="mt-5">
        <div className="flex justify-between items-center">
          <div className="">
            <label
              htmlFor="event-description"
              className="text-dark dark:text-slate-100 font-bold text-sm"
            >
              Description
              <span className="text-red-500">*</span>
            </label>
            <small className="block text-gray mb-1">
              Provide essential event details
            </small>
          </div>

          {/* Keyboard shortcuts for creating space */}
          <div className="flex gap-2">
            <span className="flex items-center gap-1 text-primary dark:text-gray text-sm">
              Use Shift <BsShift className="text-lg mx-2" />
              + Enter <IoIosReturnLeft className="text-lg mx-2" /> to create a
              paragraph
            </span>
          </div>
        </div>

        <MessageInput
          value={eventFormData.description}
          onChange={handleSetMessage}
        />
      </div>

      {/* Event Category */}
      <div className="mt-5">
        <label
          htmlFor="event-category"
          className="text-dark dark:text-slate-100 font-bold text-sm"
        >
          Event Category <span className="text-red-500">*</span>
        </label>
        <small className="block text-gray mb-1">
          Choose the category that best fits your event
        </small>
        <Select
          options={options}
          onChange={handleCategoryChange}
          values={options.filter(
            (option) => option.value === eventFormData.category
          )}
          className="w-full bg-[#F5F5F5] dark:bg-gray dark:text-dark rounded-md text-gray"
          placeholder="Select Category"
        />
      </div>

      {/* Event Tags */}
      <div className="mt-5">
        <label
          htmlFor="event-tags"
          className="text-dark dark:text-slate-100 font-bold text-sm"
        >
          Tags <span className="text-red-500">*</span>
        </label>
        <small className="block text-gray mb-1">
          Add tags to help people discover your event
        </small>
        <TagsInput tags={tags} setTags={setTags} />
      </div>

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

export default GeneralInformation;
