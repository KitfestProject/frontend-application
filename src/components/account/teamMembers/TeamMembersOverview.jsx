import { TeamMembersTable, OverViewTitle } from "@/components";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const TeamMembersOverview = () => {
  const navigate = useNavigate();
  const handleCreateTeamMember = () => {
    navigate("/create-team-member");
  };

  return (
    <div className="w-full md:w-[75%]">
      {/* Overview Title */}
      <div className="flex items-center justify-between w-full">
        <OverViewTitle
          title="Team Members Management"
          breadcrumbTitle="Team Members"
        />

        <button
          onClick={handleCreateTeamMember}
          className="text-sm flex items-center gap-1 px-5 py-2 bg-primary text-white rounded-md"
        >
          <BiPlus />
          Create Team Member
        </button>
      </div>

      {/* Team Members Table */}
      <TeamMembersTable />
    </div>
  );
};

export default TeamMembersOverview;
