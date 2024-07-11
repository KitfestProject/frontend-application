import {
  DynamicHelmet,
  Navigation,
  Footer,
  ClientBlogsDetailsComponent,
  ThemeChanger,
} from "@/components";

const BlogDetails = () => {
  return (
    <div className="dark:bg-dark min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Blog Details"
        description="Read more details about this blog."
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Blogs Section */}
      <ClientBlogsDetailsComponent />

      {/* Site Footer */}
      <Footer />

      {/* Theme Changer */}
      <ThemeChanger />
    </div>
  );
};

export default BlogDetails;
