import { useRef, useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axiosClient from "@/axiosClient";
import ProfileAvatar from "@/assets/profile-avatar.svg";
import useCurrencyConverter from "@/hooks/useCurrencyConverter";
import useTimeAgo from "@/hooks/useTimeAgo";

const TransactionTable = () => {
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);
  const { formatCurrency } = useCurrencyConverter();
  const { formatTableDate } = useTimeAgo();

  useEffect(() => {
    if (!dataTable) {
      const table = $(tableRef.current).DataTable({
        processing: true,
        serverSide: true,
        bDestroy: true,
        ajax: async (data, callback) => {
          const response = await axiosClient.post("/transactions", data);
          callback(response.data);
        },
        columns: [
          {
            title: "Ref.Number",
            data: null,
            render: (data) => {
              return `
              <td class="px-4 py-3">
                <p class="text-primary/80 dark:text-slate-200 font-semibold text-xs">
                  ${data.ref_code}
                </p>
              </td>`;
            },
          },
          {
            title: "Name",
            data: null,
            render: (data) => {
              return `
              <td class="px-4 py-3">
              <div class="flex items-center gap-3">
                <div>
                  <img
                    src="${ProfileAvatar}"
                    alt="profile"
                    class="w-8 h-8 rounded-full"
                  />
                </div>
                <div>
                  <p class="font-semibold text-sm text-dark dark:text-slate-100 leading-tight">
                    ${data.user_name}
                  </p>
                </div>
              </div>
            </td>`;
            },
          },
          {
            title: "Amount",
            data: null,
            render: (data) => {
              return `
              <td class="px-4 py-3 text-center">
                <p class="dark:text-slate-100 text-sm">
                  ${formatCurrency(data.amount)}
                </p>
              </td>`;
            },
          },
          {
            title: "Status",
            data: null,
            render: (data) => {
              return `
              <td class="px-4 py-3 text-center">
                <p class="text-green-600 text-sm">${data.status}</p>
              </td>`;
            },
          },
          {
            title: "Date",
            data: null,
            render: (data) => {
              return `
              <td class="px-4 py-3 text-center">
                <p class="dark:text-slate-100 text-sm">${formatTableDate(
                  data.time
                )}</p>
              </td>`;
            },
          },
          {
            title: "Action",
            data: null,
            render: () => {
              return `
                <button class="text-secondary edit_user dark:text-primary-dark">
                  Delete
                </button>
              `;
            },
          },
        ],
      });
      setDataTable(table);
    }

    return () => {
      if (dataTable) {
        dataTable.destroy();
      }
    };
  }, [dataTable]);

  return (
    <div className="overflow-x-auto dark:bg-darkGray shadow-md rounded-md dark:border dark:border-gray/50">
      <table
        ref={tableRef}
        id="users_table"
        className="min-w-full bg-white dark:bg-darkGray stripe"
      >
        <thead className="rounded-md py-5">
          <tr className="bg-primary dark:bg-gray text-white text-sm rounded-t-md">
            <th className="px-4 py-5 font-semibold text-start">Ref. Number</th>
            <th className="px-4 py-5 font-semibold text-start">Name</th>
            <th className="px-4 py-5 font-semibold text-start">Amount</th>
            <th className="px-4 py-5 font-semibold text-start">Status</th>
            <th className="px-4 py-5 font-semibold text-start">Date</th>
            <th className="px-4 py-5 font-semibold text-start">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray"></tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
