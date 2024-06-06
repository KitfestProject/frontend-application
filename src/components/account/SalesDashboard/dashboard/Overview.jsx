import {
  OverViewTitle,
  DashboardCards,
  UpcomingEventsTable,
  RecentBookingsTable,
} from "../../../../components";

const Overview = () => {
  return (
    <>
      {/* Title */}
      <div className="w-full md:w-[75%] px-5">
        {/* Overview Title */}
        <OverViewTitle title="Overview" breadcrumbTitle="Dashboard" />

        {/* Cards */}
        <DashboardCards />

        {/* Upcoming Events Table */}
        <div className="w-full mt-20">
          <h1 className="text-2xl font-semibold text-dark dark:text-slate-100 mb-5">
            Upcoming Events
          </h1>

          <UpcomingEventsTable />
        </div>

        {/* Recent Bookings Table */}
        <div className="w-full mt-20">
          <h1 className="text-2xl font-semibold text-dark dark:text-slate-100 mb-5">
            Recent Bookings
          </h1>

          <RecentBookingsTable />
        </div>
      </div>
    </>
  );
};

export default Overview;
