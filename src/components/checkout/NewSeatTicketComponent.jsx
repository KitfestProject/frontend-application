import { useContext, useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { ModalAlert } from "@/components";
import { FaTicket, FaTriangleExclamation } from "react-icons/fa6";
import { useSeatStore } from "@/store/UseSeatStore";
import { CheckoutFormContext } from "@/context/CheckoutFormContext";
import useCurrencyConverter from "@/hooks/useCurrencyConverter";

const NewSeatTicketComponent = ({ seatIndex, seat }) => {
  const [showModal, setShowModal] = useState(false);
  const { removeSelectedSeat } = useSeatStore();
  const { checkoutFormData, updateSeatTicket } =
    useContext(CheckoutFormContext);
  const { formatCurrency } = useCurrencyConverter();

  const handleTicketChange = (field, value) => {
    updateSeatTicket(seatIndex, { [field]: value });
  };

  const handleRemoveTicket = (ticketId) => {
    toggleShowModel();
    removeSelectedSeat(ticketId);
  };

  const toggleShowModel = () => {
    setShowModal(!showModal);
  };

  const handleContactInformationChange = (ev) => {
    const isChecked = ev.target.checked;
    if (isChecked) {
      handleTicketChange("firstName", checkoutFormData.firstName || "");
      handleTicketChange("lastName", checkoutFormData.lastName || "");
      handleTicketChange("email", checkoutFormData.email || "");
      handleTicketChange("phoneNumber", checkoutFormData.phoneNumber || "");
    } else {
      handleTicketChange("firstName", "");
      handleTicketChange("lastName", "");
      handleTicketChange("email", "");
      handleTicketChange("phoneNumber", "");
    }
  };

  return (
    <>
      <div
        className={`mt-8 border border-dashed border-primary/50 dark:border-gray/30 p-3 rounded-md`}
      >
        <div className="flex justify-between items-center">
          <div className="mb-2">
            <h1 className="text-lg font-bold text-dark dark:text-white flex gap-3 items-center">
              <FaTicket className="text-primary" /> {seat.seatNumber} Ticket
            </h1>
          </div>

          {/* Remove Ticket Button */}
          {seatIndex > 0 && (
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
              htmlFor={`firstName-${seatIndex}`}
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
              value={seat.firstName}
              onChange={(e) => handleTicketChange("firstName", e.target.value)}
              className="w-full text-primary bg-[#F5F5F5] dark:bg-gray p-2 rounded-md outline-none text-[15px]"
            />
          </div>

          {/* Last Name Input */}
          <div className="">
            <label
              htmlFor={`lastName-${seatIndex}`}
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
              value={seat.lastName}
              onChange={(e) => handleTicketChange("lastName", e.target.value)}
              className="w-full text-primary bg-[#F5F5F5] dark:bg-gray p-2 rounded-md outline-none text-[15px]"
            />
          </div>

          {/* Email Input */}
          <div className="">
            <label
              htmlFor={`email-${seatIndex}`}
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
              value={seat.email}
              onChange={(e) => handleTicketChange("email", e.target.value)}
              className="w-full text-primary bg-[#F5F5F5] dark:bg-gray p-2 rounded-md outline-none text-[15px]"
            />
          </div>

          {/* Phone Number Input */}
          <div className="">
            <label
              htmlFor={`phoneNumber-${seatIndex}`}
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
              value={seat.phoneNumber}
              onChange={(e) =>
                handleTicketChange("phoneNumber", e.target.value)
              }
              className="w-full text-primary bg-[#F5F5F5] dark:bg-gray p-2 rounded-md outline-none text-[15px]"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-center w-full mt-5 bg-primary/10 p-3">
          <div className="flex items-center space-x-2 checkbox-container">
            <label
              htmlFor={`sameContact_${seatIndex}`}
              className="dark:text-white text-sm"
            >
              <input
                type="checkbox"
                id={`sameContact_${seatIndex}`}
                name={`sameContact_${seatIndex}`}
                className="w-5 h-5"
                onChange={handleContactInformationChange}
              />
              <span className="checkmark"></span> Same contact information
            </label>
          </div>

          {/* Amount */}
          <div className="flex items-center space-x-2">
            <p className="text-sm text-gray dark:text-white">Amount</p>
            <p className="text-sm text-primary font-semibold dark:text-white">
              {formatCurrency(seat.amount)}
            </p>
          </div>

          {/* Ticket Number */}
          <div className="flex items-center space-x-2">
            <p className="text-sm text-gray dark:text-white">Ticket Number</p>
            <p className="text-sm text-primary font-semibold dark:text-white">
              {seat.seatNumber ?? "N/A"}
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

              <p className="text-base text-gray dark:text-slate-100 mt-2 text-center">
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
                  onClick={() => handleRemoveTicket(seat.id)}
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

export default NewSeatTicketComponent;
