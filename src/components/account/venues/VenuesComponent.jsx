import { DashboardSidebar, VenueOverview } from "@/components";

const VenuesComponent = () => {
  return (
    <section className="container mx-auto my-10">
      <div className="flex gap-10">
        <DashboardSidebar />

        <VenueOverview />
      </div>
    </section>
  );
};

export default VenuesComponent;
