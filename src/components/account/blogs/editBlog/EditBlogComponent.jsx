import {
  BlogContent,
  BlogSaveButton,
  UploadBlogCover,
  BlogDraftButton,
  GeneralBlogDetails,
  CreateBlogSidebar,
} from "@/components";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { CreateBlogFromContext } from "@/context/CreateBlogFromContext";
import { BiInfoCircle, BiSolidCheckCircle } from "react-icons/bi";

const EditBlogComponent = () => {
  const { blogFormData, getBlogByIdSlug, setBlogFormData } = useContext(
    CreateBlogFromContext
  );
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const blogId = location.pathname.split("/")[3];
  const { updateSingleBlog } = useServerSideQueries();
  const navigate = useNavigate();

  const handleSaveBlog = async (status) => {
    setLoading(true);

    // Update blog status
    setBlogFormData((prev) => ({
      ...prev,
      active: status === "publish",
    }));

    const { success, message } = await updateSingleBlog(blogId, blogFormData);

    if (!success) {
      setLoading(false);
      return toast.error(message, {
        icon: <BiInfoCircle className="text-white text-2xl" />,
        style: {
          borderRadius: "10px",
          background: "#ff0000",
          color: "#fff",
        },
      });
    }

    toast.success(message, {
      icon: <BiSolidCheckCircle className="text-white text-2xl" />,
      style: {
        borderRadius: "10px",
        background: "#00c20b",
        color: "#fff",
      },
    });

    setTimeout(function () {
      navigate("/auth-blogs");
    }, 3000);

    setLoading(false);
  };

  useEffect(() => {
    getBlogByIdSlug(blogId).then((data) => {
      setBlogFormData(data);
    });
  }, [blogId]);

  return (
    <div className="w-full bg-white dark:bg-darkGray dark:border dark:border-gray/50">
      <div className="container py-10">
        <div className="flex gap-10">
          {/* Create Event Sidebar */}
          <CreateBlogSidebar title="Edit Blog Details" />

          {/* Create Event Form */}
          <div className="w-full md:w-[75%] scroll-smooth">
            <UploadBlogCover />

            <GeneralBlogDetails />

            <BlogContent />

            <div className="flex justify-end gap-3 items-center mt-8">
              <BlogDraftButton
                title="Save Draft"
                handleClick={() => handleSaveBlog("draft")}
                loading={loading}
              />
              <BlogSaveButton
                title="Publish Blog"
                handleClick={() => handleSaveBlog("publish")}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>

      <Toaster position="top-right" />

      {/* Debug */}
      {/* <div className="text-gray text-xs">
        <pre>{JSON.stringify(blogFormData, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default EditBlogComponent;
