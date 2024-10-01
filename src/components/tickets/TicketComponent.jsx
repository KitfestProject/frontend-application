import useCurrencyConverter from "@/hooks/useCurrencyConverter";
import { useSeatStore } from "@/store/UseSeatStore";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { useState, useEffect } from "react";

const TicketComponent = ({
  title,
  ticket,
  amount,
  discount,
  ticketId,
  selectedTicketType,
  handleTicketTypeChange,
}) => {
  const { formatCurrency } = useCurrencyConverter();
  const ticketQuantity = Number(ticket.ticket_quantity);
  const [ticketsSelected, setTicketsSelected] = useState([]);
  const { selectedTickets, removeSelectedTicket } = useSeatStore();

  useEffect(() => {
    setTicketsSelected(selectedTickets);
  }, [selectedTickets]);

  const getTicketDetails = () => {
    if (ticketQuantity > 0) {
      handleTicketTypeChange(ticket);
    }
  };

  const discountPercentage = (discount, amount) => {
    if (amount === 0) {
      return 0;
    }
    const discountAmount = amount - discount;
    const percentage = (discountAmount / amount) * 100;
    return Math.round(percentage);
  };

  const newDiscount = discountPercentage(discount, amount);

  // Check if the current ticket is selected
  const isSelected =
    selectedTicketType?._id === ticketId ||
    ticketsSelected.some((t) => t.id === ticketId);

  return (
    <div className="mb-5">
      <label className="block cursor-pointer">
        <div
          className={`w-full h-[150px] shadow-md rounded-lg flex justify-start items-center cursor-pointer ${
            ticketQuantity === 0
              ? "bg-slate-200 dark:bg-slate-700 cursor-not-allowed"
              : isSelected
              ? "bg-[#fcf4f3] border border-secondary dark:border-gray dark:bg-primary"
              : "bg-white dark:bg-dark"
          } relative`}
          style={{
            filter: ticketQuantity === 0 ? "grayscale(100%)" : "none",
          }}
          onClick={getTicketDetails}
        >
          <div className="p-5 w-full flex flex-col gap-5">
            <h3 className="text-2xl font-semibold text-gray dark:text-slate-300 capitalize">
              {title}
            </h3>
            {ticketQuantity === 0 ? (
              <p className="text-lg text-gray dark:text-gray">
                Ticket Sold Out!!!
              </p>
            ) : (
              <div className="flex items-center justify-between gap-2 dark:text-slate-100">
                <p className="text-lg font-bold">
                  {formatCurrency(discount)} /{" "}
                  <span className="font-normal text-gray dark:text-gray">
                    Ticket
                  </span>
                </p>
                <span className="bg-secondary text-white text-xs font-semibold p-2 px-5 rounded-full">
                  {newDiscount === 0 ? "100" : newDiscount}% Off
                </span>
              </div>
            )}
          </div>
          <input
            type="radio"
            name="ticketType"
            value={ticketId}
            checked={selectedTicketType?._id === ticketId}
            onChange={() => handleTicketTypeChange(ticket)}
            className="hidden"
          />

          {/* Remove Selected */}
          {isSelected ? (
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the ticket selection when clicking the remove button
                removeSelectedTicket(ticketId); // Use ticketId to remove the correct ticket
              }}
              className="absolute top-2 right-2"
            >
              <MdOutlineRemoveCircle className="text-secondary dark:text-gray" />
            </button>
          ) : null}
        </div>
      </label>
    </div>
  );
};

export default TicketComponent;
