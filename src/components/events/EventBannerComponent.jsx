import toast from "react-hot-toast";
import useTimeAgo from "@/hooks/useTimeAgo";
import useAuthStore from "@/store/UseAuthStore";
import { BiArrowBack, BiShareAlt, BiSolidHeart } from "react-icons/bi";
import { ModalTransparent } from "@/components";
import { ShareSocial } from "react-share-social";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { EventContext } from "@/context/EventDetailsContext";
import useServerSideQueries from "@/hooks/useServerSideQueries";
const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const EventBannerComponent = () => {
  const { formatEventDate, determineAmPm } = useTimeAgo();
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const { eventDetails, eventDetailsLoading } = useContext(EventContext);
  const [like, setLike] = useState(0);
  const { createWishlist } = useServerSideQueries();
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLike(eventDetails?.wishlist_count);
  }, [eventDetails]);

  const toggleShowModel = () => {
    setShowModal(!showModal);
  };

  const handleLikeChange = async () => {
    setLoading(true);

    if (!user) {
      toast.error("Please login to like this event");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
      return;
    }

    const { success, message, data } = await createWishlist(eventDetails?._id);

    if (!success) {
      setLoading(false);
      return toast.error(message, {
        duration: 5000,
        position: "bottom-right",
      });
    }

    setLoading(false);
    setLike(data.count + like);
    toast.success(message, {
      duration: 5000,
      position: "bottom-right",
    });
  };

  const socialStyle = {
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      borderRadius: 3,
      border: 0,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
    },
    copyContainer: {
      border: "1px solid blue",
      background: "rgb(0,0,0,0.7)",
    },
    title: {
      color: "aquamarine",
      fontStyle: "italic",
    },
  };

  const eventLink = baseUrl + location.pathname;

  return (
    <section className="">
      <div className="h-[50%] md:h-[calc(100vh-300px)] relative">
        <img
          src={eventDetails?.cover_image}
          alt={eventDetails?.title}
          className="w-full h-full object-cover object-top"
        />

        {/* Event Details Overlay */}
        {eventDetailsLoading && !eventDetails ? (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl text-white">Loading...</h1>
          </div>
        ) : (
          <div className="absolute hidden md:block top-0 left-0 w-full h-full bg-black bg-opacity-50">
            <div className="container mx-auto h-full flex items-center">
              <div className="text-dark bg-white dark:bg-darkGray w-[800px] mx-auto rounded-md text-center p-5 md:py-10 md:px-20">
                <h5 className="text-xl font-bold text-dark dark:text-slate-200 uppercase mb-5">
                  {formatEventDate(eventDetails?.event_date?.start_date) +
                    " | " +
                    determineAmPm(eventDetails.event_start_time)}
                </h5>

                <h1 className="text-4xl font-bold text-primary dark:text-primary mb-5">
                  {eventDetails?.title}
                </h1>

                <div className="w-full h-full max-h-[200px] overflow-y-scroll">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: eventDetails?.description,
                    }}
                    className="text-xs md:text-base text-gray-500 dark:text-gray-400 mt-2 dark:text-slate-100"
                  />
                </div>

                {/* Share and like buttons */}
                <div className="flex justify-center mt-5 gap-3 md:gap-5 relative">
                  <button
                    onClick={handleLikeChange}
                    className="bg-darkGray dark:bg-gray text-white px-5 p-1 md:py-2 rounded-[50px] flex items-center shadow-md"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                      </div>
                    ) : (
                      <>
                        <BiSolidHeart className="mr-2" /> {like}
                      </>
                    )}
                  </button>
                  <button
                    onClick={toggleShowModel}
                    className="bg-darkGray dark:bg-gray text-white px-5 p-1 md:py-2 rounded-[50px] flex items-center shadow-md"
                  >
                    <BiShareAlt className="mr-2" /> Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="md:hidden container mx-auto h-full flex items-center py-3">
          <div className="text-dark bg-white dark:bg-darkGray w-[800px] mx-auto rounded-md text-center p-5 md:py-10 md:px-20">
            <h5 className="text-md font-bold text-dark dark:text-slate-200 uppercase mb-5 tracking-tighter">
              {formatEventDate(eventDetails?.event_date?.start_date) +
                " | " +
                determineAmPm(eventDetails.event_start_time)}
            </h5>

            <h1 className="text-2xl font-bold text-primary dark:text-primary mb-5">
              {eventDetails?.title}
            </h1>

            <div className="w-full h-full max-h-[200px] overflow-y-scroll">
              <div
                dangerouslySetInnerHTML={{
                  __html: eventDetails?.description,
                }}
                className="text-xs md:text-base text-gray-500 dark:text-gray-400 mt-2 dark:text-slate-100"
              />
            </div>

            {/* Share and like buttons */}
            <div className="flex justify-center mt-5 gap-3 md:gap-5 relative">
              <button
                onClick={handleLikeChange}
                className="bg-darkGray dark:bg-gray text-white px-5 p-1 md:py-2 rounded-[50px] flex items-center shadow-md"
              >
                <BiSolidHeart className="mr-2" /> {like}
              </button>
              <button
                onClick={toggleShowModel}
                className="bg-darkGray dark:bg-gray text-white px-5 p-1 md:py-2 rounded-[50px] flex items-center shadow-md"
              >
                <BiShareAlt className="mr-2" /> Share
              </button>
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

      {/* Modal */}
      {showModal && (
        <ModalTransparent onClose={toggleShowModel} classes={"p-5"}>
          <div className="flex flex-col gap-2 justify-center items-center py-5">
            <ShareSocial
              title={
                <h1 className="text-slate-100 text-center">Share this event</h1>
              }
              url={eventLink}
              socialTypes={[
                "facebook",
                "twitter",
                "reddit",
                "telegram",
                "linkedin",
                "whatsapp",
                "email",
              ]}
              style={socialStyle}
            />
          </div>
        </ModalTransparent>
      )}
    </section>
  );
};

export default EventBannerComponent;
