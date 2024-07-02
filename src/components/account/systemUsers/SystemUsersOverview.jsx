import SystemUsersTable from "./SystemUsersTable";

const SystemUsersOverview = () => {
  return (
    <div className="w-full md:w-[75%]">
      <div className="flex justify-between items-start border-b border-slate-200 dark:border-gray/20 pb-5">
        <div className="">
          <div className="flex items-center gap-2 mb-1 text-sm">
            <p className="text-gray tracking-tight">Account</p>
            <span className="text-gray-500">/</span>
            <p className="text-gray-500 tracking-tight">Users</p>
          </div>

          <h1 className="text-2xl font-bold text-dark dark:text-slate-100">
            User Management
          </h1>
        </div>
      </div>

      {/* Tickets Table */}
      <div className="w-full mt-10">
        <h1 className="text-xl font-semibold text-dark dark:text-slate-100 pb-3">
          User List
        </h1>

        <SystemUsersTable />
      </div>
    </div>
  );
};

export default SystemUsersOverview;
