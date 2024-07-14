import {
  DynamicHelmet,
  UserNavigation,
  CreateBlogsComponent,
} from "@/components";

const CreateBlogs = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 h-auto min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Create Blogs"
        description="Create blogs and manage them."
      />
      <UserNavigation />

      <CreateBlogsComponent />
    </div>
  );
};

export default CreateBlogs;
