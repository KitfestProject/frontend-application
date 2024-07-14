import { DashboardSidebar, SystemUsersOverview } from "@/components";

const SystemUsersComponent = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-10">
        <div className="w-[25%] hidden md:block">
          <DashboardSidebar />
        </div>

        <SystemUsersOverview />
      </div>
    </section>
  );
};

export default SystemUsersComponent;
