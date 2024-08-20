import { Link } from "react-router-dom";
import { BlogsTable } from "@/components";
import BlogsPerformance from "./BlogsPerformance";
import { BiPlus, BiFile } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { useState, useEffect } from "react";

const BlogsOverview = () => {
  const { getBlogsStats } = useServerSideQueries();
  const [statsData, setStatsData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchStats = async () => {
    setLoading(true);
    const { success, message, data } = await getBlogsStats();

    console.log(data);

    if (!success) {
      setLoading(false);
      return toast.error(message);
    }

    setStatsData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  console.log(statsData);

  return (
    <div className="w-full md:w-[75%]">
      <div className="flex justify-between items-end border-b border-gray/30 pb-3 mb-10">
        <div className="">
          <div className="flex items-center gap-2 mb-1 text-sm">
            <p className="text-gray tracking-tight">Account</p>
            <span className="text-gray-500">/</span>
            <p className="text-gray-500 tracking-tight">Blogs</p>
          </div>

          <h1 className="text-2xl font-bold text-dark dark:text-slate-100">
            Blogs Management
          </h1>
        </div>

        {/* Create Blogs Button */}
        <div className="">
          <Link
            to="/create-blog"
            className="bg-primary text-slate-100 text-sm px-8 py-2 rounded-md flex gap-2 items-center"
          >
            <BiPlus className="text-[24px]" /> Create Blog
          </Link>
        </div>
      </div>

      {/* Event Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mb-10">
        {/* Total Blogs Card */}
        <div className="bg-[#F5F5F5] dark:bg-darkGray dark:text-slate-100 p-5 rounded-md shadow-sm dark:border-gray/30 dark:border">
          <div className="flex items-center gap-5">
            <div className="bg-primary dark:bg-gray p-4 rounded">
              <BiFile className="text-5xl text-slate-100" />
            </div>

            <div className="">
              <h1 className="text-xl font-semibold text-dark dark:text-slate-100">
                Total Blogs
              </h1>

              <p className="text-primary dark:text-gray mt-1 text-xl">
                {statsData?.total_blogs}
              </p>
            </div>
          </div>
        </div>

        {/* Total Published Card */}
        <div className="bg-[#F5F5F5] dark:bg-darkGray dark:text-slate-100 p-5 rounded-md shadow-sm dark:border-gray/30 dark:border">
          <div className="flex items-center gap-5">
            <div className="bg-primary dark:bg-gray p-4 rounded">
              <BiFile className="text-5xl text-slate-100" />
            </div>

            <div className="">
              <h1 className="text-xl font-semibold text-dark dark:text-slate-100">
                Total Published
              </h1>
              <p className="text-primary dark:text-gray mt-1 text-xl">
                {statsData?.total_published}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Event Submissions */}
      {/* <BlogsPerformance /> */}

      {/* Blogs Table */}
      <BlogsTable fetchStats={fetchStats} />

      <Toaster position="top-right" />
    </div>
  );
};

export default BlogsOverview;
