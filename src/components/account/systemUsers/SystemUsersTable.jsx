import { useRef, useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import { ModalTransparent } from "@/components";
import EditUserForm from "./EditUserForm";
import axiosClient from "@/axiosClient";
import useTimeAgo from "@/hooks/useTimeAgo";
import ProfileAvatar from "@/assets/profile-avatar.svg";

const SystemUsersTable = () => {
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const { formatFullDate } = useTimeAgo();

  const toggleModalOpen = () => setIsModalOpen((previous) => !previous);

  useEffect(() => {
    if (!dataTable) {
      const table = $(tableRef.current).DataTable({
        processing: true,
        serverSide: true,
        bDestroy: true,
        ajax: async (data, callback) => {
          const response = await axiosClient.post("/users", data);
          callback(response.data);
        },
        columns: [
          {
            title: "User Name",
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
                  <p class="font-semibold text-sm text-dark dark:text-gray leading-tight">
                    ${data.name}
                  </p>
                </div>
              </div>
            </td>`;
            },
          },
          {
            title: "Email",
            data: null,
            render: (data) => {
              return `
                <div class="text-sm text-secondary dark:text-gray font-semibold">${data.email}</div>
              `;
            },
          },
          {
            title: "Role",
            data: null,
            render: (data) => {
              return data.role;
            },
          },
          {
            title: "Reg. Date",
            data: null,
            render: (data) => {
              return `
                <div class="text-sm text-gray dark:text-gray">${formatFullDate(
                  data.created_at
                )}</div>
              `;
            },
          },
          {
            title: "Action",
            data: null,
            render: () => {
              return `
                <button class="text-secondary edit_user dark:text-primary-dark">
                  Edit
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

  useEffect(() => {
    const table = $(tableRef.current);

    const handleEditClick = (row) => {
      setSelectedUser(row);
      setIsModalOpen(true);
      // console.log(row);
    };

    table.on("click", ".edit_user", function () {
      const row = dataTable.row($(this).closest("tr")).data();
      handleEditClick(row);
    });

    return () => {
      table.off("click", ".edit_user");
    };
  }, [dataTable]);

  return (
    <div className="overflow-x-auto dark:bg-darkGray shadow-md rounded-md dark:border dark:border-gray/50">
      <table id="users_table" ref={tableRef} className="min-w-full stripe">
        <thead className="rounded-md py-5">
          <tr className="bg-primary dark:bg-gray text-white text-sm rounded-t-md">
            <th className="px-4 py-5 font-semibold text-start">User Name</th>
            <th className="px-4 py-5 font-semibold text-start">Email</th>
            <th className="px-4 py-5 font-semibold text-start">Role</th>
            <th className="px-4 py-5 font-semibold text-start">Reg. Date</th>
            <th className="px-4 py-5 font-semibold text-start">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray"></tbody>
      </table>

      {isModalOpen && (
        <ModalTransparent onClose={toggleModalOpen} classes="w-[800px]">
          <EditUserForm user={selectedUser} close={toggleModalOpen} />
        </ModalTransparent>
      )}
    </div>
  );
};

export default SystemUsersTable;
