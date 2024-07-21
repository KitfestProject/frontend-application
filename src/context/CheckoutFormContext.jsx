import PropTypes from "prop-types";
import axiosClient from "@/axiosClient";
import useAuthStore from "@/store/UseAuthStore";
import { useSeatStore } from "@/store/UseSeatStore";
import { createContext, useEffect, useState, useMemo } from "react";

export const CheckoutFormContext = createContext();

export const CheckoutFormProvider = ({ children }) => {
  const { selectedSeats, eventId } = useSeatStore();
  const { user } = useAuthStore();
  const payStackPublicKey = import.meta.env.VITE_PAYSTACK_KEY;

  const [currentSelectedSeats, setCurrentSelectedSeats] = useState([]);

  const firstName = user?.name.split(" ")[0];
  const lastName = user?.name.split(" ")[1];
  const email = user?.email;

  const selectedTickets = useMemo(() => {
    return currentSelectedSeats.map((seat) => ({
      selectedSeats: seat.seatId,
      discount: seat.discount,
      ticketType: seat.position,
      ticketName: seat.seatNumber,
      amount: seat.price,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    }));
  }, [currentSelectedSeats, user]);

  const initialCheckoutForm = {
    // Personal Information
    firstName: user ? firstName : "",
    lastName: user ? lastName : "",
    email: user ? email : "",
    phoneNumber: "",
    updateMe: false,
    agree: false,

    // Event Information
    eventId: eventId,
    amount: 0,

    // Payment Information
    paymentReference: "",

    // Tickets
    tickets: selectedTickets,
  };

  const [checkoutFormData, setCheckoutFormData] = useState(initialCheckoutForm);

  useEffect(() => {
    setCurrentSelectedSeats(selectedSeats);
  }, [selectedSeats]);

  useEffect(() => {
    setCheckoutFormData((prevData) => ({
      ...prevData,
      tickets: selectedTickets,
    }));
  }, [currentSelectedSeats, selectedTickets]);

  const updateTicket = (index, updates) => {
    setCheckoutFormData((prevData) => {
      const updatedTickets = prevData.tickets.map((ticket, i) =>
        i === index ? { ...ticket, ...updates } : ticket
      );
      return { ...prevData, tickets: updatedTickets };
    });
  };

  return (
    <CheckoutFormContext.Provider
      value={{
        checkoutFormData,
        setCheckoutFormData,
        payStackPublicKey,
        initialCheckoutForm,
        updateTicket,
      }}
    >
      {children}
    </CheckoutFormContext.Provider>
  );
};

CheckoutFormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
