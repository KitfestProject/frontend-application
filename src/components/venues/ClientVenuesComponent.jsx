import React, { useEffect, useState } from "react";
import {
  PrimaryButton,
  VenueTopPickSkeleton,
  VenueTopPick,
  VenueSkeleton,
} from "@/components";

const ClientVenuesComponent = () => {
  const [loading, setLoading] = useState(true);

  const generateEditorPicksSkeleton = () => {
    const editors = [];
    for (let i = 0; i < 2; i++) {
      editors.push(<VenueTopPickSkeleton key={i} />);
    }

    return editors;
  };

  const generateVenuesSkeleton = () => {
    const venues = [];

    for (let i = 0; i < 8; i++) {
      venues.push(<VenueSkeleton key={i} />);
    }

    return venues;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="dark:text-white">
      <div className="container py-10">
        <h1 className="text-[40px] md:text-[40px] font-[800] tracking-tighter leading-none text-dark mb-5">
          Venues
        </h1>

        <div className="max-w-[700px]">
          <p className="text-gray">
            Discover the best theatres and performance spaces across Kenya. Our
            Venue Profiles provide detailed information about each venue,
            including seating capacity, facilities, location, and history.
          </p>
        </div>

        {/* Top Picks */}
        <div className="mt-10 border-b border-gray/50 pb-10">
          <h1 className="text-3xl font-bold tracking-tighter text-dark mb-5">
            Top picks
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-10">
            {loading && generateEditorPicksSkeleton()}

            {!loading && (
              <>
                <VenueTopPick
                  title="Kenyan  National Theatre"
                  image="/images/top-pick-venue-1.svg"
                  summary="Visit the Kenya National Theatre and immerse yourself in the rich tapestry of Kenyan performing arts."
                  timestamp="Harry Thuku Rd, Nairobi"
                />
                <VenueTopPick
                  title="Nairobi Sinema"
                  image="/images/top-pick-venue-2.svg"
                  summary="Visit the Kenya National Theatre and immerse yourself in the rich tapestry of Kenyan performing arts."
                  timestamp="Harry Thuku Rd, Nairobi"
                />
              </>
            )}
          </div>
        </div>

        {/* Venues */}
        <div className="grid grid-cols-1 md:grid-cols-4 pt-10 pb-16 gap-5">
          {!loading &&
            [1, 2, 3, 4, 5, 6, 7, 8].map((venue) => (
              <div
                key={venue}
                className="bg-white dark:bg-darkGray rounded-lg shadow-md"
              >
                <img
                  src={`/images/venue-${venue}.svg`}
                  alt="Venue Image"
                  className="object-cover w-full h-[265px] rounded-t-lg"
                />

                <div className="p-5 dark:border dark:border-gray/50 rounded-b-md">
                  <h5 className="text-lg font-bold text-gray-800 dark:text-gray-100 leading-tight mb-3 text-dark dark:text-slate-100 tracking-tighter">
                    Kenyan National Theatre
                  </h5>
                  <p className="text-xs text-gray dark:text-gray-300 dark:text-slate-100">
                    Harry Thuku Rd, Nairobi
                  </p>
                </div>
              </div>
            ))}

          {/* Skeleton */}
          {loading && generateVenuesSkeleton()}
        </div>

        {/* Load More Button */}
        <div className="grid place-content-center">
          <PrimaryButton title="Load More" />
        </div>
      </div>
    </div>
  );
};

export default ClientVenuesComponent;
