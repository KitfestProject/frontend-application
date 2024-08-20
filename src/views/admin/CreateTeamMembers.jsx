import {
  DynamicHelmet,
  UserNavigation,
  CreateTeamMemberComponent,
} from "@/components";

const CreateTeamMembers = () => {
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
