import {
  Loader,
  PrimaryButtonWithLoader,
  PrimaryLightButton,
} from "@/components";
import { BiError, BiSave, BiX } from "react-icons/bi";

const ActionWarningComponent = ({ handleClick, cancel, loading, message }) => {
  return (
    <>
      <div className="p-5 bg-white dark:bg-darkGray h-[310px] min-w-[500px] w-full rounded-md dark:border dark:border-gray/30 shadow-md">
        {/* Warning Icon */}
        <div className="flex justify-center items-center bg-yellow-100/50 dark:bg-gray w-[100px] h-[100px] rounded-full mx-auto mb-5">
          <BiError className="text-yellow-600 dark:text-slate-100 text-[60px]" />
        </div>

        <h1 className="text-2xl tracking-tighter font-semibold text-dark dark:text-slate-100 text-center">
          Are you sure?
        </h1>

        <p className="text-md text-gray dark:text-gray text-center mt-2">
          {message}
        </p>

        <div className="w-full flex justify-center items-center gap-3 mt-5 fixed bottom-0 left-0 p-3 bg-white dark:bg-gray/80 border-t border-gray/30 dark:border-gray/50">
          <PrimaryLightButton
            title="Cancel"
            handleClick={() => cancel()}
            classes="flex w-full justify-center items-center gap-2 bg-[#732e1c80] dark:border dark:border-gray/50"
            icon={<BiX />}
          />
          <PrimaryButtonWithLoader
            title="Yes, Continue"
            handleClick={handleClick}
            classes="flex w-full justify-center items-center gap-2 dark:bg-primary"
            icon={loading ? <Loader /> : <BiSave />}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
};

export default ActionWarningComponent;
