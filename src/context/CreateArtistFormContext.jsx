import { createContext, useState } from "react";

export const CreateArtistContext = createContext();

const initialArtistForm = {
  name: "",
  email: "",
  phone: "",
  role: "",
  description: "",
  image: null,
};

export const ArtistFormProvider = ({ children }) => {
  const [artistFormData, setArtistFormData] = useState(initialArtistForm);

  const isNameFilled = artistFormData.name !== "";
  const isEmailFilled = artistFormData.email !== "";
  const isPhoneFilled = artistFormData.phone !== "";
  const isDescriptionFilled = artistFormData.description !== "";
  const isImageFilled = artistFormData.image !== null;
  const isRoleFilled = artistFormData.role !== "";
  const isAllInformationFilled =
    isNameFilled &&
    isEmailFilled &&
    isPhoneFilled &&
    isDescriptionFilled &&
    isImageFilled &&
    isRoleFilled;

  const getArtistByIdSlug = async (artistId) => {
    return initialArtistForm;
  };

  return (
    <CreateArtistContext.Provider
      value={{
        artistFormData,
        isNameFilled,
        isEmailFilled,
        isPhoneFilled,
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
