import React from "react";
import BlogsCarousel from "./BlogsCarousel";

const TheaterBlogsSection = ({ blogsData, loading }) => {
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

  return (
    <BlogsCarousel
      items={blogsData}
      responsive={responsive}
      loading={loading}
    />
  );
};

export default TheaterBlogsSection;
