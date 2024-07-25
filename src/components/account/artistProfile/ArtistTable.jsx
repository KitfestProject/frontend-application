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
import { BiPlus } from "react-icons/bi";
import useTimeAgo from "@/hooks/useTimeAgo";

const ArtistTable = () => {
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);
  const { formatTableDate } = useTimeAgo();

  useEffect(() => {
    if (!dataTable) {
      const table = $(tableRef.current).DataTable({
        processing: true,
        serverSide: true,
        bDestroy: true,
        ajax: async (data, callback) => {
          const response = await axiosClient.post("/artists/admin_fetch", data);
          callback(response.data);
        },
        columns: [
          {
            title: "Artist Name",
            data: null,
            render: (data) => {
              return `
              <td class="px-4 py-3">
                <div class="flex items-center gap-3">
                  <div>
                    <img
                      src="${data.image || ProfileAvatar}"
                      alt="profile"
                      class="w-8 h-8 rounded-full"
                    />
                  </div>
                  <div>
                    <p class="font-semibold text-sm text-dark dark:text-slate-100 leading-tight">
                      ${data.name}
                    </p>
                  </div>
                </div>
              </td>`;
            },
          },
          {
            title: "Description",
            data: null,
            render: (data) => {
              return `
              <td class="px-4 py-3 text-center">
                <p class="dark:text-slate-100 text-sm">
                  ${data.description}
                </p>
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
                  data.created_at
                )}</p>
              </td>`;
            },
          },
          {
            title: "Action",
            data: null,
            render: () => {
              return `
              <div class="flex justify-center items-center gap-2">
                <button class="text-primary edit_user dark:text-primary-dark">
                  Edit
                </button>
                <button class="text-secondary edit_user dark:text-primary-dark">
                  Delete
                </button>
              </div>
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
    <>
      <div className="flex items-center justify-between w-full mt-10 mb-5">
        <h1 className="text-xl font-semibold text-dark dark:text-slate-100 pb-3">
          Registered Artists
        </h1>

        <button
          onClick={() => {}}
          className="text-sm flex justify-center items-center gap-1 px-5 py-2 bg-primary text-white rounded-md"
        >
          <BiPlus />
          Create Artist
        </button>
      </div>

      <div className="overflow-x-auto dark:bg-darkGray shadow-md rounded-md dark:border dark:border-gray/50">
        <table
          ref={tableRef}
          id="users_table"
          className="min-w-full bg-white dark:bg-darkGray stripe"
        >
          <thead className="rounded-md py-5">
            <tr className="bg-primary dark:bg-gray text-white text-sm rounded-t-md">
              <th className="px-4 py-5 font-semibold text-start">User Name</th>
              <th className="px-4 py-5 font-semibold text-start">Email</th>
              <th className="px-4 py-5 font-semibold text-start">Reg. Date</th>
              <th className="px-4 py-5 font-semibold text-start">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray"></tbody>
        </table>
      </div>
    </>
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
