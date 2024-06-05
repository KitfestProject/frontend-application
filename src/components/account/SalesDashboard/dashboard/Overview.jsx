import { FaMoneyBill, FaCalendarDays, FaUsers, FaCoins } from "react-icons/fa6";

const Overview = () => {
  return (
    <div className="w-full md:w-[75%] px-5">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-3 text-sm">
        <p className="text-gray tracking-tight">Account</p>
        <span className="text-gray-500">/</span>
        <p className="text-gray-500 tracking-tight">Dashboard</p>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-dark dark:text-slate-100 mb-10">
        Overview
      </h1>

      {/* Starts Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Total Revenue Card */}
        <div className="bg-[#F5F5F5] dark:bg-darkGray dark:text-slate-100 p-5 rounded-md shadow-sm dark:border-slate-700 dark:border">
          <div className="flex items-center gap-5">
            <div className="bg-primary p-4 rounded">
              <FaMoneyBill className="text-5xl text-slate-100" />
            </div>

            <div className="">
              <h1 className="text-xl font-bold text-dark dark:text-slate-100">
                Total Revenue
              </h1>

              <p className="text-primary mt-2 text-xl">Ksh 0.00</p>
            </div>
          </div>
        </div>

        {/* Total Events Card */}
        <div className="bg-[#F5F5F5] dark:bg-darkGray dark:text-slate-100 p-5 rounded-md shadow-sm dark:border-slate-700 dark:border">
          <div className="flex items-center gap-5">
            <div className="bg-primary p-4 rounded">
              <FaCalendarDays className="text-5xl text-slate-100" />
            </div>

            <div className="">
              <h1 className="text-xl font-bold text-dark dark:text-slate-100">
                Events
              </h1>
              <p className="text-primary mt-2 text-xl">134</p>
            </div>
          </div>
        </div>

        {/* Total Users Card */}
        <div className="bg-[#F5F5F5] dark:bg-darkGray dark:text-slate-100 p-5 rounded-md shadow-sm dark:border-slate-700 dark:border">
          <div className="flex items-center gap-5">
            <div className="bg-primary p-4 rounded">
              <FaUsers className="text-5xl text-slate-100" />
            </div>

            <div className="">
              <h1 className="text-xl font-bold text-dark dark:text-slate-100">
                Total Users
              </h1>

              <p className="text-primary mt-2 text-xl">1,000</p>
            </div>
          </div>
        </div>

        {/* Sold Tickets Card */}
        <div className="bg-[#F5F5F5] dark:bg-darkGray dark:text-slate-100 p-5 rounded-md shadow-sm dark:border-slate-700 dark:border">
          <div className="flex items-center gap-5">
            <div className="bg-primary p-4 rounded">
              <FaCoins className="text-5xl text-slate-100" />
            </div>

            <div className="">
              <h1 className="text-xl font-bold text-dark dark:text-slate-100">
                Tickets Sold
              </h1>

              <p className="text-primary mt-2 text-xl">300</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
