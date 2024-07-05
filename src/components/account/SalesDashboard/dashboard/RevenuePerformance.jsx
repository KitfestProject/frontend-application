import { Bar } from "react-chartjs-2";

const RevenuePerformance = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-dark dark:text-slate-100">
          Revenue Performance
        </h2>
        <div className="flex items-center gap-2">
          <button className="text-sm text-gray-500 text-primary">2022</button>
          <button className="text-sm text-gray-500 text-primary">2023</button>
          <button className="text-sm text-gray-500 text-primary">2024</button>
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="bg-white dark:bg-darkGray shadow-md p-5 rounded-md">
          <Bar
            data={{
              labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              datasets: [
                {
                  label: "Revenue",
                  data: [12, 19, 3, 5, 2, 3, 8, 7, 2, 10, 4, 12],
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
