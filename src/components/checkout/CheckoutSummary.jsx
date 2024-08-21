import { Loader } from "@/components";
import axiosClient from "@/axiosClient";
import { FaCreditCard } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useSeatStore } from "@/store/UseSeatStore";
import { useContext, useEffect, useState } from "react";
import usePaystackPayment from "@/hooks/usePaystackPayment";
import useCurrencyConverter from "@/hooks/useCurrencyConverter";
import { CheckoutFormContext } from "@/context/CheckoutFormContext";

const CheckoutSummary = () => {
  const {
    checkoutFormData,
    payStackPublicKey,
    initialCheckoutForm,
    setCheckoutFormData,
  } = useContext(CheckoutFormContext);
  const [totalTickets, setTotalTickets] = useState(0);
  const [totalSeats, setTotalSeats] = useState(0);
  const { formatCurrency } = useCurrencyConverter();
  const { clearSeatStore } = useSeatStore();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const tickets = checkoutFormData.tickets || [];
    setTotalTickets(tickets.length);
    const seats = checkoutFormData.seats || [];
    setTotalSeats(seats.length);
  }, [checkoutFormData]);

  const totalTicketSum = checkoutFormData.tickets.reduce((acc, ticket) => {
    const ticketAmount = parseFloat(ticket.amount) || 0;
    return acc + ticketAmount;
  }, 0);

  const totalSeatSum = checkoutFormData.seats.reduce((acc, ticket) => {
    const ticketAmount = parseFloat(ticket.amount) || 0;
    return acc + ticketAmount;
  }, 0);

  const totalTicketDiscount = checkoutFormData.tickets.reduce((acc, ticket) => {
    const ticketDiscount = parseFloat(ticket.discount) || 0;
    const ticketAmount = parseFloat(ticket.amount) || 0;
    const discountAmount = ticketAmount * (ticketDiscount / 100);

    // Ensure the discount amount does not exceed the ticket amount
    const validDiscountAmount =
      discountAmount > ticketAmount ? ticketAmount : discountAmount;

    return acc + validDiscountAmount;
  }, 0);

  const totalSeatsDiscount = checkoutFormData.seats.reduce((acc, ticket) => {
    const ticketDiscount = parseFloat(ticket.discount) || 0;
    const ticketAmount = parseFloat(ticket.amount) || 0;
    const discountAmount = ticketAmount * (ticketDiscount / 100);

    // Ensure the discount amount does not exceed the ticket amount
    const validDiscountAmount =
      discountAmount > ticketAmount ? ticketAmount : discountAmount;

    return acc + validDiscountAmount;
  }, 0);

  // Calculate VAT
  const calculateVATotal = (totalSum) => {
    const vat = "16%";
    const vatAmount = totalSum * (parseInt(vat) / 100);
    return vatAmount;
  };

  const estimateTicketDiscount =
    totalTicketDiscount === totalTicketSum ? 0 : totalTicketDiscount;
  const estimateSeatsDiscount =
    totalSeatsDiscount === totalSeatSum ? 0 : totalSeatsDiscount;
  const estimateTicketSubtotal =
    totalTicketSum -
    (totalTicketDiscount === totalTicketSum ? 0 : totalTicketDiscount) -
    calculateVATotal(totalTicketSum);
  const estimateSeatsSubtotal =
    totalSeatSum -
    (totalSeatsDiscount === totalSeatSum ? 0 : totalSeatsDiscount) -
    calculateVATotal(totalSeatSum);
  const amountToPay = totalSeats > 0 ? totalSeatSum : totalTicketSum;
  const amountDiscounted =
    totalSeats > 0 ? estimateSeatsDiscount : estimateTicketDiscount;

  const onSuccess = async (response) => {
    // Handle successful payment
    checkoutFormData.amount = amountToPay;
    checkoutFormData.discount = amountDiscounted;
    checkoutFormData.tx_processor = response;
    checkoutFormData.paymentReference = response.reference;

    toast.success(`Payment complete! Reference: ${response.reference}`, {
      duration: 4000,
      position: "bottom-right",
    });

    try {
      setLoading(true);

      await axiosClient.post("/booking", checkoutFormData).then((response) => {
        setLoading(false);
        const { success, message } = response.data;

        if (!success) {
          toast.error(message, {
            duration: 4000,
            position: "bottom-right",
          });
          return;
        }

        toast.success(message, {
          duration: 4000,
          position: "bottom-right",
        });

        setCheckoutFormData(initialCheckoutForm);

        clearSeatStore();

        setTimeout(() => {
          window.history.back();
        }, 3000);
      });
    } catch (error) {
      const { message } = error.response.data;
      toast.error(message, {
        duration: 4000,
        position: "bottom-right",
      });
      setLoading(false);
    }
  };

  const onClose = () => {
    // Handle payment window close
    toast.error(
      "Transaction was not completed, window closed. please try again later!",
      {
        duration: 4000,
        position: "bottom-right",
      }
    );
  };

  const initializePayment = usePaystackPayment({
    publicKey: payStackPublicKey,
    email: checkoutFormData.email,
    phone: checkoutFormData.phoneNumber,
    amount: amountToPay * 100,
    onSuccess: onSuccess,
    onClose: onClose,
  });

  const validateCheckout = () => {
    // Check if email and phone number are provided
    if (checkoutFormData.email === null || checkoutFormData.email === "") {
      const message =
        "To complete your purchase you need to provide your valid email address.";
      toast.error(message, {
        duration: 4000,
        position: "bottom-right",
      });
      return false;
    }

    if (
      checkoutFormData.phoneNumber === null ||
      checkoutFormData.phoneNumber === ""
    ) {
      const message =
        "To complete your purchase you will need to provide your valid phone number.";
      toast.error(message, {
        duration: 4000,
        position: "bottom-right",
      });
      return false;
    }

    if (!checkoutFormData.agree) {
      const message = "Please agree to the terms and conditions to proceed.";
      toast.error(message, {
        duration: 4000,
        position: "bottom-right",
      });
      return false;
    }

    return true;
  };

  const handleBookFreeEvent = async () => {
    try {
      setLoading(true);

      await axiosClient.post("/booking", checkoutFormData).then((response) => {
        setLoading(false);
        const { success, message } = response.data;

        if (!success) {
          toast.error(message, {
            duration: 4000,
            position: "bottom-right",
          });
          return;
        }

        toast.success(message, {
          duration: 4000,
          position: "bottom-right",
        });

        setCheckoutFormData(initialCheckoutForm);

        clearSeatStore();

        setTimeout(() => {
          window.history.back();
        }, 3000);
      });
    } catch (error) {
      const { message } = error.response.data;
      toast.error(message, {
        duration: 4000,
        position: "bottom-right",
      });
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FBFAFA] dark:bg-gray p-5 md:rounded-md py-10 border border-slate-200 dark:border-gray sticky top-[120px]">
      <h1 className="text-md text-dark dark:text-white font-bold">
        Checkout Summary
      </h1>

      {/* Ticket Price */}
      <div className="flex items-center justify-between mt-5 border-b border-[#E3E0DF] pb-3 dark:border-[#3a3a3a]">
        <p className="text-sm text-gray dark:text-white">
          {totalSeats > 0 ? totalSeats : totalTickets}X
        </p>
        <p className="text-sm text-dark font-bold dark:text-white">
          {formatCurrency(totalSeats > 0 ? totalSeatSum : totalTicketSum)}
        </p>
      </div>

      {/* Service Fee */}
      <div className="flex items-center justify-between mt-5">
        <p className="text-sm text-gray dark:text-white">Subtotal</p>
        <p className="text-sm text-gray font-bold dark:text-white">
          {formatCurrency(
            totalSeats > 0 ? estimateSeatsSubtotal : estimateTicketSubtotal
          )}
        </p>
      </div>

      {/* VAT */}
      <div className="flex items-center justify-between mt-3">
        <p className="text-sm text-gray dark:text-white">VAT 16%</p>
        <p className="text-sm text-gray font-bold dark:text-white">
          {formatCurrency(
            calculateVATotal(totalSeats > 0 ? totalSeatSum : totalTicketSum)
          )}
        </p>
      </div>

      {/* Discount */}
      <div className="flex items-center justify-between mt-3 border-b border-[#E3E0DF] pb-3 dark:border-[#3a3a3a]">
        <p className="text-sm text-gray dark:text-white">
          Discount{" "}
          <span className="bg-secondary px-2 py-1 text-white text-xs rounded-full">
            {Math.round(
              ((totalSeats > 0
                ? estimateSeatsDiscount
                : estimateTicketDiscount) /
                (totalSeats > 0 ? totalSeatSum : totalTicketSum)) *
                100
            ) || 0}
            %
          </span>
        </p>
        <p className="text-sm text-gray font-bold dark:text-white">
          {formatCurrency(
            totalSeats > 0 ? estimateSeatsDiscount : estimateTicketDiscount
          )}
        </p>
      </div>

      {/* Total */}
      <div className="flex items-center justify-between mt-5 border-b border-[#E3E0DF] pb-3 dark:border-[#3a3a3a]">
        <p className="text-sm text-gray dark:text-white font-bold">Total</p>
        <p className="text-sm text-dark font-bold dark:text-white">
          {formatCurrency(totalSeats > 0 ? totalSeatSum : totalTicketSum)}
        </p>
      </div>

      {/* Payment Method */}
      <div className="mt-5">
        <h1 className="text-md text-dark dark:text-white font-bold">
          Payment Method
        </h1>

        <div className="">
          {/* Mpesa-icon */}
          <div className="flex items-center gap-5 mt-5">
            <div className="p-3 rounded-md bg-[#fcf4f3]">
              <img
                src="/images/mpesa-icon.png"
                alt="Mpesa"
                className="w-5 h-5"
              />
            </div>
            <p className="text-sm text-gray dark:text-white">Mpesa</p>
          </div>

          {/* Card icon */}
          <div className="flex items-center gap-5 mt-3">
            <div className="p-3 rounded-md bg-[#fcf4f3]">
              <FaCreditCard className="text-xl text-primary" />
            </div>
            <p className="text-sm text-gray dark:text-white">Credit Card</p>
          </div>
        </div>
      </div>

      {/* Payment Button */}
      {
        // If the user has not selected any tickets or seats, disable the payment button
        totalSeats !== 0 || totalTicketSum > 0 ? (
          <button
            onClick={() => {
              if (validateCheckout()) {
                initializePayment();
              }
            }}
            className="w-full mt-5 bg-primary text-white py-3 rounded-md flex justify-center items-center"
          >
            {loading ? <Loader /> : "Pay Now "}
          </button>
        ) : (
          <button
            onClick={() => {
              if (validateCheckout()) {
                handleBookFreeEvent();
              }
            }}
            className="w-full mt-5 bg-primary text-white py-3 rounded-md flex justify-center items-center"
          >
            {loading ? <Loader /> : "Reserve Now"}
          </button>
        )
      }
    </div>
  );
};

export default CheckoutSummary;
