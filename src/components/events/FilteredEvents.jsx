import { useEffect, useState } from "react";
import { events } from "@/components/data/StaticData";
import FilteredEventsComponent from "./FilteredEventsComponent";
import { PrimaryButton } from "@/components";

const FilteredEvents = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-1 h-full">
      <FilteredEventsComponent events={events} loading={loading} />

      {/* Load More Button */}
      <div className="flex justify-center items-center mt-10">
        <PrimaryButton handleClick={() => setLoading(true)} title="Load More" />
      </div>
    </div>
  );
};

export default FilteredEvents;
