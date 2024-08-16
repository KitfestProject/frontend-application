import Select from "react-dropdown-select";
import { BiCheckCircle, BiError, BiInfoCircle } from "react-icons/bi";
import { CustomInput, MessageInput, TagsInput } from "@/components";
import { CreateBlogFromContext } from "@/context/CreateBlogFromContext";
import { useEffect, useState, useContext } from "react";
import useScreenSize from "@/hooks/useScreenSize";
import axiosClient from "@/axiosClient";
import toast from "react-hot-toast";

const GeneralBlogDetails = () => {
  const { blogFormData, setBlogFormData, isAllInformationFilled } = useContext(
    CreateBlogFromContext
  );
  const [tags, setTags] = useState(blogFormData.tags || []);
  const isMobile = useScreenSize();
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (blogFormData.tags) {
      setTags(blogFormData.tags);
    } else {
      setTags([]);
    }
  }, [blogFormData]);

  useEffect(() => {
    setBlogFormData((prev) => ({
      ...prev,
      tags: tags,
    }));
  }, [tags, setBlogFormData]);

  useEffect(() => {
    getBlogCategories();
  }, []);

  // Handle message input
  const handleSetMessage = (ev) => {
    const message = ev.target.value;
    setBlogFormData((prev) => ({
      ...prev,
      description: message,
    }));
  };

  // Handle category change
  const handleCategoryChange = (selectedValue) => {
    if (selectedValue && selectedValue.length > 0) {
      setBlogFormData((prev) => ({
        ...prev,
        category: selectedValue[0].value,
      }));
    } else {
      setBlogFormData((prev) => ({
        ...prev,
        category: "",
      }));
    }
  };

  // Render mobile error indicator
  const renderMobileError = () => {
    if (isMobile) {
      return isAllInformationFilled && isMobile ? (
        <BiCheckCircle className="text-green-600 text-xl ml-2" />
      ) : (
        <BiError className="text-2xl inline text-yellow-600" />
      );
    }
  };

  // Fetch blog categories
  const getBlogCategories = async () => {
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
        toast.success(message, {
          duration: 3000,
          position: "top-right",
        });
      } else {
        toast.error(message, {
          duration: 3000,
          position: "top-right",
        });
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred while getting categories.";
      toast.error(errorMessage, {
        duration: 3000,
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-5 border-b border-slate-200 dark:border-slate-700 pb-5">
      <h1 className="text-xl font-bold flex gap-2 items-center mb-5">
        <BiInfoCircle className="text-2xl text-primary dark:text-gray" />
        General Information
        {renderMobileError()}
      </h1>

      {/* Event Name */}
      <CustomInput
        name="name"
        value={blogFormData.name}
        type="text"
        data={blogFormData}
        setData={setBlogFormData}
        title="Name"
        info="Provide a name for your blog. Users will be able to see this."
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
          Provide a description for your blog. Users will be able to use this
          information for their reference.
        </small>
        <MessageInput
          value={blogFormData.description}
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
            (option) => option.value === blogFormData.category
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
          Add tags to help people discover this blog (Google requires this
          information to crawl your website)
        </small>
        <TagsInput tags={tags} setTags={setTags} />
      </div>
    </div>
  );
};

export default GeneralBlogDetails;
