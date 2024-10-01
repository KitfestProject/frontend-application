import {
  DynamicHelmet,
  UserNavigation,
  CategoriesComponent,
} from "@/components";

const CreateCategories = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Create even, artist and blogs categories"
        description="Create categories for your events, artists and blogs. This will help you to organize your events and activities."
      />
      <UserNavigation />

      <CategoriesComponent />
    </div>
  );
};

export default CreateCategories;
