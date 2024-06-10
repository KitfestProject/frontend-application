import { DashboardSidebar, Overview } from "@/components";

const DashboardComponent = () => {
  return (
    <div className="container mx-auto w-full py-10">
      <div className="flex gap-10">
        <DashboardSidebar />

        <Overview />
      </div>
    </div>
  );
};

export default DashboardComponent;
