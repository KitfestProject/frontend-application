import { DynamicHelmet, UserNavigation, EditArtistForm } from "@/components";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { useContext, useEffect, useState } from "react";
import { CreateArtistContext } from "@/context/CreateArtistFormContext";
import { useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const EditArtist = () => {
  const { artistFormData, setArtistFormData, clearArtistForm } =
    useContext(CreateArtistContext);
  const { getSingleArtist } = useServerSideQueries();
  const [artistData, setArtistData] = useState(null);
  const location = useLocation();
  const artistId = location.pathname.split("/").pop();

  useEffect(() => {
    clearArtistForm();
  }, []);

  useEffect(() => {
    const fetchArtistDetails = async (artistId) => {
      const { success, message, data } = await getSingleArtist(artistId);

      if (!success) {
        return toast.error(message, {
          duration: 4000,
          position: "top-right",
        });
      }

      setArtistData(data);
    };

    fetchArtistDetails(artistId);
  }, [artistId]);

  useEffect(() => {
    if (artistData) {
      setArtistFormData({
        name: artistData?.name || "",
        role: artistData?.role || "",
        category: artistData?.category || "",
        image: artistData?.image || null,
        artistContent:
          artistData && artistData?.artist_content.length > 0
            ? artistData?.artist_content
            : [
                {
                  title: "About Artist",
                  content: "",
                },
                {
                  title: "Artist Journey",
                  content: "",
                },
                {
                  title: "Notable work and Exhibitions",
                  content: "",
                },
                {
                  title: "Awards and Recognition",
                  content: "",
                },
                {
                  title: "Artistic Philosophy",
                  content: "",
                },
                {
                  title: "Get in Touch",
                  content: "",
                },
              ],
      });
    }
  }, [artistData]);

  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 h-auto min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Edit Blog"
        description={`Edit Artist Details - ${artistFormData.description}`}
      />
      <UserNavigation />

      <EditArtistForm />
    </div>
  );
};

export default EditArtist;
