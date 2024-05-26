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
    eventDate: "",
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
  });

  return (
    <CreateEventFormContext.Provider
      value={{ eventFormData, setEventFormData }}
    >
      {children}
    </CreateEventFormContext.Provider>
  );
};

/**
 * - TODO: tags.map((tag) => tag.value).join(", "),
 */
