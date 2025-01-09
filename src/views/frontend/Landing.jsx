import {
  Modal,
  Footer,
  Navigation,
  WhiteButton,
  DynamicHelmet,
  HeroComponent,
  LandingBlogsComponent,
  TheatreCategories,
  FeaturedEventsComponent,
  UpcomingEventComponent,
} from "@/components";
import useThemeStore from "@/store/UseThemeStore";
import { useWelcomePopUp } from "@/store/UseWelcomePopUp";
import { useNavigate } from "react-router-dom";
import DarkLogo from "@/assets/kitft-logo-dark.png";
import LightLogo from "@/assets/kitft-logo-light.png";
import { useContext, useEffect } from "react";
import { EventContext } from "@/context/EventDetailsContext";
import useServerSideQueries from "@/hooks/useServerSideQueries";

const Landing = () => {
  const {
    setPageLoading,
    getUpcomingEvents,
    getFeaturedEvents,
    getRecentBlogs,
    setRecentBlogs,
  } = useContext(EventContext);
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const { showWelcomePopUp, hideWelcomePopUp } = useWelcomePopUp();
  const navigate = useNavigate();
  const { getClientBlogs } = useServerSideQueries();

  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );

  const toggleShowModel = () => {
    hideWelcomePopUp();
  };

  useEffect(() => {
    // Get upcoming events
    getUpcomingEvents();

    // Get Featured Events
    getFeaturedEvents();

    // Get Recent Blogs
    getRecentBlogs();
  }, [getUpcomingEvents, getFeaturedEvents, getRecentBlogs]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      setPageLoading(true);
      const { success, message, data } = await getClientBlogs(0, 10);

      if (!success) {
        setPageLoading(false);
        console.log(message);
      }

      setPageLoading(false);
      setRecentBlogs(data);
      console.log(message);
    };

    fetchAllBlogs();
  }, []);

  return (
    <>
      <div className="dark:bg-dark min-h-screen w-full">
        <DynamicHelmet
          title="KITFT - Welcome to Kenya international Theater Festival Trust"
          description="KITFest is an immersive and enlightening theatrical experience, where diverse performances and educational opportunities come together to inspire and connect artists and audiences from around the world, as well as enjoy the magical Kenya through tourism and cultural experiences."
        />

        {/* Navigation Section */}
        <Navigation />
        {/* <Navbar /> */}

        {/* Hero Section */}
        <HeroComponent />

        {/* Upcoming Events Section */}
        <UpcomingEventComponent />

        {/* Featured Events Section */}
        <FeaturedEventsComponent />

        {/* Explore Categories Section */}
        <TheatreCategories />

        {/* Theater Blogs Section */}
        <LandingBlogsComponent />

        {showWelcomePopUp && (
          <Modal onClose={toggleShowModel} classes={"p-5"}>
            <div className="flex flex-col gap-4 justify-center items-center h-[400px] py-5">
              <img
                src={isDarkMode ? DarkLogo : LightLogo}
                className="w-[120px] sm:w-[150px] mb-5"
                alt=""
              />
              <h1 className="text-primary text-[40px] sm:text-[50px] md:text-[60px] font-[800] tracking-tighter leading-none dark:text-slate-100 text-center">
                Welcome to <br />
                Theatre KE
              </h1>
              <p className="text-dark text-sm sm:text-base md:text-lg dark:text-white text-center font-light leading-snug md:px-16 lg:px-20">
                The Kenya International Theatre Festival Trust is dedicated to
                fostering the growth and development of the theatre and
                performing arts industry by providing resources and support for
                artists and projects.
              </p>

              {/* Join Button */}
              <div className="">
                <WhiteButton
                  title="Join Now"
                  handleClick={() => navigate("/auth-login")}
                  classes="mt-5"
                />
              </div>
            </div>
          </Modal>
        )}

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Landing;
