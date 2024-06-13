import "./Couch.css";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { FaCouch } from "react-icons/fa";
import CouchDetails from "./CouchDetails";
import { ModalAlert } from "@/components";
import { useGetSeatIds } from "@/store/UseSeatStore";
import { Popover, ArrowContainer } from "react-tiny-popover";
import { BsFillExclamationCircleFill } from "react-icons/bs";

const CouchComponent = ({
  seatId,
  status,
  selectedSeatId,
  setSelectedSeatId,
}) => {
  const getSeatIds = useGetSeatIds();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [warningMessage, setWarningMessage] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleModelShow = () => {
    setShowModel(!showModel);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const closePopover = () => {
    setIsPopoverOpen(false);
    setSelectedSeatId(null);
  };

  let colorClass;

  switch (status) {
    case "available":
      colorClass = "text-gray/50";
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
    popupBg = "bg-green-500 dark:bg-green-500/50";
  } else if (selectedSeatId === seatId && status === "selected") {
    popupBg = "bg-yellow-500 dark:bg-yellow-500/50";
  } else if (selectedSeatId === seatId && status === "booked") {
    popupBg = "bg-red-500 dark:bg-red-500/50";
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
    <>
      <div className="relative">
        <div
          className={`${
            loading && selectedSeatId === seatId
              ? "animate-ping absolute inline-flex h-[40px] w-[40px] rounded-full bg-[#f4c876] opacity-75 inset-0"
              : ""
          }`}
        ></div>
        <motion.div
          onClick={handleSeatClick}
          whileHover={{ scale: 1.1 }}
          className=""
        >
          <FaCouch
            className={`couch-icon ${
              selectedCouchColor ? selectedCouchColor : colorClass
            } `}
          />
        </motion.div>
        <Popover
          isOpen={selectedSeatId === seatId}
          positions={["bottom", "left", "right"]}
          padding={2}
          reposition={true}
          // onClickOutside={closePopover}
          content={({ position, childRect, popoverRect }) => (
            <ArrowContainer
              position={position}
              childRect={childRect}
              popoverRect={popoverRect}
              arrowColor={"#B40000"}
              arrowSize={15}
              arrowStyle={{ opacity: 0.7 }}
              className="popover-arrow-container"
              arrowClassName="popover-arrow"
            >
              <CouchDetails
                popupBg={popupBg}
                seatId={seatId}
                status={status}
                setLoading={setLoading}
                closePopover={closePopover}
                setWarningMessage={setWarningMessage}
                toggleModelShow={toggleModelShow}
              />
            </ArrowContainer>
          )}
        >
          <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}></div>
        </Popover>

        {/* Warning Message */}
        {showModel && (
          <ModalAlert onClose={toggleModelShow} classes={"h-[150] p-5"}>
            <div className="text-center">
              <div className="flex justify-center items-center gap-2 mb-3">
                <BsFillExclamationCircleFill className="text-2xl text-primary" />
                <h3 className="text-3xl font-bold text-primary dark:text-slate-100">
                  {" "}
                  Warning
                </h3>
              </div>

              <div className="px-5">
                <p className="font-bold text-md">{warningMessage}</p>
              </div>
            </div>
          </ModalAlert>
        )}
      </div>
    </>
  );
};

export default CouchComponent;
