import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import { blogsData as blogs, events } from "@/components/data/StaticData";
import useTimeAgo from "@/hooks/useTimeAgo";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [eventData, setEventData] = useState({});
  const [eventDetails, setEventDetails] = useState({});
  const [eventDetailsLoading, setEventDetailsLoading] = useState(false);
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const { checkDateIsInThePast } = useTimeAgo();

  const getUrlSlug = (pathname) => {
    if (!pathname) return "";

    const normalizedPath = pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
    return normalizedPath.substring(normalizedPath.lastIndexOf("/") + 1);
  };

  // Get featured events
  const getFeaturedEvents = () => {
    // FIXME: Get this data from a remote endpoint limit: current 8 events
    const featured = events.filter((event) => event.isFeatured);
    return featured;
  };

  // Get recent blogs
  const getRecentBlogs = () => {
    // FIXME: Get this data from a remote endpoint limit: 10
    const recent = blogs.slice(0, 5);
    return recent;
  };

  // Get upcoming events
  const getUpcomingEvents = () => {
    // FIXME: Get this data from a remote endpoint limit: 10
    const upcoming = events.filter(
      (event) => !checkDateIsInThePast(event.date)
    );
    return upcoming;
  };

  useEffect(() => {
    setUpcomingEvents(getUpcomingEvents());
    setFeaturedEvents(getFeaturedEvents());
    setRecentBlogs(getRecentBlogs());
  }, []);

  return (
    <EventContext.Provider
      value={{
        eventData,
        getUrlSlug,
        setEventData,
        eventDetails,
        setEventDetails,
        getFeaturedEvents,
        featuredEvents,
        getRecentBlogs,
        recentBlogs,
        upcomingEvents,
        getUpcomingEvents,
        eventDetailsLoading,
        setEventDetailsLoading,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

EventProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EventProvider;
