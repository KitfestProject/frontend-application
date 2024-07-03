import {
  BlogContent,
  BlogSaveButton,
  UploadBlogCover,
  BlogDraftButton,
  GeneralBlogDetails,
  CreateBlogSidebar,
} from "@/components";
import { CreateBlogFromContext } from "@/context/CreateBlogFromContext";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const EditBlogComponent = () => {
  const { getBlogByIdSlug, setBlogFormData } = useContext(
    CreateBlogFromContext
  );
  const location = useLocation();
  const blogId = location.pathname.split("/")[3];

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
              <BlogDraftButton title="Save Draft" handleClick={() => {}} />
              <BlogSaveButton title="Publish Blog" handleClick={() => {}} />
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
