import {
  BlogContent,
  BlogSaveButton,
  BlogDraftButton,
  UploadBlogCover,
  CreateBlogSidebar,
  GeneralBlogDetails,
} from "@/components";
import { useContext } from "react";
import { CreateBlogFromContext } from "@/context/CreateBlogFromContext";

const CreateBlogsComponent = ({ user, close }) => {
  const { blogFormData } = useContext(CreateBlogFromContext);
  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-8">
        {/* Create Event Sidebar */}
        <CreateBlogSidebar title="Create Blog" />

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

      {/* Debug */}
      {/* <div className="text-gray text-xs">
        <pre>{JSON.stringify(blogFormData, null, 2)}</pre>
      </div> */}
    </section>
  );
};

export default CreateBlogsComponent;
