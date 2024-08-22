import { Loader } from "@/components";

const BecomeOrganizerButton = ({ handleClick, loading }) => (
  <button
    onClick={handleClick}
    className="bg-[#c4745f] hover:bg-primaryLight rounded-md text-slate-100 cursor-pointer p-2 mb-2 w-full flex justify-center items-center gap-2"
  >
    {loading ? <Loader /> : "Become Organizer"}
  </button>
);

export default BecomeOrganizerButton;
