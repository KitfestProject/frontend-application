import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { FaTicket } from "react-icons/fa6";
import PaidEventSection from "./PaidEventSection";
import FreeEventTab from "./FreeEventTab";
import PaidEventTab from "./PaidEventTab";
import { CreateEventFormContext } from "@/context/CreateEventFormContext";
import { BiError, BiCheckCircle } from "react-icons/bi";
import useScreenSize from "@/hooks/useScreenSize.mjs";

const EventCharges = () => {
  const { eventFormData, setEventFormData, isEventChargesFilled } = useContext(
    CreateEventFormContext
  );
  const [selectedChargeType, setSelectedChargeType] = useState("free");
  const isMobile = useScreenSize();

  useEffect(() => {
    if (eventFormData.isPaid) {
      setSelectedChargeType(eventFormData.isPaid);
    }
  }, [eventFormData.isPaid]);

  const handleChargesChange = (event) => {
    const selectedTicked = event.target.value;

    // console.log(selectedTicked);
    setSelectedChargeType(selectedTicked);

    setEventFormData({
      ...eventFormData,
      isPaid: selectedTicked,
    });
  };

  const renderMobileError = () => {
    if (isMobile) {
      return isEventChargesFilled && isMobile ? (
        <BiCheckCircle className="text-green-600 text-xl ml-2" />
      ) : (
        <BiError className="text-2xl inline text-yellow-600" />
      );
    }
  };

  return (
    <div className="mt-5 border-b border-slate-200 dark:border-slate-700 pb-5">
      <h1 className="text-xl font-bold flex gap-2 items-center mb-5">
        <FaTicket className="text-xl text-primary dark:text-gray" />
        Ticket And Charges
        {renderMobileError()}
      </h1>

      <div className="grid grid-cols-2 gap-5">
        {/* Paid Tab */}
        <PaidEventTab
          selectedChargeType={selectedChargeType}
          handleChange={handleChargesChange}
        />

        {/* Free Tab */}
        <FreeEventTab
          selectedChargeType={selectedChargeType}
          handleChange={handleChargesChange}
        />
      </div>

      {/* Paid Charges */}
      {selectedChargeType === "paid" && <PaidEventSection />}
    </div>
  );
};

EventCharges.propTypes = {
  isEventChargesFilled: PropTypes.bool.isRequired,
};

export default EventCharges;
