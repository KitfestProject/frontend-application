import React from "react";
import { AccountSidebarMenu, MyTicketsComponent } from "../../components";

const ProfileComponent = () => {
  return (
    <section className="container mx-auto">
      <div className="py-5 md:py-10 flex gap-5">
        <div className="w-[25%] hidden md:block">
          <div className="sticky top-[120px]">
            <h1 className="text-3xl font-bold text-dark dark:text-slate-100">
              My Profile
            </h1>

            <AccountSidebarMenu />
          </div>
        </div>

        <div className="w-full md:w-[75%] md:px-5 px-1">
          <h1 className="text-2xl font-bold text-dark dark:text-slate-100">
            My Tickets
          </h1>

          <MyTicketsComponent />
        </div>
      </div>
    </section>
  );
};

export default ProfileComponent;
