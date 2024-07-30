import { Bar } from "react-chartjs-2";
import { UserAccountContext } from "@/context/UserAccountContext";
import { useContext } from "react";

const UserTicketPurchaseStarts = () => {
  const { userAccountData } = useContext(UserAccountContext);
  const chartLabels = userAccountData?.monthly_tickets?.label;
  const chartData = userAccountData?.monthly_tickets?.data;

  // console.log(chartLabels);

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-bold text-dark dark:text-slate-100">
          Ticket Purchase Report
        </h2>
      </div>

      <div className="grid grid-cols-1">
        <div className="bg-white dark:bg-dark shadow-md p-5 rounded-md">
          <Bar
            data={{
              labels: chartLabels,
              datasets: [
                {
                  label: "Ticket Purchase Report",
                  data: chartData,
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

export default UserTicketPurchaseStarts;
