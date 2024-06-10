import PropTypes from "prop-types";
import { createContext, useState } from "react";
import useAuthStore from "@/store/UseAuthStore";
import { ticketTypes } from "@/components/data/StaticData";

export const CheckoutFormContext = createContext();

export const CheckoutFormProvider = ({ children }) => {
  const { token, user } = useAuthStore();

  const firstName = user?.name.split(" ")[0];
  const lastName = user?.name.split(" ")[1];
  const email = user?.email;

  const [checkoutFormData, setCheckoutFormData] = useState({
    // Personal Information
    firstName: user ? firstName : "",
    lastName: user ? lastName : "",
    email: user ? email : "",
    phoneNumber: "",
    updateMe: false,
    agree: false,

    // Event Information
    eventId: null,
    selectedSeats: [],
    ticketType: "",
    amount: 0,

    // Payment Information
    cardNumber: null,
    cardName: null,
    cardExpiry: null,
    cardCVV: null,
    paymentType: "",

    // Tickets
    tickets: [
      {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      },
    ],
  });

  return (
    <CheckoutFormContext.Provider
      value={{ checkoutFormData, setCheckoutFormData }}
    >
      {children}
    </CheckoutFormContext.Provider>
  );
};

CheckoutFormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
