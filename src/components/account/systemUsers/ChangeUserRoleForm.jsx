import { BiCheck, BiInfoCircle, BiSave, BiX } from "react-icons/bi";
import {
  Loader,
  MessageInput,
  PrimaryButtonWithLoader,
  PrimaryLightButton,
} from "@/components";

const ChangeUserRoleForm = ({
  user,
  close,
  loading,
  setUserId,
  descMessage,
  progressStatus,
  setDescMessage,
  setProgressStatus,
  handleChangeStatus,
}) => {
  const handleStatusChange = (ev) => {
    const status = ev.target.value;
    setProgressStatus(status);
  };

  if (user) setUserId(user.id);

  const handleSetMessage = (ev) => {
    const message = ev.target.value;
    setDescMessage(message);
  };

  return (
    <div className="w-[500px] bg-white dark:bg-darkGray dark:border dark:border-gray/50">
      <div className="bg-primary dark:bg-gray text-white flex justify-between items-center">
        <h1 className="text-lg font-semibold p-5">Make User Organizer</h1>
        {/* Close Modal Icon */}
        <button
          onClick={close}
          className="absolute top-5 right-5 text-dark dark:text-slate-100"
        ></button>
      </div>

      <div className="p-5">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="role"
              className="text-sm text-dark font-bold dark:text-slate-100"
            >
              Select Status
            </label>
            <select
              name="progress"
              id="progress"
              value={progressStatus}
              onChange={handleStatusChange}
              className="w-full bg-gray/10 dark:bg-gray dark:text-slate-100 text-dark outline-none p-2 rounded-md"
            >
              <option value="inprogress">Inprogress</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          {/* Event Description */}
          <div className="">
            <label
              htmlFor="event-description"
              className="text-dark dark:text-slate-100 font-bold text-sm"
            >
              Message
            </label>
            <small className="block text-gray mb-1">
              Provide a message you want to send to the user with the status.
              This message will be sent to the users email.
            </small>
            <MessageInput value={descMessage} onChange={handleSetMessage} />
          </div>

          <div className="flex justify-between items-center">
            <PrimaryLightButton
              title="Cancel"
              handleClick={() => close()}
              classes="flex justify-center items-center gap-2 bg-[#732e1c80] dark:border dark:border-gray/50"
              icon={<BiX />}
            />

            <PrimaryButtonWithLoader
              title="Yes, Continue"
              handleClick={handleChangeStatus}
              classes="flex justify-center items-center gap-2 dark:bg-primary"
              icon={loading ? <Loader /> : <BiSave />}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeUserRoleForm;
