import { FaCircleExclamation } from "react-icons/fa6";

const EmptySearchMessage = () => {
  return (
    <div>
      <div className="flex justify-center items-center text-primary dark:text-slate-100">
        <FaCircleExclamation style={{ fontSize: "16px" }} />
        <p className="ml-2">Search is Empty!</p>
      </div>
    </div>
  );
};

export default EmptySearchMessage;
