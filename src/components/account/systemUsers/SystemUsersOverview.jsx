import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { OrganizerRequestTable, SystemUsersTable } from "@/components";
import useServerSideQueries from "@/hooks/useServerSideQueries.mjs";

const SystemUsersOverview = () => {
  const [showOrganizerRequestTable, setShowOrganizerRequestTable] =
    useState(false);
  const { getOrganizerRequests } = useServerSideQueries();

  const handleGetOrganizerRequest = () => {
    setShowOrganizerRequestTable(true);
  };

  useEffect(() => {
    const fetchOrganizerRequests = async () => {
      const response = await getOrganizerRequests();

      if (response.success) {
        console.log(response.data);
      }
    };

    fetchOrganizerRequests();
  }, []);

  return (
    <div className="w-full md:w-[75%]">
      <div className="flex justify-between items-end border-b border-slate-200 dark:border-gray/20 pb-3">
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

        <div className="flex gap-2 items-center">
          {showOrganizerRequestTable && (
            <>
              {/* All users button */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setShowOrganizerRequestTable(false);
                  }}
                  className="flex items-center gap-2 bg-primary py-2 px-4 rounded-md text-white text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 12a2 2 0 114 0 2 2 0 01-4 0zm1-9a1 1 0 112 0 1 1 0 01-2 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>All Users</span>
                </button>
              </div>
            </>
          )}

          {/* Organizer Requests */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleGetOrganizerRequest}
              className="flex items-center gap-2 bg-primary py-2 px-4 rounded-md text-white text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 12a2 2 0 114 0 2 2 0 01-4 0zm1-9a1 1 0 112 0 1 1 0 01-2 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Organizer Requests</span>
            </button>
          </div>
        </div>
      </div>

      {/* System Users Table */}
      <div className="w-full mt-5">
        <h1 className="text-xl font-semibold text-dark dark:text-slate-100 pb-3">
          {showOrganizerRequestTable
            ? "Organizer Requests Table"
            : "System Users Table"}
        </h1>

        {showOrganizerRequestTable ? (
          <OrganizerRequestTable />
        ) : (
          <SystemUsersTable />
        )}
      </div>

      <Toaster position="top-right" />
    </div>
  );
};

export default SystemUsersOverview;
