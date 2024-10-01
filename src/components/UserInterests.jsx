import PropTypes from "prop-types";
import { useContext, useState, useEffect } from "react";
import { UserRegisterFormContext } from "@/context/UserRegisterFormContext";

const UserInterests = ({ categoryName, interests, icon, isLast }) => {
  const { userRegisterData, setUserRegisterData } = useContext(
    UserRegisterFormContext
  );
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    if (userRegisterData.preferences[categoryName]) {
      setSelectedOptions(userRegisterData.preferences[categoryName]);
    }
  }, [categoryName, userRegisterData.preferences]);

  const toggleOption = (id) => {
    let updatedOptions;
    if (selectedOptions.includes(id)) {
      updatedOptions = selectedOptions.filter((optionId) => optionId !== id);
    } else {
      updatedOptions = [...selectedOptions, id];
    }
    setSelectedOptions(updatedOptions);

    // Update context with new preferences
    setUserRegisterData((prevData) => ({
      ...prevData,
      preferences: {
        ...prevData.preferences,
        [categoryName]: updatedOptions,
      },
    }));
  };

  return (
    <div
      className={`border border-[#d8d6d6] dark:border-gray/30 rounded-md p-3 bg-white dark:bg-gray/30 ${
        !isLast ? "mb-5" : ""
      } `}
    >
      <div className="mb-5 flex gap-3 items-center">
        <img src={icon} alt={categoryName} className="w-[25px]" />
        {/* <MdQueueMusic className="text-gray text-3xl" /> */}
        <h5 className="text-dark font-bold text-xl dark:text-white">
          {categoryName}
        </h5>
      </div>

      <div className="flex flex-wrap gap-3">
        {interests.map((option) => (
          <div
            key={option.id}
            className={`px-10 py-2 rounded-full shadow-sm font-light ${
              selectedOptions.includes(option.id)
                ? "bg-[#813c2a] dark:bg-darkGray text-white dark:border dark:border-gray"
                : "text-darkGray bg-[#f5f4f4] dark:bg-white"
            } cursor-pointer`}
            onClick={() => toggleOption(option.id)}
          >
            {option.title}
          </div>
        ))}
      </div>

      {/* Debug */}
      <div className="text-xs text-gray mt-2">
        {/* <pre>{JSON.stringify(userRegisterData, null, 2)}</pre> */}
      </div>
    </div>
  );
};

UserInterests.propTypes = {
  categoryName: PropTypes.string.isRequired,
  interests: PropTypes.array.isRequired,
  icon: PropTypes.string.isRequired,
  isLast: PropTypes.bool,
};

export default UserInterests;
