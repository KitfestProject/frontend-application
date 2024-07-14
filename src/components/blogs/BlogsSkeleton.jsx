const BlogsSkeleton = () => {
  return (
    <div className="bg-white dark:bg-darkGray rounded-lg dark:border-[1px] dark:border-darkGray">
      <div className="w-full bg-gray-300 rounded-lg transition ease-in-out delay-150 animate-pulse">
        <div className="h-[250px] bg-gray flex justify-center items-center rounded-t-lg mb-3">
          <img
            src={"/images/kitft-logo-dark.png"}
            alt={"Skeleton Image"}
            className="w-[120px] object-cover rounded-t-lg mb-3"
          />
        </div>

        <div className="px-5 pb-3">
          <h3 className="bg-gray w-[100px] h-3 rounded-full mb-4"></h3>
          <p className="bg-gray h-3 w-full rounded-full mb-2"></p>
          <p className="bg-gray h-3 w-full rounded-full mb-2"></p>
          <p className="bg-gray h-3 w-full rounded-full mb-4"></p>
          <p className="bg-gray h-3 w-[130px] rounded-full mb-2"></p>
        </div>
      </div>
    </div>
  );
};

export default BlogsSkeleton;
