import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import default styles
import useTruncate from "@/hooks/useTruncate.mjs";
import PrimaryButton from "@/components/utils/PrimaryButton";
import SingleBlogSkeleton from "./SingleBlogSkeleton";

const BlogsCarousel = ({ items, responsive, loading }) => {
  const { truncateDescription } = useTruncate();

  function generateBlogsSkeleton() {
    const products = [];
    for (let i = 0; i < 8; i++) {
      products.push(<SingleBlogSkeleton classes={"md:ml-5"} key={i} />);
    }
    return products;
  }

  return (
    <Carousel responsive={responsive} swipeable={true}>
      {loading && generateBlogsSkeleton()}

      {!loading &&
        items.map((event, index) => (
          <div
            key={index}
            className="bg-white dark:bg-darkGray shadow-md rounded-lg dark:border-[1px] dark:border-darkGray transition ease-in-out delay-150 min-w-md md:ml-5"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[250px] object-cover rounded-t-lg mb-3"
            />
            <div className="p-5">
              <h3 className="text-xl tracking-tighter font-bold text-dark dark:text-slate-200 mb-3">
                {event.title}
              </h3>
              <p className="text-sm dark:text-slate-100 mb-3">{event.date}</p>
              <p className="text-sm dark:text-slate-100 mb-3">
                {event.location}
              </p>
              <p className="text-sm text-gray dark:text-slate-100">
                {truncateDescription(event.description, 200)}
              </p>

              <div className="flex justify-between items-center mt-5">
                <div className="flex items-center gap-2">
                  <img
                    src={event.authorImage}
                    alt={event.author}
                    className="w-[40px] h-[40px] object-cover rounded-full"
                  />
                  <p className="text-sm dark:text-slate-100">{event.author}</p>
                </div>
                <PrimaryButton title="Read More" />
              </div>
            </div>
          </div>
        ))}
    </Carousel>
  );
};

BlogsCarousel.propTypes = {
  items: PropTypes.array.isRequired,
  responsive: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

export default BlogsCarousel;
