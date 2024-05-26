import React, { useContext, useState, useEffect } from "react";
import Switch from "react-switch";
import { BiSolidFlag } from "react-icons/bi";
import TicketTabButton from "./TicketTabButton";
import { ticketTypes } from "../../data/StaticData";
import CustomInput from "../../utils/CustomInput";
import CustomDateInput from "../../utils/CustomDateInput";
import CustomTimeInput from "../../utils/CustomTimeInput";
import { CreateEventFormContext } from "../../../context/CreateEventFormContext";

const PaidEventSection = () => {
  const { eventFormData, setEventFormData } = useContext(
    CreateEventFormContext
  );

  const [selected, setSelected] = useState("earlyBird");
  const [startDate, setStartDate] = useState(
    new Date(eventFormData.ticketStartDate || new Date())
  );
  const [endDate, setEndDate] = useState(
    new Date(eventFormData.ticketEndDate || new Date())
  );
  const [startTime, setStartTime] = useState(
    eventFormData.ticketStartTime || null
  );
  const [endTime, setEndTime] = useState(eventFormData.ticketEndTime || null);
  const [isPromotion, setIsPromotion] = useState(
    eventFormData.isPromotion || false
  );

  useEffect(() => {
    setStartDate(new Date(eventFormData.ticketStartDate || new Date()));
    setEndDate(new Date(eventFormData.ticketEndDate || new Date()));
    setStartTime(eventFormData.ticketStartTime || null);
    setEndTime(eventFormData.ticketEndTime || null);
    setIsPromotion(eventFormData.isPromotion || false);
  }, [eventFormData]);

  const handleSwitchChange = (checked) => {
    setIsPromotion(checked);

    setEventFormData({
      ...eventFormData,
      isPromotion: checked,
    });
  };

  const handelSetStartDate = (selected) => {
    setStartDate(selected);
    const date = selected.toISOString();

    setEventFormData({
      ...eventFormData,
      ticketStartDate: date,
    });
  };

  const handleSetEndDate = (selected) => {
    setEndDate(selected);
    const formattedDate = selected.toISOString();

    setEventFormData({
      ...eventFormData,
      ticketEndDate: formattedDate,
    });
  };

  const handleSetStartTime = (selected) => {
    setStartTime(selected);

    setEventFormData({
      ...eventFormData,
      ticketStartTime: selected,
    });
  };

  const handleSetEndTime = (selected) => {
    setEndTime(selected);

    setEventFormData({
      ...eventFormData,
      ticketEndTime: selected,
    });
  };

  return (
    <div className="mt-5">
      <label
        htmlFor="event-title"
        className="text-dark dark:text-slate-100 font-bold text-sm"
      >
        Ticket Price <span className="text-red-500">*</span>
      </label>

      <small className="block text-gray mb-1">
        Set the price for the event
      </small>

      {/* Tab Buttons */}
      <div className="flex gap-2 mt-3">
        {ticketTypes.map((ticket, index) => (
          <TicketTabButton
            key={index}
            ticket={ticket}
            handleClick={() => {
              setSelected(ticket.type);
              setEventFormData({
                ...eventFormData,
                ticketType: ticket.type,
              });
            }}
            selected={selected}
          />
        ))}
      </div>

      {/* Ticket Price */}
      <div className="mt-5 grid md:grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Quantity Input */}
        <CustomInput
          name="ticketQuantity"
          value={eventFormData.ticketQuantity}
          type="number"
          data={eventFormData}
          setData={setEventFormData}
          title="Quantity"
          info="Number of tickets available for this event"
        />

        {/* Price Input */}
        <CustomInput
          name="ticketPrice"
          value={eventFormData.ticketPrice}
          type="number"
          data={eventFormData}
          setData={setEventFormData}
          title="Price (Ksh.)"
          info="Set the price for the event"
        />

        {/* Discount Input */}
        <CustomInput
          name="ticketDiscountPrice"
          value={eventFormData.ticketDiscountPrice}
          type="number"
          data={eventFormData}
          setData={setEventFormData}
          title="Discount (Ksh.)"
          info="Set the discounted price for the event"
        />
      </div>

      {/* Ticket Dates */}
      <div className="mt-5 grid md:grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Start Date Input */}
        <CustomDateInput
          title="Start Date"
          info="Set the start date for the ticket"
          date={startDate}
          handleChange={handelSetStartDate}
        />

        {/* End Date Input */}
        <CustomDateInput
          title="End Date"
          info="Set the end date for the ticket"
          date={endDate}
          handleChange={handleSetEndDate}
        />
      </div>

      {/* Ticket Time */}
      <div className="mt-5 grid md:grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        {/* Start Time Input */}
        <CustomTimeInput
          title="Start Time"
          info="Set the start time for the ticket"
          time={startTime}
          handleChange={handleSetStartTime}
        />

        {/* End time input */}
        <CustomTimeInput
          required={true}
          title="End Time"
          info="Set the end time for the ticket"
          time={endTime}
          handleChange={handleSetEndTime}
        />
      </div>

      <div className="flex gap-5 items-center">
        <h1 className="text-lg font-bold flex gap-2 items-center">
          <BiSolidFlag className="text-xl text-primary dark:text-gray" />
          Promotion
        </h1>

        <Switch
          onChange={handleSwitchChange}
          checked={isPromotion}
          offColor="#C5C0BF"
          onColor="#732e1c"
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </div>
    </div>
  );
};

export default PaidEventSection;
