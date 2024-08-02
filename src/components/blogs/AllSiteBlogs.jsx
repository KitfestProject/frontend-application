import { useContext, useEffect, useState } from "react";
import {
  BlogsSkeleton,
  SingleBlogComponent,
  PrimaryButton,
} from "@/components";
import { StateContext } from "@/context/ContextProvider";
import useTimeAgo from "@/hooks/useTimeAgo";
import { useNavigate } from "react-router-dom";
import {
  BiSolidChevronLeftCircle,
  BiSolidChevronRightCircle,
} from "react-icons/bi";

const AllSiteBlogs = () => {
  const { start, limit, setStart, blogData, stateLoading } =
    useContext(StateContext);
  const { timeAgo } = useTimeAgo();
  const navigate = useNavigate();

  function generateBlogSkeleton() {
    const products = [];
    for (let i = 0; i < 12; i++) {
      products.push(<BlogsSkeleton key={i} />);
    }
    return products;
  }

  const handleNextPage = () => setStart((prevStart) => prevStart + limit);
  const handlePrevPage = () =>
    setStart((prevStart) => Math.max(prevStart - limit, 0));

  const isNextDisabled = blogData?.length < limit;
  const isPrevDisabled = start === 0;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 pt-10 pb-16 gap-5">
        {!stateLoading &&
          blogData?.map((blog, index) => (
            <SingleBlogComponent
              key={index}
              blog={blog}
              image={blog.cover_image}
              title={blog.name}
              summary={blog.description}
              timestamp={timeAgo(blog.created_at)}
            />
          ))}

        {/* Skeleton */}
        {stateLoading && generateBlogSkeleton()}
      </div>

      {/* Next and previous Buttons */}
      <div className="flex justify-start gap-3 my-5">
        <button
          onClick={handlePrevPage}
          className={`bg-primary text-white py-2 px-5 rounded-md text-xs flex justify-between items-center gap-2 ${
            isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isPrevDisabled}
        >
          <BiSolidChevronLeftCircle />
          Previous
        </button>

        <button
          onClick={handleNextPage}
          className={`bg-primary text-white py-2 px-5 rounded-md text-xs flex justify-between items-center gap-2 ${
            isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isNextDisabled}
        >
          Next
          <BiSolidChevronRightCircle />
        </button>
      </div>
    </>
  );
};

export default AllSiteBlogs;
