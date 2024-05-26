import React, { useState, useEffect, useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { BiInfoCircle, BiXCircle } from "react-icons/bi";
import { CreateEventFormContext } from "../../../context/CreateEventFormContext";
import CustomInput from "../../utils/CustomInput";

const LocationAndTime = () => {
  const { eventFormData, setEventFormData } = useContext(
    CreateEventFormContext
  );

  const [dateRange, setDateRange] = useState([
    new Date(eventFormData.eventDate?.start_date || new Date()),
    new Date(eventFormData.eventDate?.end_date || new Date()),
  ]);

  const [startTime, setStartTime] = useState(
    eventFormData.eventStartTime || null
  );

  const [endTime, setEndTime] = useState(eventFormData.eventEndTime || null);

  useEffect(() => {
    setDateRange([
      new Date(eventFormData.eventDate?.start_date || new Date()),
      new Date(eventFormData.eventDate?.end_date || new Date()),
    ]);
    setStartTime(eventFormData.eventStartTime || null);
    setEndTime(eventFormData.eventEndTime || null);
  }, [eventFormData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEventFormData({
      ...eventFormData,
      [name]: value,
    });
  };

  const handleSelectedDate = (selected) => {
    setDateRange(selected);

    const startDate = selected[0].toISOString();
    const endDate = selected[1].toISOString();

    const eventDate = {
      start_date: startDate,
      end_date: endDate,
    };

    setEventFormData({
      ...eventFormData,
      eventDate: eventDate,
    });
  };

  const handleEventStartTime = (selected) => {
    setStartTime(selected);
    setEventFormData({
      ...eventFormData,
      eventStartTime: selected,
    });
  };

  const handleEventEndTime = (selected) => {
    setEndTime(selected);
    setEventFormData({
      ...eventFormData,
      eventEndTime: selected,
    });
  };

  return (
    <div className="mt-5 border-b border-slate-200 dark:border-slate-700 pb-5">
      <h1 className="text-xl font-bold flex gap-2 items-center">
        <FaLocationDot className="text-xl text-primary dark:text-gray" />
        Location and Time
      </h1>

      {/* User Info Area */}
      <div className="w-full bg-blue-100 border-[1px] border-blue-500 dark:bg-darkGray rounded-md mt-3 mb-5">
        <div className="flex items-start gap-3 p-3">
          <div className="w-[20px]">
            <BiInfoCircle className="text-blue-500 text-xl" />
          </div>
          <p className="text-blue-500 text-[14px]">
            You can get the longitude and latitude of the event location by
            visiting{" "}
            <a
              href="https://www.latlong.net/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 underline"
            >
              latlong.net
            </a>{" "}
            or use Google Maps to get the location. For more information, please
            visit{" "}
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 underline"
            >
              Google Maps
            </a>{" "}
            Then copy the longitude and latitude by right clicking on the
            location pin{" "}
            <FaLocationDot className="text-red-600 text-lg inline" /> in the
            map.
          </p>
        </div>
      </div>

      {/* Event Location */}
      <CustomInput
        name="address"
        value={eventFormData.address}
        type="text"
        data={eventFormData}
        setData={setEventFormData}
        title="Location"
        info="Where will the event take place?"
        required={true}
      />

      {/* Map Longitude & Latitude */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <CustomInput
          name="longitude"
          value={eventFormData.longitude}
          type="number"
          data={eventFormData}
          setData={setEventFormData}
          title="Longitude"
          info="What is the longitude of the event location?"
          required={true}
        />

        <CustomInput
          name="latitude"
          value={eventFormData.latitude}
          type="number"
          data={eventFormData}
          setData={setEventFormData}
          title="Latitude"
          info="What is the latitude of the event location?"
          required={true}
        />
      </div>

      {/* Event Date */}
      <div className="mt-5">
        <label
          htmlFor="event-date"
          className="text-dark dark:text-slate-100 font-bold text-sm"
        >
          Date <span className="text-red-500">*</span>
        </label>
        <small className="block text-gray mb-1">
          When will the event take place?
        </small>

        <DateRangePicker
          minDate={new Date()}
          calendarIcon={null}
          clearIcon={<BiXCircle className="text-primary dark:text-slate-100" />}
          onChange={handleSelectedDate}
          value={dateRange}
          className={`w-full bg-[#F5F5F5] dark:bg-gray dark:text-dark p-2 rounded-md outline-none`}
        />
      </div>

      {/* Event Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="mt-5">
          <label
            htmlFor="event-time"
            className="text-dark dark:text-slate-100 font-bold text-sm"
          >
            Start Time <span className="text-red-500">*</span>
          </label>
          <small className="block text-gray mb-1">
            What time will the event start?
          </small>

          <TimePicker
            clearIcon={null}
            onChange={handleEventStartTime}
            clockIcon={null}
            value={startTime}
            className="w-full bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none"
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="event-end-time"
            className="text-dark dark:text-slate-100 font-bold text-sm"
          >
            End Time <span className="text-red-500">*</span>
          </label>
          <small className="block text-gray mb-1">
            What time will the event end?
          </small>

          <TimePicker
            clearIcon={null}
            onChange={handleEventEndTime}
            clockIcon={null}
            value={endTime}
            className="w-full bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationAndTime;
