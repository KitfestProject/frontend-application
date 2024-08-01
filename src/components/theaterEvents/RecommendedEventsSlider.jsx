import PropTypes from "prop-types";
import RecommendedEventsCarousel from "./RecommendedEventsCarousel";

const RecommendedEventsSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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

  return <RecommendedEventsCarousel responsive={responsive} />;
};

export default RecommendedEventsSlider;
