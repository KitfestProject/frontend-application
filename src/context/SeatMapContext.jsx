import { createContext, useState } from "react";
import axiosClient from "@/axiosClient";

export const SeatMapContext = createContext();

export const SeatMapProvider = ({ children }) => {
  const [eventSeatMap, setEventSeatMap] = useState([]);
  const [seatMapLoading, setSeatMapLoading] = useState(false);

  const getPathId = (pathname) => {
    if (!pathname) return "";

    const normalizedPath = pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
    return normalizedPath.substring(normalizedPath.lastIndexOf("/") + 1);
  };

  const getEventSeatMapData = async (eventId) => {
    try {
      setSeatMapLoading(true);

      const response = await axiosClient.get(`/seatmap/${eventId}`);
      const { success, message, data } = response.data;

      if (!success) {
        setSeatMapLoading(false);
        console.log(message);
        return false;
      }

      setEventSeatMap(data);
      setSeatMapLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SeatMapContext.Provider
      value={{
        getPathId,
        eventSeatMap,
        seatMapLoading,
        setEventSeatMap,
        setSeatMapLoading,
        getEventSeatMapData,
      }}
    >
      {children}
    </SeatMapContext.Provider>
  );
};
