import PropTypes from "prop-types";
import UpcomingEventsCarousel from "./UpcomingEventsCarousel";

const TheaterEventsScroll = ({ upcomingEventData, loading }) => {
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
    <UpcomingEventsCarousel
      items={upcomingEventData}
      responsive={responsive}
      loading={loading}
    />
  );
};

TheaterEventsScroll.propTypes = {
  upcomingEventData: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default TheaterEventsScroll;
