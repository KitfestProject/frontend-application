import { Link } from "react-router-dom";
import { BlogsTable } from "@/components";

const BlogsOverview = () => {
  return (
    <div className="w-full md:w-[75%]">
      <div className="flex justify-between items-end border-b border-slate-200 pb-3 mb-10">
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
            className="bg-primary text-slate-100 text-sm px-8 py-2 rounded-md"
          >
            Create Blog
          </Link>
        </div>
      </div>

      {/* Blogs Table */}
      <BlogsTable />
    </div>
  );
};

export default BlogsOverview;
