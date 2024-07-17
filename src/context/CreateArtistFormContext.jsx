import { createContext, useState } from "react";

export const CreateArtistContext = createContext();

export const ArtistFormProvider = ({ children }) => {
  const initialArtistForm = {
    name: "",
    // email: "",
    // phone: "",
    role: "",
    category: "",
    description: "",
    image: null,
    active: false,
  };
  const [artistFormData, setArtistFormData] = useState(initialArtistForm);

  const isNameFilled = artistFormData.name !== "";
  // const isEmailFilled = artistFormData.email !== "";
  // const isPhoneFilled = artistFormData.phone !== "";
  const isDescriptionFilled = artistFormData.description !== "";
  const isImageFilled = artistFormData.image !== null;
  const isRoleFilled = artistFormData.role !== "";
  const isCategoryFilled = artistFormData.category !== "";
  const isAllInformationFilled =
    isNameFilled &&
    // isEmailFilled &&
    // isPhoneFilled &&
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
        // isEmailFilled,
        // isPhoneFilled,
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
