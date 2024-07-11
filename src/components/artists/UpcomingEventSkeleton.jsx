const UpcomingEventSkeleton = () => {
  return (
    <div className="flex items-center justify-between rounded-lg p-3 hover:shadow-md cursor-pointer transition ease-in-out delay-150 animate-pulse">
      <div className="flex items-center gap-5">
        <div className="w-[180px] h-[130px] bg-gray dark:bg-darkGray rounded-lg p-3 flex justify-center items-center">
          <img
            className="object-cover w-[120px] rounded-lg"
            src={"/images/kitft-logo-dark.png"}
            alt="Event"
          />
        </div>
        <div>
          <h3 className="bg-gray w-[100px] h-3 rounded-full mb-2"></h3>
          <p className="bg-gray h-3 w-[150px] rounded-full mb-2"></p>
          <p className="bg-gray h-3 w-[150px] rounded-full mb-2"></p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventSkeleton;
