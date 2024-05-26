import React, { useContext, useState } from "react";
import { FaTicket } from "react-icons/fa6";
import PaidEventSection from "./PaidEventSection";
import FreeEventTab from "./FreeEventTab";
import PaidEventTab from "./PaidEventTab";
import { CreateEventFormContext } from "../../../context/CreateEventFormContext";

const EventCharges = () => {
  const { eventFormData, setEventFormData } = useContext(
    CreateEventFormContext
  );
  const [selectedChargeType, setSelectedChargeType] = useState("paid");

  const handleChargesChange = (event) => {
    const selectedTicked = event.target.value;

    console.log(selectedTicked);
    setSelectedChargeType(selectedTicked);

    setEventFormData({
      ...eventFormData,
      ticketType: selectedTicked,
    });
  };

  return (
    <div className="mt-5 border-b border-slate-200 dark:border-slate-700 pb-5">
      <h1 className="text-xl font-bold flex gap-2 items-center mb-5">
        <FaTicket className="text-xl text-primary dark:text-gray" />
        Ticket And Charges
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

export default EventCharges;
