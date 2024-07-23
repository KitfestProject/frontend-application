import PropTypes from "prop-types";
import { createContext, useState } from "react";
import axiosClient from "@/axiosClient";

export const CreateEventFormContext = createContext();

const initialEventForm = {
  // General Information
  title: "",
  description: "",
  category: "",
  tags: [],

  // Event Cover
  coverImage: null,

  // Location and Time
  address: "",
  longitude: "",
  latitude: "",
  eventDate: {
    start_date: null,
    end_date: null,
  },
  eventStartTime: "",
  eventEndTime: "",
  venue: "",
  hasSeatMap: false,

  // Event Charges
  isPaid: "free",
  tickets: [
    {
      ticketType: +"earlyBird",
      ticketPrice: +"",
      ticketDiscountPrice: +"",
      ticketQuantity: +"",
    },
  ],

  // Publish date
  isScheduledPublished: false,
  publicationDate: null,
  publishTime: null,
};

export const EventFormProvider = ({ children }) => {
  const [eventFormData, setEventFormData] = useState(initialEventForm);
  const [loading, setLoading] = useState(false);

  const isGeneralInfoFilled =
    eventFormData.title !== "" &&
    eventFormData.description !== "" &&
    eventFormData.category !== "" &&
    eventFormData.tags.length &&
    eventFormData.tags.length > 0;

  const isLocationTimeFilled =
    eventFormData.address !== "" &&
    eventFormData.longitude !== "" &&
    eventFormData.latitude !== "" &&
    eventFormData.eventDate.start_date !== null &&
    eventFormData.eventDate.end_date !== null &&
    eventFormData.eventStartTime !== "" &&
    eventFormData.eventEndTime !== "";

  const isEventChargesFilled =
    eventFormData.tickets[0].ticketPrice > 0 &&
    eventFormData.tickets[0].ticketDiscountPrice > 0 &&
    eventFormData.tickets[0].ticketQuantity > 0;

  const isCoverImageFilled = eventFormData.coverImage !== null;

  const isScheduledPublished = eventFormData.isScheduledPublished === true;

  const isFreeEvent = eventFormData.isPaid === "free";

  const hasSeatMapSelected = eventFormData.hasSeatMap === true;

  const clearSelectedSeatMap = () =>
    setEventFormData((previous) => ({
      ...previous,
      hasSeatMap: false,
    }));

  const isCompleteFormFilled =
    (isGeneralInfoFilled &&
      hasSeatMapSelected &&
      isLocationTimeFilled &&
      isEventChargesFilled &&
      isCoverImageFilled &&
      isCoverImageFilled) ||
    (!isEventChargesFilled && isFreeEvent);

  const clearEventForm = () => {
    setEventFormData(initialEventForm);
  };

  const createNewEvent = async () => {
    if (!isCompleteFormFilled) {
      return "Kindly fix some errors in the create event form to continue.";
    }

    setLoading(true);

    try {
      const response = await axiosClient.post("/events", eventFormData);

      const { success, message, data } = response.data;

      // console.log(response);

      if (success) {
        setEventFormData(initialEventForm);

        const result = { success: true, message: message, data: data };

        // console.log(result);

        return result;
      } else {
        const result = { success: false, message: message };

        return result;
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred while publishing the venue.";

      const result = [{ success: false, message: errorMessage }];

      return result;
    } finally {
      setLoading(false);
    }
  };

  return (
    <CreateEventFormContext.Provider
      value={{
        loading,
        isFreeEvent,
        eventFormData,
        clearEventForm,
        createNewEvent,
        setEventFormData,
        hasSeatMapSelected,
        isGeneralInfoFilled,
        clearSelectedSeatMap,
        isLocationTimeFilled,
        isEventChargesFilled,
        isCoverImageFilled,
        isScheduledPublished,
        isCompleteFormFilled,
      }}
    >
      {children}
    </CreateEventFormContext.Provider>
  );
};

EventFormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * - TODO: tags.map((tag) => tag.value).join(", "),
 */
