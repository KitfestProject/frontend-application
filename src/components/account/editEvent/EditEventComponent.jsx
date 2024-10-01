import { DashboardSidebar, EditEventOverview } from "@/components";

const EditEventComponent = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-10">
        <div className="w-[25%] hidden md:block">
          <DashboardSidebar />
        </div>

        <div className="w-full md:w-[75%]">
          <EditEventOverview />
        </div>
      </div>
    </section>
  );
};

export default EditEventComponent;
