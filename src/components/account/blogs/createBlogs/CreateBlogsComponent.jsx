import {
  BlogContent,
  BlogSaveButton,
  BlogDraftButton,
  UploadBlogCover,
  CreateBlogSidebar,
  GeneralBlogDetails,
} from "@/components";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CreateBlogFromContext } from "@/context/CreateBlogFromContext";
import axiosClient from "@/axiosClient";

const CreateBlogsComponent = () => {
  const {
    blogFormData,
    setBlogFormData,
    initialBlogForm,
    isAllInformationFilled,
  } = useContext(CreateBlogFromContext);
  const [loading, setLoading] = useState(false);

  const handleBlogSave = async (isDraft = false) => {
    if (!isAllInformationFilled) {
      return toast.error("Kindly fix some errors in the form to continue.");
    }

    setLoading(true);

    try {
      const updatedFormData = isDraft
        ? { ...blogFormData, active: false }
        : blogFormData;
      const response = await axiosClient.post("/blogs", updatedFormData);

      const { success, message } = response.data;

      if (success) {
        setBlogFormData(initialBlogForm);
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred while publishing the venue.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-8">
        <CreateBlogSidebar title="Create Blog" />

        <div className="w-full md:w-[75%] scroll-smooth">
          <UploadBlogCover />

          <GeneralBlogDetails />

          <BlogContent />

          <div className="flex justify-end gap-3 items-center mt-8">
            <BlogDraftButton
              title="Save Draft"
              handleClick={() => handleBlogSave(true)}
              loading={loading}
            />
            <BlogSaveButton
              title="Publish Blog"
              handleClick={() => handleBlogSave(false)}
              loading={loading}
            />
          </div>
        </div>
      </div>

      <Toaster position="bottom-right" />

      {/* <div className="text-gray text-xs">
        <pre>{JSON.stringify(blogFormData, null, 2)}</pre>
      </div> */}
    </section>
  );
};

export default CreateBlogsComponent;
