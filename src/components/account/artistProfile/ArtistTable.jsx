import { useRef, useState, useEffect } from "react";
import { FaRegTrashCan, FaEye } from "react-icons/fa6";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axiosClient from "@/axiosClient";
import ProfileAvatar from "@/assets/profile-avatar.svg";
import { users } from "@/components/data/StaticData";
import { Link } from "react-router-dom";

const ArtistTable = () => {
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);

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

  const renderUsers = (user, index) => (
    <TableRow key={index} user={user} index={index} />
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
            <th className="px-4 py-5 font-semibold text-start">User Name</th>
            <th className="px-4 py-5 font-semibold text-start">Email</th>
            <th className="px-4 py-5 font-semibold text-start">Role</th>
            <th className="px-4 py-5 font-semibold text-start">Reg. Date</th>
            <th className="px-4 py-5 font-semibold text-start">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray">{users.map(renderUsers)}</tbody>
      </table>
    </div>
  );
};

const TableRow = ({ user, index }) => {
  return (
    <tr
      className={`dark:border-b ${
        index % 2 === 0 ? "odd:bg-primary/5 dark:odd:bg-gray/20" : ""
      } dark:text-slate-200 dark:border-gray/30`}
    >
      <td className="px-4 py-3">
        <p className="dark:text-slate-100 text-sm">{user.id}</p>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div>
            <img
              src={ProfileAvatar}
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div>
            <p className="font-semibold text-sm text-dark dark:text-slate-100 leading-tight">
              {user.name}
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        <p className="dark:text-slate-100 text-sm">{user.email}</p>
      </td>
      <td className="px-4 py-3 text-center">
        <p className="dark:text-slate-100 text-sm">{user.role}</p>
      </td>
      <td className="px-4 py-3 text-center">
        <p className="dark:text-slate-100 text-sm">{user.regDate}</p>
      </td>
      <td className="px-4 py-3 text-center">
        <div className="flex items-center gap-2">
          <Link
            to={`/artists/edit-artist/${user.id}`}
            className="text-secondary dark:text-primary-dark"
          >
            Edit
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default ArtistTable;
