import {
  OtherVenuesComponent,
  TheaterAdvertComponent,
  TheaterContentComponent,
  TheaterReviewsComponent,
} from "@/components";

const VenueDetailsComponents = () => {
  return (
    <div className="container py-10">
      <h1 className="text-[30px] md:text-[40px] font-[800] tracking-tighter leading-none text-primary mb-2 md:mb-3">
        Kenya National Theatre
      </h1>

      <div className="max-w-[700px]">
        <p className="text-gray dark:text-gray font-semibold text-sm md:text-lg">
          Harry Thuku Rd, Nairobi
        </p>
      </div>

      {/* Theater Banner image */}
      <div className="mt-5 md:mt-10">
        <img
          src="/images/venue-banner.svg"
          alt="Theater Banner"
          className="w-full md:h-[480px] object-cover rounded-lg"
        />
      </div>

      {/* Theater Details Section */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Theater Content Information */}
        <TheaterContentComponent />

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
