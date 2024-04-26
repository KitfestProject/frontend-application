import { useState } from "react";
import { MdQueueMusic } from "react-icons/md";

const UserInterests = ({ categoryName, interests, icon, isLast }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (id) => {
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter((optionId) => optionId !== id));
    } else {
      setSelectedOptions([...selectedOptions, id]);
    }
  };

  return (
    <div
      className={`border border-[#d8d6d6] dark:border-[#813c2a] rounded-md p-3 bg-white dark:bg-[#813c2a] ${
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
                ? "bg-[#813c2a] dark:bg-darkGray text-white"
                : "text-darkGray bg-[#f5f4f4] dark:bg-white"
            } cursor-pointer`}
            onClick={() => toggleOption(option.id)}
          >
            {option.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInterests;
