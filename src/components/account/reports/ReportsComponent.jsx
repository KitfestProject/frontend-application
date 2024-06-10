import { DashboardSidebar, ReportsOverview } from "@/components";

const ReportsComponent = () => {
  return (
    <section className="container mx-auto my-10">
      <div className="flex gap-10">
        <DashboardSidebar />

        <ReportsOverview />
      </div>
    </section>
  );
};

export default ReportsComponent;
