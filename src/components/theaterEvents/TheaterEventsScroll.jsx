import React from "react";
import UpcomingEventsCarousel from "./UpcomingEventsCarousel";

const TheaterEventsScroll = ({ upcomingEventData }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <UpcomingEventsCarousel items={upcomingEventData} responsive={responsive} />
  );
};

export default TheaterEventsScroll;
