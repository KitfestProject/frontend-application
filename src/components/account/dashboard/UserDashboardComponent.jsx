import { AccountSidebarMenu, UserTicketPurchaseStarts } from "@/components";

const UserDashboardComponent = () => {
  return (
    <section className="container mx-auto">
      <div className="py-5 md:py-10 flex gap-10">
        <div className="w-[25%] hidden md:block">
          <AccountSidebarMenu />
        </div>

        <div className="w-full md:w-[75%]">
          {/* Dashboard Count */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
            <div className="w-full bg-white border border-gray/30 dark:bg-darkGray dark:border-gray/30 shadow-md rounded-md p-5 flex justify-center items-center">
              <div className="">
                <h5 className="font-bold text-2xl tracking-tighter text-primary dark:text-slate-100 mb-5">
                  Tickets Purchased
                </h5>
                <p className="text-gray text-3xl text-center">10</p>
              </div>
            </div>

            <div className="w-full bg-white border border-gray/30 dark:bg-darkGray dark:border-gray/30 shadow-md rounded-md p-5 flex justify-center items-center">
              <div className="">
                <h5 className="font-bold text-2xl tracking-tighter text-primary dark:text-slate-100 mb-5">
                  Notifications
                </h5>
                <p className="text-gray text-3xl text-center">0</p>
              </div>
            </div>
          </div>

          {/* User Ticket Purchase Starts */}
          <UserTicketPurchaseStarts />
        </div>
      </div>
    </section>
  );
};

export default UserDashboardComponent;
