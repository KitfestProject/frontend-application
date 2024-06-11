import { useContext, useEffect, useState } from "react";
import { categories, upcomingEvents } from "@/components/data/StaticData";
import useScreenSize from "@/hooks/useScreenSize.mjs";
import { BiFilterAlt, BiSearch, BiX } from "react-icons/bi";
import {
  Modal,
  Footer,
  Navigation,
  ThemeChanger,
  DynamicHelmet,
  PrimaryButton,
  FilteredEvents,
  SearchBarFilter,
  SearchComponent,
  ScrollableComponent,
  RecommendedEventsSlider,
} from "@/components";
import { FaSliders } from "react-icons/fa6";
import { SearchContext } from "@/context/SearchContext";

const Events = () => {
  const { searchData, setSearchData } = useContext(SearchContext);
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
            <div className="flex justify-center items-center">
              <div className="sticky bg-white dark:bg-darkGray rounded-md flex items-center cursor-pointer border-b border-gray/10 pl-5 pr-2 w-[600px]">
                <BiSearch
                  style={{ fontSize: "28px" }}
                  className="text-primary dark:text-slate-100"
                />
                <input
                  autoComplete="off"
                  type="text"
                  name="search"
                  value={searchData.search}
                  onChange={(ev) => {
                    setSearchData((prev) => ({
                      ...prev,
                      search: ev.target.value,
                    }));
                  }}
                  placeholder={"Search events, and more"}
                  className="w-full h-[60px] p-2 text-md outline-none text-dark dark:bg-darkGray dark:rounded-md ml-3 pl-3 dark:text-slate-100 placeholder:italic placeholder:font-light"
                />

                <div className="w-[130px] flex items-center justify-center gap-2">
                  <button className="text-slate-100 dark:text-slate-100 bg-primary py-3 px-8 rounded-md">
                    Search
                  </button>
                </div>
              </div>
            </div>
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
