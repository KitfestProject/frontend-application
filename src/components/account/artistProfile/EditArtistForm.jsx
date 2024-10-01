import {
  BlogSaveButton,
  BlogDraftButton,
  UploadArtistImage,
  MoreArtistInformation,
  CreateArtistSidebar,
  ArtistGeneralInformation,
} from "@/components";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { CreateArtistContext } from "@/context/CreateArtistFormContext";

const EditArtistForm = () => {
  const { updateSingleArtist } = useServerSideQueries();
  const { artistFormData, setArtistFormData } = useContext(CreateArtistContext);
  const location = useLocation();
  const navigate = useNavigate();
  const artistId = location.pathname.split("/").pop();
  const [loading, setLoading] = useState(false);

  const handleUpdateArtist = async (status) => {
    setLoading(true);
    setArtistFormData((previous) => ({
      ...previous,
      active: status === "publish",
    }));

    const { success, message } = await updateSingleArtist(
      artistId,
      artistFormData
    );

    if (!success) {
      setLoading(false);
      return toast.error(message, {
        duration: 4000,
        position: "top-right",
      });
    }

    setLoading(false);
    toast.success(message, {
      duration: 4000,
      position: "top-right",
    });

    setTimeout(() => {
      navigate("/my-artist-profile");
    }, 2000);
  };

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
          <MoreArtistInformation />

          <div className="flex justify-end gap-3 items-center mt-5">
            <BlogDraftButton
              title="Save Draft"
              handleClick={() => handleUpdateArtist("draft")}
              // loading={loading}
            />
            <BlogSaveButton
              title="Publish Artist"
              handleClick={() => handleUpdateArtist("publish")}
              loading={loading}
            />
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
