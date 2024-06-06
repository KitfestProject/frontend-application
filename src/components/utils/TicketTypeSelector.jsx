import React, { useState } from "react";
import SecondaryButton from "./SecondaryButton";
import { useNavigate } from "react-router-dom";

const TicketTypeSelector = () => {
  const [selectedTicketType, setSelectedTicketType] = useState(null);
  const navigate = useNavigate();

  const handleTicketTypeChange = (event) => {
    setSelectedTicketType(event.target.value);
  };

  return (
    <div className="bg-[#fbfafa] dark:bg-darkGray rounded-lg py-10 px-5">
      {/* Radio buttons for ticket types */}
      <div className="mb-5">
        <label className="block cursor-pointer">
          <div
            className={`w-full h-[150px] shadow-md rounded-lg flex justify-start items-center cursor-pointer ${
              selectedTicketType === "early_bird_ticket"
                ? "bg-[#fcf4f3] border border-secondary dark:border-white dark:bg-primary"
                : "bg-white dark:bg-dark"
            }`}
          >
            <div className="p-5 w-full flex flex-col gap-5">
              {/* Ticket Title */}
              <h3 className="text-lg font-bold text-gray dark:text-slate-100">
                Early Bird Ticket
              </h3>
              {/* Ticket Amount & Discount Badge */}
              <div className="flex items-center justify-between gap-2 dark:text-slate-100">
                <p className="text-lg font-bold">
                  KSH 2,000 / <span className="font-normal">Ticket</span>
                </p>
                <span className="bg-secondary text-white text-xs font-semiBold p-2 px-5 rounded-full">
                  10% Off
                </span>
              </div>
            </div>
            <input
              type="radio"
              value="early_bird_ticket"
              checked={selectedTicketType === "early_bird_ticket"}
              onChange={handleTicketTypeChange}
              className="hidden"
            />
          </div>
        </label>
      </div>

      {/* Repeat for other ticket types */}
      {/* Advance Ticket */}
      <div className="mb-5">
        <label className="block cursor-pointer">
          <div
            className={`w-full h-[150px] shadow-md rounded-md flex justify-start items-center cursor-pointer ${
              selectedTicketType === "advance_ticket"
                ? "bg-[#fcf4f3] border border-secondary dark:border-white dark:bg-primary"
                : "bg-white dark:bg-dark"
            }`}
          >
            <div className="p-5 w-full flex flex-col gap-5">
              <h3 className="text-lg font-bold text-gray dark:text-slate-100">
                Advance Ticket
              </h3>
              <div className="flex items-center justify-between gap-2 dark:text-slate-100">
                <p className="text-lg font-bold">
                  KSH 1,000 / <span className="font-normal">Ticket</span>
                </p>
                <span className="bg-secondary text-white text-xs font-semiBold p-2 px-5 rounded-full">
                  10% Off
                </span>
              </div>
            </div>
            <input
              type="radio"
              value="advance_ticket"
              checked={selectedTicketType === "advance_ticket"}
              onChange={handleTicketTypeChange}
              className="hidden"
            />
          </div>
        </label>
      </div>

      {/* Gate Ticket */}
      <div className="mb-5">
        <label className="block cursor-pointer">
          <div
            className={`w-full h-[150px] shadow-md rounded-md flex justify-start items-center cursor-pointer ${
              selectedTicketType === "gate_ticket"
                ? "bg-[#fcf4f3] border border-secondary dark:border-white dark:bg-primary"
                : "bg-white dark:bg-dark"
            }`}
          >
            <div className="p-5 w-full flex flex-col gap-5">
              <h3 className="text-lg font-bold text-gray dark:text-slate-100">
                Gate Ticket
              </h3>
              <div className="flex items-center justify-between gap-2 dark:text-slate-100">
                <p className="text-lg font-bold">
                  KSH 2,500 / <span className="font-normal">Ticket</span>
                </p>
                <span className="bg-secondary text-white text-xs font-semiBold p-2 px-5 rounded-full">
                  10% Off
                </span>
              </div>
            </div>
            <input
              type="radio"
              value="gate_ticket"
              checked={selectedTicketType === "gate_ticket"}
              onChange={handleTicketTypeChange}
              className="hidden"
            />
          </div>
        </label>
      </div>

      {/* Button to proceed to payment */}
      <SecondaryButton
        handleClick={() => navigate("/checkout")}
        title={"Proceed to payment"}
        classes={"w-full py-3"}
      />
    </div>
  );
};

export default TicketTypeSelector;
