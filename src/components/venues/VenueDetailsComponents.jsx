import {
  OtherVenuesComponent,
  TheaterAdvertComponent,
  TheaterContentComponent,
  TheaterReviewsComponent,
} from "@/components";
import { StateContext } from "@/context/ContextProvider";
import { useContext } from "react";

const VenueDetailsComponents = () => {
  const { venueDetails, eventData } = useContext(StateContext);
  return (
    <div className="container py-10">
      <h1 className="text-[30px] md:text-[40px] font-[800] tracking-tighter leading-none text-primary mb-2 md:mb-3">
        {venueDetails?.name}
      </h1>

      <div className="max-w-[700px]">
        <p className="text-gray dark:text-gray font-semibold text-sm md:text-lg">
          {venueDetails?.location}
        </p>
      </div>

      {/* Theater Banner image */}
      <div className="mt-5 md:mt-10 bg-primary rounded-lg">
        <img
          src={venueDetails?.image}
          alt="Theater Banner"
          className="w-full md:h-[480px] object-cover rounded-lg"
        />
      </div>

      {/* Theater Details Section */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Theater Content Information */}
        <TheaterContentComponent venueDetails={venueDetails} />

        {/* Theater Advert Section */}
        <TheaterAdvertComponent />
      </div>

      {/* Theater Reviews */}
      <TheaterReviewsComponent />

      {/* Other Venues */}
      <OtherVenuesComponent />
    </div>
  );
};

export default VenueDetailsComponents;
