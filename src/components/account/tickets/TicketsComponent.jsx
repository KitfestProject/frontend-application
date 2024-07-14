import { DashboardSidebar, TicketOverview } from "@/components";

const TicketsComponent = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-10">
        <div className="w-[25%] hidden md:block">
          <DashboardSidebar />
        </div>

        <TicketOverview />
      </div>
    </section>
  );
};

export default TicketsComponent;
