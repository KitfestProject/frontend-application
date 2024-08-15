import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { DynamicHelmet, UserNavigation, EditBlogComponent } from "@/components";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { CreateBlogFromContext } from "@/context/CreateBlogFromContext";
import { useLocation } from "react-router-dom";

const EditBlog = () => {
  const { setBlogFormData } = useContext(CreateBlogFromContext);
  const { getSingleBlog } = useServerSideQueries();
  const [blogData, setBlogData] = useState(null);
  const location = useLocation();

  const blogId = location.pathname.split("/")[3];

  useEffect(() => {
    const fetchBlog = async () => {
      const { success, message, data } = await getSingleBlog(blogId);

      if (!success) return toast.error(message);

      setBlogData(data);
    };

    fetchBlog();
  }, [blogId]);

  useEffect(() => {
    if (blogData) {
      setBlogFormData((prevFormData) => ({
        ...prevFormData,
        name: blogData.name || "",
        description: blogData.description || "",
        category: blogData.category || "",
        tags: blogData.tags || [],
        cover_image: blogData.cover_image || null,
        content: blogData.content || "",
        active: blogData.active || true,
      }));
    }
  }, [blogData]);

  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 h-auto min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Create Blogs"
        description="Edit your blogs and manage them."
      />
      <UserNavigation />

      <EditBlogComponent />

      <Toaster position="top-right" />
    </div>
  );
};

export default EditBlog;
