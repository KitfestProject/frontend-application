import React, { useContext, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { FaTicket } from "react-icons/fa6";
import { CheckoutFormContext } from "../../context/CheckoutFormContext";

const NewTicketComponent = ({
  ticketNumber,
  ticketIndex,
  ticket,
  tickets,
  setTickets,
}) => {
  const { checkoutFormData, setCheckoutFormData } =
    useContext(CheckoutFormContext);

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

  const handleRemoveTicket = (ticketIndex) => {
    console.log(ticketIndex);
    if (tickets.length > 1) {
      const updatedTickets = tickets.filter((_, idx) => idx !== ticketIndex);
      setTickets(updatedTickets);
      setCheckoutFormData({
        ...checkoutFormData,
        tickets: updatedTickets,
      });
    }
  };

  return (
    <div
      className={`mt-8 border border-dashed border-slate-200 dark:border-slate-700 p-3 rounded-md`}
    >
      <div className="flex justify-between items-center">
        <div className="mb-2">
          <h1 className="text-lg font-bold text-dark dark:text-white flex gap-3 items-center">
            <FaTicket className="text-primary" /> Ticket {ticketNumber}
          </h1>
        </div>

        {/* Remove Ticket Button */}
        {ticketIndex > 0 && (
          <button
            onClick={() => handleRemoveTicket(ticketIndex)}
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

        <div className="">
          <div className="flex items-center space-x-2 checkbox-container mb-2">
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
        </div>
      </div>
    </div>
  );
};

export default NewTicketComponent;
