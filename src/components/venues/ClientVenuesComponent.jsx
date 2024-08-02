import React, { useContext, useEffect, useState } from "react";
import {
  PrimaryButton,
  VenueTopPickSkeleton,
  VenueTopPick,
  VenueSkeleton,
} from "@/components";
import { StateContext } from "@/context/ContextProvider";
import { useNavigate } from "react-router-dom";
import {
  BiSolidChevronLeftCircle,
  BiSolidChevronRightCircle,
} from "react-icons/bi";

const ClientVenuesComponent = () => {
  const { venueData, stateLoading, start, limit, setStart } = useContext(StateContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // console.log(venueData);

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

  const handleNextPage = () => setStart((prevStart) => prevStart + limit);
  const handlePrevPage = () =>
    setStart((prevStart) => Math.max(prevStart - limit, 0));

  const isNextDisabled = venueData?.length < limit;
  const isPrevDisabled = start === 0;

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
            {stateLoading && generateEditorPicksSkeleton()}

            {!stateLoading && (
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
          {!stateLoading &&
            venueData?.map((venue, index) => (
              <div
                onClick={() => navigate(`/site-venues/${venue._id}`)}
                key={index}
                className="bg-white dark:bg-darkGray rounded-lg shadow-md"
              >
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="object-cover w-full h-[265px] rounded-t-lg"
                />

                <div className="p-5 dark:border dark:border-gray/50 rounded-b-md">
                  <h5 className="text-lg font-bold text-gray-800 dark:text-gray-100 leading-tight mb-3 text-dark dark:text-slate-100 tracking-tighter">
                    {venue.name}
                  </h5>
                  <p className="text-xs text-gray dark:text-gray-300 dark:text-slate-100">
                    {venue.location}
                  </p>
                </div>
              </div>
            ))}

          {/* Skeleton */}
          {stateLoading && generateVenuesSkeleton()}
        </div>

        {/* Next and previous Buttons */}
        <div className="flex justify-start gap-3 mt-5">
          <button
            onClick={handlePrevPage}
            className={`bg-primary text-white py-2 px-5 rounded-md text-xs flex justify-between items-center gap-2 ${
              isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isPrevDisabled}
          >
            <BiSolidChevronLeftCircle />
            Previous
          </button>

          <button
            onClick={handleNextPage}
            className={`bg-primary text-white py-2 px-5 rounded-md text-xs flex justify-between items-center gap-2 ${
              isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isNextDisabled}
          >
            Next
            <BiSolidChevronRightCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientVenuesComponent;
