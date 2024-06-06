import { BiSolidSave } from "react-icons/bi";

const DraftButton = ({ title, handleClick }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-[#FCF4F3] text-primary py-2 px-5 rounded-md flex justify-center items-center gap-2 text-sm"
    >
      <BiSolidSave className="inline" />
      {title}
    </button>
  );
};

export default DraftButton;
