import { DashboardSidebar, VenueOverview } from "@/components";

const VenuesComponent = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-10">
        <div className="w-[25%] hidden md:block">
          <DashboardSidebar />
        </div>

        <VenueOverview />
      </div>
    </section>
  );
};

export default VenuesComponent;
