import { useContext } from "react";
import TimePicker from "react-time-picker";
import "react-clock/dist/Clock.css";
import { FaRegTrashAlt } from "react-icons/fa";
import "react-time-picker/dist/TimePicker.css";
import { CustomDateInput } from "@/components";
import { CreateEventFormContext } from "@/context/CreateEventFormContext";

const EventShowTimeComponent = () => {
  const { eventFormData, setEventFormData } = useContext(
    CreateEventFormContext
  );

  // Handle adding a new event show
  const addEventShow = () => {
    setEventFormData((prevState) => ({
      ...prevState,
      eventShows: [
        ...prevState.eventShows,
        { date: null, shows: [{ start_time: "", end_time: "" }] },
      ],
    }));
  };

  // Handle removing an event show
  const removeEventShow = (index) => {
    const updatedEventShows = [...eventFormData.eventShows];
    updatedEventShows.splice(index, 1);
    setEventFormData((prevState) => ({
      ...prevState,
      eventShows: updatedEventShows,
    }));
  };

  // Handle adding a new show within a specific event show
  const addShow = (eventShowIndex) => {
    const updatedEventShows = [...eventFormData.eventShows];
    updatedEventShows[eventShowIndex].shows.push({
      start_time: "",
      end_time: "",
    });
    setEventFormData((prevState) => ({
      ...prevState,
      eventShows: updatedEventShows,
    }));
  };

  // Handle removing a show within a specific event show
  const removeShow = (eventShowIndex, showIndex) => {
    const updatedEventShows = [...eventFormData.eventShows];
    updatedEventShows[eventShowIndex].shows.splice(showIndex, 1);
    setEventFormData((prevState) => ({
      ...prevState,
      eventShows: updatedEventShows,
    }));
  };

  // Handle input changes for date
  const handleDateChange = (selectedDate, eventShowIndex) => {
    const date = selectedDate.toISOString();
    const updatedEventShows = [...eventFormData.eventShows];
    updatedEventShows[eventShowIndex].date = date;
    setEventFormData((prevState) => ({
      ...prevState,
      eventShows: updatedEventShows,
    }));
  };

  // Handle input changes for start and end time
  const handleTimeChange = (value, eventShowIndex, showIndex, name) => {
    const updatedEventShows = [...eventFormData.eventShows];
    updatedEventShows[eventShowIndex].shows[showIndex][name] = value;
    setEventFormData((prevState) => ({
      ...prevState,
      eventShows: updatedEventShows,
    }));
  };

  return (
    <div className="py-6 bg-gray-100">
      <h1 className="text-2xl text-primary font-bold mb-4">Event Shows</h1>
      {eventFormData.eventShows.map((eventShow, eventShowIndex) => (
        <div
          key={eventShowIndex}
          className="bg-white dark:bg-darkGray p-4 mb-6 rounded-lg border-[1px] border-primary/50 dark:border-gray border-dashed"
        >
          {/* Date Input */}
          <div className="mb-4">
            <CustomDateInput
              title="Event Date"
              date={eventShow.date || ""}
              handleChange={(selected) =>
                handleDateChange(selected, eventShowIndex)
              }
            />
          </div>

          {/* Shows within this eventShow */}
          {eventShow.shows.map((show, showIndex) => (
            <div key={showIndex} className="mb-4">
              <div className="grid grid-cols-2 gap-4 mb-2">
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
                    clockIcon={null}
                    value={show.start_time}
                    onChange={(value) =>
                      handleTimeChange(
                        value,
                        eventShowIndex,
                        showIndex,
                        "start_time"
                      )
                    }
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
                    clockIcon={null}
                    value={show.end_time}
                    onChange={(value) =>
                      handleTimeChange(
                        value,
                        eventShowIndex,
                        showIndex,
                        "end_time"
                      )
                    }
                    className="w-full bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none"
                  />
                </div>
              </div>

              {/* Remove show button */}
              {eventShow.shows.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeShow(eventShowIndex, showIndex)}
                  className="text-red-600 hover:text-red-700 text-xs"
                >
                  Remove Show <FaRegTrashAlt className="inline" />
                </button>
              )}
            </div>
          ))}

          {/* Add show button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => addShow(eventShowIndex)}
              className="bg-blue-200 text-blue-600 text-xs px-4 py-2 rounded-md"
            >
              Add Show
            </button>

            {/* Remove event show button */}
            {eventFormData.eventShows.length > 1 && (
              <button
                type="button"
                onClick={() => removeEventShow(eventShowIndex)}
                className="text-red-500 bg-red-200 px-4 py-2 text-xs rounded-md hover:text-red-700"
              >
                Remove Event Show
              </button>
            )}
          </div>
        </div>
      ))}

      {/* Add new event show button */}
      <button
        type="button"
        onClick={addEventShow}
        className="bg-green-200 text-green-600 text-xs px-4 py-2 rounded-md"
      >
        Add Event Show
      </button>

      {/* Output the current state for debugging */}
      {/* <pre className="mt-6 text-gray text-xs">
        {JSON.stringify(eventFormData.eventShows, null, 2)}
      </pre> */}
    </div>
  );
};

export default EventShowTimeComponent;
