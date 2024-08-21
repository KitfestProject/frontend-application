import { createContext, useState } from "react";

export const CreateArtistContext = createContext();

export const ArtistFormProvider = ({ children }) => {
  const initialArtistForm = {
    name: "",
    role: "",
    category: "",
    image: null,
    active: false,
    artistContent: [
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
  };
  const [artistFormData, setArtistFormData] = useState(initialArtistForm);
  const [artistDetails, setArtistDetails] = useState({});

  const isNameFilled = artistFormData.name !== "";
  const isImageFilled = artistFormData.image !== null;
  const isRoleFilled = artistFormData.role !== "";
  const isCategoryFilled = artistFormData.category !== "";
  const isArtistContentFilled = artistFormData.artistContent.every(
    (content) => content.content !== ""
  );

  const isAllInformationFilled =
    isNameFilled && isCategoryFilled && isImageFilled && isRoleFilled;

  const getArtistByIdSlug = async (artistId) => {
    return initialArtistForm;
  };

  const clearArtistForm = () => {
    setArtistFormData(initialArtistForm);
  };

  return (
    <CreateArtistContext.Provider
      value={{
        artistDetails,
        setArtistDetails,
        artistFormData,
        isNameFilled,
        clearArtistForm,
        isCategoryFilled,
        isImageFilled,
        isRoleFilled,
        getArtistByIdSlug,
        setArtistFormData,
        isArtistContentFilled,
        isAllInformationFilled,
      }}
    >
      {children}
    </CreateArtistContext.Provider>
  );
};
