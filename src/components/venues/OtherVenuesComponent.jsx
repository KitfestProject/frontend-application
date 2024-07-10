import { useEffect, useState } from "react";
import { VenueTopPickSkeleton, MoreVenues } from "@/components";

const OtherVenuesComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const generateMoreVenueSkeleton = () => {
    const venues = [];

    for (let i = 0; i < 2; i++) {
      venues.push(<VenueTopPickSkeleton key={i} />);
    }

    return venues;
  };

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold tracking-tighter text-dark mb-5">
        More Venues
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {loading && generateMoreVenueSkeleton()}

        {!loading && (
          <>
            <MoreVenues
              title="Kenyan  National Theatre"
              image="/images/top-pick-venue-1.svg"
              summary="Visit the Kenya National Theatre and immerse yourself in the rich tapestry of Kenyan performing arts."
              timestamp="Harry Thuku Rd, Nairobi"
            />
            <MoreVenues
              title="Nairobi Sinema"
              image="/images/top-pick-venue-2.svg"
              summary="Visit the Kenya National Theatre and immerse yourself in the rich tapestry of Kenyan performing arts."
              timestamp="Harry Thuku Rd, Nairobi"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default OtherVenuesComponent;
