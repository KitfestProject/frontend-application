import React, { useEffect, useState } from "react";
import { FeaturedEvents } from "../../components";
import { upcomingEvents } from "../data/StaticData";

const FeaturedEventsComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container mx-auto pb-10 md:pb-20">
      <div className="flex justify-between items-center">
        <h2 className="text-[30px] md:text-[45px] tracking-tighter font-bold text-dark dark:text-slate-200 mb-5">
          Featured Events
        </h2>
      </div>

      {/* Features Events */}
      <FeaturedEvents events={upcomingEvents} loading={loading} />
    </section>
  );
};

export default FeaturedEventsComponent;
