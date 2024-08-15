import PropTypes from "prop-types";
import axiosClient from "@/axiosClient";
import useAuthStore from "@/store/UseAuthStore";
import { useSeatStore } from "@/store/UseSeatStore";
import { createContext, useEffect, useState, useMemo } from "react";

export const CheckoutFormContext = createContext();

export const CheckoutFormProvider = ({ children }) => {
  const { selectedSeats, selectedTickets, eventId } = useSeatStore();
  const { user } = useAuthStore();
  const payStackPublicKey = import.meta.env.VITE_PAYSTACK_KEY;

  const [currentSelectedSeats, setCurrentSelectedSeats] = useState([]);
  const [currentSelectedTickets, setCurrentSelectedTickets] = useState([]);

  const firstName = user?.name.split(" ")[0];
  const lastName = user?.name.split(" ")[1];
  const email = user?.email;

  // Handle selected tickets
  const userSelectedTickets = useMemo(() => {
    return currentSelectedTickets.map((ticket) => ({
      id: ticket.id,
      discount: ticket.discount,
      ticketType: ticket.type,
      amount: ticket.discount,
      quantity: ticket.quantity,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    }));
  }, [currentSelectedTickets, user]);

  // Handle selected seats
  const userSelectedSeats = useMemo(() => {
    return currentSelectedSeats.map((seat) => ({
      id: seat._id,
      seatNumber: seat.SN,
      discount: seat.discount,
      sectionAbr: seat.position,
      seatNumber: seat.seatNumber,
      amount: seat.price,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    }));
  }, [currentSelectedSeats, user]);

  const initialCheckoutForm = {
    // Personal Information
    token: user?.token,
    firstName: user ? firstName : "",
    lastName: user ? lastName : "",
    email: user ? email : "",
    phoneNumber: "",
    updateMe: false,
    agree: false,

    // Event Information
    eventId: eventId,
    amount: 0,
    discount: 0,

    // Payment Information
    paymentReference: "",
    tx_processor: null,

    // Tickets
    tickets: currentSelectedTickets,
    seats: currentSelectedSeats,
  };

  const [checkoutFormData, setCheckoutFormData] = useState(initialCheckoutForm);

  useEffect(() => {
    setCurrentSelectedSeats(selectedSeats);
    setCurrentSelectedTickets(selectedTickets);
  }, [selectedSeats, selectedTickets]);

  useEffect(() => {
    setCheckoutFormData((prevData) => ({
      ...prevData,
      tickets: userSelectedTickets,
      seats: userSelectedSeats,
    }));
  }, [
    currentSelectedSeats,
    userSelectedTickets,
    userSelectedSeats,
    currentSelectedTickets,
  ]);

  const updateTicket = (index, updates) => {
    setCheckoutFormData((prevData) => {
      const updatedTickets = prevData.tickets.map((ticket, i) =>
        i === index ? { ...ticket, ...updates } : ticket
      );
      return { ...prevData, tickets: updatedTickets };
    });
  };

  const updateSeatTicket = (index, updates) => {
    setCheckoutFormData((prevData) => {
      const updatedSeatTickets = prevData.seats.map((seats, i) =>
        i === index ? { ...seats, ...updates } : seats
      );
      return { ...prevData, seats: updatedSeatTickets };
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
        updateSeatTicket,
      }}
    >
      {children}
    </CheckoutFormContext.Provider>
  );
};

CheckoutFormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
