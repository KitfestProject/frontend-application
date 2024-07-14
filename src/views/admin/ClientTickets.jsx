import { DynamicHelmet, UserNavigation, ProfileComponent } from "@/components";

const ClientTickets = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - My Tickets"
        description="Find all your tickets organized in your account."
      />
      <UserNavigation />

      <ProfileComponent />
    </div>
  );
};

export default ClientTickets;
