import { BiFile } from "react-icons/bi";

const ArtistStartsComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mb-10">
      {/* Total Artists Card */}
      <div className="bg-[#F5F5F5] dark:bg-darkGray dark:text-slate-100 p-5 rounded-md shadow-sm dark:border-gray/30 dark:border">
        <div className="flex items-center gap-5">
          <div className="bg-primary dark:bg-gray p-4 rounded">
            <BiFile className="text-5xl text-slate-100" />
          </div>

          <div className="">
            <h1 className="text-xl font-semibold text-dark dark:text-slate-100">
              Total Artists
            </h1>

            <p className="text-primary dark:text-gray mt-1 text-xl">Ksh 0.00</p>
          </div>
        </div>
      </div>

      {/* Total Published Card */}
      <div className="bg-[#F5F5F5] dark:bg-darkGray dark:text-slate-100 p-5 rounded-md shadow-sm dark:border-gray/30 dark:border">
        <div className="flex items-center gap-5">
          <div className="bg-primary dark:bg-gray p-4 rounded">
            <BiFile className="text-5xl text-slate-100" />
          </div>

          <div className="">
            <h1 className="text-xl font-semibold text-dark dark:text-slate-100">
              Total Published
            </h1>
            <p className="text-primary dark:text-gray mt-1 text-xl">134</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistStartsComponent;
