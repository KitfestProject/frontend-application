import { AccountSidebarMenu } from "@/components";

const ChangePasswordComponent = () => {
  return (
    <section className="container mx-auto">
      <div className="py-5 md:py-10 flex">
        <AccountSidebarMenu />

        <div className="w-full md:w-[75%]"></div>
      </div>
    </section>
  );
};

export default ChangePasswordComponent;
