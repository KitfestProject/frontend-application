import {
  OverViewTitle,
  DashboardCards,
  RevenuePerformance,
  UpcomingEventsTable,
  RecentBookingsTable,
} from "@/components";

const Overview = () => {
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

        {/* Upcoming Events Table */}
        <UpcomingEventsTable />

        {/* Recent Bookings Table */}
        <RecentBookingsTable />
      </div>
    </>
  );
};

export default Overview;
