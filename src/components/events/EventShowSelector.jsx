import React, { useState } from "react";
import { CustomSelectInput } from "@/components";
import useTimeAgo from "@/hooks/useTimeAgo";
import { useSeatStore } from "@/store/UseSeatStore";

const convertToDDMMYY = (isoDateString) => {
  const date = new Date(isoDateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  return `${day}-${month}-${year}`;
};

const EventShowSelector = ({ eventData }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDateId, setSelectedDateId] = useState("");
  const [selectedShowTimeId, setSelectedShowTimeId] = useState("");
  const { addEventShowId, addShowTimeId, addHumanDate } = useSeatStore();
  const { formatTicketDateTime } = useTimeAgo();
  const selectedShowTimeHuman = formatTicketDateTime(
    selectedDate,
    selectedTime
  );

  const handleDateChange = (e) => {
    const { value } = e.target;
    setSelectedDateId(value);
    addEventShowId(value);
    setSelectedShowTimeId("");
    const selectedDate = eventData?.event_shows?.find(
      (show) => show._id === value
    );
    setSelectedDate(selectedDate?.date);
  };

  const handleTimeChange = (e) => {
    const { value } = e.target;
    setSelectedShowTimeId(value);
    addShowTimeId(value);
    const selectedShowTime = eventData?.event_shows
      ?.find((show) => show._id === selectedDateId)
      ?.shows.find((timeSlot) => timeSlot._id === value);
    setSelectedTime(
      selectedShowTime?.start_time + " - " + selectedShowTime?.end_time
    );

    const newSelectedHumanDate = formatTicketDateTime(
      selectedDate,
      selectedShowTime?.start_time + " - " + selectedShowTime?.end_time
    );

    addHumanDate(newSelectedHumanDate);
  };

  const dateOptions = eventData?.event_shows?.map((show) => ({
    value: show._id,
    label: convertToDDMMYY(show.date),
  }));

  const timeOptions = selectedDateId
    ? eventData?.event_shows
        ?.find((show) => show._id === selectedDateId)
        ?.shows.map((timeSlot) => ({
          value: `${timeSlot._id}`,
          label: `${timeSlot.start_time} - ${timeSlot.end_time}`,
        })) || []
    : [];

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-dark rounded p-6 mt-8 dark:border-t dark:border-gray">
      <h2 className="text-2xl text-primary dark:text-gray font-bold mb-4">
        Event Show-Time
      </h2>

      {/* Date Selection */}
      <CustomSelectInput
        label="Select Show Date:"
        options={dateOptions}
        value={selectedDateId}
        onChange={handleDateChange}
        placeholder="Choose a date"
      />

      {/* Time Selection */}
      {selectedDateId && (
        <CustomSelectInput
          label="Select Show Time:"
          options={timeOptions}
          value={selectedShowTimeId}
          onChange={handleTimeChange}
          placeholder="Choose a time"
        />
      )}

      {/* Display Selected Date and Time */}
      {selectedShowTimeId && (
        <div className="mt-6">
          <p className="text-base font-medium text-gray-700">
            You selected:{" "}
            <strong className="text-primaryLight">
              {selectedShowTimeHuman}
            </strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default EventShowSelector;
