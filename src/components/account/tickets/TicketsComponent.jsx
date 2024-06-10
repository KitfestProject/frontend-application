import { DashboardSidebar, TicketOverview } from "@/components";

const TicketsComponent = () => {
  return (
    <section className="container mx-auto my-10">
      <div className="flex gap-10">
        <DashboardSidebar />

        <TicketOverview />
      </div>
    </section>
  );
};

export default TicketsComponent;
