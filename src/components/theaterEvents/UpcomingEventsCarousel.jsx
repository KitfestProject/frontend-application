import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useTruncate from "@/hooks/useTruncate";
import { motion } from "framer-motion";
import useTimeAgo from "@/hooks/useTimeAgo";
import SingleEventSkeleton from "./SingleEventSkeleton";
import { Link, useNavigate } from "react-router-dom";

const UpcomingEventsCarousel = ({ items, responsive, loading }) => {
  const { truncateDescription } = useTruncate();
  const { formatDate, checkDateIsInThePast } = useTimeAgo();
  const navigate = useNavigate();

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
        items.map((event, index) =>
          // Check if the event date is in the past
          checkDateIsInThePast(event.date) ? null : (
            <div
              key={index}
              className="bg-white dark:bg-darkGray shadow-md rounded-lg dark:border-[1px] dark:border-darkGray transition ease-in-out delay-150 md:ml-5"
            >
              <div
                onClick={() =>
                  navigate(`/events/${event.slug}`, {
                    state: { event },
                  })
                }
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
              </div>
              <div className="p-5">
                <Link
                  to={{ pathname: `/events/${event.slug}`, state: { event } }}
                >
                  <h3 className="text-xl font-bold text-primary dark:text-slate-200">
                    {event.title}
                  </h3>
                </Link>
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

UpcomingEventsCarousel.propTypes = {
  items: PropTypes.array.isRequired,
  responsive: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default UpcomingEventsCarousel;
