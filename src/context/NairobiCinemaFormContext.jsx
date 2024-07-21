import { createContext, useState, useEffect } from "react";
import { useEventStore } from "@/store/UseEventStore";
import {
  downStairsLeftSectionData,
  downStairsMiddleSectionData,
  downStairsRightSectionData,
  upstairsFrontLeftSectionData,
  upstairsFrontMiddleSectionData,
  upstairsFrontRightSectionData,
  upstairsBackLeftSectionData,
  upstairsBackMiddleSectionData,
  upstairsBackRightSectionData,
} from "@/components/data/NairobiCinemaSeatData";

export const CreateNairobiCinemaContext = createContext();

export const NairobiCinemaFormProvider = ({ children }) => {
  const { eventId } = useEventStore();

  const addEventIdToSeats = (sectionData) => {
    return sectionData.rows.map((row) => ({
      ...row,
      seats: row.seats.map((seat) => ({
        ...seat,
        event_id: eventId,
        status: "available",
        price: null,
        discount: null,
      })),
    }));
  };

  const [nairobiCinemaFormData, setNairobiCinemaFormData] = useState({
    downStairsLeftSection: {
      ...downStairsLeftSectionData,
      rows: addEventIdToSeats(downStairsLeftSectionData),
    },
    downStairsMiddleSection: {
      ...downStairsMiddleSectionData,
      rows: addEventIdToSeats(downStairsMiddleSectionData),
    },
    downStairsRightSection: {
      ...downStairsRightSectionData,
      rows: addEventIdToSeats(downStairsRightSectionData),
    },
    upstairsFrontLeftSection: {
      ...upstairsFrontLeftSectionData,
      rows: addEventIdToSeats(upstairsFrontLeftSectionData),
    },
    upstairsFrontMiddleSection: {
      ...upstairsFrontMiddleSectionData,
      rows: addEventIdToSeats(upstairsFrontMiddleSectionData),
    },
    upstairsFrontRightSection: {
      ...upstairsFrontRightSectionData,
      rows: addEventIdToSeats(upstairsFrontRightSectionData),
    },
    upstairsBackLeftSection: {
      ...upstairsBackLeftSectionData,
      rows: addEventIdToSeats(upstairsBackLeftSectionData),
    },
    upstairsBackMiddleSection: {
      ...upstairsBackMiddleSectionData,
      rows: addEventIdToSeats(upstairsBackMiddleSectionData),
    },
    upstairsBackRightSection: {
      ...upstairsBackRightSectionData,
      rows: addEventIdToSeats(upstairsBackRightSectionData),
    },
  });

  const clearSeatMapSection = (sectionKey) => {
    setNairobiCinemaFormData((prev) => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey],
        rows: addEventIdToSeats(prev[sectionKey]),
      },
    }));
  };

  return (
    <CreateNairobiCinemaContext.Provider
      value={{
        nairobiCinemaFormData,
        setNairobiCinemaFormData,
        clearSeatMapSection,
      }}
    >
      {children}
    </CreateNairobiCinemaContext.Provider>
  );
};
