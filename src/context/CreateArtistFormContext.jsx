import { createContext, useState } from "react";

export const CreateArtistContext = createContext();

export const ArtistFormProvider = ({ children }) => {
  const initialArtistForm = {
    name: "",
    role: "",
    category: "",
    description: "",
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

  const isNameFilled = artistFormData.name !== "";
  const isDescriptionFilled = artistFormData.description !== "";
  const isImageFilled = artistFormData.image !== null;
  const isRoleFilled = artistFormData.role !== "";
  const isCategoryFilled = artistFormData.category !== "";
  const isAllInformationFilled =
    isNameFilled &&
    isCategoryFilled &&
    isDescriptionFilled &&
    isImageFilled &&
    isRoleFilled;

  const getArtistByIdSlug = async (artistId) => {
    return initialArtistForm;
  };

  const clearArtistForm = () => {
    setArtistFormData(initialArtistForm);
  };

  return (
    <CreateArtistContext.Provider
      value={{
        artistFormData,
        isNameFilled,
        clearArtistForm,
        isCategoryFilled,
        isDescriptionFilled,
        isImageFilled,
        isRoleFilled,
        getArtistByIdSlug,
        setArtistFormData,
        isAllInformationFilled,
      }}
    >
      {children}
    </CreateArtistContext.Provider>
  );
};
