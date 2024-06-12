import PropTypes from "prop-types";
import { BiXCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGetSeatIds, useSeatStore } from "@/store/UseSeatStore";
import { PrimaryButton, TicketComponent, SecondaryButton } from "@/components";

const CouchDetails = ({
  popupBg,
  seatId,
  status,
  closePopover,
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
    { id: 1, name: "Early Bird Ticket", price: "2,000", discount: "10" },
    { id: 2, name: "Advance Ticket", price: "1,000", discount: "15" },
    { id: 3, name: "Gate Ticket", price: "2,500", discount: "5" },
  ];

  const handleTicketTypeChange = (event) => {
    const selectedValue = event.target.value;

    if (status === "booked") {
      setWarningMessage(
        "This seat is already booked. Please select another seat."
      );
      toggleModelShow();
      return;
    }

    if (status === "selected") {
      setWarningMessage(
        "This seat is already selected. Please select another seat."
      );
      toggleModelShow();
      return;
    }

    setSelectedTicketType(selectedValue);

    if (
      (seatId <= 40 && selectedValue === "1") ||
      (seatId > 40 && (selectedValue === "2" || selectedValue === "3"))
    ) {
      useSelectedSeat(seatId, selectedValue, "selected");
    } else {
      setWarningMessage("Invalid ticket selection for this seat.");
      toggleModelShow();
    }
  };

  const isSelectedSeat = useMemo(
    () => getSeatIds.includes(seatId),
    [getSeatIds, seatId]
  );

  const selectedSeats = useMemo(
    () => getSeatIds.map((id) => `SN ${id}`).join(", "),
    [getSeatIds]
  );

  const useSelectedSeat = (seatValue, ticketValue, status = "selected") => {
    addSelectedSeat({ seatId: seatValue, ticketId: ticketValue, status });
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
          className={`bg-[#ccc] dark:bg-darkGray dark:border-2 dark:border-[#ccc] text-white shadow-md p-3 rounded-lg w-[250px] z-20 relative`}
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

          <div>
            <TicketComponent
              ticketValues={ticketValues}
              selectedTicketType={selectedTicketType}
              handleSelect={handleTicketTypeChange}
            />

            {isSelectedSeat && (
              <PrimaryButton
                handleClick={() => handleRemoveSeat(seatId)}
                title={`Unselect Seat No. (${seatId})`}
                classes="w-full mb-2 text-sm rounded-full"
              />
            )}

            {selectedSeats && (
              <SecondaryButton
                handleClick={() => navigate("/checkout")}
                title="Make payment"
                classes="w-full text-sm rounded-full"
              />
            )}
          </div>

          <div className="absolute top-3 right-3">
            <BiXCircle
              onClick={closePopover}
              className="text-xl text-primary dark:text-slate-100 z-20 cursor-pointer"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

CouchDetails.propTypes = {
  popupBg: PropTypes.string.isRequired,
  seatId: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  setWarningMessage: PropTypes.func.isRequired,
  toggleModelShow: PropTypes.func.isRequired,
  closePopover: PropTypes.func.isRequired,
};

export default CouchDetails;
