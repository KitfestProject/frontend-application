const EditorPicksSkeleton = () => {
  return (
    <div className="bg-white dark:bg-darkGray w-full md:w-1/2 shadow-md transition ease-in-out delay-150 min-w-md animate-pulse">
      <div className="flex flex-col md:flex-row w-full">
        {/* Editor Pick Image */}
        <div className="w-full md:w-1/2 bg-gray-300 dark:bg-darkGray">
          <div className="w-full h-[300px] bg-gray flex justify-center items-center">
            <img
              src={"/images/kitft-logo-dark.png"}
              alt={"Skeleton Image"}
              className="w-[150px]  object-cover  mb-3"
            />
          </div>
        </div>

        {/* Editor Pick Content */}
        <div className="w-full md:w-1/2 p-5 dark:border dark:border-gray/50 dark:rounded-r-md">
          <div className="flex flex-col justify-between h-full">
            {/* Blog Details Area */}
            <div className="">
              <h3 className="bg-gray w-[200px] h-3 rounded-full mb-4"></h3>
              <p className="bg-gray h-3 w-full rounded-full mb-2"></p>
              <p className="bg-gray h-3 w-full rounded-full mb-2"></p>
              <p className="bg-gray h-3 w-full rounded-full mb-2"></p>
              <p className="bg-gray h-3 w-full rounded-full mb-2"></p>
              <p className="bg-gray h-3 w-full rounded-full mb-2"></p>
              <p className="bg-gray h-3 w-[80%] rounded-full mb-2"></p>
              <p className="bg-gray h-3 w-[130px] rounded-full mb-2"></p>
            </div>

            {/* Date & Author */}
            <div className="mt-5 flex-1 place-content-end">
              <p className="bg-gray h-3 w-[100px] rounded-full"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPicksSkeleton;
