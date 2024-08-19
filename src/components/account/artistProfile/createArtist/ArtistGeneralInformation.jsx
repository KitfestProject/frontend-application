import Select from "react-dropdown-select";
import { BiCheckCircle, BiError, BiInfoCircle } from "react-icons/bi";
import { CustomInput, MessageInput, TagsInput } from "@/components";
import { CreateArtistContext } from "@/context/CreateArtistFormContext";
import { useEffect, useState, useContext } from "react";
import useScreenSize from "@/hooks/useScreenSize";
import axiosClient from "@/axiosClient";
import toast from "react-hot-toast";

const ArtistGeneralInformation = () => {
  const { artistFormData, setArtistFormData, isAllInformationFilled } =
    useContext(CreateArtistContext);
  const isMobile = useScreenSize();
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getArtistCategories();
  }, []);

  const renderMobileError = () => {
    if (isMobile) {
      return isAllInformationFilled && isMobile ? (
        <BiCheckCircle className="text-green-600 text-xl ml-2" />
      ) : (
        <BiError className="text-2xl inline text-yellow-600" />
      );
    }
  };

  const getArtistCategories = async () => {
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
          duration: 5000,
          position: "bottom-right",
        });
      } else {
        toast.error(message, {
          duration: 5000,
          position: "bottom-right",
        });
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred while getting categories.";
      toast.error(errorMessage, {
        duration: 5000,
        position: "bottom-right",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (selectedValue) => {
    if (selectedValue && selectedValue.length > 0) {
      setArtistFormData((prev) => ({
        ...prev,
        category: selectedValue[0].value,
      }));
    } else {
      setArtistFormData((prev) => ({
        ...prev,
        category: "",
      }));
    }
  };

  return (
    <div className="mt-5 border-b border-slate-200 dark:border-gray pb-5">
      <h1 className="text-xl font-bold flex gap-2 items-center mb-5">
        <BiInfoCircle className="text-2xl text-primary dark:text-gray" />
        General Information
        {renderMobileError()}
      </h1>

      {/* Artist Name */}
      <div className="mb-5">
        <CustomInput
          name="name"
          value={artistFormData.name}
          type="text"
          data={artistFormData}
          setData={setArtistFormData}
          title="Name"
          info="Enter the name of the artist"
        />
      </div>

      {/* Artist Category */}
      <div className="mt-5">
        <label
          htmlFor="event-category"
          className="text-dark dark:text-slate-100 font-bold text-sm"
        >
          Artist Role <span className="text-red-500">*</span>
        </label>
        <small className="block text-gray mb-1">
          Choose the category that best fits your artist
        </small>
        <Select
          options={options}
          onChange={handleCategoryChange}
          values={options?.filter(
            (option) => option.value === artistFormData.category
          )}
          className="w-full bg-[#F5F5F5] dark:bg-gray dark:text-dark rounded-md text-gray"
          placeholder="Select Category"
        />
      </div>
    </div>
  );
};

export default ArtistGeneralInformation;
