import "./Couch.css";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FaCouch } from "react-icons/fa";
import CouchDetails from "./CouchDetails";
import { useGetSeatIds } from "../../store/UseSeatStore";

const CouchComponent = ({
  seatId,
  status,
  selectedSeatId,
  setSelectedSeatId,
}) => {
  const getSeatIds = useGetSeatIds();

  let colorClass;

  switch (status) {
    case "available":
      colorClass = "empty";
      break;
    case "selected":
      colorClass = "selected";
      break;
    case "booked":
      colorClass = "booked";
      break;
    default:
      colorClass = "empty";
  }

  const handleSeatClick = () => {
    if (status === "available") {
      setSelectedSeatId(seatId);
    } else if (status === "selected") {
      setSelectedSeatId(seatId);
    } else if (status === "booked") {
      setSelectedSeatId(seatId);
    }
  };

  let popupBg;

  if (selectedSeatId === seatId && status === "available") {
    popupBg = "bg-green-500";
  } else if (selectedSeatId === seatId && status === "selected") {
    popupBg = "bg-yellow-500";
  } else if (selectedSeatId === seatId && status === "booked") {
    popupBg = "bg-red-500";
  } else {
    popupBg = "bg-gray";
  }

  // Check if seat is selected
  const isSelectedSeat = useMemo(() => {
    return getSeatIds.includes(seatId);
  }, [getSeatIds, seatId]);

  let selectedCouchColor;

  if (selectedSeatId === seatId && status === "available") {
    selectedCouchColor = "text-[#f4c876]";
  } else if (
    (selectedSeatId === seatId && status === "selected") ||
    isSelectedSeat
  ) {
    selectedCouchColor = "text-[#f4c876]";
  } else if (selectedSeatId === seatId && status === "booked") {
    selectedCouchColor = "text-[#b40100]";
  }

  return (
    <div className="" onClick={handleSeatClick}>
      <motion.div whileHover={{ scale: 1.1 }} className="">
        <FaCouch
          className={`couch-icon ${
            selectedCouchColor ? selectedCouchColor : colorClass
          }`}
        />
      </motion.div>
      {selectedSeatId === seatId && (
        <CouchDetails popupBg={popupBg} seatId={seatId} status={status} />
      )}
    </div>
  );
};

export default CouchComponent;
