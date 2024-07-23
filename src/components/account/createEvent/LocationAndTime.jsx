import Select from "react-dropdown-select";
import { useState, useEffect, useContext } from "react";
import { FaArrowLeftLong, FaLocationDot } from "react-icons/fa6";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import toast from "react-hot-toast";
import {
  BiError,
  BiXCircle,
  BiInfoCircle,
  BiCheckCircle,
} from "react-icons/bi";
import { CreateEventFormContext } from "@/context/CreateEventFormContext";
import { CustomInput } from "@/components";
import useScreenSize from "@/hooks/useScreenSize";
import { Link } from "react-router-dom";
import axiosClient from "@/axiosClient";
import Switch from "react-switch";

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
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [hasSeatMap, setHasSeatMap] = useState(true);

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

  const handleSwitchChange = (checked) => {
    setHasSeatMap(checked);

    setEventFormData((prev) => ({
      ...prev,
      hasSeatMap: checked,
    }));
  };

  useEffect(() => {
    getVenues();
  }, []);

  const getVenues = async () => {
    setLoading(true);

    try {
      const response = await axiosClient.get("venues/admin");

      const { success, message, data } = response.data;

      if (success) {
        // Map data to options
        const venueOptions = data.map((venue) => ({
          value: venue._id,
          label: venue.name,
        }));
        setOptions(venueOptions);
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred while getting categories.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleVenueChange = (selectedValue) => {
    if (selectedValue && selectedValue.length > 0) {
      setEventFormData((prev) => ({
        ...prev,
        venue: selectedValue[0].value,
      }));
    } else {
      setEventFormData((prev) => ({
        ...prev,
        venue: "",
      }));
    }
  };

  return (
    <div className="mt-5 border-b border-slate-200 dark:border-slate-700 pb-5">
      <div className="flex justify-between items-center mb-1">
        <h1 className="text-xl font-bold flex gap-2 items-center">
          <FaLocationDot className="text-xl text-primary dark:text-gray" />
          Location and Time
          {renderMobileError()}
        </h1>

        {/* Back to Events page */}
        <Link
          to="/my-events"
          className="bg-primary text-slate-100 text-sm px-8 py-2 rounded-md flex justify-center items-center gap-2"
        >
          <FaArrowLeftLong />
          Back
        </Link>
      </div>

      {/* User Info Area */}
      <div className="w-full bg-primary/10 border-[1px] border-primary dark:border-gray dark:text-gray dark:bg-darkGray rounded-md mt-3 mb-5">
        <div className="flex items-start gap-3 p-3">
          <div className="w-[20px]">
            <BiInfoCircle className="text-primary dark:text-gray text-xl" />
          </div>
          <p className="text-primary dark:text-gray text-[14px]">
            You can get the longitude and latitude of the event location by
            visiting{" "}
            <a
              href="https://www.latlong.net/"
              target="_blank"
              rel="noreferrer"
              className="text-primary font-semibold underline dark:text-slate-100"
            >
              latlong.net
            </a>{" "}
            or use Google Maps to get the location. For more information, please
            visit{" "}
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noreferrer"
              className="text-primary font-semibold underline dark:text-slate-100"
            >
              Google Maps
            </a>{" "}
            Then copy the longitude and latitude by right clicking on the
            location pin{" "}
            <FaLocationDot className="text-red-600 dark:text-slate-200 text-md inline" />{" "}
            in the map.
          </p>
        </div>
      </div>

      {/* Event Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <CustomInput
          name="address"
          value={eventFormData.address}
          type="text"
          data={eventFormData}
          setData={setEventFormData}
          title="Address"
          info="Where will the event take place?"
          required={true}
        />

        <div className="">
          <label
            htmlFor="event-category"
            className="text-dark dark:text-slate-100 font-bold text-sm"
          >
            Select Seat Map <span className="text-red-500">*</span>
          </label>
          <small className="block text-gray mb-1">
            Choose a seat map for this venue
          </small>
          <Select
            options={options}
            onChange={handleVenueChange}
            values={options.filter(
              (option) => option.label === eventFormData.name
            )}
            className="w-full bg-[#F5F5F5] dark:bg-gray dark:text-dark rounded-md text-gray"
            placeholder="Select Category"
          />
        </div>
      </div>

      <div className="py-5 border-b border-gray/30 dark:border-gray/30 pb-3 mb-3">
        {/* SeatMap Switch */}
        <div className=" ">
          <div className="flex gap-3 items-center mb-1">
            <h1 className="text-2xl font-bold">Use Seat Map</h1>

            <Switch
              onChange={handleSwitchChange}
              checked={eventFormData.hasSeatMap}
              offColor={"#C5C0BF"}
              onColor={"#732e1c"}
              uncheckedIcon={false}
              checkedIcon={false}
            />
          </div>
          <p className="text-xs text-gray dark:text-gray">
            Switch on if you will be using seat map instead of tickets for your
            event
          </p>
        </div>
      </div>

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

      {/* Debugging output */}
      {/* <div className="text-gray font-xs">
        <pre>{JSON.stringify(eventFormData, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default LocationAndTime;
