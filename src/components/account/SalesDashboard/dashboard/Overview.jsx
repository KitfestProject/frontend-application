import {
  OverViewTitle,
  DashboardCards,
  RevenuePerformance,
  UpcomingEventsTable,
  RecentBookingsTable,
} from "@/components";
import useAuthStore from "@/store/UseAuthStore";

const Overview = () => {
  const { user } = useAuthStore();
  const role = user?.role;

  return (
    <>
      {/* Title */}
      <div className="w-full md:w-[75%] md:px-5">
        {/* Overview Title */}
        <OverViewTitle title="Overview" breadcrumbTitle="Dashboard" />

        {/* Cards */}
        <DashboardCards />

        {/* Revenue Performance Chart */}
        <RevenuePerformance />

        {role === "admin" && (
          <>
            {/* Upcoming Events Table */}
            <UpcomingEventsTable />

            {/* Recent Bookings Table */}
            <RecentBookingsTable />
          </>
        )}
      </div>
    </>
  );
};

export default Overview;
