import {
  DynamicHelmet,
  UserNavigation,
  TeamMembersComponent,
} from "@/components";

const TeamMembers = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Manage Team Members"
        description="Manage your team members. You are accessing this page because you are an authenticated admin."
      />
      <UserNavigation />

      <TeamMembersComponent />
    </div>
  );
};

export default TeamMembers;
