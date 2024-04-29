const SingleEventSkeleton = ({ classes }) => {
  return (
    <div
      className={`${classes} bg-white dark:bg-darkGray shadow-md rounded-lg dark:border-[1px] dark:border-darkGray transition ease-in-out delay-150 animate-pulse`}
    >
      <div className="overflow-hidden">
        <div className="h-[250px] bg-gray flex justify-center items-center rounded-t-lg">
          <img
            src={"/images/kitft-logo-dark.png"}
            alt={"Skeleton Image"}
            className="w-[150px] object-cover rounded-t-lg mb-3"
          />
        </div>
      </div>

      <div className="p-5">
        <h3 className="bg-gray w-full h-3 rounded-full mb-2"></h3>
        <p className="bg-gray h-3 w-[100px] rounded-full mb-2"></p>
        <div className="flex gap-2 items-center w-[200px] mb-3">
          <p className="bg-gray h-3 w-1/3 rounded-full"></p>
          <p className="bg-gray h-3 w-1/3 rounded-full"></p>
        </div>
        <p className="bg-gray h-3 w-full rounded-full mb-2"></p>
        <p className="bg-gray h-3 w-full rounded-full mb-2"></p>
        <p className="bg-gray h-3 w-3/4 rounded-full"></p>
      </div>
    </div>
  );
};

export default SingleEventSkeleton;
