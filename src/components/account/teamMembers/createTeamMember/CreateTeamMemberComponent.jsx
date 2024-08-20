import {
  CreateTeamMemberSidebar,
  CreateTeamMembersOverview,
} from "@/components";

const CreateTeamMemberComponent = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-8">
        {/* Create Event Sidebar */}
        <CreateTeamMemberSidebar title="Create Team Member" />

        <CreateTeamMembersOverview />
      </div>
    </section>
  );
};

export default CreateTeamMemberComponent;
