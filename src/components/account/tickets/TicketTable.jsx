import { useRef, useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axiosClient from "@/axiosClient";
import useTimeAgo from "@/hooks/useTimeAgo";
import useCurrencyConverter from "@/hooks/useCurrencyConverter";
import useTruncate from "@/hooks/useTruncate";

const TicketTable = () => {
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);
  const { determineAmPm, formatTableDate } = useTimeAgo();
  const { formatCurrency } = useCurrencyConverter();
  const { truncateDescription } = useTruncate();

  useEffect(() => {
    if (!dataTable) {
      const table = $(tableRef.current).DataTable({
        processing: true,
        serverSide: true,
        bDestroy: true,
        ajax: async (data, callback) => {
          const response = await axiosClient.post("/tickets", data);
          callback(response.data);
        },
        columns: [
          {
            title: "User Name",
            data: null,
            render: (data) => {
              return `
                <div class="text-dark font-semibold w-[100px] dark:text-slate-100 text-sm">${data.user_name}</div>
              `;
            },
          },
          {
            title: "Event Title",
            data: null,
            render: (data) => {
              return `
                <div class="text-dark dark:text-slate-100 text-sm">${truncateDescription(
                  data.event_title,
                  50
                )}</div>
              `;
            },
          },
          {
            title: "SN(s)",
            data: null,
            render: (data) => {
              return `
                <div class="text-gray dark:text-gray text-sm">${data.seat_number}</div>
              `;
            },
          },
          {
            title: "Price",
            data: null,
            render: (data, type, row) => {
              return `
                <div class="text-primary font-semibold dark:text-green-500 text-sm">${formatCurrency(
                  row.ticket_price
                )}</div>
              `;
            },
          },
          {
            title: "Purchase Date",
            data: null,
            render: (data, type, row) => {
              return `
                <div class="text-gray w-[180px] dark:text-gray text-sm">${
                  formatTableDate(row.purchased_at) +
                  " | " +
                  determineAmPm(row.time)
                }</div>
              `;
            },
          },
          {
            title: "Action",
            data: null,
            render: () => {
              return `
                <button class="text-secondary edit_user dark:text-primary-dark text-xs font-semibold">
                  Cancel
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
        id="tickets_table"
        className="min-w-full bg-white dark:bg-darkGray stripe"
      >
        <thead className="rounded-md py-5">
          <tr className="bg-primary dark:bg-gray text-white text-sm rounded-t-md">
            <th className="px-4 py-5 font-semibold text-start"></th>
            <th className="px-4 py-5 font-semibold text-start"></th>
            <th className="px-4 py-5 font-semibold text-start"></th>
            <th className="px-4 py-5 font-semibold text-start"></th>
            <th className="px-4 py-5 font-semibold text-start"></th>
            <th className="px-4 py-5 font-semibold text-start"></th>
          </tr>
        </thead>
        <tbody className="text-gray"></tbody>
      </table>
    </div>
  );
};

export default TicketTable;
