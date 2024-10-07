import Select from "react-dropdown-select";
import { useState, useEffect, useContext } from "react";
import { FaArrowLeftLong, FaLocationDot } from "react-icons/fa6";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import {
  BiError,
  BiXCircle,
  BiInfoCircle,
  BiCheckCircle,
} from "react-icons/bi";
import {
  CustomInput,
  ModalTransparent,
  EventShowTimeComponent,
  ActionWarningComponent,
} from "@/components";
import useScreenSize from "@/hooks/useScreenSize";
import { Link, useLocation } from "react-router-dom";
import axiosClient from "@/axiosClient";
import Switch from "react-switch";
import { CreateEventFormContext } from "@/context/CreateEventFormContext";

const LocationAndTime = () => {
  const {
    eventData,
    eventFormData,
    clearEventForm,
    setEventFormData,
    isLocationTimeFilled,
  } = useContext(CreateEventFormContext);
  const isMobile = useScreenSize();
  const location = useLocation();
  const [showWarning, setShowWarning] = useState(false);
  const toggleShowWarning = () => setShowWarning((previous) => !previous);

  const eventId = location.pathname.split("/")[3];

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
        console.log(message);
      } else {
        console.log(message);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred while getting categories.";
      console.log(errorMessage);
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

  // Handle navigate back
  const handleNavigateBack = () => {
    setShowWarning(false);
    clearEventForm();
    window.history.back();
  };

  return (
    <div className="mt-5 border-b border-slate-200 dark:border-slate-700 pb-5">
      <div className="flex justify-between items-center mb-1">
        <h1 className="text-xl font-bold flex gap-2 items-center">
          <FaLocationDot className="text-xl text-primary dark:text-gray" />
          Location and Time
          {renderMobileError()}
        </h1>

        {eventData ? null : (
          <>
            {/* Back to Events page */}
            <div className="">
              <button
                onClick={toggleShowWarning}
                className="bg-primary text-slate-100 text-sm px-8 py-2 rounded-md flex justify-center items-center gap-2"
              >
                <FaArrowLeftLong />
                Back
              </button>
            </div>
          </>
        )}
      </div>

      <div className="py-5 border-b border-gray/30 dark:border-gray/30 pb-3 mb-3">
        {/* SeatMap Switch */}
        {!eventId && (
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
              Switch on if you will be using seat map instead of tickets for
              your event
            </p>
          </div>
        )}
      </div>

      {/* Event Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mb-5">
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
              (option) => option.value === eventFormData.venue
            )}
            className="w-full bg-[#F5F5F5] dark:bg-gray dark:text-dark rounded-md text-gray"
            placeholder="Select Seat Map"
          />
        </div>
      </div>

      {/* Map Longitude & Latitude */}
      {!eventFormData.hasSeatMap && (
        <>
          {/* User map Info Area */}
          <div className="w-full bg-primary/10 border-[1px] border-primary/80 dark:border-gray dark:text-gray dark:bg-darkGray rounded-md mt-3 mb-5">
            <div className="flex items-start gap-3 p-3">
              <div className="w-[20px]">
                <BiInfoCircle className="text-primary dark:text-gray text-xl" />
              </div>
              <p className="text-primary dark:text-gray text-[14px]">
                You can get the longitude and latitude of the event location by
                visiting{" "}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <CustomInput
              name="latitude"
              value={eventFormData.latitude}
              type="number"
              data={eventFormData}
              setData={setEventFormData}
              title="Latitude"
              info="What is the latitude of the event location? (Example: -1.2781323707195782)"
              required={false}
            />

            <CustomInput
              name="longitude"
              value={eventFormData.longitude}
              type="number"
              data={eventFormData}
              setData={setEventFormData}
              title="Longitude"
              info="What is the longitude of the event location? (Example: 36.81573982523013)"
              required={false}
            />
          </div>
        </>
      )}

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

      {/* Event Shows */}
      <EventShowTimeComponent />

      {/* Show Warning Modal */}
      {showWarning && (
        <ModalTransparent
          title="Navigate back!"
          onClose={toggleShowWarning}
          icon={<BiInfoCircle className="text-white text-2xl" />}
        >
          <ActionWarningComponent
            handleClick={handleNavigateBack}
            cancel={toggleShowWarning}
            loading={loading}
            message={
              <p>
                Are you sure you want to close this page? <br /> All or some of
                your changes might be lost.
              </p>
            }
          />
        </ModalTransparent>
      )}
    </div>
  );
};

export default LocationAndTime;
