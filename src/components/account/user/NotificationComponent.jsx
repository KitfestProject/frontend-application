import { AccountSidebarMenu, NotificationsTable } from "@/components";

const NotificationComponent = () => {
  return (
    <section className="container mx-auto">
      <div className="py-5 md:py-10 flex gap-10">
        <AccountSidebarMenu />

        <div className="w-full md:w-[75%]">
          {/* Notifications Table Component */}
          <NotificationsTable />
        </div>
      </div>
    </section>
  );
};

export default NotificationComponent;
