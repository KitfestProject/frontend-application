import { DashboardSidebar, ReportsOverview } from "@/components";

const ReportsComponent = () => {
  return (
    <section className="container mx-auto my-10">
      <div className="flex gap-10">
        <div className="w-[25%] hidden md:block">
          <DashboardSidebar />
        </div>

        <ReportsOverview />
      </div>
    </section>
  );
};

export default ReportsComponent;
