import {
  ThemeChanger,
  DynamicHelmet,
  UserNavigation,
  BlogsComponent,
} from "@/components";

const Blogs = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - My Events"
        description="View your events and manage them. You are accessing this page because you are an authenticated admin."
      />
      <UserNavigation />

      <BlogsComponent />

      <ThemeChanger />
    </div>
  );
};

export default Blogs;
