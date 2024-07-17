import {
  ArtistContent,
  BlogSaveButton,
  BlogDraftButton,
  UploadArtistImage,
  CreateArtistSidebar,
  ArtistGeneralInformation,
} from "@/components";
import { CreateArtistContext } from "@/context/CreateArtistFormContext";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axiosClient from "@/axiosClient";

const CreateArtistComponent = () => {
  const { artistFormData, clearArtistForm, isAllInformationFilled } =
    useContext(CreateArtistContext);
  const [loading, setLoading] = useState(false);

  const handleBlogSave = async (isDraft = false) => {
    if (!isAllInformationFilled) {
      return toast.error("Kindly fix some errors in the form to continue.");
    }

    setLoading(true);

    try {
      const updatedFormData = isDraft
        ? { ...artistFormData, active: false }
        : artistFormData;
      const response = await axiosClient.post("/artists", updatedFormData);

      const { success, message } = response.data;

      if (success) {
        clearArtistForm();
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred while publishing the artist.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-8">
        {/* Create Event Sidebar */}
        <CreateArtistSidebar title="Create Artist" />

        {/* Create Event Form */}
        <div className="w-full md:w-[75%] scroll-smooth">
          {/* Upload Artist Image */}
          <UploadArtistImage />

          {/* General Artist Details */}
          <ArtistGeneralInformation />

          {/* Artist Content */}
          <ArtistContent />

          <div className="flex justify-end gap-3 items-center mt-8">
            <BlogDraftButton
              title="Save Draft"
              handleClick={() => handleBlogSave(false)}
              loading={false}
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

      {/* Debug */}
      <div className="text-gray text-xs">
        <pre>{JSON.stringify(artistFormData, null, 2)}</pre>
      </div>
    </section>
  );
};

export default CreateArtistComponent;
