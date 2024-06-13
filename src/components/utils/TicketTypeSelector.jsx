import { useState } from "react";
import SecondaryButton from "./SecondaryButton";
import { useNavigate } from "react-router-dom";

const TicketTypeSelector = ({ tickets }) => {
  const [selectedTicketType, setSelectedTicketType] = useState(null);
  const navigate = useNavigate();

  const handleTicketTypeChange = (ticketId) => {
    setSelectedTicketType(ticketId);
  };

  return (
    <div className="bg-[#fbfafa] dark:bg-darkGray rounded-lg py-10 px-5">
      {/* Ticket Type Selector */}
      {tickets.map((ticket) => (
        <TicketComponent
          key={ticket.id}
          ticketId={ticket.id}
          title={ticket.title}
          amount={ticket.price}
          discount={ticket.discount}
          selectedTicketType={selectedTicketType}
          handleTicketTypeChange={handleTicketTypeChange}
        />
      ))}

      {/* Button to proceed to payment */}
      <SecondaryButton
        handleClick={() => navigate("/checkout")}
        title={"Proceed to payment"}
        classes={"w-full py-3"}
      />
    </div>
  );
};

const TicketComponent = ({
  title,
  amount,
  discount,
  ticketId,
  selectedTicketType,
  handleTicketTypeChange,
}) => {
  return (
    <div className="mb-5">
      <label className="block cursor-pointer">
        <div
          className={`w-full h-[150px] shadow-md rounded-lg flex justify-start items-center cursor-pointer ${
            selectedTicketType === ticketId
              ? "bg-[#fcf4f3] border border-secondary dark:border-gray dark:bg-primary"
              : "bg-white dark:bg-dark"
          }`}
        >
          <div className="p-5 w-full flex flex-col gap-5">
            {/* Ticket Title */}
            <h3 className="text-2xl font-semibold text-gray dark:text-slate-300">
              {title}
            </h3>

            {/* Ticket Amount & Discount Badge */}
            <div className="flex items-center justify-between gap-2 dark:text-slate-100">
              <p className="text-lg font-bold">
                KSH {amount} / <span className="font-normal">Ticket</span>
              </p>
              <span className="bg-secondary text-white text-xs font-semiBold p-2 px-5 rounded-full">
                {discount}% Off
              </span>
            </div>
          </div>
          <input
            type="radio"
            name="ticketType"
            value={ticketId}
            checked={selectedTicketType === ticketId}
            onChange={() => handleTicketTypeChange(ticketId)}
            className="hidden"
          />
        </div>
      </label>
    </div>
  );
};

export default TicketTypeSelector;
