import {
  ArtistContent,
  BlogSaveButton,
  BlogDraftButton,
  UploadArtistImage,
  CreateArtistSidebar,
  ArtistGeneralInformation,
} from "@/components";
import { CreateArtistContext } from "@/context/CreateArtistFormContext";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const EditArtistForm = () => {
  const { artistFormData, setArtistFormData, getArtistByIdSlug } =
    useContext(CreateArtistContext);
  const location = useLocation();
  const artistId = location.pathname.split("/")[3];

  useEffect(() => {
    getArtistByIdSlug(artistId).then((data) => {
      setArtistFormData(data);
    });

    return () => {
      setArtistFormData({
        name: "",
        email: "",
        phone: "",
        role: "",
        description: "",
        image: null,
      });
    };
  }, [artistId]);

  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-8">
        {/* Create Event Sidebar */}
        <CreateArtistSidebar title="Edit Artist Details" />

        {/* Create Event Form */}
        <div className="w-full md:w-[75%] scroll-smooth">
          {/* Upload Artist Image */}
          <UploadArtistImage />

          {/* General Artist Details */}
          <ArtistGeneralInformation />

          {/* Artist Content */}
          <ArtistContent />

          <div className="flex justify-end gap-3 items-center mt-8">
            <BlogDraftButton title="Save Draft" handleClick={() => {}} />
            <BlogSaveButton title="Publish Blog" handleClick={() => {}} />
          </div>
        </div>
      </div>

      {/* Debug */}
      {/* <div className="text-gray text-xs">
        <pre>{JSON.stringify(artistFormData, null, 2)}</pre>
      </div> */}
    </section>
  );
};

export default EditArtistForm;
