import { useRef, useState, useEffect } from "react";
import { FaRegTrashCan, FaEye } from "react-icons/fa6";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axiosClient from "@/axiosClient";
import ProfileAvatar from "@/assets/profile-avatar.svg";
import { venues } from "@/components/data/StaticData";
import { ModalTransparent } from "@/components";
import { Link } from "react-router-dom";

const VenueOverviewTable = () => {
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const toggleModalOpen = () =>
    setIsModalOpen((previous) => (previous = !previous));

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

  const renderVenues = (venue, index) => (
    <TableRow key={index} venue={venue} index={index} />
  );

  return (
    <div className="overflow-x-auto dark:bg-darkGray shadow-md rounded-md dark:border dark:border-gray/50">
      <table
        ref={tableRef}
        id="users_table"
        className="min-w-full bg-white dark:bg-darkGray"
      >
        <thead className="rounded-md py-5">
          <tr className="bg-primary dark:bg-gray text-white text-sm rounded-t-md">
            <th className="px-4 py-5 font-semibold text-start">#ID</th>
            <th className="px-4 py-5 font-semibold text-start">Name</th>
            <th className="px-4 py-5 font-semibold text-start">Location</th>
            <th className="px-4 py-5 font-semibold text-start">Capacity</th>
            <th className="px-4 py-5 font-semibold text-start">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray">{venues.map(renderVenues)}</tbody>
      </table>
    </div>
  );
};

const TableRow = ({ venue, index }) => {
  return (
    <tr
      className={`dark:border-b ${
        index % 2 === 0 ? "odd:bg-primary/5 dark:odd:bg-gray/20" : ""
      } dark:text-slate-200 dark:border-gray/30`}
    >
      <td className="px-4 py-3">
        <p className="dark:text-slate-100 text-sm">{venue.id}</p>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div>
            <img
              src={venue.image}
              alt="profile"
              className="w-20 h-10 rounded"
            />
          </div>
          <div>
            <p className="font-semibold text-sm text-dark dark:text-slate-100 leading-tight">
              {venue.name}
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        <p className="dark:text-slate-100 text-sm">{venue.address}</p>
      </td>
      <td className="px-4 py-3 text-center">
        <p className="dark:text-slate-100 text-sm">{venue.capacity}</p>
      </td>
      <td className="px-4 py-3 text-center">
        <div className="flex items-center gap-2">
          <Link
            to={`/venues/edit-venue/${venue.id}`}
            className="text-secondary dark:text-primary-dark"
          >
            Edit
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default VenueOverviewTable;
