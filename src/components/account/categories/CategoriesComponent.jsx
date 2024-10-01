import { DashboardSidebar, CategoriesOverview } from "@/components";

const CategoriesComponent = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-10">
        <div className="w-[25%] hidden md:block">
          <DashboardSidebar />
        </div>

        <div className="w-full md:w-[75%]">
          <CategoriesOverview />
        </div>
      </div>
    </section>
  );
};

export default CategoriesComponent;
