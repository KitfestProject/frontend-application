import { FaChevronRight } from "react-icons/fa6";

const SearchSkeletonComponent = () => {
  return (
    <>
      {/* Search result */}
      <div className="flex flex-col gap-5 animate-pulse">
        {/* Artist search result title */}
        <div className="flex items-center gap-5">
          <div className="w-1/2">
            <h5 className=" text-lg font-semibold flex items-center gap-2">
              <span className="bg-gray/50 w-[100px] h-4 rounded-md"></span>
              <span className="h-6 w-6 rounded-full bg-gray/50 text-xs flex justify-center items-center"></span>
            </h5>
          </div>
          <div className="w-1/2 flex justify-end">
            <span className="bg-gray/50 font-semibold dark:text-slate-100 w-[80px] h-4 rounded-md"></span>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5 hover:bg-primary/10 p-3 cursor-pointer border-b border-gray/20">
            <div className="w-1/2">
              <div className="flex gap-2 items-center">
                <div className="">
                  <div className="w-[55px] h-[55px] rounded-full bg-gray/50"></div>
                </div>

                <div className="">
                  <h5 className="bg-gray/50 text-md leading-tight font-semibold w-[200px] h-3 rounded-md mb-2"></h5>
                  <p className="bg-gray/50 text-xs w-[100px] h-3 rounded-md"></p>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex justify-end">
              <button className="text-gray/50 dark:text-slate-100">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Event search result title */}
        <div className="flex items-center gap-5">
          <div className="w-1/2">
            <h5 className=" text-lg font-semibold flex items-center gap-2">
              <span className="bg-gray/50 w-[100px] h-4 rounded-md"></span>
              <span className="h-6 w-6 rounded-full bg-gray/50 text-xs flex justify-center items-center"></span>
            </h5>
          </div>
          <div className="w-1/2 flex justify-end">
            <span className="bg-gray/50 font-semibold dark:text-slate-100 w-[80px] h-4 rounded-md"></span>
          </div>
        </div>

        <div className="flex flex-col">
          {
            // Run loop twice
            [...Array(2)].map((_, index) => (
              <div
                key={index}
                className={`flex items-center gap-5 hover:bg-primary/10 p-3 cursor-pointer ${
                  index < 1 ? "border-b border-gray/20" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="flex gap-2 items-center">
                    <div className="">
                      <div className="w-[100px] h-[55px] rounded-md bg-gray/50"></div>
                    </div>

                    <div className="">
                      <h5 className="bg-gray/50 text-md leading-tight font-semibold w-[300px] h-3 rounded-md mb-2"></h5>
                      <p className="flex items-center gap-2">
                        <span className="w-[100px] h-3 rounded-md bg-gray/50"></span>
                        <span className="w-[50px] h-3 rounded-md bg-gray/50"></span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[100px] flex justify-end">
                  <div className="text-gray/50 dark:text-slate-100">
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default SearchSkeletonComponent;
