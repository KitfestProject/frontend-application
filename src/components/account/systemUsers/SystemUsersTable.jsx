import { useRef, useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import { ModalTransparent } from "@/components";
import EditUserForm from "./EditUserForm";
import axiosClient from "@/axiosClient";

const SystemUsersTable = () => {
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const toggleModalOpen = () => setIsModalOpen((previous) => !previous);

  console.log(tableRef.current);

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
          { title: "#ID", data: "_id" },
          { title: "User Name", data: "name" },
          { title: "Email", data: "email" },
          { title: "Role", data: "is_admin" },
          { title: "Reg. Date", data: "created_at" },
          {
            title: "Action",
            data: null,
            render: (data) => {
              return `
                <button class="text-secondary dark:text-primary-dark" onClick="handleEditClick(${data})">
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

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <div className="overflow-x-auto dark:bg-darkGray shadow-md rounded-md dark:border dark:border-gray/50">
      <table
        id="users_table"
        ref={tableRef}
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
