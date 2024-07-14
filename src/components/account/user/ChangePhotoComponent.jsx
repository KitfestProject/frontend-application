import { AccountSidebarMenu } from "@/components";

const ChangePhotoComponent = () => {
  return (
    <section className="container mx-auto">
      <div className="py-5 md:py-10 flex">
        <div className="w-[25%] hidden md:block">
          <AccountSidebarMenu />
        </div>

        <div className="w-full md:w-[75%]"></div>
      </div>
    </section>
  );
};

export default ChangePhotoComponent;
