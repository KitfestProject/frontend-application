import { DashboardSidebar, TeamMembersOverview } from "@/components";

const TeamMembersComponent = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-10">
        <div className="w-[25%] hidden md:block">
          <DashboardSidebar />
        </div>

        <TeamMembersOverview />
      </div>
    </section>
  );
};

export default TeamMembersComponent;
