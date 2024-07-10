import React, { useEffect, useState } from "react";
import { PrimaryButton } from "@/components";

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

const VenueTopPickSkeleton = () => {
  return (
    <div className="bg-white dark:bg-darkGray w-full md:w-1/2 shadow-md transition ease-in-out delay-150 min-w-md animate-pulse">
      <div className="flex flex-col md:flex-row w-full">
        {/* Venue Image */}
        <div className="w-full md:w-1/2 bg-gray-300 dark:bg-darkGray">
          <div className="w-full h-[300px] bg-gray flex justify-center items-center">
            <img
              src={"/images/kitft-logo-dark.png"}
              alt={"Skeleton Image"}
              className="w-[150px]  object-cover  mb-3"
            />
          </div>
        </div>

        {/* Venue Content */}
        <div className="w-full md:w-1/2 p-5 dark:border dark:border-gray/50 dark:rounded-r-md">
          <div className="flex flex-col justify-between h-full">
            {/* Venue Details Area */}
            <div className="">
              <h3 className="bg-gray w-full h-3 rounded-full mb-2"></h3>
              <h3 className="bg-gray w-[200px] h-3 rounded-full mb-5"></h3>
              <p className="bg-gray h-3 w-full rounded-full mb-2"></p>
              <p className="bg-gray h-3 w-full rounded-full mb-2"></p>
              <p className="bg-gray h-3 w-full rounded-full mb-2"></p>
              <p className="bg-gray h-3 w-full rounded-full mb-2"></p>
              <p className="bg-gray h-3 w-full rounded-full mb-2"></p>
              <p className="bg-gray h-3 w-[80%] rounded-full mb-2"></p>
              <p className="bg-gray h-3 w-[130px] rounded-full mb-2"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VenueTopPick = ({ title, image, summary, timestamp }) => {
  return (
    <div className="bg-white dark:bg-darkGray w-full md:w-1/2 shadow-md">
      <div className="flex flex-col md:flex-row w-full">
        {/* Venue Image */}
        <div className="w-full md:w-1/2 bg-gray-300 dark:bg-darkGray">
          <img
            src={image}
            alt="Venue Image"
            className="w-full h-[300px] object-cover"
          />
        </div>

        {/* Venue Content */}
        <div className="w-full md:w-1/2 p-5 dark:border dark:border-gray/50 dark:rounded-r-md">
          <div className="flex flex-col justify-between h-full">
            {/* Venue Details Area */}
            <div className="">
              <h3 className="text-dark text-xl font-bold tracking-tighter leading-tight mb-2">
                {title}
              </h3>
              <p className="text-xs text-gray mb-5 font-semibold">
                {timestamp}
              </p>
              <p className="text-sm text-gray">{summary}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VenueSkeleton = () => {
  return (
    <div className="bg-white dark:bg-darkGray rounded-lg shadow-md">
      <div className="w-full bg-gray-300 rounded-lg transition ease-in-out delay-150 animate-pulse">
        <div className="h-[265px] bg-gray flex justify-center items-center rounded-t-lg mb-3">
          <img
            src={"/images/kitft-logo-dark.png"}
            alt={"Skeleton Image"}
            className="w-[150px] object-cover rounded-t-lg mb-3"
          />
        </div>

        <div className="p-5 dark:border dark:border-gray/50 rounded-b-md">
          <h5 className="bg-gray w-[200px] h-3 rounded-full mb-3"></h5>
          <p className="bg-gray h-3 w-full rounded-full mb-2"></p>
        </div>
      </div>
    </div>
  );
};

export default ClientVenuesComponent;
