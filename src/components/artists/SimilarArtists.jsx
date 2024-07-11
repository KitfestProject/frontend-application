import { useEffect, useState } from "react";
import { SimilarArtistsSkeleton } from "@/components";

const SimilarArtists = () => {
  const [loading, setLoading] = useState(true);

  function generateSimilarArtistSkeleton() {
    const events = [];
    for (let i = 0; i < 6; i++) {
      events.push(<SimilarArtistsSkeleton key={i} />);
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
    <div className="w-full mb-20">
      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 text-primary mb-3">
        Similar Artists
      </h4>

      <div className="overflow-x-auto">
        {" "}
        {/* Enable horizontal scroll */}
        {!loading && (
          <div className="flex gap-5 whitespace-nowrap">
            {" "}
            {/* Ensure flex container's width fits the content */}
            {[1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7].map((artist, index) => (
              <div
                key={index}
                className="min-w-56 md:w-80 bg-gray-300 dark:bg-darkGray rounded-lg"
              >
                <img
                  src={`/images/profile-${artist}.jpg`}
                  alt="Artist Profile"
                  className="object-cover min-w-56 md:w-80 rounded-lg"
                />
                <h5 className="text-lg font-bold text-gray-800 dark:text-gray-100 mt-3 text-primary tracking-tighter">
                  Artist Name
                </h5>
                <p className="text-sm text-gray dark:text-gray-300 dark:text-slate-100">
                  scriptwriter, Thespian
                </p>
              </div>
            ))}
          </div>
        )}
        {/* Skeleton */}
        {loading && (
          <div className="flex flex-col md:flex-row items-center gap-5">
            {generateSimilarArtistSkeleton()}
          </div>
        )}
      </div>
    </div>
  );
};

export default SimilarArtists;
