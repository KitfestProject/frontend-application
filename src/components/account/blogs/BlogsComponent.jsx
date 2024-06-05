import React from "react";
import { DashboardSidebar, BlogsOverview } from "../../../components";

const BlogsComponent = () => {
  return (
    <section className="container mx-auto my-10">
      <div className="flex gap-10">
        <DashboardSidebar />

        <BlogsOverview />
      </div>
    </section>
  );
};

export default BlogsComponent;
