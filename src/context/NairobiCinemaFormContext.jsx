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
import axiosClient from "@/axiosClient";

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

  const initialFormData = {
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
  };

  const [nairobiCinemaFormData, setNairobiCinemaFormData] =
    useState(initialFormData);

  const [sectionValidity, setSectionValidity] = useState({
    downStairsLeftSection: false,
    downStairsMiddleSection: false,
    downStairsRightSection: false,
    upstairsFrontLeftSection: false,
    upstairsFrontMiddleSection: false,
    upstairsFrontRightSection: false,
    upstairsBackLeftSection: false,
    upstairsBackMiddleSection: false,
    upstairsBackRightSection: false,
  });

  const clearSeatMapSection = (sectionKey) => {
    setNairobiCinemaFormData((prev) => ({
      ...prev,
      [sectionKey]: addEventIdToSection(prev[sectionKey]),
    }));
  };

  const checkSectionForPriceAndDiscount = (sectionKey) => {
    const section = nairobiCinemaFormData[sectionKey];
    for (const row of section.rows) {
      for (const seat of row.seats) {
        if (seat.price === null || seat.discount === null) {
          return false;
        }
      }
    }
    return true;
  };

  const updateSectionValidity = () => {
    setSectionValidity((prevValidity) => {
      const newValidity = { ...prevValidity };
      for (const sectionKey in nairobiCinemaFormData) {
        newValidity[sectionKey] = checkSectionForPriceAndDiscount(sectionKey);
      }
      return newValidity;
    });
  };

  useEffect(() => {
    updateSectionValidity();
  }, [nairobiCinemaFormData]);

  const fillEmptySections = (data) => {
    const filledData = { ...data };
    for (const key in initialFormData) {
      if (!data[key] || Object.keys(data[key]).length === 0) {
        filledData[key] = initialFormData[key];
      }
    }
    return filledData;
  };

  const getTheaterSectionData = async (eventId) => {
    try {
      const response = await axiosClient.get(`/seatmap/${eventId}`);
      const { success, message, data } = response.data;
      if (success) {
        const updatedData = fillEmptySections(data);
        setNairobiCinemaFormData(updatedData);
        console.log(message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateSection = (sectionKey, newSectionData) => {
    setNairobiCinemaFormData((prev) => ({
      ...prev,
      [sectionKey]: newSectionData,
    }));
  };

  return (
    <CreateNairobiCinemaContext.Provider
      value={{
        updateSection,
        nairobiCinemaFormData,
        setNairobiCinemaFormData,
        clearSeatMapSection,
        checkSectionForPriceAndDiscount,
        sectionValidity,
        getTheaterSectionData,
      }}
    >
      {children}
    </CreateNairobiCinemaContext.Provider>
  );
};
