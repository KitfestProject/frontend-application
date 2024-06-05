import { BiX } from "react-icons/bi";

const CancelButton = ({ title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-slate-200 text-dark dark:text-slate-100 dark:bg-gray py-2 px-5 rounded-md flex justify-center items-center gap-1 text-sm"
    >
      <BiX className="inline text-xl" />
      {title}
    </button>
  );
};

export default CancelButton;
