import { useContext } from "react";
import TicketCard from "./TicketCard";
import { UserAccountContext } from "@/context/UserAccountContext";
import {
  BiSolidChevronRightCircle,
  BiSolidChevronLeftCircle,
} from "react-icons/bi";

const EventsSection = () => {
  const { start, setStart, limit, clientTicketData } =
    useContext(UserAccountContext);
  const handleNextPage = () => setStart((prevStart) => prevStart + limit);
  const handlePrevPage = () =>
    setStart((prevStart) => Math.max(prevStart - limit, 0));

  const isNextDisabled = clientTicketData?.length < limit;
  const isPrevDisabled = start === 0;

  return (
    <>
      <div className="grid grid-cols-1 gap-5 mt-5 w-full">
        <TicketCard />
      </div>

      {/* Next and previous Buttons */}
      <div className="flex justify-start gap-3 mt-5">
        <button
          onClick={handlePrevPage}
          className={`bg-primary text-white py-2 px-5 rounded-md text-xs flex justify-between items-center gap-2 ${
            isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isPrevDisabled}
        >
          <BiSolidChevronLeftCircle />
          Previous
        </button>

        <button
          onClick={handleNextPage}
          className={`bg-primary text-white py-2 px-5 rounded-md text-xs flex justify-between items-center gap-2 ${
            isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isNextDisabled}
        >
          Next
          <BiSolidChevronRightCircle />
        </button>
      </div>
    </>
  );
};

export default EventsSection;
