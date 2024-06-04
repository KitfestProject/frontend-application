import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import ThemeChanger from "../../components/ThemeChanger";
import DynamicHelmet from "../../components/DynamicHelmet";
import Navigation from "../../components/utils/Navigation";
import ScrollableComponent from "../../components/utils/ScrollableComponent";

import useTimeAgo from "../../hooks/useTimeAgo.mjs";
import { BiArrowBack, BiShareAlt, BiSolidHeart } from "react-icons/bi";
import TicketTypeSelector from "../../components/utils/TicketTypeSelector";
import EventDetailsComponent from "../../components/events/EventDetailsComponent";

const EventDetails = () => {
  const { formatEventDate } = useTimeAgo();
  const location = useLocation();
  const eventData = location.state.event;

  return (
    <div className="dark:bg-dark min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - All events page."
        description="KITFest is an immersive and enlightening theatrical experience, where diverse performances and educational opportunities come together to inspire and connect artists and audiences from around the world, as well as enjoy the magical Kenya through tourism and cultural experiences."
        seoImage={eventData.image}
        seoTitle={eventData.title}
        seoDescription={eventData.description}
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Event Burner Area */}
      <section className="">
        <div className="h-[calc(100vh-300px)] md:h-[calc(100vh-400px)] relative">
          <img
            src={eventData.image}
            alt={eventData.title}
            className="w-full h-full object-cover object-top"
          />

          {/* Event Details Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
            <div className="container mx-auto h-full flex items-center">
              <div className="text-dark bg-white dark:bg-darkGray w-[800px] mx-auto rounded-md text-center p-5 md:py-10 md:px-20">
                <h5 className="text-xl font-bold text-dark dark:text-slate-200 uppercase mb-5">
                  {formatEventDate(eventData.date)}
                </h5>

                <h1 className="text-4xl font-bold text-primary dark:text-white mb-5">
                  {eventData.title}
                </h1>

                <p className="text-base text-gray-500 dark:text-gray-400 mt-2 dark:text-slate-100">
                  {eventData.description}
                </p>

                {/* Share and like buttons */}
                <div className="flex justify-center mt-5 gap-3 md:gap-5">
                  <button className="bg-darkGray dark:bg-gray text-white px-5 p-1 md:py-2 rounded-[50px] flex items-center shadow-md">
                    <BiSolidHeart className="mr-2" /> 345
                  </button>
                  <button className="bg-darkGray dark:bg-gray text-white px-5 p-1 md:py-2 rounded-[50px] flex items-center shadow-md">
                    <BiShareAlt className="mr-2" /> 500
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Back */}
          <button
            className="absolute top-10 left-10 bg-white dark:bg-darkGray text-dark dark:text-slate-200 p-2 rounded-full shadow-md"
            onClick={() => window.history.back()}
          >
            <BiArrowBack />
          </button>
        </div>
      </section>

      {/* EVENT DETAILS SECTION */}
      <section className="py-10 md:py-20 bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
            <div className="col-span-2 mb-20 md:mb-0">
              {/* Timing and Location */}
              <h3 className="text-2xl font-bold text-dark dark:text-slate-200 mb-10">
                Timing and location
              </h3>

              {/* Event Details Component */}
              <EventDetailsComponent eventData={eventData} />
            </div>

            {/* PRICE SECTION */}
            <div className="col-span-1">
              <h3 className="text-2xl font-bold text-dark dark:text-slate-200 mb-10">
                Price
              </h3>

              {/* Ticket Selection */}
              <div className="w-full">
                {/* Ticket Selection component */}
                <TicketTypeSelector />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Theme Changer */}
      <ThemeChanger />
    </div>
  );
};

export default EventDetails;
