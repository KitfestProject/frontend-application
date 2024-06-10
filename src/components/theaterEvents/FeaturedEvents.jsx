import { useContext, useEffect, useState } from "react";
import useTruncate from "@/hooks/useTruncate";
import useTimeAgo from "@/hooks/useTimeAgo";
import { motion } from "framer-motion";
import SingleEventSkeleton from "./SingleEventSkeleton";
import { EventContext } from "@/context/EventDetailsContext";
import { useNavigate } from "react-router-dom";

const FeaturedEvents = () => {
  const { featuredEvents } = useContext(EventContext);
  const { truncateDescription } = useTruncate();
  const [eventData, setEventData] = useState([]);
  const { formatDate } = useTimeAgo();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // FIXME: Remove this delay loading static data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  function generateEventsSkeleton() {
    const products = [];
    for (let i = 0; i < 8; i++) {
      products.push(<SingleEventSkeleton key={i} />);
    }
    return products;
  }

  useEffect(() => {
    if (featuredEvents.length > 0) {
      setEventData(featuredEvents);
    } else {
      setEventData([]);
    }
  }, [featuredEvents]);

  return (
    <>
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {generateEventsSkeleton()}
        </div>
      )}

      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {eventData.map((event, index) => (
            <div
              key={index}
              className="bg-white dark:bg-darkGray shadow-md rounded-lg dark:border-[1px] dark:border-darkGray transition ease-in-out delay-150"
            >
              <div className="overflow-hidden">
                <motion.div
                  onClick={() => navigate(`/events/${event.slug}`)}
                  className="h-[250px] cursor-pointer"
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
          ))}
        </div>
      )}
    </>
  );
};

export default FeaturedEvents;
