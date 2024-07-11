import { useEffect, useState } from "react";
import { UpcomingEventSkeleton } from "@/components";

const ArtistUpcomingEvents = () => {
  const [loading, setLoading] = useState(true);

  function generateUpcomingEventSkeleton() {
    const events = [];
    for (let i = 0; i < 3; i++) {
      events.push(<UpcomingEventSkeleton key={i} />);
    }
    return events;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#F2F1F1] dark:bg-gray/50 p-5 rounded shadow-md">
      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 text-primary mb-3">
        Upcoming Events
      </h4>

      <div className="flex flex-col gap-5">
        {!loading &&
          [1, 2, 3].map((event, index) => (
            <div
              key={index}
              className="flex items-center justify-between hover:bg-white dark:bg-gray rounded-lg p-3 hover:shadow-md cursor-pointer"
            >
              <div className="flex items-center gap-5">
                <div className="w-[150px] bg-gray-300 dark:bg-darkGray rounded-lg">
                  <img
                    className="object-cover w-full h-full rounded-lg"
                    src={`/images/Event-${event}.png`}
                    alt="Event"
                  />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-primary">
                    Event Title
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Date: 12th December 2021
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Nairobi Cinema Hall, Nairobi
                  </p>
                </div>
              </div>
            </div>
          ))}

        {/* Skeleton */}
        {loading && generateUpcomingEventSkeleton()}
      </div>
    </div>
  );
};

export default ArtistUpcomingEvents;
