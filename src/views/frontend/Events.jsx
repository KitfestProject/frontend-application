import React, { useEffect, useState } from "react";
import DynamicHelmet from "../../components/DynamicHelmet";
import Navigation from "../../components/utils/Navigation";
import Footer from "../../components/footer/Footer";
import ScrollableComponent from "../../components/utils/ScrollableComponent";
import SearchComponent from "../../components/utils/SearchComponent";
import ThemeChanger from "../../components/ThemeChanger";
import { categories, upcomingEvents } from "../../components/data/StaticData";
import SearchBarFilter from "../../components/events/SearchBarFilter";
import FilteredEvents from "../../components/events/FilteredEvents";
import RecommendedEventsSlider from "../../components/theaterEvents/RecommendedEventsSlider";
import PrimaryButton from "../../components/utils/PrimaryButton";
import useScreenSize from "../../hooks/useScreenSize.mjs";
import { BiFilterAlt } from "react-icons/bi";
import Modal from "../../components/utils/Modal";

const Events = () => {
  const [loading, setLoading] = useState(true);
  const [showModel, setShowModel] = useState(false);
  const isMobile = useScreenSize();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleShowModel = () => {
    setShowModel(!showModel);
  };

  return (
    <ScrollableComponent>
      <div className="dark:bg-dark min-h-screen w-full">
        <DynamicHelmet
          title="KITFT - Events Page"
          description="Browse all events happening near you. Don't be left behind stay up to date with our events."
        />

        {/* Navigation Section */}
        <Navigation />

        {!isMobile && (
          <section className="text-dark pt-10 pb-20 container mx-auto">
            <h1 className="text-[35px] md:text-[45px] font-[800] tracking-tighter leading-none dark:text-slate-100 text-center mb-5">
              Search Events
            </h1>
            {/* Search and location filter */}
            <SearchComponent
              classes={""}
              title="Find the event you are interested in"
            />
          </section>
        )}

        <section
          className={`text-dark dark:text-slate-100 ${
            isMobile ? "pb-10 pt-5" : "pb-20"
          } container mx-auto flex gap-5`}
        >
          {/* Filter Sidebar */}
          {!isMobile && <SearchBarFilter categories={categories} />}

          {/* Events Section */}
          <FilteredEvents />
        </section>

        {/* Recommended Events For User */}
        <section className="py-5 md:py-20 bg-white dark:bg-transparent mb-20">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <h2 className="text-[30px] md:text-[40px] tracking-tighter font-bold text-dark dark:text-slate-200 mb-3 md:mb-0">
                Recommended For you
              </h2>

              {/* View More Button */}
              <PrimaryButton handleClick={() => {}} title="View More" />
            </div>

            <div className="w-full my-3">
              <RecommendedEventsSlider
                recommendedEvents={upcomingEvents}
                loading={loading}
              />
            </div>
          </div>
        </section>

        {/* Floating Filter Button */}
        {isMobile && (
          <button
            onClick={() => setShowModel(true)}
            className="fixed bottom-5 left-5 z-50 cursor-pointer"
          >
            <div className="bg-primary text-slate-100 dark:bg-secondary dark:text-slate-100 rounded-full flex justify-center items-center h-[60px] w-[60px] shadow-md">
              <BiFilterAlt className="text-2xl" />
            </div>
          </button>
        )}

        {/* Mobile filter Modal */}
        {isMobile && showModel && (
          <Modal onClose={toggleShowModel} classes={"h-[95%] md:h-auto"}>
            <SearchBarFilter categories={categories} />
          </Modal>
        )}

        {/* Site Footer */}
        <Footer />

        {/* Theme Changer */}
        <ThemeChanger />
      </div>
    </ScrollableComponent>
  );
};

export default Events;
