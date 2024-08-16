import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import default styles
import useTruncate from "@/hooks/useTruncate.mjs";
import PrimaryButton from "@/components/utils/PrimaryButton";
import SingleBlogSkeleton from "./SingleBlogSkeleton";
import { useContext, useEffect, useState } from "react";
import { EventContext } from "@/context/EventDetailsContext";
import { useNavigate } from "react-router-dom";

const BlogsCarousel = ({ responsive }) => {
  const { recentBlogs } = useContext(EventContext);
  const { truncateDescription } = useTruncate();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  function generateBlogsSkeleton() {
    const products = [];
    for (let i = 0; i < 8; i++) {
      products.push(<SingleBlogSkeleton classes={"md:ml-5"} key={i} />);
    }
    return products;
  }

  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      infinite={
        recentBlogs.length >
        Object.values(responsive).reduce(
          (min, item) => Math.min(min, item.items),
          Infinity
        )
      }
      partialVisible={
        recentBlogs.length <=
        Object.values(responsive).reduce(
          (min, item) => Math.min(min, item.items),
          Infinity
        )
      }
    >
      {loading && generateBlogsSkeleton()}

      {!loading &&
        recentBlogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white dark:bg-darkGray shadow-md rounded-lg dark:border-[1px] dark:border-darkGray transition ease-in-out delay-150 min-w-md md:ml-5"
          >
            <div
              className="h-[250px] cursor-pointer"
              onClick={() => navigate(`/blogs/${blog._id}`)}
            >
              <img
                src={blog.cover_image}
                alt={blog.name}
                className="w-full h-full object-cover rounded-t-lg mb-3"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl tracking-tighter font-bold text-dark dark:text-slate-200 mb-3">
                {blog.name}
              </h3>
              <p className="text-sm dark:text-slate-100 mb-3">{blog.date}</p>
              <p className="text-sm dark:text-slate-100 mb-3">
                {blog.location}
              </p>
              <p className="text-sm text-gray dark:text-slate-100">
                {truncateDescription(blog.description, 200)}
              </p>

              <div className="flex justify-between items-center mt-5">
                <div className="flex items-center gap-2">
                  <img
                    src={blog.authorImage ?? "/images/profile-avatar.svg"}
                    alt={blog?.author?.name}
                    className="w-[40px] h-[40px] object-cover rounded-full"
                  />
                  <p className="text-sm dark:text-slate-100">
                    {blog?.author.name}
                  </p>
                </div>
                <PrimaryButton
                  handleClick={() => navigate(`/blogs/${blog._id}`)}
                  title="Read More"
                />
              </div>
            </div>
          </div>
        ))}
    </Carousel>
  );
};

BlogsCarousel.propTypes = {
  responsive: PropTypes.object.isRequired,
};

export default BlogsCarousel;
