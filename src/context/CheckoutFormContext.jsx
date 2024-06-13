import PropTypes from "prop-types";
import useAuthStore from "@/store/UseAuthStore";
import { useSeatStore } from "@/store/UseSeatStore";
import { createContext, useEffect, useState, useMemo } from "react";

export const CheckoutFormContext = createContext();

export const CheckoutFormProvider = ({ children }) => {
  const { selectedSeats } = useSeatStore();
  const { user } = useAuthStore();

  const [currentSelectedSeats, setCurrentSelectedSeats] = useState([]);

  const firstName = user?.name.split(" ")[0];
  const lastName = user?.name.split(" ")[1];
  const email = user?.email;

  const selectedTickets = useMemo(() => {
    return currentSelectedSeats.map((seat) => ({
      selectedSeats: seat.seatId,
      discount: seat.ticket.discount,
      ticketType: seat.ticket.type,
      ticketName: seat.ticket.title,
      amount: seat.ticket.price,
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      phoneNumber: "",
    }));
  }, [currentSelectedSeats, user]);

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
    amount: 0,

    // Payment Information
    cardNumber: null,
    cardName: null,
    cardExpiry: null,
    cardCVV: null,
    paymentType: "",

    // Tickets
    tickets: selectedTickets,
  });

  useEffect(() => {
    setCurrentSelectedSeats(selectedSeats);
  }, [selectedSeats]);

  useEffect(() => {
    setCheckoutFormData((prevData) => ({
      ...prevData,
      tickets: selectedTickets,
    }));
  }, [currentSelectedSeats, selectedTickets]);

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
