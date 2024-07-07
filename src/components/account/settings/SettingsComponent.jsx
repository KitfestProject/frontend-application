import { SettingsOverview, DashboardSidebar } from "@/components";

const SettingsComponent = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-10">
        <DashboardSidebar />

        <SettingsOverview />
      </div>
    </section>
  );
};

export default SettingsComponent;
