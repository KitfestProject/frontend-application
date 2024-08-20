import { createContext, useState } from "react";

export const CreateTeamMemberContext = createContext();

const initialTeamMemberForm = {
  // General Information
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  position: "",
  team: "",
  image: null,
  socials: [
    {
      type: "facebook",
      link: "",
    },
    {
      type: "twitter",
      link: "",
    },
    {
      type: "linkedin",
      link: "",
    },
    {
      type: "instagram",
      link: "",
    },
    {
      type: "github",
      link: "",
    },
    {
      type: "youtube",
      link: "",
    },
  ],
};

export const TeamMemberFormProvider = ({ children }) => {
  const [teamMemberFormData, setTeamMemberFormData] = useState(
    initialTeamMemberForm
  );
  const [teamMemberData, setTeamMemberData] = useState(null);
  const [loading, setLoading] = useState(false);

  const isSocialDetailsFilled = teamMemberFormData.socials.every(
    (socials) => socials.link !== ""
  );

  const isNameFilled =
    teamMemberFormData.firstName !== "" && teamMemberFormData.lastName !== "";
  const isImageFilled = teamMemberFormData.image !== null;
  const isEmailFilled = teamMemberFormData.email !== "";
  const isPhoneNumberFilled = teamMemberFormData.phone !== "";
  const isPositionsFilled = teamMemberFormData.position !== "";
  const isTeamFilled = teamMemberFormData.team !== "";

  const isGeneralInfoFilled =
    teamMemberFormData.firstName !== "" &&
    teamMemberFormData.lastName !== "" &&
    teamMemberFormData.email !== "" &&
    teamMemberFormData.phone !== "" &&
    teamMemberFormData.position !== "" &&
    teamMemberFormData.team !== "" &&
    teamMemberFormData.image !== null;

  const clearTeamMemberForm = () => {
    setTeamMemberFormData(initialTeamMemberForm);
  };

  return (
    <CreateTeamMemberContext.Provider
      value={{
        loading,
        setLoading,
        isNameFilled,
        isTeamFilled,
        isImageFilled,
        isEmailFilled,
        teamMemberData,
        isPositionsFilled,
        setTeamMemberData,
        teamMemberFormData,
        clearTeamMemberForm,
        isGeneralInfoFilled,
        isPhoneNumberFilled,
        setTeamMemberFormData,
        isSocialDetailsFilled,
      }}
    >
      {children}
    </CreateTeamMemberContext.Provider>
  );
};
