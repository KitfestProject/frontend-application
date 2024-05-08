import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useTruncate from "../../hooks/useTruncate.mjs";
import { motion } from "framer-motion";
import useTimeAgo from "../../hooks/useTimeAgo.mjs";
import SingleEventSkeleton from "./SingleEventSkeleton";

const RecommendedEventsCarousel = ({ items, responsive, loading }) => {
  const { truncateDescription } = useTruncate();
  const { formatDate, checkDateIsInThePast } = useTimeAgo();

  function generateEventsSkeleton() {
    const products = [];
    for (let i = 0; i < 8; i++) {
      products.push(<SingleEventSkeleton classes={"md:ml-5"} key={i} />);
    }
    return products;
  }

  return (
    <Carousel responsive={responsive} swipeable={true}>
      {loading && generateEventsSkeleton()}
      {!loading &&
        items.map(
          (
            event,
            index // Check if the event date is in the past
          ) =>
            checkDateIsInThePast(event.date) ? null : (
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
                      src={event.image}
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
                    {formatDate(event.date)}
                  </p>
                  <p className="text-sm dark:text-slate-100 mb-3 font-bold">
                    Venue: {event.location}
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
