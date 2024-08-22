import {
  BlogSaveButton,
  BlogDraftButton,
  UploadTeamMemberImage,
  TeamMemberGeneralInformation,
} from "@/components";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { CreateTeamMemberContext } from "@/context/CreateTeamMemberContext";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { useLocation } from "react-router-dom";

const CreateTeamMembersOverview = () => {
  const [loading, setLoading] = useState(false);
  const { teamMemberFormData } = useContext(CreateTeamMemberContext);
  const { createNewTeamMember, updateTeamMember } = useServerSideQueries();
  const location = useLocation();
  const pathname = location.pathname;

  const teamMemberId = pathname.split("/")[2];

  const handleTeamMemberSave = async (isDraft = false) => {
    setLoading(true);
    let success;
    let message;

    if (teamMemberId) {
      const response = await updateTeamMember(teamMemberId, teamMemberFormData);
      success = response.success;
      message = response.message;
    } else {
      const response = await createNewTeamMember(teamMemberFormData);
      success = response.success;
      message = response.message;
    }

    if (!success) {
      setLoading(false);
      return toast.error(message, {
        position: "top-right",
      });
    }

    setLoading(false);
    toast.success(message, {
      position: "top-right",
    });
  };

  return (
    <div className="w-full md:w-[75%]">
      {/* Artist Overview Title */}
      <UploadTeamMemberImage />

      {/* Team Member General Information */}
      <TeamMemberGeneralInformation />

      {/* Acc */}
      <div className="flex justify-end gap-3 items-center mt-8">
        <BlogDraftButton
          title="Save Draft"
          handleClick={() => handleTeamMemberSave(true)}
          loading={loading}
        />
        <BlogSaveButton
          title="Save Member"
          handleClick={() => handleTeamMemberSave(false)}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default CreateTeamMembersOverview;
