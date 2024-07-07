import {
  ArtistContent,
  BlogSaveButton,
  BlogDraftButton,
  UploadArtistImage,
  CreateArtistSidebar,
  ArtistGeneralInformation,
} from "@/components";
import { CreateArtistContext } from "@/context/CreateArtistFormContext";
import { useContext } from "react";

const CreateArtistComponent = () => {
  const { artistFormData } = useContext(CreateArtistContext);
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

export default CreateArtistComponent;
