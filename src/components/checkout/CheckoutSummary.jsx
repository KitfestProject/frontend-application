import { useContext, useEffect, useState } from "react";
import { FaCreditCard } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { CheckoutFormContext } from "@/context/CheckoutFormContext";

const CheckoutSummary = () => {
  const { checkoutFormData } = useContext(CheckoutFormContext);
  const [userTickets, setUserTickets] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setUserTickets(checkoutFormData.tickets);
    // console.log(userTickets);
  }, [checkoutFormData]);

  return (
    <div className="w-[25%] mt-[50px]">
      <div className="bg-[#FBFAFA] dark:bg-gray p-5 rounded-md py-10 border border-slate-200 dark:border-gray sticky top-[120px]">
        <h1 className="text-md text-dark dark:text-white font-bold">
          Checkout Summary
        </h1>

        {/* Ticket Price */}
        {userTickets &&
          userTickets.map((ticket, index) => (
            <div
              key={index}
              className="flex items-center justify-between mt-5 border-b border-[#E3E0DF] pb-3 dark:border-[#3a3a3a]"
            >
              <p className="text-sm text-gray dark:text-white">
                {ticket.ticketName}
              </p>
              <p className="text-sm text-dark font-bold dark:text-white">
                Ksh {ticket.amount}
              </p>
            </div>
          ))}

        {/* Service Fee */}
        <div className="flex items-center justify-between mt-5">
          <p className="text-sm text-gray dark:text-white">Subtotal</p>
          <p className="text-sm text-dark font-bold dark:text-white">Ksh 500</p>
        </div>

        {/* Discount */}
        <div className="flex items-center justify-between mt-3 border-b border-[#E3E0DF] pb-3 dark:border-[#3a3a3a]">
          <p className="text-sm text-gray dark:text-white">
            Discount{" "}
            <span className="bg-secondary px-2 py-1 text-white text-xs rounded-full">
              10%
            </span>
          </p>
          <p className="text-sm text-dark font-bold dark:text-white">Ksh 50</p>
        </div>

        {/* Total */}
        <div className="flex items-center justify-between mt-5 border-b border-[#E3E0DF] pb-3 dark:border-[#3a3a3a]">
          <p className="text-sm text-gray dark:text-white font-bold">Total</p>
          <p className="text-sm text-dark font-bold dark:text-white">Ksh 550</p>
        </div>

        {/* Payment Method */}
        <div className="mt-5">
          <h1 className="text-md text-dark dark:text-white font-bold">
            Payment Method
          </h1>

          <div className="flex items-center gap-5 mt-5">
            <div className="p-3 rounded-md bg-[#fcf4f3]">
              <FaCreditCard className="text-xl text-primary" />
            </div>
            <p className="text-sm text-gray dark:text-white">Credit Card</p>
          </div>
        </div>

        {/* Payment Button */}
        <button
          onClick={() => navigate("/success-purchase")}
          className="w-full mt-5 bg-primary text-white py-3 rounded-md"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
