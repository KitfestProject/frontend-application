import { Bar } from "react-chartjs-2";
import { UserAccountContext } from "@/context/UserAccountContext";
import { useContext } from "react";

const RevenuePerformance = () => {
  const { userAccountData } = useContext(UserAccountContext);
  const revenue = userAccountData?.revenue_per_month;
  const performanceLabels = revenue?.labels;
  const performanceData = revenue?.data;

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-dark dark:text-slate-100">
          Revenue Performance
        </h2>
      </div>

      <div className="grid grid-cols-1">
        <div className="bg-white dark:bg-darkGray shadow-md p-5 rounded-md">
          <Bar
            data={{
              labels: performanceLabels,
              datasets: [
                {
                  label: "Revenue",
                  data: performanceData,
                  fill: false,
                  backgroundColor: "#f2e6e0",
                  borderColor: "#732e1c",
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  grid: {
                    display: false,
                  },
                },
                x: {
                  grid: {
                    display: false,
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RevenuePerformance;
