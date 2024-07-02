import { useRef, useState, useEffect } from "react";
import { FaRegTrashCan, FaEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axiosClient from "@/axiosClient";
import ProfileAvatar from "@/assets/profile-avatar.svg";
import { eventTickets } from "@/components/data/StaticData";

const TicketTable = () => {
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

  const renderTicket = (ticket, index) => (
    <TableRow key={index} ticket={ticket} index={index} />
  );

  return (
    <div className="overflow-x-auto dark:bg-darkGray shadow-md rounded-md dark:border dark:border-gray/50">
      <table
        ref={tableRef}
        id="tickets_table"
        className="min-w-full bg-white dark:bg-darkGray"
      >
        <thead className="rounded-md py-5">
          <tr className="bg-primary dark:bg-gray text-white text-sm rounded-t-md">
            <th className="px-4 py-5 font-semibold text-start">Code</th>
            <th className="px-4 py-5 font-semibold text-start">User Name</th>
            <th className="px-4 py-5 font-semibold text-start">Event</th>
            <th className="px-4 py-5 font-semibold text-start">Seat</th>
            <th className="px-4 py-5 font-semibold text-start">Price</th>
            <th className="px-4 py-5 font-semibold text-start">Date</th>
            <th className="px-4 py-5 font-semibold text-start">Time</th>
          </tr>
        </thead>
        <tbody className="text-gray">{eventTickets.map(renderTicket)}</tbody>
      </table>
    </div>
  );
};

const TableRow = ({ ticket, index }) => {
  return (
    <tr
      className={`dark:border-b ${
        index % 2 === 0 ? "odd:bg-primary/5 dark:odd:bg-gray/20" : ""
      } dark:text-slate-200 dark:border-gray/30`}
    >
      <td className="px-4 py-3 text-center">
        <p className="text-sm font-semibold text-primary dark:text-slate-100">
          {ticket.code}
        </p>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div>
            <p className="font-semibold text-sm text-dark dark:text-slate-100 leading-tight">
              {ticket.userName}
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        <p className="dark:text-slate-100 text-sm">{ticket.eventName}</p>
      </td>
      <td className="px-4 py-3">
        <div className="flex justify-start items-center gap-2">
          <p className="dark:text-slate-100 text-sm">{ticket.seatNumber}</p>
        </div>
      </td>
      <td className="px-4 py-3 text-center">
        <p className="dark:text-slate-100 text-sm">Ksh. {ticket.price}</p>
      </td>
      <td className="px-4 py-3 text-center">
        <p className="dark:text-slate-100 text-sm">{ticket.date}</p>
      </td>
      <td className="px-4 py-3 text-center">
        <p className="dark:text-slate-100 text-sm">{ticket.time}</p>
      </td>
    </tr>
  );
};

export default TicketTable;
