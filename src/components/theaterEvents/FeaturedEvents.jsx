import { useEffect, useState } from "react";
import { BiCalendar } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import useTimeAgo from "@/hooks/useTimeAgo";
import { motion } from "framer-motion";
import SingleEventSkeleton from "./SingleEventSkeleton";
import { useNavigate } from "react-router-dom";
import useServerSideQueries from "@/hooks/useServerSideQueries";

const FeaturedEvents = () => {
  const [eventData, setEventData] = useState([]);
  const { formatDate } = useTimeAgo();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { getFeaturedEvents } = useServerSideQueries();

  useEffect(() => {
    const getUpcomingEventsData = async () => {
      setLoading(true);
      const response = await getFeaturedEvents(8);

      const { success, message, data } = response;

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

  function generateEventsSkeleton() {
    const events = [];
    for (let i = 0; i < 8; i++) {
      events.push(<SingleEventSkeleton key={i} />);
    }
    return events;
  }

  return (
    <>
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {generateEventsSkeleton()}
        </div>
      )}

      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {eventData?.map((event, index) => (
            <div
              key={index}
              className="bg-white dark:bg-darkGray shadow-md rounded-lg dark:border-[1px] dark:border-darkGray transition ease-in-out delay-150"
            >
              <div className="overflow-hidden">
                <motion.div
                  onClick={() => navigate(`/events/${event._id}`)}
                  className="h-[200px] sm:h-[250px] md:h-[275px] cursor-pointer"
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
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary dark:text-slate-200">
                  {event.title}
                </h3>
                <p className="text-sm dark:text-slate-100 flex items-center gap-2">
                  <BiCalendar /> {formatDate(event?.event_date.start_date)}
                </p>
                <p className="text-sm dark:text-slate-100 mb-3 font-bold flex items-center gap-2">
                  <FaLocationDot /> Venue: {event?.address}
                </p>
                <div className="max-h-[80px] h-full overflow-y-scroll">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: event.description,
                    }}
                    className="text-sm text-gray dark:text-slate-100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FeaturedEvents;
