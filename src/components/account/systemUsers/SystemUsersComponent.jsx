import { DashboardSidebar, SystemUsersOverview } from "../../../components";

const SystemUsersComponent = () => {
  return (
    <section className="container mx-auto my-10">
      <div className="flex gap-10">
        <DashboardSidebar />

        <SystemUsersOverview />
      </div>
    </section>
  );
};

export default SystemUsersComponent;
