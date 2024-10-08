import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CustomSelectInput } from "@/components";
import { format, parse } from "date-fns";

const formatDateTime = (date, timeString) => {
  const formattedDate = format(date, "EEEE, MMMM do, yyyy");
  const [startTime, endTime] = timeString.split(" - ");

  const formattedStartTime = new Date(
    `1970-01-01T${startTime}`
  ).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const formattedEndTime = new Date(`1970-01-01T${endTime}`).toLocaleTimeString(
    "en-US",
    {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }
  );

  return `${formattedDate} from ${formattedStartTime} to ${formattedEndTime}`;
};

const EventCalenderSelector = ({ eventData }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime("");
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const dateString = selectedDate ? format(selectedDate, "dd-MM-yyyy") : "";
  const availableTimes = selectedDate
    ? eventData?.shows?.find((show) => show.date === dateString)
        ?.shows.map((timeSlot) => ({
          value: `${timeSlot._id}`,
          label: `${timeSlot.start_time} - ${timeSlot.end_time}`,
        })) || []
    : [];

  const includedDates = eventData?.shows?.map((show) =>
    parse(show.date, "dd-MM-yyyy", new Date())
  );

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-dark rounded p-6 mt-8 dark:border-t dark:border-gray">
      <h2 className="text-2xl text-primary dark:text-gray font-bold mb-4">
        Event Show-Time
      </h2>

      {/* Date Picker Calendar */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Show Date:
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd-MM-yyyy"
          className="w-full p-2 border border-gray outline-none rounded dark:bg-darkGray"
          placeholderText="Choose a date"
          includeDates={includedDates} // Use parsed dates for the calendar
        />
      </div>

      {/* Time Selection using reusable Select component */}
      {selectedDate && (
        <CustomSelectInput
          label="Select Show Time:"
          options={availableTimes}
          value={selectedTime}
          onChange={handleTimeChange}
          placeholder="Choose a time"
        />
      )}

      {/* Display Selected Date and Time */}
      {selectedTime && (
        <div className="mt-6">
          <p className="text-base font-medium text-gray-700">
            You selected:{" "}
            <strong className="text-primaryLight">
              {formatDateTime(selectedDate, selectedTime)}
            </strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default EventCalenderSelector;
