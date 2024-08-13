import {
  BlogContent,
  BlogSaveButton,
  UploadBlogCover,
  BlogDraftButton,
  GeneralBlogDetails,
  CreateBlogSidebar,
} from "@/components";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { CreateBlogFromContext } from "@/context/CreateBlogFromContext";

const EditBlogComponent = () => {
  const { blogFormData, getBlogByIdSlug, setBlogFormData } = useContext(
    CreateBlogFromContext
  );
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const blogId = location.pathname.split("/")[3];
  const { updateSingleBlog } = useServerSideQueries();

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
      return toast.error(message);
    }

    toast.success(response.message);
    navigate("/auth-blogs");
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

      {/* Debug */}
      {/* <div className="text-gray text-xs">
          <pre>{JSON.stringify(blogFormData, null, 2)}</pre>
        </div> */}
    </div>
  );
};

export default EditBlogComponent;
