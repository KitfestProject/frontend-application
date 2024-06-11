import PropTypes from "prop-types";
import { createContext, useState } from "react";

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

  // Event Charges
  isPaid: "free",
  tickets: [
    {
      ticketType: "earlyBird",
      ticketPrice: "",
      ticketDiscountPrice: "",
      ticketQuantity: "",
      ticketDescription: "",
      ticketStartDate: new Date(),
      ticketEndDate: new Date(),
      ticketStartTime: null,
      ticketEndTime: null,
    },
  ],

  // Publish date
  isScheduledPublished: false,
  publicationDate: null,
  publishTime: null,
};

export const EventFormProvider = ({ children }) => {
  const [eventFormData, setEventFormData] = useState(initialEventForm);

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
    eventFormData.tickets[0].ticketPrice !== "" &&
    eventFormData.tickets[0].ticketDiscountPrice !== "" &&
    eventFormData.tickets[0].ticketQuantity !== "" &&
    eventFormData.tickets[0].ticketStartTime !== null &&
    eventFormData.tickets[0].ticketEndTime !== null;

  const isCoverImageFilled = eventFormData.coverImage !== null;

  const isScheduledPublished = eventFormData.isScheduledPublished === true;

  const isFreeEvent = eventFormData.isPaid === "free";

  const isCompleteFormFilled =
    (isGeneralInfoFilled &&
      isLocationTimeFilled &&
      isEventChargesFilled &&
      isCoverImageFilled &&
      isCoverImageFilled) ||
    (!isEventChargesFilled && isFreeEvent);

  const clearEventForm = () => {
    setEventFormData(initialEventForm);
  };

  return (
    <CreateEventFormContext.Provider
      value={{
        isFreeEvent,
        eventFormData,
        clearEventForm,
        setEventFormData,
        isGeneralInfoFilled,
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
