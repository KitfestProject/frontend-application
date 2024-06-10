import TicketCard from "./TicketCard";

const EventsSection = () => {
  return (
    <div className="grid grid-cols-1 gap-5 mt-10 w-full">
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </div>
  );
};

export default EventsSection;
