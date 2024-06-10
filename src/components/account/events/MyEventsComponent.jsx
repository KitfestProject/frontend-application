import { DashboardSidebar, EventOverview } from "@/components";

const MyEventsComponent = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-10">
        <DashboardSidebar />

        <EventOverview />
      </div>
    </section>
  );
};

export default MyEventsComponent;
