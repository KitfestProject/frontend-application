import toast from "react-hot-toast";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/store/UseAuthStore";
import { useSeatStore } from "@/store/UseSeatStore";
import { EventContext } from "@/context/EventDetailsContext";
import { PrimaryButton, SecondaryButton, TicketComponent } from "@/components";

const TicketTypeSelector = () => {
  const { eventDetails } = useContext(EventContext);
  const [selectedTicketType, setSelectedTicketType] = useState(null);
  const navigate = useNavigate();
  const { selectedTickets, addSelectedTickets, setEventId, clearSeats } =
    useSeatStore();
  const { user } = useAuthStore();

  const handleTicketTypeChange = (ticket) => {
    console.log(ticket);
    clearSeats();
    setSelectedTicketType(ticket);

    setEventId(eventDetails._id);
    addSelectedTickets({
      id: ticket?._id,
      discount: Number(ticket?.ticket_discount_price),
      type: ticket?.ticket_type,
      price: Number(ticket?.ticket_price),
    });
  };

  const handleTicketSelect = () => {
    if (!selectedTicketType) {
      return toast.error("Please select a ticket type to continue", {
        duration: 4000,
        position: "bottom-right",
      });
    }

    navigate("/checkout", {
      state: { eventDetails },
    });
  };

  console.log(eventDetails?.tickets);

  return (
    <div className="bg-[#fbfafa] dark:bg-darkGray rounded-lg py-10 px-5">
      {eventDetails?.tickets &&
      eventDetails?.tickets[0]?.ticket_type !== null ? (
        <>
          {eventDetails?.tickets.map((ticket, index) => (
            <TicketComponent
              key={index}
              ticket={ticket}
              ticketId={ticket?._id}
              title={ticket?.ticket_type}
              amount={Number(ticket?.ticket_price)}
              discount={Number(ticket?.ticket_discount_price)}
              selectedTicketType={selectedTicketType}
              handleTicketTypeChange={handleTicketTypeChange}
            />
          ))}

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
            classes={"w-full py-3 dark:bg-gray"}
          />
        </div>
      )}
    </div>
  );
};

export default TicketTypeSelector;
