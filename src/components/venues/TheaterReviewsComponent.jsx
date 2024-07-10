import { ReviewCardComponent, ReviewCardSkeleton } from "@/components";
import { useEffect, useState } from "react";

const TheaterReviewsComponent = () => {
  const [loading, setLoading] = useState(true);

  const generateReviewCardSkeleton = () => {
    const events = [];
    for (let i = 0; i < 4; i++) {
      events.push(<ReviewCardSkeleton key={i} />);
    }

    return events;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-10 border-t-[0.9px] border-gray/30 pt-10">
      <h5 className="text-primary dark:text-gray text-xl font-semibold tracking-tighter">
        Reviews
      </h5>
      <div className="overflow-x-auto">
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          {!loading && (
            <>
              <ReviewCardComponent />
              <ReviewCardComponent />
              <ReviewCardComponent />
              <ReviewCardComponent />
            </>
          )}

          {loading && generateReviewCardSkeleton()}
        </div>
      </div>
    </div>
  );
};

export default TheaterReviewsComponent;
