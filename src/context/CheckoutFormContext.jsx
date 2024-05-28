import React, { createContext, useState } from "react";

export const CheckoutFormContext = createContext();

export const CheckoutFormProvider = ({ children }) => {
  const [checkoutFormData, setCheckoutFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    updateMe: false,
    agree: false,

    // Payment Information
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCVV: "",
  });

  return (
    <CheckoutFormContext.Provider
      value={{ checkoutFormData, setCheckoutFormData }}
    >
      {children}
    </CheckoutFormContext.Provider>
  );
};
