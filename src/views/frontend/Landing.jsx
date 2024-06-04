import React, { useEffect, useState } from "react";
import {
  upcomingEvents,
  categories,
  blogsData,
} from "../../components/data/StaticData";
import useThemeStore from "../../store/UseThemeStore";
import useScreenSize from "../../hooks/useScreenSize.mjs";
import {
  Modal,
  Footer,
  Navigation,
  WhiteButton,
  ThemeChanger,
  DynamicHelmet,
  CustomDropdown,
  FeaturedEvents,
  UniversalButton,
  SearchComponent,
  ScrollableComponent,
  TheaterBlogsSection,
  TheaterEventsScroll,
  UniversalOutlineButton,
} from "../../components";
import { useWelcomePopUp } from "../../store/UseWelcomePopUp";

const Landing = () => {
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const [loading, setLoading] = useState(true);
  const { showWelcomePopUp, hideWelcomePopUp } = useWelcomePopUp();

  const isMobile = useScreenSize();

  const toggleShowModel = () => {
    hideWelcomePopUp();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );

  // Return render KITFT landing page.
  return (
    <>
      <div className="dark:bg-dark min-h-screen w-full">
        <DynamicHelmet
          title="KITFT - Welcome to Kenya international Theater Festival Trust"
          description="KITFest is an immersive and enlightening theatrical experience, where diverse performances and educational opportunities come together to inspire and connect artists and audiences from around the world, as well as enjoy the magical Kenya through tourism and cultural experiences."
        />

        {/* Navigation Section */}
        <Navigation />

        {/* Hero Section */}
        <section className="h-[650px] relative dark:border-b dark:border-slate-200 mb-10 md:mb-20">
          <img
            src="/images/landing.png"
            alt="Landing page image"
            className="w-full h-full object-cover"
          />

          {/* Image overlay */}
          <div className="absolute top-0 left-0 w-full h-[650px] bg-black bg-opacity-55">
            <div className="flex flex-col items-center justify-center h-full ">
              <h1 className="text-[50px] md:text-[60px] font-[800] tracking-tighter leading-none text-slate-100 text-center mb-5">
                Experience the Magic <br /> of Kenyan Theatre
              </h1>
              <p className="text-base md:text-lg text-white text-center font-light leading-tight">
                Immerse yourself in the vibrant world of Kenyan theatre and{" "}
                <br className="hidden md:block" />
                discover the rich cultural heritage of our nation through{" "}
                <br className="hidden md:block" />
                captivating performances, thought-provoking stories, and{" "}
                <br className="hidden md:block" />
                unforgettable experiences.
              </p>
              <div className="flex gap-5 mt-5">
                <UniversalButton title="Learn more" />
                <UniversalOutlineButton title="Get started" />
              </div>
            </div>
          </div>

          {/* Search and location filter */}
          <SearchComponent
            classes={"absolute -bottom-8 left-0 w-full hidden md:block"}
            title={"Search events, artists, and more"}
          />
        </section>

        {/* Upcoming Events Section */}
        <section className="container mx-auto py-5 md:py-20">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-[30px] md:text-[45px] tracking-tighter font-bold text-dark dark:text-slate-200 mb-3 md:mb-0">
              Upcoming Events
            </h2>

            {/* Event Filters */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
              <CustomDropdown
                className=""
                title="Sort By Week"
                data={["Sort By Week", "This Week", "Next Week", "This Month"]}
              />
              <CustomDropdown
                className=""
                title="Event Type"
                data={[
                  "Event Type",
                  "Music",
                  "Dance",
                  "Theatre",
                  "Comedy",
                  "Art",
                  "Fashion",
                  "Food",
                ]}
              />
              <CustomDropdown
                className=""
                title="Any Category"
                data={[
                  "Any Category",
                  "Music",
                  "Dance",
                  "Theatre",
                  "Comedy",
                  "Poetry",
                  "Art",
                  "Fashion",
                  "Food",
                ]}
              />
            </div>
          </div>

          <div className="w-full my-3">
            <TheaterEventsScroll
              upcomingEventData={upcomingEvents}
              loading={loading}
            />
          </div>
        </section>

        {/* Featured Events Section */}
        <section className="container mx-auto pb-10 md:pb-20">
          <div className="flex justify-between items-center">
            <h2 className="text-[30px] md:text-[45px] tracking-tighter font-bold text-dark dark:text-slate-200 mb-5">
              Featured Events
            </h2>
          </div>

          {/* Features Events */}
          <FeaturedEvents events={upcomingEvents} loading={loading} />
        </section>

        {/* Explore Categories Section */}
        <section className="pt-10 bg-secondary dark:bg-darkGray pb-10 md:pb-20">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-[36px] tracking-tighter font-bold text-slate-100 dark:text-slate-200">
                Explore Categories
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-10">
              {categories.slice(0, 6).map((event, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-primary shadow-md rounded-lg flex justify-center items-center flex-col py-10"
                >
                  <div className="w-[80px] h-[80px] bg-white rounded mb-2 p-2">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover rounded-t-lg mb-3"
                    />
                  </div>
                  <h3 className="text-xl font-normal text-dark dark:text-slate-200 mb-3">
                    {event.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Theater Blogs Section */}
        <section className="container mx-auto py-10 md:py-20 w-full">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-5">
            <h2 className="text-[30px] md:text-[45px] tracking-tighter font-bold text-dark dark:text-slate-200 mb-3 md:mb-0">
              Theater Blogs
            </h2>

            {/* View All Blogs */}
            <UniversalButton
              title="View All Blogs"
              handleClick={() => {}}
              classes=""
            />
          </div>
          <p className="text-gray text-lg md:text-xl tracking-tighter mb-5 dark:text-slate-100">
            Stay up to date with the latest news, reviews, interviews, and
            articles related to Kenyan theater. Explore different categories or
            tags to find content that interests you. Subscribe to our blog for
            regular updates.
          </p>

          {/* Theater Blogs scroll section */}
          <div className="w-full">
            <TheaterBlogsSection blogsData={blogsData} loading={loading} />
          </div>
        </section>

        {showWelcomePopUp && (
          <Modal onClose={toggleShowModel} classes={"p-5"}>
            <div className="flex flex-col gap-2 justify-center items-center h-[400px] py-5">
              <img
                src={
                  isDarkMode
                    ? "/images/kitft-logo-dark.png"
                    : "/images/kitft-logo-light.png"
                }
                className="w-[150px]"
                alt=""
              />
              <h1 className="text-primary text-[50px] md:text-[60px] font-[800] tracking-tighter leading-none dark:text-slate-100 text-center">
                Welcome to <br />
                Theater KE
              </h1>
              <p className="text-dark text-base md:text-lg dark:text-white text-center font-light leading-tight md:px-20">
                The Kenya International Theatre Festival Trust is dedicated to
                fostering the growth and development of the theatre and
                performing arts industry by providing resources and support for
                artists and projects.
              </p>

              {/* Join Button */}
              <div className="">
                <WhiteButton
                  title="Join Now"
                  handleClick={() => {}}
                  classes="mt-5"
                />
              </div>
            </div>
          </Modal>
        )}

        {/* Footer */}
        <Footer />

        {/* Theme Changer */}
        <ThemeChanger />
      </div>
    </>
  );
};

export default Landing;
