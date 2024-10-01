import { useRef, useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import toast from "react-hot-toast";
import axiosClient from "@/axiosClient";
import useTimeAgo from "@/hooks/useTimeAgo";
import ProfileAvatar from "@/assets/profile-avatar.svg";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { ModalTransparent, ChangeUserRoleForm } from "@/components";
import { BiCheck, BiInfoCircle } from "react-icons/bi";

const OrganizerRequestTable = () => {
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const { formatFullDate } = useTimeAgo();

  const [progressStatus, setProgressStatus] = useState("inprogress");
  const [descMessage, setDescMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { reviewOrganizer } = useServerSideQueries();
  const [userId, setUserId] = useState(null);

  const toggleModalOpen = () => setIsModalOpen((previous) => !previous);

  const getStatusClass = (status) => {
    switch (status) {
      case "inprogress":
        return "bg-yellow-600";
      case "rejected":
        return "bg-red-600";
      case "approved":
        return "bg-green-600";
      default:
        return "";
    }
  };

  useEffect(() => {
    if (!dataTable) {
      const table = $(tableRef.current).DataTable({
        processing: true,
        serverSide: true,
        bDestroy: true,
        ajax: async (data, callback) => {
          const response = await axiosClient.post(
            "/users/organizer_requests",
            data
          );
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
                  <p class="font-semibold text-sm text-gray dark:text-slate-100 leading-tight">
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
                <div class="text-sm text-secondary dark:text-slate-100 font-semibold">${data.email}</div>
              `;
            },
          },
          {
            title: "Request Status",
            data: null,
            render: (data) => {
              return `
                <div class="text-sm text-gray dark:text-slate-100 flex gap-2 items-center">
                    <span class="w-3 h-3 rounded-full ${getStatusClass(
                      data.organizer_request_status
                    )}"></span>
                ${data.organizer_request_status}
                </div>
                `;
            },
          },
          {
            title: "Reg. Date",
            data: null,
            render: (data) => {
              return `
                <div class="text-sm text-gray dark:text-slate-100">${formatFullDate(
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
                <button class="text-secondary edit_user dark:text-primary-dark text-sm font-semibold">
                  Manage
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

  const handleChangeStatus = async () => {
    if (!userId) return;

    setLoading(true);

    const requestData = {
      status: progressStatus,
      message: descMessage,
    };

    const response = await reviewOrganizer(userId, requestData);

    const { success, message } = response;

    if (!success) {
      toast.error(message, {
        icon: <BiInfoCircle className="text-white text-2xl" />,
        style: {
          borderRadius: "10px",
          background: "#ff0000",
          color: "#fff",
        },
      });
      toggleModalOpen();
      setLoading(false);
      return;
    }

    toast.success(message, {
      icon: <BiCheck className="text-white text-2xl" />,
      style: {
        borderRadius: "10px",
        background: "#00c20b",
        color: "#fff",
      },
    });

    setLoading(false);
    toggleModalOpen();

    dataTable.ajax.reload();
  };

  return (
    <div className="overflow-x-auto dark:bg-darkGray shadow-md rounded-md dark:border dark:border-gray/50">
      <table id="users_table" ref={tableRef} className="min-w-full stripe">
        <thead className="rounded-md py-5">
          <tr className="bg-primary dark:bg-gray text-white text-sm rounded-t-md">
            <th className="px-4 py-5 font-semibold text-start"></th>
            <th className="px-4 py-5 font-semibold text-start"></th>
            <th className="px-4 py-5 font-semibold text-start"></th>
            <th className="px-4 py-5 font-semibold text-start"></th>
            <th className="px-4 py-5 font-semibold text-start"></th>
          </tr>
        </thead>
        <tbody className="text-gray"></tbody>
      </table>

      {isModalOpen && (
        <ModalTransparent onClose={toggleModalOpen} classes="w-[800px]">
          <ChangeUserRoleForm
            user={selectedUser}
            setUserId={setUserId}
            loading={loading}
            close={toggleModalOpen}
            descMessage={descMessage}
            progressStatus={progressStatus}
            setDescMessage={setDescMessage}
            setProgressStatus={setProgressStatus}
            handleChangeStatus={handleChangeStatus}
          />
        </ModalTransparent>
      )}
    </div>
  );
};

export default OrganizerRequestTable;
