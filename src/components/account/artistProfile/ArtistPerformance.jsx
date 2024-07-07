import { Chart as Performance } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

const ArtistPerformance = () => {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-bold text-dark dark:text-slate-100">
          Artist Performance
        </h2>
        <div className="flex items-center gap-2">
          <button className="text-sm text-gray-500 text-primary">Week</button>
          <button className="text-sm text-gray-500 text-primary">Month</button>
          <button className="text-sm text-gray-500 text-primary">Year</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white dark:bg-darkGray shadow-md p-5 rounded-md">
          <Line
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              datasets: [
                {
                  label: "Artist",
                  data: [12, 19, 3, 5, 2, 3, 8],
                  fill: false,
                  backgroundColor: "#732e1c",
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

        <div className="bg-white dark:bg-darkGray shadow-md p-5 rounded-md">
          <Bar
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              datasets: [
                {
                  label: "Artist",
                  data: [12, 19, 3, 5, 2, 3, 8],
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

export default ArtistPerformance;
