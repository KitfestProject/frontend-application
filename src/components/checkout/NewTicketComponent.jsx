import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { ModalAlert } from "@/components";
import { FaTicket, FaTriangleExclamation } from "react-icons/fa6";
import { useSeatStore } from "@/store/UseSeatStore";
import { CheckoutFormContext } from "@/context/CheckoutFormContext";
import useCurrencyConverter from "@/hooks/useCurrencyConverter";

const NewTicketComponent = ({ ticketIndex, ticket, tickets, setTickets }) => {
  const [showModal, setShowModal] = useState(false);
  const { removeSelectedSeat } = useSeatStore();
  const { checkoutFormData, setCheckoutFormData } =
    useContext(CheckoutFormContext);
  const { formatCurrency } = useCurrencyConverter();

  const handleTicketChange = (ticketIndex, field, value) => {
    const updatedTickets = tickets.map((ticket, idx) =>
      idx === ticketIndex ? { ...ticket, [field]: value } : ticket
    );

    setTickets(updatedTickets);
    setCheckoutFormData({
      ...checkoutFormData,
      tickets: updatedTickets,
    });
  };

  const handleRemoveTicket = (ticketId) => {
    toggleShowModel();
    removeSelectedSeat(ticketId);
  };

  const toggleShowModel = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div
        className={`mt-8 border border-dashed border-primary/50 dark:border-gray/30 p-3 rounded-md`}
      >
        <div className="flex justify-between items-center">
          <div className="mb-2">
            <h1 className="text-lg font-bold text-dark dark:text-white flex gap-3 items-center">
              <FaTicket className="text-primary" /> {ticket.ticketName} Ticket
            </h1>
          </div>

          {/* Remove Ticket Button */}
          {ticketIndex > 0 && (
            <button
              onClick={toggleShowModel}
              className="text-lg text-red-500 dark:text-red-500 p-3 hover:bg-red-100 dark:hover:bg-red-100/50 rounded-full flex gap-2 items-center"
            >
              <BiTrash />
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5">
          {/* First Name Input */}
          <div className="">
            <label
              htmlFor="event-title"
              className="text-dark dark:text-slate-100 font-bold text-sm"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <small className="block text-gray mb-1">
              Provide ticket holder first name
            </small>

            <input
              type="text"
              name="firstName"
              value={ticket.firstName}
              onChange={(e) =>
                handleTicketChange(ticketIndex, "firstName", e.target.value)
              }
              className="w-full text-primary bg-[#F5F5F5] dark:bg-gray p-2 rounded-md outline-none text-[15px]"
            />
          </div>

          {/* Last Name Input */}
          <div className="">
            <label
              htmlFor="event-title"
              className="text-dark dark:text-slate-100 font-bold text-sm"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <small className="block text-gray mb-1">
              Provide ticket holder last name
            </small>

            <input
              type="text"
              name="lastName"
              value={ticket.lastName}
              onChange={(e) =>
                handleTicketChange(ticketIndex, "lastName", e.target.value)
              }
              className="w-full text-primary bg-[#F5F5F5] dark:bg-gray p-2 rounded-md outline-none text-[15px]"
            />
          </div>

          {/* Email Input */}
          <div className="">
            <label
              htmlFor="event-title"
              className="text-dark dark:text-slate-100 font-bold text-sm"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <small className="block text-gray mb-1">
              Provide ticket holder email
            </small>

            <input
              type="email"
              name="email"
              value={ticket.email}
              onChange={(e) =>
                handleTicketChange(ticketIndex, "email", e.target.value)
              }
              className="w-full text-primary bg-[#F5F5F5] dark:bg-gray p-2 rounded-md outline-none text-[15px]"
            />
          </div>

          {/* Phone Number Input */}
          <div className="">
            <label
              htmlFor="event-title"
              className="text-dark dark:text-slate-100 font-bold text-sm"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <small className="block text-gray mb-1">
              Provide ticket holder phone number
            </small>

            <input
              type="tel"
              name="phoneNumber"
              value={ticket.phoneNumber}
              onChange={(e) =>
                handleTicketChange(ticketIndex, "phoneNumber", e.target.value)
              }
              className="w-full text-primary bg-[#F5F5F5] dark:bg-gray p-2 rounded-md outline-none text-[15px]"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-center w-full mt-5 bg-primary/10 p-3">
          <div className="flex items-center space-x-2 checkbox-container">
            <label
              htmlFor={`sameContact_${ticketIndex}`}
              className="dark:text-white text-sm"
            >
              <input
                type="checkbox"
                id={`sameContact_${ticketIndex}`}
                name={`sameContact_${ticketIndex}`}
                className="w-5 h-5 "
              />
              <span className="checkmark"></span> Same contact information
            </label>
          </div>

          {/* Amount */}
          <div className="flex items-center space-x-2">
            <p className="text-sm text-gray dark:text-white">Amount</p>
            <p className="text-sm text-primary font-semibold dark:text-white">
              {formatCurrency(ticket.amount)}
            </p>
          </div>

          {/* Ticket Number */}
          <div className="flex items-center space-x-2">
            <p className="text-sm text-gray dark:text-white">Ticket Number</p>
            <p className="text-sm text-primary font-semibold dark:text-white">
              KITFT-{ticket.selectedSeats}
            </p>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <ModalAlert onClose={toggleShowModel}>
            <div className="p-5">
              <div className="flex justify-center items-center p-3 rounded">
                <FaTriangleExclamation className="text-red-500 text-6xl" />
              </div>

              <h1 className="text-lg font-bold text-dark dark:text-white text-center">
                Are you sure you want to remove this ticket?
              </h1>

              <p className="text-base text-gray dark:text-gray mt-2 text-center">
                You are about to remove this ticket from your order. You will
                have to reselect a new seat from the seat map.
              </p>

              <div className="flex justify-end mt-5">
                <button
                  onClick={toggleShowModel}
                  className="text-lg text-gray-500 dark:text-gray-500 p-3 hover:bg-gray-100 dark:hover:bg-gray-100/50 rounded-full"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleRemoveTicket(ticket.selectedSeats)}
                  className="text-lg text-red-500 dark:text-red-500 p-3 hover:bg-red-100 dark:hover:bg-red-100/50 rounded-md"
                >
                  Remove
                </button>
              </div>
            </div>
          </ModalAlert>
        )}
      </div>
    </>
  );
};

NewTicketComponent.propTypes = {
  ticketNumber: PropTypes.number.isRequired,
  ticketIndex: PropTypes.number.isRequired,
  ticket: PropTypes.object.isRequired,
  tickets: PropTypes.array.isRequired,
  setTickets: PropTypes.func.isRequired,
};

export default NewTicketComponent;
