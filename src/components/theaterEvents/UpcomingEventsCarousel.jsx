import PropTypes from "prop-types";
import { BiCalendar } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useTruncate from "@/hooks/useTruncate";
import { motion } from "framer-motion";
import useTimeAgo from "@/hooks/useTimeAgo";
import SingleEventSkeleton from "./SingleEventSkeleton";
import { Link, useNavigate } from "react-router-dom";
import { BiCalendarExclamation } from "react-icons/bi";
import useServerSideQueries from "@/hooks/useServerSideQueries";

const UpcomingEventsCarousel = ({ responsive }) => {
  const [eventData, setEventData] = useState([]);
  const { truncateDescription } = useTruncate();
  const { formatDate } = useTimeAgo();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { getUpcomingEvents } = useServerSideQueries();

  function generateEventsSkeleton() {
    const products = [];
    for (let i = 0; i < 4; i++) {
      products.push(<SingleEventSkeleton classes={"md:ml-5"} key={i} />);
    }
    return products;
  }

  useEffect(() => {
    const getUpcomingEventsData = async () => {
      setLoading(true);
      const response = await getUpcomingEvents(10);

      const { success, message, data } = response;

      console.log(data);

      if (!success) {
        setLoading(false);
        console.log(message);
        return;
      }

      setLoading(false);
      setEventData(data);
    };

    getUpcomingEventsData();
  }, []);

  return (
    <>
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-4">
          {generateEventsSkeleton()}
        </div>
      )}

      {!loading && eventData.length > 0 && (
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
          {
            eventData.map((event, index) => (
              <div
                key={index}
                className="h-[480px] bg-white dark:bg-darkGray shadow-md rounded-lg dark:border-[1px] dark:border-darkGray transition ease-in-out delay-150 md:ml-5"
              >
                <div onClick={() => navigate(`/events/${event._id}`)}>
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
                </div>
                <div className="p-5">
                  <Link to={`/events/${event._id}`}>
                    <h3 className="text-xl font-bold text-primary dark:text-slate-200">
                      {event.title}
                    </h3>
                  </Link>
                  <p className="text-sm dark:text-slate-100 flex items-center gap-2">
                    <BiCalendar /> {formatDate(event.event_date.start_date)}
                  </p>
                  <p className="text-sm dark:text-slate-100 mb-3 font-bold flex items-center gap-2">
                    <FaLocationDot /> Venue: {event.address}
                  </p>
                  <p className="text-sm text-gray dark:text-slate-100">
                    {truncateDescription(event.description, 90)}
                  </p>
                </div>
              </div>
            ))}
        </Carousel>
      )}

      {!loading && eventData.length <= 0 && (
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
