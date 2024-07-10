const UpcomingVenueSkeleton = () => {
  return (
    <div className="bg-white dark:bg-darkGray p-3 rounded-lg shadow-md transition ease-in-out delay-150 min-w-md animate-pulse">
      <div className="flex flex-col gap-2">
        <div className="w-full h-[160px] bg-gray flex justify-center items-center">
          <img
            src={"/images/kitft-logo-dark.png"}
            alt={"Skeleton Image"}
            className="w-[150px] object-cover mb-3"
          />
        </div>

        <div className="mt-2">
          <h5 className="bg-gray w-[200px] h-3 rounded-full mb-3"></h5>
          <p className="bg-gray h-3 w-full rounded-full mb-2"></p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingVenueSkeleton;
