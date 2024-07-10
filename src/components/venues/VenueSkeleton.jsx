const VenueSkeleton = () => {
  return (
    <div className="bg-white dark:bg-darkGray rounded-lg shadow-md">
      <div className="w-full bg-gray-300 rounded-lg transition ease-in-out delay-150 animate-pulse">
        <div className="h-[265px] bg-gray flex justify-center items-center rounded-t-lg mb-3">
          <img
            src={"/images/kitft-logo-dark.png"}
            alt={"Skeleton Image"}
            className="w-[150px] object-cover rounded-t-lg mb-3"
          />
        </div>

        <div className="p-5 dark:border dark:border-gray/50 rounded-b-md">
          <h5 className="bg-gray w-[200px] h-3 rounded-full mb-3"></h5>
          <p className="bg-gray h-3 w-full rounded-full mb-2"></p>
        </div>
      </div>
    </div>
  );
};

export default VenueSkeleton;
