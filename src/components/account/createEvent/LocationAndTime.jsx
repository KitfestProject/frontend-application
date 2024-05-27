import React, { useState, useEffect, useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import {
  BiError,
  BiInfoCircle,
  BiXCircle,
  BiCheckCircle,
} from "react-icons/bi";
import { CreateEventFormContext } from "../../../context/CreateEventFormContext";
import CustomInput from "../../utils/CustomInput";
import useScreenSize from "../../../hooks/useScreenSize.mjs";

const LocationAndTime = () => {
  const { eventFormData, setEventFormData, isLocationTimeFilled } = useContext(
    CreateEventFormContext
  );
  const isMobile = useScreenSize();

  const [dateRange, setDateRange] = useState([
    new Date(eventFormData.eventDate?.start_date) || new Date(),
    new Date(eventFormData.eventDate?.end_date) ||
      new Date(new Date().setDate(new Date().getDate() + 1)),
  ]);

  const [startTime, setStartTime] = useState(
    eventFormData.eventStartTime || null
  );
  const [endTime, setEndTime] = useState(eventFormData.eventEndTime || null);

  useEffect(() => {
    if (eventFormData.eventDate) {
      setDateRange([
        new Date(eventFormData.eventDate?.start_date),
        new Date(eventFormData.eventDate?.end_date),
      ]);
    }

    if (eventFormData.eventStartTime) {
      setStartTime(eventFormData.eventStartTime || null);
      setEndTime(eventFormData.eventEndTime || null);
    }
  }, [eventFormData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEventFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectedDate = (selected) => {
    setDateRange(selected);

    const startDate = selected[0].toISOString();
    const endDate = selected[1].toISOString();

    const newEventDate = {
      start_date: startDate,
      end_date: endDate,
    };

    setEventFormData((prevData) => ({
      ...prevData,
      eventDate: newEventDate,
    }));

    // console.log({
    //   ...eventFormData,
    //   eventDate: newEventDate,
    // });
  };

  const handleEventStartTime = (selected) => {
    setStartTime(selected);
    setEventFormData((prevData) => ({
      ...prevData,
      eventStartTime: selected,
    }));
  };

  const handleEventEndTime = (selected) => {
    setEndTime(selected);
    setEventFormData((prevData) => ({
      ...prevData,
      eventEndTime: selected,
    }));
  };

  const renderMobileError = () => {
    if (isMobile) {
      return isLocationTimeFilled ? (
        <BiCheckCircle className="text-green-600 text-xl ml-2" />
      ) : (
        <BiError className="text-2xl inline text-yellow-600" />
      );
    }
  };

  return (
    <div className="mt-5 border-b border-slate-200 dark:border-slate-700 pb-5">
      <h1 className="text-xl font-bold flex gap-2 items-center">
        <FaLocationDot className="text-xl text-primary dark:text-gray" />
        Location and Time
        {renderMobileError()}
      </h1>

      {/* Debugging output */}
      {/* <pre>{JSON.stringify(eventFormData, null, 2)}</pre> */}

      {/* User Info Area */}
      <div className="w-full bg-slate-100 border-[1px] border-slate-500 dark:border-gray dark:text-gray dark:bg-darkGray rounded-md mt-3 mb-5">
        <div className="flex items-start gap-3 p-3">
          <div className="w-[20px]">
            <BiInfoCircle className="text-slate-500 dark:text-gray text-xl" />
          </div>
          <p className="text-slate-500 dark:text-gray text-[14px]">
            You can get the longitude and latitude of the event location by
            visiting{" "}
            <a
              href="https://www.latlong.net/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 underline dark:text-slate-100"
            >
              latlong.net
            </a>{" "}
            or use Google Maps to get the location. For more information, please
            visit{" "}
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 underline dark:text-slate-100"
            >
              Google Maps
            </a>{" "}
            Then copy the longitude and latitude by right clicking on the
            location pin{" "}
            <FaLocationDot className="text-red-600 dark:text-slate-200 text-md inline" /> in the
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
          className="w-full bg-[#F5F5F5] dark:bg-gray dark:text-dark p-2 rounded-md outline-none"
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
