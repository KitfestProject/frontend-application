import React, { useEffect, useState } from "react";
import { UniversalButton, TheaterBlogsSection } from "../../components";
import { blogsData } from "../data/StaticData";

const BlogsComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container mx-auto py-10 md:py-20 w-full">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-5">
        <h2 className="text-[30px] md:text-[45px] tracking-tighter font-bold text-dark dark:text-slate-200 mb-3 md:mb-0">
          Theater Blogs
        </h2>

        {/* View All Blogs */}
        <UniversalButton
          title="View All Blogs"
          handleClick={() => {}}
          classes=""
        />
      </div>
      <p className="text-gray text-lg md:text-xl tracking-tighter mb-5 dark:text-slate-100">
        Stay up to date with the latest news, reviews, interviews, and articles
        related to Kenyan theater. Explore different categories or tags to find
        content that interests you. Subscribe to our blog for regular updates.
      </p>

      {/* Theater Blogs scroll section */}
      <div className="w-full">
        <TheaterBlogsSection blogsData={blogsData} loading={loading} />
      </div>
    </section>
  );
};

export default BlogsComponent;
