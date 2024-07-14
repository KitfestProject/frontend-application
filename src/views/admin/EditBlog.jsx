import { DynamicHelmet, UserNavigation, EditBlogComponent } from "@/components";

const EditBlog = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 h-auto min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Create Blogs"
        description="Edit your blogs and manage them."
      />
      <UserNavigation />

      <EditBlogComponent />
    </div>
  );
};

export default EditBlog;
