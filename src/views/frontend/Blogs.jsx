import { DynamicHelmet, Navigation, Footer } from "../../components";

const Blogs = () => {
  return (
    <div className="dark:bg-dark min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Blogs Page"
        description="Read our latest blogs and get informed."
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default Blogs;
