import { useRef, useState, useEffect } from "react";
import { FaRegTrashCan, FaEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axiosClient from "@/axiosClient";
import ProfileAvatar from "@/assets/profile-avatar.jpeg";
import { notifications } from "@/components/data/StaticData";
import { BiPlus } from "react-icons/bi";

const NotificationsTable = () => {
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);
  const baseUrl = import.meta.env.VITE_KITFT_API_PRODUCTION;
  const navigate = useNavigate();

  useEffect(() => {
    if (!dataTable) {
      const table = $(tableRef.current).DataTable();
      setDataTable(table);
    }

    return () => {
      if (dataTable) {
        dataTable.destroy();
      }
    };
  }, [dataTable]);

  const renderNotificationRow = (notification, index) => (
    <TableRow key={index} notification={notification} index={index} />
  );

  return (
    <>
      <div className="w-full mt-10">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-xl font-semibold text-dark dark:text-slate-100 pb-3">
            All Notifications
          </h1>
        </div>

        <div className="overflow-x-auto dark:bg-darkGray shadow-md rounded-md dark:border dark:border-gray/50">
          <table
            ref={tableRef}
            id="attendee_table"
            className="min-w-full bg-white dark:bg-darkGray"
          >
            <thead className="rounded-md py-5">
              <tr className="bg-primary dark:bg-gray text-white text-sm rounded-t-md">
                <th className="px-4 py-5 font-semibold text-start">#ID</th>
                <th className="px-4 py-5 font-semibold text-start">
                  notification
                </th>
                <th className="px-4 py-5 font-semibold text-start">Date</th>
                <th className="px-4 py-5 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray">
              {notifications.map(renderNotificationRow)}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const TableRow = ({ notification, index }) => {
  return (
    <tr
      className={`dark:border-b ${
        index % 2 === 0 ? "odd:bg-primary/5 dark:odd:bg-gray/20" : ""
      } dark:text-slate-200 dark:border-gray/30`}
    >
      <td className="px-4 py-3 text-center">
        <p className="text-sm font-semibold text-dark dark:text-slate-100">
          {notification.id}
        </p>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div>
            <p className="font-semibold text-sm text-dark dark:text-slate-100 leading-tight">
              {notification.notification}
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        <p className="dark:text-slate-100 text-sm">{notification.date}</p>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-2">
          <button className="text-orange-600">
            <FaRegTrashCan />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default NotificationsTable;
