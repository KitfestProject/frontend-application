import {
  Modal,
  ModalLarge,
  PrimaryButton,
  AdvertCardComponent,
  UpcomingVenueSkeleton,
} from "@/components";
import { useEffect, useState } from "react";

const TheaterAdvertComponent = () => {
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showSeatMapModal, setShowSeatMapModal] = useState(false);

  const toggleLocationModal = () => setShowLocationModal((prev) => !prev);
  const toggleSeatMapModal = () => setShowSeatMapModal((prev) => !prev);

  const longitude = 36.81315417576406;
  const latitude = -1.2783844356191918;

  const [loading, setLoading] = useState(true);

  const generateUpcomingEventsSkeleton = () => {
    const events = [];
    for (let i = 0; i < 4; i++) {
      events.push(<UpcomingVenueSkeleton key={i} />);
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
    <>
      <div className="w-full md:w-[30%]">
        <div className="bg-[#F2F1F1] dark:bg-gray p-5 rounded-lg shadow-md my-5 md:my-10">
          <h5 className="text-dark text-2xl font-bold tracking-tighter mb-5">
            Upcoming Events
          </h5>

          <div className="flex flex-col gap-5 max-h-[700px] overflow-y-scroll">
            {loading && generateUpcomingEventsSkeleton()}

            {!loading && (
              <>
                <AdvertCardComponent
                  image="/images/Event-1.png"
                  title="The Lion King: Musical"
                  date="15th - 30th September 2021"
                />
                <AdvertCardComponent
                  image="/images/Event-2.png"
                  title="The Lion King: Musical"
                  date="15th - 30th September 2021"
                />
                <AdvertCardComponent
                  image="/images/Event-3.png"
                  title="The Lion King: Musical"
                  date="15th - 30th September 2021"
                />
              </>
            )}
          </div>

          {/* Location and SeatMap Buttons */}
          <div className="flex flex-col gap-3 mt-5">
            <PrimaryButton
              title="Get Directions"
              handleClick={toggleLocationModal}
            />
            <PrimaryButton
              title="View Seat Map"
              handleClick={toggleSeatMapModal}
            />
          </div>
        </div>
      </div>

      {/* Location Direction Modal */}
      {showLocationModal && (
        <Modal onClose={toggleLocationModal}>
          <div className="p-5">
            <h4 className="text-xl md:text-3xl text-primary font-bold tracking-tighter">
              Venue Location Map
            </h4>

            <div className="flex">
              {/* Map Area */}
              <div className="flex-1 mt-5 max-h-[500px] h-full">
                <iframe
                  title="Google Map"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.825243644997!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f178b29827375%3A0xc2d7a4329db9f683!2sKenya%20International%20Theatre%20Festival%20(KITFest)!5e0!3m2!1sen!2ske!4v1715168628123!5m2!1sen!2ske`}
                  width="100%"
                  height="500px"
                  loading="lazy"
                  className="rounded-l-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* SeatMap Modal */}
      {showSeatMapModal && (
        <ModalLarge onClose={toggleSeatMapModal}>
          <div className="p-5">
            <h4 className="text-xl md:text-3xl text-primary font-bold tracking-tighter">
              Seat Map
            </h4>

            <div className="flex">
              {/* Map Area */}
              <div className="flex-1 mt-5 h-full">
                <img
                  src="/images/SeatMap.svg"
                  alt="Seat Map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </ModalLarge>
      )}
    </>
  );
};



export default TheaterAdvertComponent;
