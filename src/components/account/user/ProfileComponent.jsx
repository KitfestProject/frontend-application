import { AccountSidebarMenu, MyTicketsComponent } from "@/components";

const ProfileComponent = () => {
  return (
    <section className="container mx-auto">
      <div className="py-5 md:py-10 flex gap-5">
        <div className="w-[25%] hidden md:block">
          <AccountSidebarMenu />
        </div>

        <MyTicketsComponent />
      </div>
    </section>
  );
};

export default ProfileComponent;
