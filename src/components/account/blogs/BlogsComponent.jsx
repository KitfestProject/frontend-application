import { DashboardSidebar, BlogsOverview } from "@/components";

const BlogsComponent = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-10">
        <div className="w-[25%] hidden md:block">
          <DashboardSidebar />
        </div>

        <BlogsOverview />
      </div>
    </section>
  );
};

export default BlogsComponent;
