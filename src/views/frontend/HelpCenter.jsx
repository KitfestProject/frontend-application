import { Footer, Navigation, DynamicHelmet } from "@/components";
import FAQ from "../../components/faq/faq";

const HelpCenter = () => {
  return (
    <div className="dark:bg-dark min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Help Center"
        description="Get assistance from our team members. We are here to answer your queries."
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Help Center Content */}
      <FAQ />

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default HelpCenter;
