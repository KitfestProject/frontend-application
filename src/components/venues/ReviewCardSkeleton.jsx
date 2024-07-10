const ReviewCardSkeleton = () => {
  return (
    <div className="w-full md:w-1/3 flex-shrink-0 transition ease-in-out delay-150 min-w-md animate-pulse">
      <div className="bg-gray-100 dark:bg-darkGray p-5 rounded-lg shadow-md border border-gray/30">
        <div className="mb-5">
          <p className="h-3 rounded-md font-semibold mb-3 bg-gray w-[50%]"></p>

          {/* Star Rating */}
          <div className="flex items-center gap-3">
            <div className="bg-gray w-5 h-5 rounded-full text-2xl" />
            <div className="bg-gray w-5 h-5 rounded-full text-2xl" />
            <div className="bg-gray w-5 h-5 rounded-full text-2xl" />
            <div className="bg-gray w-5 h-5 rounded-full text-2xl" />
            <div className="bg-gray w-5 h-5 rounded-full text-2xl" />
          </div>
        </div>

        <p className="h-3 rounded-md font-semibold mb-3 bg-gray w-[80%]"></p>
        <p className="h-3 rounded-md font-semibold mb-3 bg-gray w-[100%]"></p>
        <p className="h-3 rounded-md font-semibold mb-3 bg-gray w-[90%]"></p>
        <p className="h-3 rounded-md font-semibold mb-3 bg-gray w-[70%]"></p>
        <p className="h-3 rounded-md font-semibold mb-3 bg-gray w-[50%]"></p>
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;
