import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import Flickity from "flickity";

const Carousel = ({ options, children }) => {
  const flickityRef = useRef(null);

  useEffect(() => {
    // Check if Flickity is already initialized
    if (!flickityRef.current) {
      flickityRef.current = new Flickity(".carousel", options);
    } else {
      // If Flickity is already initialized, update options
      flickityRef.current.option(options);
      flickityRef.current.reloadCells();
      flickityRef.current.resize();
    }

    return () => {
      if (flickityRef.current) {
        flickityRef.current.destroy();
        flickityRef.current = null;
      }
    };
  }, [options]);

  return (
    <div className="carousel">
      {React.Children.map(children, (child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
};

Carousel.propTypes = {
  options: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default Carousel;
