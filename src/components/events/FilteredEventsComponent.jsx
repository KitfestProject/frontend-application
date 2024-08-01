import PropTypes from "prop-types";
import useTruncate from "@/hooks/useTruncate";
import useTimeAgo from "@/hooks/useTimeAgo";
import { motion } from "framer-motion";
import { SingleEventSkeleton } from "@/components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { EventContext } from "@/context/EventDetailsContext";

const FilteredEventsComponent = () => {
  const { eventData, eventDetailsLoading } = useContext(EventContext);
  const { truncateDescription } = useTruncate();
  const { formatDate } = useTimeAgo();
  const navigate = useNavigate();

  function generateEventsSkeleton() {
    const products = [];
    for (let i = 0; i < 8; i++) {
      products.push(<SingleEventSkeleton key={i} />);
    }
    return products;
  }

  return (
    <>
      {eventDetailsLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {generateEventsSkeleton()}
        </div>
      )}

      {!eventDetailsLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {eventData?.map((event, index) => (
            <div
              key={index}
              className="bg-white dark:bg-darkGray shadow-md rounded-lg dark:border-[1px] dark:border-darkGray transition ease-in-out delay-150"
            >
              <div className="overflow-hidden cursor-pointer">
                <motion.div
                  onClick={() => navigate(`/events/${event._id}`)}
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
                  {formatDate(event.event_date?.start_date)}
                </p>
                <p className="text-sm dark:text-slate-100 mb-3 font-bold">
                  Venue: {event.address}
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

export default FilteredEventsComponent;
