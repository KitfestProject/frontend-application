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

  const addEventIdToSection = (sectionData) => ({
    ...sectionData,
    event_id: eventId,
    rows: sectionData.rows.map((row) => ({
      ...row,
      seats: row.seats.map((seat) => ({
        ...seat,
        status: "available",
        price: null,
        discount: null,
      })),
    })),
  });

  const [nairobiCinemaFormData, setNairobiCinemaFormData] = useState({
    downStairsLeftSection: addEventIdToSection(downStairsLeftSectionData),
    downStairsMiddleSection: addEventIdToSection(downStairsMiddleSectionData),
    downStairsRightSection: addEventIdToSection(downStairsRightSectionData),
    upstairsFrontLeftSection: addEventIdToSection(upstairsFrontLeftSectionData),
    upstairsFrontMiddleSection: addEventIdToSection(
      upstairsFrontMiddleSectionData
    ),
    upstairsFrontRightSection: addEventIdToSection(
      upstairsFrontRightSectionData
    ),
    upstairsBackLeftSection: addEventIdToSection(upstairsBackLeftSectionData),
    upstairsBackMiddleSection: addEventIdToSection(
      upstairsBackMiddleSectionData
    ),
    upstairsBackRightSection: addEventIdToSection(upstairsBackRightSectionData),
  });

  const clearSeatMapSection = (sectionKey) => {
    setNairobiCinemaFormData((prev) => ({
      ...prev,
      [sectionKey]: addEventIdToSection(prev[sectionKey]),
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
