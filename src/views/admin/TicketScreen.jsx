import { DynamicHelmet, UserNavigation, TicketsComponent } from "@/components";

const TicketScreen = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="Tickets Management Page!"
        description="Manage all events tickets."
        keywords="Tickets"
      />

      <UserNavigation />

      <TicketsComponent />
    </div>
  );
};

export default TicketScreen;
