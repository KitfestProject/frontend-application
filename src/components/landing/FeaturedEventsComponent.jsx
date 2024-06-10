import { FeaturedEvents } from "@/components";

const FeaturedEventsComponent = () => {
  return (
    <section className="container mx-auto pb-10 md:pb-20">
      <div className="flex justify-between items-center">
        <h2 className="text-[30px] md:text-[35px] tracking-tighter font-bold text-dark dark:text-slate-200 mb-5">
          Featured Events
        </h2>
      </div>

      {/* Features Events */}
      <FeaturedEvents />
    </section>
  );
};

export default FeaturedEventsComponent;
