import {
  DynamicHelmet,
  UserNavigation,
  CreateTeamMemberComponent,
} from "@/components";
import { CreateTeamMemberContext } from "@/context/CreateTeamMemberContext";
import { useContext, useEffect } from "react";

const CreateTeamMembers = () => {
  const { clearTeamMemberForm, setTeamMemberFormData } = useContext(
    CreateTeamMemberContext
  );

  useEffect(() => {
    clearTeamMemberForm();
    setTeamMemberFormData((prevData) => ({
      ...prevData,
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
    }));
  }, []);

  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 h-auto min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Create Team Members"
        description="Create a team member and manage them. You can access this page because you are an authenticated admin."
      />
      <UserNavigation />

      <CreateTeamMemberComponent />
    </div>
  );
};

export default CreateTeamMembers;
