import {
  BlogContent,
  BlogSaveButton,
  UploadBlogCover,
  BlogDraftButton,
  GeneralBlogDetails,
} from "@/components";
import { CreateBlogFromContext } from "@/context/CreateBlogFromContext";
import { useContext } from "react";

const EditBlogForm = () => {
  const { blogFormData } = useContext(CreateBlogFromContext);

  return (
    <div className="w-[800px] bg-white dark:bg-darkGray dark:border dark:border-gray/50">
      <div className="bg-primary dark:bg-gray text-white flex justify-between items-center">
        <h1 className="text-lg font-semibold p-5">Edit Blog Details</h1>
        {/* Close Modal Icon */}
        <button
          onClick={close}
          className="absolute top-5 right-5 text-dark dark:text-slate-100"
        ></button>
      </div>

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

      {/* Debug */}
      {/* <div className="text-gray text-xs">
        <pre>{JSON.stringify(blogFormData, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default EditBlogForm;
