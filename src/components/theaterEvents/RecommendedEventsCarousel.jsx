import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useTruncate from "@/hooks/useTruncate";
import { motion } from "framer-motion";
import useTimeAgo from "@/hooks/useTimeAgo";
import toast, { Toaster } from "react-hot-toast";
import SingleEventSkeleton from "./SingleEventSkeleton";
import { EventContext } from "@/context/EventDetailsContext";
import { useContext, useEffect, useState } from "react";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { BiInfoCircle, BiSolidCheckCircle } from "react-icons/bi";

const RecommendedEventsCarousel = ({ responsive }) => {
  const { getFeaturedEvents } = useServerSideQueries();
  const { featuredEvents } = useContext(EventContext);
  const { truncateDescription } = useTruncate();
  const { formatDate, checkDateIsInThePast } = useTimeAgo();
  const [loading, setLoading] = useState(false);
  const [wishlistData, setWishlistData] = useState([]);

  function generateEventsSkeleton() {
    const products = [];
    for (let i = 0; i < 8; i++) {
      products.push(<SingleEventSkeleton classes={"md:ml-5"} key={i} />);
    }
    return products;
  }

  useEffect(() => {
    const fetchFeaturedEvents = async () => {
      setLoading(true);
      const response = await getFeaturedEvents(3);
      const { success, message, data } = response;

      if (!success) {
        setLoading(false);
        return toast.error(message, {
          icon: <BiInfoCircle className="text-white text-2xl" />,
          style: {
            borderRadius: "10px",
            background: "#ff0000",
            color: "#fff",
          },
        });
      }

      toast.success(message, {
        icon: <BiSolidCheckCircle className="text-white text-2xl" />,
        style: {
          borderRadius: "10px",
          background: "#00c20b",
          color: "#fff",
        },
      });
      setWishlistData(data);
      setLoading(false);
    };

    fetchFeaturedEvents();
  }, []);

  return (
    <Carousel responsive={responsive} swipeable={true}>
      {loading && generateEventsSkeleton()}
      {!loading &&
        wishlistData?.map(
          (
            event,
            index // Check if the event date is in the past
          ) =>
            checkDateIsInThePast(event?.event_date?.start_date) ? null : (
              <div
                key={index}
                className="bg-white dark:bg-darkGray shadow-md rounded-lg dark:border-[1px] dark:border-darkGray transition ease-in-out delay-150 md:ml-5"
              >
                <div className="overflow-hidden">
                  <motion.div
                    className="h-[250px]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    layout
                  >
                    <img
                      src={event.cover_image}
                      alt={event.title}
                      className="w-full h-full object-cover rounded-t-lg mb-3"
                    />
                  </motion.div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-primary dark:text-slate-200">
                    {event.title}
                  </h3>
                  <p className="text-sm dark:text-slate-100">
                    {formatDate(event?.event_date?.start_date)}
                  </p>
                  <p className="text-sm dark:text-slate-100 mb-3 font-bold">
                    Venue: {event.address}
                  </p>
                  <p className="text-sm text-gray dark:text-slate-100">
                    {truncateDescription(event.description, 90)}
                  </p>
                </div>
              </div>
            )
        )}
    </Carousel>
  );
};

export default RecommendedEventsCarousel;
