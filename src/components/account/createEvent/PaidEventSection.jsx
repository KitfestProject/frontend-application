import React, { useContext, useState, useEffect } from "react";
import { BiPlus, BiTrash } from "react-icons/bi";
import TicketTabButton from "./TicketTabButton";
import { ticketTypes } from "../../data/StaticData";
import CustomDateInput from "../../utils/CustomDateInput";
import CustomTimeInput from "../../utils/CustomTimeInput";
import { CreateEventFormContext } from "../../../context/CreateEventFormContext";

const PaidEventSection = () => {
  const { eventFormData, setEventFormData } = useContext(
    CreateEventFormContext
  );

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTickets(eventFormData.tickets || []);
  }, [eventFormData]);

  const handleAddTicket = () => {
    const newTicket = {
      ticketType: "earlyBird",
      ticketPrice: "",
      ticketDiscountPrice: "",
      ticketQuantity: "",
      ticketDescription: "",
      ticketStartDate: new Date(),
      ticketEndDate: new Date(),
      ticketStartTime: "",
      ticketEndTime: "",
    };

    const updatedTickets = [...tickets, newTicket];
    setTickets(updatedTickets);
    setEventFormData({
      ...eventFormData,
      tickets: updatedTickets,
    });
  };

  const handleTicketChange = (index, field, value) => {
    const updatedTickets = tickets.map((ticket, idx) =>
      idx === index ? { ...ticket, [field]: value } : ticket
    );

    setTickets(updatedTickets);
    setEventFormData({
      ...eventFormData,
      tickets: updatedTickets,
    });
  };

  const handleRemoveTicket = (index) => {
    if (tickets.length > 1) {
      const updatedTickets = tickets.filter((_, idx) => idx !== index);
      setTickets(updatedTickets);
      setEventFormData({
        ...eventFormData,
        tickets: updatedTickets,
      });
    }
  };

  return (
    <div className="mt-5">
      <div className="border-b border-slate-200 dark:border-slate-700 pb-3 flex justify-between items-center">
        <div>
          <label
            htmlFor="event-title"
            className="text-dark dark:text-slate-100 font-bold text-sm"
          >
            Ticket Price <span className="text-red-500">*</span>
          </label>
          <small className="block text-gray mb-1">
            Set the price for the event
          </small>
        </div>

        {/* Add Ticket Button */}
        <button
          onClick={handleAddTicket}
          className="text-sm text-slate-100 bg-primary dark:bg-green-200 px-3 py-2 rounded-md flex gap-2 items-center hover:bg-primary/50 dark:hover:bg-green-300"
        >
          <BiPlus /> <span>Add Ticket</span>
        </button>
      </div>

      {
        // Loop through the tickets array and render the ticket form
        tickets.map((ticket, index) => {
          const borderBottomClass =
            tickets.length - 1 === index
              ? ""
              : "border-b border-dashed border-slate-200 dark:border-slate-700";
          return (
            <div key={index} className={`mt-5 ${borderBottomClass} pb-3`}>
              <div className="flex justify-end items-center">
                {/* Remove Ticket Button */}
                {index > 0 && (
                  <button
                    onClick={() => handleRemoveTicket(index)}
                    className="text-xs text-red-500 dark:text-red-500 bg-red-100 dark:bg-red-200 px-3 py-1 rounded-md flex gap-2 items-center hover:bg-red-200 dark:hover:bg-red-300"
                  >
                    <BiTrash /> Remove
                  </button>
                )}
              </div>

              <div className="flex gap-2 flex-wrap mb-5">
                {ticketTypes.map((type, idx) => (
                  <TicketTabButton
                    key={idx}
                    ticket={type}
                    handleClick={() =>
                      handleTicketChange(index, "ticketType", type.type)
                    }
                    selected={ticket.ticketType}
                  />
                ))}
              </div>

              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="">
                  <label
                    htmlFor="event-title"
                    className="text-dark dark:text-slate-100 font-bold text-sm"
                  >
                    Quantity <span className="text-red-500">*</span>
                  </label>
                  <small className="block text-gray mb-1">
                    Number of tickets available for this event
                  </small>

                  <input
                    type="number"
                    name="ticketQuantity"
                    value={ticket.ticketQuantity}
                    onChange={(e) =>
                      handleTicketChange(
                        index,
                        "ticketQuantity",
                        e.target.value
                      )
                    }
                    className="w-full text-primary bg-[#F5F5F5] dark:bg-gray p-2 rounded-md outline-none text-[15px]"
                  />
                </div>

                <div className="">
                  <label
                    htmlFor="event-title"
                    className="text-dark dark:text-slate-100 font-bold text-sm"
                  >
                    Price (Ksh.) <span className="text-red-500">*</span>
                  </label>
                  <small className="block text-gray mb-1">
                    Set the price for the event
                  </small>

                  <input
                    type="number"
                    name="ticketPrice"
                    value={ticket.ticketPrice}
                    onChange={(e) =>
                      handleTicketChange(index, "ticketPrice", e.target.value)
                    }
                    className="w-full text-primary bg-[#F5F5F5] dark:bg-gray p-2 rounded-md outline-none text-[15px]"
                  />
                </div>

                <div className="">
                  <label
                    htmlFor="event-title"
                    className="text-dark dark:text-slate-100 font-bold text-sm"
                  >
                    Discount (Ksh.) <span className="text-red-500">*</span>
                  </label>
                  <small className="block text-gray mb-1">
                    Set the discounted price for the event
                  </small>

                  <input
                    type="number"
                    name="ticketDiscountPrice"
                    value={ticket.ticketDiscountPrice}
                    onChange={(e) =>
                      handleTicketChange(
                        index,
                        "ticketDiscountPrice",
                        e.target.value
                      )
                    }
                    className="w-full text-primary bg-[#F5F5F5] dark:bg-gray p-2 rounded-md outline-none text-[15px]"
                  />
                </div>
              </div>

              <div className="mt-5 grid md:grid-cols-1 lg:grid-cols-2 gap-5">
                <CustomDateInput
                  title="Start Date"
                  info="Set the start date for the ticket"
                  date={ticket.ticketStartDate}
                  handleChange={(date) =>
                    handleTicketChange(index, "ticketStartDate", date)
                  }
                />

                <CustomDateInput
                  title="End Date"
                  info="Set the end date for the ticket"
                  date={ticket.ticketEndDate}
                  handleChange={(date) =>
                    handleTicketChange(index, "ticketEndDate", date)
                  }
                />
              </div>

              <div className="mt-5 grid md:grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
                <CustomTimeInput
                  title="Start Time"
                  info="Set the start time for the ticket"
                  time={ticket.ticketStartTime}
                  handleChange={(time) =>
                    handleTicketChange(index, "ticketStartTime", time)
                  }
                />

                <CustomTimeInput
                  title="End Time"
                  info="Set the end time for the ticket"
                  time={ticket.ticketEndTime}
                  handleChange={(time) =>
                    handleTicketChange(index, "ticketEndTime", time)
                  }
                />
              </div>
            </div>
          );
        })
      }

      {/* Debugging output */}
      {/* <div className="text-xs text-slate-400">
        <pre>{JSON.stringify(eventFormData.tickets, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default PaidEventSection;
