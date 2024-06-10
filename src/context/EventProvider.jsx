import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import {
  blogsData as blogs,
  upcomingEvents as events,
} from "@/components/data/StaticData";
import useTimeAgo from "@/hooks/useTimeAgo";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [eventData, setEventData] = useState({});
  const [eventDetails, setEventDetails] = useState({});
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const { checkDateIsInThePast } = useTimeAgo();

  // Set Event Data
  const setEvent = (data) => {
    setEventData(data);
  };

  // Get Event Details by slug
  const getEventBySlug = (slug) => {
    // FIXME: Get this data from a remote endpoint
    const foundEvent = events.find((event) => event.slug === slug);
    if (foundEvent) {
      setEventDetails(foundEvent);
    }
    return;
  };

  // Get category events
  const getCategoryEvents = (category) => {
    // FIXME: Get this data from a remote endpoint limit: current 6
    const categoryEvents = events.filter((event) =>
      event.category.includes(category)
    );
    return categoryEvents;
  };

  // Get upcoming events
  const getUpcomingEvents = () => {
    // FIXME: Get this data from a remote endpoint limit: 10
    const upcoming = events.filter(
      (event) => !checkDateIsInThePast(event.date)
    );
    return upcoming;
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
    const recent = blogs.slice(0, 3);
    return recent;
  };

  // Initialize state with useEffect
  useEffect(() => {
    setUpcomingEvents(getUpcomingEvents());
    setFeaturedEvents(getFeaturedEvents());
    setRecentBlogs(getRecentBlogs());
  }, []);

  return (
    <EventContext.Provider
      value={{
        setEvent,
        eventData,
        recentBlogs,
        eventDetails,
        featuredEvents,
        upcomingEvents,
        getEventBySlug, // func
        getRecentBlogs, // func
        getUpcomingEvents, // func
        getCategoryEvents, // func
        getFeaturedEvents, // func
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
