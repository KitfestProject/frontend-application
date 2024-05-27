import React, { createContext, useState } from "react";

export const CreateEventFormContext = createContext();

export const EventFormProvider = ({ children }) => {
  const [eventFormData, setEventFormData] = useState({
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
    charges: "",
    isPaid: true,
    currency: "KES",
    ticketType: "paid",
    ticketPrice: "",
    ticketDiscountPrice: "",
    ticketQuantity: "",
    ticketDescription: "",
    ticketStartDate: "",
    ticketEndDate: "",
    ticketStartTime: "",
    ticketEndTime: "",
    isPromotion: false,
    // Publish date
    isScheduledPublished: false,
    publicationDate: null,
    publishTime: null,
  });

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
    eventFormData.isPaid === true &&
    eventFormData.ticketType !== "" &&
    eventFormData.ticketPrice !== "" &&
    eventFormData.ticketDiscountPrice !== "" &&
    eventFormData.ticketQuantity !== "" &&
    eventFormData.ticketStartDate !== "" &&
    eventFormData.ticketEndDate !== "" &&
    eventFormData.ticketStartTime !== "" &&
    eventFormData.ticketEndTime !== "";

  const isCoverImageFilled = eventFormData.coverImage !== null;

  const isScheduledPublished = eventFormData.isScheduledPublished === true;

  const isFreeEvent = eventFormData.ticketType === "free";

  const isCompleteFormFilled =
    (isGeneralInfoFilled &&
      isLocationTimeFilled &&
      isEventChargesFilled &&
      isCoverImageFilled &&
      isCoverImageFilled) ||
    (!isEventChargesFilled && isFreeEvent);

  return (
    <CreateEventFormContext.Provider
      value={{
        isFreeEvent,
        eventFormData,
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

/**
 * - TODO: tags.map((tag) => tag.value).join(", "),
 */
