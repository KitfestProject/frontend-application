import React from "react";
import { AccountSidebarMenu, MyTicketsComponent } from "../../../components";

const ProfileComponent = () => {
  return (
    <section className="container mx-auto">
      <div className="py-5 md:py-10 flex gap-5">
        <AccountSidebarMenu />

        <MyTicketsComponent />
      </div>
    </section>
  );
};

export default ProfileComponent;
