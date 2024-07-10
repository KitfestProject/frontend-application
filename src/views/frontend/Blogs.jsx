import {
  DynamicHelmet,
  Navigation,
  Footer,
  ClientBlogsComponent,
  ThemeChanger,
} from "@/components";

const Blogs = () => {
  return (
    <div className="dark:bg-dark min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Blogs Page"
        description="Read our latest blogs and get informed."
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Blogs Section */}
      <ClientBlogsComponent />

      {/* Site Footer */}
      <Footer />

      {/* Theme Changer */}
      <ThemeChanger />
    </div>
  );
};

export default Blogs;
