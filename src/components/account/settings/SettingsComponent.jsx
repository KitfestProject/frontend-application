import { SettingsOverview, DashboardSidebar } from "@/components";

const SettingsComponent = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-10">
        <div className="w-[25%] hidden md:block">
          <DashboardSidebar />
        </div>

        <SettingsOverview />
      </div>
    </section>
  );
};

export default SettingsComponent;
