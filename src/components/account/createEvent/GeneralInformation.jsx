import { useEffect, useState, useContext } from "react";
import { BiError, BiInfoCircle, BiCheckCircle } from "react-icons/bi";
import Select from "react-dropdown-select";
import { MessageInput, CustomInput, TagsInput } from "@/components";
import { CreateEventFormContext } from "@/context/CreateEventFormContext";
import useScreenSize from "@/hooks/useScreenSize";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import axiosClient from "@/axiosClient";
import toast from "react-hot-toast";

const GeneralInformation = () => {
  const { eventData, eventFormData, setEventFormData, isGeneralInfoFilled } =
    useContext(CreateEventFormContext);
  const [tags, setTags] = useState(eventFormData.tags);
  const isMobile = useScreenSize();
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getEventCategories();
  }, []);

  const getEventCategories = async () => {
    setLoading(true);

    try {
      // API Call to get blog categories
      const response = await axiosClient.get("/categories");

      const { success, message, data } = response.data;

      if (success) {
        // Map data to options
        const categoryOptions = data.map((category) => ({
          value: category._id,
          label: category.name,
        }));
        setOptions(categoryOptions);
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred while getting categories.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (eventFormData.tags) {
      setTags(eventFormData.tags);
    } else {
      setTags([]);
    }
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
      return isGeneralInfoFilled && isMobile ? (
        <BiCheckCircle className="text-green-600 text-xl ml-2" />
      ) : (
        <BiError className="text-2xl inline text-yellow-600" />
      );
    }
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
          <Link
            to="/my-events"
            className="bg-primary text-slate-100 text-sm px-8 py-2 rounded-md flex justify-center items-center gap-2"
          >
            <FaArrowLeftLong />
            Back
          </Link>
        </div>
      )}

      {/* Event Title */}
      <CustomInput
        name="title"
        value={eventData ? eventData.title : eventFormData.title}
        type="text"
        data={eventFormData}
        setData={setEventFormData}
        title="Name"
        info="Make it catchy and memorable"
      />

      {/* Event Description */}
      <div className="mt-5">
        <label
          htmlFor="event-description"
          className="text-dark dark:text-slate-100 font-bold text-sm"
        >
          Description
        </label>
        <small className="block text-gray mb-1">
          Provide essential event details
        </small>
        <MessageInput
          value={eventData ? eventData.description : eventFormData.description}
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
            (option) => option.label === eventFormData.category
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
          Tags
        </label>
        <small className="block text-gray mb-1">
          Add tags to help people discover your event
        </small>
        <TagsInput tags={tags} setTags={setTags} />
      </div>
    </div>
  );
};

export default GeneralInformation;
