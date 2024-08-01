import { useContext, useEffect, useState } from "react";
import { events } from "@/components/data/StaticData";
import FilteredEventsComponent from "./FilteredEventsComponent";
import { PrimaryButton } from "@/components";
import { EventContext } from "@/context/EventDetailsContext";
import { BiSolidChevronLeftCircle, BiSolidChevronRightCircle } from "react-icons/bi";

const FilteredEvents = () => {
  const { start, setStart, limit, eventData } = useContext(EventContext);

  const handleNextPage = () => setStart((prevStart) => prevStart + limit);
  const handlePrevPage = () =>
    setStart((prevStart) => Math.max(prevStart - limit, 0));

  const isNextDisabled = eventData?.length < limit;
  const isPrevDisabled = start === 0;

  return (
    <div className="flex-1 h-full">
      <FilteredEventsComponent />

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
    </div>
  );
};

export default FilteredEvents;
