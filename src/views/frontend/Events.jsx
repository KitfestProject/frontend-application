import { useContext, useEffect, useState } from "react";
import { categories } from "@/components/data/StaticData";
import useScreenSize from "@/hooks/useScreenSize.mjs";
import {
  BiFilterAlt,
  BiInfoCircle,
  BiSearch,
  BiSolidCheckCircle,
} from "react-icons/bi";
import {
  Modal,
  Footer,
  Navigation,
  DynamicHelmet,
  PrimaryButton,
  FilteredEvents,
  SearchBarFilter,
  ScrollableComponent,
  RecommendedEventsSlider,
} from "@/components";
import { SearchContext } from "@/context/SearchContext";
import { EventContext } from "@/context/EventDetailsContext";
import useServerSideQueries from "@/hooks/useServerSideQueries";

const Events = () => {
  const { searchData, setSearchData } = useContext(SearchContext);
  const { start, limit, setEventData, setEventDetailsLoading } =
    useContext(EventContext);
  const [showModel, setShowModel] = useState(false);
  const isMobile = useScreenSize();
  const { getSiteEvents } = useServerSideQueries();

  useEffect(() => {
    const fetchSiteEvents = async () => {
      setEventDetailsLoading(true);
      const response = await getSiteEvents(start, limit);
      const { success, message, data } = response;

      if (!success) {
        setEventDetailsLoading(false);
        console.log(message);
        return;
      }

      setEventDetailsLoading(false);
      setEventData(data);
    };

    fetchSiteEvents();
  }, [start, limit]);

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
          <section className="text-dark pt-10 pb-10 container mx-auto">
            <h1 className="text-[35px] md:text-[35px] font-[800] tracking-tighter leading-none dark:text-slate-100 text-start mb-5">
              Search Events
            </h1>

            {/* Search and location filter */}
            <div className="flex justify-start items-center">
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
                  className="w-full h-[45px] p-2 text-md outline-none text-dark dark:bg-darkGray dark:rounded-md ml-3 pl-3 dark:text-slate-100 placeholder:italic placeholder:font-light"
                />

                <div className="w-[130px] flex items-center justify-center gap-2">
                  <button className="text-slate-100 dark:text-slate-100 bg-primary py-2 text-xs px-8 rounded-md">
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
          {/* {!isMobile && <SearchBarFilter categories={categories} />} */}

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
              <RecommendedEventsSlider />
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
      </div>
    </ScrollableComponent>
  );
};

export default Events;
