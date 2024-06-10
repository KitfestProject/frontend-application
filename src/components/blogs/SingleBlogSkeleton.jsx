import PropTypes from "prop-types";

const SingleBlogSkeleton = ({ classes }) => {
  return (
    <div
      className={`${classes} bg-white dark:bg-darkGray shadow-md rounded-lg dark:border-[1px] dark:border-darkGray transition ease-in-out delay-150 min-w-md md:ml-5 animate-pulse`}
    >
      <div className="h-[250px] bg-gray flex justify-center items-center rounded-t-lg">
        <img
          src={"/images/kitft-logo-dark.png"}
          alt={"Skeleton Image"}
          className="w-[150px]  object-cover  mb-3"
        />
      </div>

      <div className="p-5">
        <h3 className="bg-gray w-full h-3 rounded-full mb-2"></h3>
        <h3 className="bg-gray w-3/4 h-3 rounded-full mb-3"></h3>

        {[...Array(4)].map((_, index) => (
          <p key={index} className="bg-gray w-full h-3 rounded-full mb-2"></p>
        ))}
        <p className="bg-gray w-3/4 h-3 rounded-full mb-2"></p>

        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center gap-2">
            <div className="bg-gray rounded-full w-[40px] h-[40px]"></div>
            <p className="bg-gray w-[100px] h-3 rounded-full"></p>
          </div>
          <div className="bg-gray w-[100px] h-10 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

SingleBlogSkeleton.propTypes = {
  classes: PropTypes.string,
};

export default SingleBlogSkeleton;
