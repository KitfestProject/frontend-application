import { useState, useContext } from "react";
import { PrimaryButton, SecondaryButton } from "@/components";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useSeatStore } from "@/store/UseSeatStore";
import { EventContext } from "@/context/EventDetailsContext";
import useCurrencyConverter from "@/hooks/useCurrencyConverter";
import useAuthStore from "@/store/UseAuthStore";
import { BiInfoCircle } from "react-icons/bi";

const TicketTypeSelector = () => {
  const { eventDetails, eventDetailsLoading } = useContext(EventContext);
  const [selectedTicketType, setSelectedTicketType] = useState(null);
  const navigate = useNavigate();
  const { selectedTickets, addSelectedTickets, setEventId, clearSeats } =
    useSeatStore();
  const { user } = useAuthStore();

  const handleTicketTypeChange = (ticket) => {
    clearSeats();
    setSelectedTicketType(ticket);

    setEventId(eventDetails._id);
    addSelectedTickets({
      id: ticket?._id,
      discount: ticket?.ticket_discount_price,
      type: ticket?.ticket_type,
      price: ticket?.ticket_price,
    });
  };

  const handleTicketSelect = () => {
    // Check if the user is logged in
    if (!user) {
      toast.error("Please login to purchase ticket.", {
        icon: <BiInfoCircle className="text-white text-2xl" />,
        style: {
          borderRadius: "10px",
          background: "#ff0000",
          color: "#fff",
        },
      });

      setTimeout(() => {
        navigate("/auth-login");
      }, 3000);
      return;
    }

    if (selectedTickets.length === 0)
      return toast.error("Please select a ticket type to continue");

    navigate("/checkout", {
      state: { eventDetails },
    });
  };

  // console.log(eventDetails);

  return (
    <div className="bg-[#fbfafa] dark:bg-darkGray rounded-lg py-10 px-5">
      {/* Ticket Type Selector */}
      {eventDetails?.tickets &&
      eventDetails?.tickets[0]?.ticket_type !== null ? (
        <>
          {eventDetails?.tickets.map((ticket, index) => (
            <TicketComponent
              key={index}
              ticket={ticket}
              ticketId={ticket?._id}
              title={ticket?.ticket_type}
              amount={ticket?.ticket_price}
              discount={ticket?.ticket_discount_price}
              selectedTicketType={selectedTicketType}
              handleTicketTypeChange={handleTicketTypeChange}
            />
          ))}

          {/* Button to proceed to payment */}
          <SecondaryButton
            handleClick={handleTicketSelect}
            title={"Proceed to payment"}
            classes={"w-full py-3"}
          />
        </>
      ) : (
        <div className="text-center text-lg text-gray-500 dark:text-slate-100">
          <PrimaryButton
            handleClick={() => {
              navigate(
                `${eventDetails?.venue?.seat_map_url}/booking/${eventDetails?._id}`
              );
            }}
            title={"Book Ticket"}
            classes={"w-full py-3"}
          />
        </div>
      )}

      <Toaster position="bottom-right" reverseOrder={false} />

      {/* Debugging */}
      {/* <div className="text-xs text-gray mt-5">
        <pre>{JSON.stringify(selectedTicketType, null, 2)}</pre>
      </div> */}
    </div>
  );
};

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
  const getTicketDetails = () => {
    return handleTicketTypeChange(ticket);
  };

  // Get percentage discount
  const discountPercentage = (discount, amount) => {
    if (amount === 0) {
      return 0;
    }

    const discountAmount = amount - discount;
    const percentage = (discountAmount / amount) * 100;
    return Math.round(percentage);
  };

  console.log(discount);
  console.log(amount);

  const newDiscount = discountPercentage(discount, amount);

  console.log(newDiscount);

  return (
    <div className="mb-5">
      <label className="block cursor-pointer">
        <div
          className={`w-full h-[150px] shadow-md rounded-lg flex justify-start items-center cursor-pointer ${
            selectedTicketType?._id === ticketId
              ? "bg-[#fcf4f3] border border-secondary dark:border-gray dark:bg-primary"
              : "bg-white dark:bg-dark"
          }`}
        >
          <div className="p-5 w-full flex flex-col gap-5">
            {/* Ticket Title */}
            <h3 className="text-2xl font-semibold text-gray dark:text-slate-300 capitalize">
              {title}
            </h3>

            {/* Ticket Amount & Discount Badge */}
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
          </div>
          <input
            type="radio"
            name="ticketType"
            value={ticketId}
            checked={selectedTicketType?.id === ticketId}
            onChange={getTicketDetails}
            className="hidden"
          />
        </div>
      </label>
    </div>
  );
};

export default TicketTypeSelector;
