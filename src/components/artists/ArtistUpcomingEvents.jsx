import { useContext } from "react";
import { UpcomingEventSkeleton } from "@/components";
import { EventContext } from "@/context/EventDetailsContext";
import useTimeAgo from "@/hooks/useTimeAgo";
import { Link } from "react-router-dom";

const ArtistUpcomingEvents = () => {
  const { artistUpcomingEvents, artistUpcomingEventsLoading } =
    useContext(EventContext);
  const { formatBlogDate } = useTimeAgo();

  function generateUpcomingEventSkeleton() {
    const events = [];
    for (let i = 0; i < 3; i++) {
      events.push(<UpcomingEventSkeleton key={i} />);
    }
    return events;
  }

  return (
    <div className="bg-[#F2F1F1] dark:bg-gray/50 p-5 rounded shadow-md">
      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 text-primary mb-3">
        Upcoming Events
      </h4>

      <div className="flex flex-col gap-5">
        {!artistUpcomingEventsLoading &&
          artistUpcomingEvents?.map((event, index) => (
            <div
              key={index}
              className="flex items-center justify-between hover:bg-white dark:bg-gray rounded-lg p-3 hover:shadow-md cursor-pointer"
            >
              <div className="flex items-center gap-5">
                <div className="w-[150px] bg-gray-300 dark:bg-darkGray rounded-lg">
                  <Link to={`/events/${event?._id}`}>
                    <img
                      className="object-cover w-full h-full rounded-lg"
                      src={event?.cover_image}
                      alt={event?.title}
                    />
                  </Link>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-primary">
                    {event?.title}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Date: {formatBlogDate(event.event_date?.start_date)}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {event?.address}
                  </p>
                </div>
              </div>
            </div>
          ))}

        {/* Skeleton */}
        {artistUpcomingEventsLoading && generateUpcomingEventSkeleton()}
      </div>
    </div>
  );
};

export default ArtistUpcomingEvents;
