import { BiPlus } from "react-icons/bi";

const AddTicketButton = ({ title, handleClick }) => {
  return (
    <div className="w-full mt-5">
      <button
        type="button"
        className="bg-[#D9D9D9] flex justify-center gap-3 text-sm items-center py-2 rounded-md w-full text-primary dark:bg-gray dark:text-primary"
        onClick={handleClick}
      >
        <BiPlus /> {title}
      </button>
    </div>
  );
};

export default AddTicketButton;
