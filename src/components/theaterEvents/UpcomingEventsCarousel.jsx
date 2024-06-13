import PropTypes from "prop-types";
import { BiCalendar } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useTruncate from "@/hooks/useTruncate";
import { motion } from "framer-motion";
import useTimeAgo from "@/hooks/useTimeAgo";
import SingleEventSkeleton from "./SingleEventSkeleton";
import { Link, useNavigate } from "react-router-dom";
import { EventContext } from "@/context/EventDetailsContext";
import { BiCalendarExclamation } from "react-icons/bi";

const UpcomingEventsCarousel = ({ responsive }) => {
  const { upcomingEvents } = useContext(EventContext);
  const [eventData, setEventData] = useState([]);
  const { truncateDescription } = useTruncate();
  const { formatDate, checkDateIsInThePast } = useTimeAgo();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  /**
   * FIXME: Delaying static data for two seconds
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  function generateEventsSkeleton() {
    const products = [];
    for (let i = 0; i < 8; i++) {
      products.push(<SingleEventSkeleton classes={"md:ml-5"} key={i} />);
    }
    return products;
  }

  useEffect(() => {
    if (upcomingEvents.length > 0) {
      setEventData(
        upcomingEvents.filter((event) => !checkDateIsInThePast(event.date))
      );
    } else {
      setEventData([]);
    }
  }, [upcomingEvents]);

  return (
    <>
      {eventData.length > 0 && (
        <Carousel
          responsive={responsive}
          swipeable={true}
          infinite={
            eventData.length >
            Object.values(responsive).reduce(
              (min, item) => Math.min(min, item.items),
              Infinity
            )
          }
          partialVisible={
            eventData.length <=
            Object.values(responsive).reduce(
              (min, item) => Math.min(min, item.items),
              Infinity
            )
          }
        >
          {loading && generateEventsSkeleton()}
          {!loading &&
            eventData?.map((event, index) => (
              <div
                key={index}
                className="bg-white dark:bg-darkGray shadow-md rounded-lg dark:border-[1px] dark:border-darkGray transition ease-in-out delay-150 md:ml-5"
              >
                <div onClick={() => navigate(`/events/${event.slug}`)}>
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
                  <p className="text-sm dark:text-slate-100 flex items-center gap-2">
                    <BiCalendar /> {formatDate(event.startDate)}
                  </p>
                  <p className="text-sm dark:text-slate-100 mb-3 font-bold flex items-center gap-2">
                    <FaLocationDot /> Venue: {event.location}
                  </p>
                  <p className="text-sm text-gray dark:text-slate-100">
                    {truncateDescription(event.description, 90)}
                  </p>
                </div>
              </div>
            ))}
        </Carousel>
      )}

      {eventData.length === 0 && (
        <div className="flex flex-col justify-center items-center h-96 border border-dashed border-primary rounded-md">
          <BiCalendarExclamation className="block text-[45px] text-primary" />
          <p className="text-lg dark:text-slate-200 text-primary">
            No upcoming events
          </p>
        </div>
      )}
    </>
  );
};

UpcomingEventsCarousel.propTypes = {
  responsive: PropTypes.object.isRequired,
};

export default UpcomingEventsCarousel;
