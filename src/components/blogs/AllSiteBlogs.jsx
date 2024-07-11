import { useEffect, useState } from "react";
import {BlogsSkeleton, SingleBlogComponent, PrimaryButton} from "@/components";

const AllSiteBlogs = () => {
  const [loading, setLoading] = useState(true);

  function generateBlogSkeleton() {
    const products = [];
    for (let i = 0; i < 12; i++) {
      products.push(<BlogsSkeleton key={i} />);
    }
    return products;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 pt-10 pb-16 gap-5">
        {!loading &&
          [1, 2, 3, 5, 6, 3, 1, 2].map((blog, index) => (
            <SingleBlogComponent
              key={index}
              image={`/images/Event-${blog}.png`}
              title="Exploring Kenyan Theater: A Journey Through History"
              summary="Discover the influential plays, renowned playwrights, and iconic
            performances that have shaped the theatrical landscape in Kenya."
              timestamp="Apr 15, 2024 | Jane Wangui"
            />
          ))}

        {/* Skeleton */}
        {loading && generateBlogSkeleton()}
      </div>

      {/* Load More Button */}
      <div className="grid place-content-center pb-10">
        <PrimaryButton title="Load More" />
      </div>
    </>
  );
};

export default AllSiteBlogs;
