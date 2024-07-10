import React, { useEffect, useState } from "react";
import { BlogsSkeleton, EditorPicks, EditorPicksSkeleton } from "@/components";
import { PrimaryButton } from "@/components";

const ClientBlogsComponent = () => {
  const [loading, setLoading] = useState(true);

  function generateBlogSkeleton() {
    const products = [];
    for (let i = 0; i < 12; i++) {
      products.push(<BlogsSkeleton key={i} />);
    }
    return products;
  }

  const generateEditorPicksSkeleton = () => {
    const editors = [];
    for (let i = 0; i < 2; i++) {
      editors.push(<EditorPicksSkeleton key={i} />);
    }

    return editors;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="dark:text-white">
      <div className="container py-10">
        <h1 className="text-[40px] md:text-[40px] font-[800] tracking-tighter leading-none text-dark mb-5">
          Theatre Blog
        </h1>

        <div className="max-w-[700px]">
          <p className="text-gray">
            Stay up to date with the latest news, reviews, interviews, and
            articles related to Kenyan theater. Explore different categories or
            tags to find content that interests you. Subscribe to our blog for
            regular updates.
          </p>
        </div>

        {/* Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-4 pt-10 pb-16 gap-5">
          {!loading &&
            [1, 2, 3, 5, 6, 3, 1, 2].map((blog) => (
              <div
                key={blog}
                className="bg-white dark:bg-darkGray rounded-lg shadow-md"
              >
                <img
                  src={`/images/Event-${blog}.png`}
                  alt="Blog Image"
                  className="object-cover w-full h-52 rounded-t-lg"
                />

                <div className="p-5 dark:border dark:border-gray/50 rounded-b-md">
                  <h5 className="text-lg font-bold text-gray-800 dark:text-gray-100 leading-tight mb-3 text-dark dark:text-slate-100 tracking-tighter">
                    Exploring Kenyan Theater: A Journey Through History
                  </h5>
                  <p className="text-sm text-gray dark:text-gray-300 dark:text-slate-100 mb-5">
                    Discover the influential plays, renowned playwrights, and
                    iconic performances that have shaped the theatrical
                    landscape in Kenya.
                  </p>

                  <p className="text-xs text-gray dark:text-gray-300 dark:text-slate-100">
                    Apr 15, 2024 | Jane Wangui
                  </p>
                </div>
              </div>
            ))}

          {/* Skeleton */}
          {loading && generateBlogSkeleton()}
        </div>

        {/* Load More Button */}
        <div className="grid place-content-center pb-10">
          <PrimaryButton title="Load More" />
        </div>

        {/* Editors Title */}
        <div className="border-t border-gray/50 pt-10">
          <h1 className="text-3xl font-bold tracking-tighter text-dark mb-5">
            Editor picks
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-10">
            {loading && generateEditorPicksSkeleton()}

            {!loading && (
              <>
                <EditorPicks
                  title="Exploring Kenyan Theater: A Journey Through History"
                  image="/images/Editor-pick-2.svg"
                  summary="Discover the influential plays, renowned playwrights, and iconic
                performances that have shaped the theatrical landscape in Kenya."
                  timestamp="Apr 15, 2024 | Jane Wangui"
                />
                <EditorPicks
                  title="Exploring Kenyan Theater: A Journey Through History"
                  image="/images/Editor-pick-1.svg"
                  summary="Discover the influential plays, renowned playwrights, and iconic
                performances that have shaped the theatrical landscape in Kenya."
                  timestamp="Apr 15, 2024 | Jane Wangui"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientBlogsComponent;
