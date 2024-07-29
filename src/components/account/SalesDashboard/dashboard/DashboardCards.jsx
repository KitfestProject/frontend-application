import useAuthStore from "@/store/UseAuthStore";
import { FaMoneyBill, FaCalendarDays, FaUsers, FaCoins } from "react-icons/fa6";
import { useContext } from "react";
import useCurrencyConverter from "@/hooks/useCurrencyConverter";
import { UserAccountContext } from "@/context/UserAccountContext";

const DashboardCards = () => {
  const { userAccountData } = useContext(UserAccountContext);
  const { user } = useAuthStore();
  const role = user?.role;
  const { formatCurrency } = useCurrencyConverter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
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

            <p className="text-primary dark:text-gray mt-1 text-xl">
              {userAccountData
                ? formatCurrency(userAccountData?.total_revenue)
                : "Ksh 0.00"}
            </p>
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
            <p className="text-primary dark:text-gray mt-1 text-xl">
              {userAccountData ? userAccountData?.total_events : "0"}
            </p>
          </div>
        </div>
      </div>

      {/* Total Users Card */}
      {role === "admin" ? (
        <div className="bg-[#F5F5F5] dark:bg-darkGray dark:text-slate-100 p-5 rounded-md shadow-sm dark:border-gray/30 dark:border">
          <div className="flex items-center gap-5">
            <div className="bg-primary dark:bg-gray p-4 rounded">
              <FaUsers className="text-5xl text-slate-100" />
            </div>

            <div className="">
              <h1 className="text-xl font-semibold text-dark dark:text-slate-100">
                Total Users
              </h1>

              <p className="text-primary mt-1 dark:text-gray text-xl">
                {userAccountData ? userAccountData?.total_users : "0"}
              </p>
            </div>
          </div>
        </div>
      ) : null}

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

            <p className="text-primary mt-1 dark:text-gray text-xl">
              {userAccountData ? userAccountData?.total_tickets_sold : "0"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
