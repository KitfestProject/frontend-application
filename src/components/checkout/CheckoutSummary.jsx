import { useContext, useEffect, useState } from "react";
import { FaCreditCard } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { CheckoutFormContext } from "@/context/CheckoutFormContext";
import useCurrencyConverter from "@/hooks/useCurrencyConverter";

const CheckoutSummary = () => {
  const { checkoutFormData } = useContext(CheckoutFormContext);
  const [userTickets, setUserTickets] = useState([]);
  const [totalTickets, setTotalTickets] = useState(0);
  const { formatCurrency } = useCurrencyConverter();
  const navigate = useNavigate();

  useEffect(() => {
    const tickets = checkoutFormData.tickets || [];
    setUserTickets(tickets);
    setTotalTickets(tickets.length);
  }, [checkoutFormData]);

  const totalSum = checkoutFormData.tickets.reduce((acc, ticket) => {
    const ticketAmount = parseFloat(ticket.amount) || 0;
    return acc + ticketAmount;
  }, 0);

  const totalDiscount = checkoutFormData.tickets.reduce((acc, ticket) => {
    const ticketDiscount = parseFloat(ticket.discount) || 0;
    const ticketAmount = parseFloat(ticket.amount) || 0;
    return acc + ticketAmount * (ticketDiscount / 100);
  }, 0);

  // Calculate VAT
  const calculateVATotal = (totalSum, totalDiscount) => {
    const vat = "16%";
    const vatAmount = (totalSum - totalDiscount) * (parseInt(vat) / 100);
    return vatAmount;
  };

  return (
    <div className="bg-[#FBFAFA] dark:bg-gray p-5 md:rounded-md py-10 border border-slate-200 dark:border-gray sticky top-[120px]">
      <h1 className="text-md text-dark dark:text-white font-bold">
        Checkout Summary
      </h1>

      {/* Ticket Price */}
      <div className="flex items-center justify-between mt-5 border-b border-[#E3E0DF] pb-3 dark:border-[#3a3a3a]">
        <p className="text-sm text-gray dark:text-white">{totalTickets}X</p>
        <p className="text-sm text-dark font-bold dark:text-white">
          {formatCurrency(totalSum)}
        </p>
      </div>

      {/* Service Fee */}
      <div className="flex items-center justify-between mt-5">
        <p className="text-sm text-gray dark:text-white">Subtotal</p>
        <p className="text-sm text-gray font-bold dark:text-white">
          {formatCurrency(
            totalSum - totalDiscount - calculateVATotal(totalSum, totalDiscount)
          )}
        </p>
      </div>

      {/* VAT */}
      <div className="flex items-center justify-between mt-3">
        <p className="text-sm text-gray dark:text-white">VAT 16%</p>
        <p className="text-sm text-gray font-bold dark:text-white">
          {formatCurrency(calculateVATotal(totalSum, totalDiscount))}
        </p>
      </div>

      {/* Discount */}
      <div className="flex items-center justify-between mt-3 border-b border-[#E3E0DF] pb-3 dark:border-[#3a3a3a]">
        <p className="text-sm text-gray dark:text-white">
          Discount{" "}
          <span className="bg-secondary px-2 py-1 text-white text-xs rounded-full">
            {Math.round((totalDiscount / totalSum) * 100)}%
          </span>
        </p>
        <p className="text-sm text-gray font-bold dark:text-white">
          {formatCurrency(totalDiscount)}
        </p>
      </div>

      {/* Total */}
      <div className="flex items-center justify-between mt-5 border-b border-[#E3E0DF] pb-3 dark:border-[#3a3a3a]">
        <p className="text-sm text-gray dark:text-white font-bold">Total</p>
        <p className="text-sm text-dark font-bold dark:text-white">
          {formatCurrency(totalSum)}
        </p>
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
  );
};

export default CheckoutSummary;
