import React, { useMemo, useRef, useState } from "react";
import SecondaryButton from "../utils/SecondaryButton";
import { motion, AnimatePresence } from "framer-motion";
import TicketComponent from "./TicketComponent";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { useGetSeatIds, useSeatStore } from "../../store/UseSeatStore";
import PrimaryButton from "../utils/PrimaryButton";
import { useNavigate } from "react-router-dom";

const CouchDetails = ({
  popupBg,
  seatId,
  status,
  setWarningMessage,
  toggleModelShow,
}) => {
  const [selectedTicketType, setSelectedTicketType] = useState(null);
  const getSeatIds = useGetSeatIds();
  const addSelectedSeat = useSeatStore((state) => state.addSelectedSeat);
  const removeSelectedSeat = useSeatStore((state) => state.removeSelectedSeat);
  const navigate = useNavigate();

  const modalRef = useRef();

  const ticketValues = [
    {
      id: 1,
      name: "Early Bird Ticket",
      price: "2,000",
      discount: "10",
    },
    {
      id: 2,
      name: "Advance Ticket",
      price: "1,000",
      discount: "15",
    },
    {
      id: 3,
      name: "Gate Ticket",
      price: "2,500",
      discount: "5",
    },
  ];

  const handleTicketTypeChange = (event) => {
    const selectedValue = event.target.value;
    if (status === "booked" && selectedValue == 1) {
      setWarningMessage(
        "This seat is already booked. Please select another seat."
      );
      toggleModelShow();
      return;
    }

    if (status === "selected" && selectedValue == 1) {
      setWarningMessage(
        "This seat is already selected. Please select another seat."
      );
      toggleModelShow();
      return;
    }

    setSelectedTicketType(selectedValue);

    if (seatId <= 40 && selectedValue == 1) {
      useSelectedSeat(seatId, selectedValue, "selected");
    } else if (seatId > 40 && selectedValue == 2) {
      useSelectedSeat(seatId, selectedValue, "selected");
    } else if (seatId > 40 && selectedValue == 3) {
      useSelectedSeat(seatId, selectedValue, "selected");
    } else {
      if ((seatId <= 40 && selectedValue == 2) || selectedValue == 3) {
        setWarningMessage(
          "Invalid! ticket selection. You can only select Early Bird Ticket for the front position seats 1 - 40"
        );
        toggleModelShow();
      } else {
        setWarningMessage(
          "You can only select Early Bird Ticket for the front position seats 1 - 40"
        );
        toggleModelShow();
      }
    }
  };

  const isSelectedSeat = useMemo(() => {
    return getSeatIds.includes(seatId);
  }, [getSeatIds, seatId]);

  const selectedSeats = useMemo(() => {
    return getSeatIds.map((seatId) => "SN " + seatId).join(", ");
  }, [getSeatIds]);

  const useSelectedSeat = (seatValue, ticketValue, status = undefined) => {
    const selectedData = {
      seatId: seatValue,
      ticketId: ticketValue,
      status: status,
    };
    return addSelectedSeat(selectedData);
  };

  const handleRemoveSeat = (seatIdToRemove) => {
    removeSelectedSeat(seatIdToRemove);
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          ref={modalRef}
          initial={{ y: "0%", x: "0%", scale: 0.5 }}
          animate={{ y: "0%", x: "0%", scale: 1 }}
          exit={{ y: "0%", x: "0%", scale: 0.5, opacity: 0 }}
          className={`bg-[#ccc] dark:bg-darkGray dark:border-2 dark:border-[#ccc] text-white shadow-md p-3 rounded-lg w-[250px] z-20`}
        >
          <div className="mb-3 border-b border-slate-100 dark:border-slate-700 pb-3">
            <p className="text-darkGray font-bold dark:text-slate-100">
              Seat Number: (SN {seatId})
            </p>
            <p className="text-darkGray font-bold dark:text-slate-100">
              <span
                className={`px-3 capitalize text-slate-100 rounded-full text-xs font-normal py-1 ${popupBg}`}
              >
                {status}
              </span>
            </p>
          </div>

          <div className="">
            <TicketComponent
              ticketValues={ticketValues}
              selectedTicketType={selectedTicketType}
              handleSelect={handleTicketTypeChange}
            />

            {/* Unselect Seat Button */}
            {isSelectedSeat && (
              <PrimaryButton
                handleClick={() => handleRemoveSeat(seatId)}
                title={`Unselect Seat No. (${seatId})`}
                classes={"w-full mb-2 text-sm rounded-full"}
              />
            )}

            {/* Button to proceed to payment */}
            {selectedSeats && (
              <SecondaryButton
                handleClick={() => navigate("/checkout")}
                title={"Make payment"}
                classes={"w-full text-sm rounded-full"}
              />
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default CouchDetails;
