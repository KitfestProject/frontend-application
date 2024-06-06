import { FaMoneyBill, FaCalendarDays, FaUsers, FaCoins } from "react-icons/fa6";

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {/* Total Revenue Card */}
      <div className="bg-[#F5F5F5] dark:bg-darkGray dark:text-slate-100 p-5 rounded-md shadow-sm dark:border-gray/30 dark:border">
        <div className="flex items-center gap-5">
          <div className="bg-primary dark:bg-gray p-4 rounded">
            <FaMoneyBill className="text-5xl text-slate-100" />
          </div>

          <div className="">
            <h1 className="text-xl font-semibold text-dark dark:text-slate-100">
              Total Revenue
            </h1>

            <p className="text-primary dark:text-gray mt-1 text-xl">Ksh 0.00</p>
          </div>
        </div>
      </div>

      {/* Total Events Card */}
      <div className="bg-[#F5F5F5] dark:bg-darkGray dark:text-slate-100 p-5 rounded-md shadow-sm dark:border-gray/30 dark:border">
        <div className="flex items-center gap-5">
          <div className="bg-primary dark:bg-gray p-4 rounded">
            <FaCalendarDays className="text-5xl text-slate-100" />
          </div>

          <div className="">
            <h1 className="text-xl font-semibold text-dark dark:text-slate-100">
              Events
            </h1>
            <p className="text-primary dark:text-gray mt-1 text-xl">134</p>
          </div>
        </div>
      </div>

      {/* Total Users Card */}
      <div className="bg-[#F5F5F5] dark:bg-darkGray dark:text-slate-100 p-5 rounded-md shadow-sm dark:border-gray/30 dark:border">
        <div className="flex items-center gap-5">
          <div className="bg-primary dark:bg-gray p-4 rounded">
            <FaUsers className="text-5xl text-slate-100" />
          </div>

          <div className="">
            <h1 className="text-xl font-semibold text-dark dark:text-slate-100">
              Total Users
            </h1>

            <p className="text-primary mt-1 dark:text-gray text-xl">1,000</p>
          </div>
        </div>
      </div>

      {/* Sold Tickets Card */}
      <div className="bg-[#F5F5F5] dark:bg-darkGray dark:text-slate-100 p-5 rounded-md shadow-sm dark:border-gray/30 dark:border">
        <div className="flex items-center gap-5">
          <div className="bg-primary dark:bg-gray p-4 rounded">
            <FaCoins className="text-5xl text-slate-100" />
          </div>

          <div className="">
            <h1 className="text-xl font-semibold text-dark dark:text-slate-100">
              Tickets Sold
            </h1>

            <p className="text-primary mt-1 dark:text-gray text-xl">300</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
