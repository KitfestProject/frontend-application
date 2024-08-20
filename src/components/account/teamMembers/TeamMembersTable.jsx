import { useRef, useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import {
  ModalTransparent,
  EditCategoryForm,
  ActionWarningComponent,
} from "@/components";
import toast from "react-hot-toast";
import axiosClient from "@/axiosClient";
import useTruncate from "@/hooks/useTruncate";
import { useNavigate } from "react-router-dom";
import useServerSideQueries from "@/hooks/useServerSideQueries";

const TeamMembersTable = ({ reloadDataTable }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => setShowModal(!showModal);
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);
  const [editTeamMemberData, setEditTeamMemberData] = useState(null);
  const [showDeleteAlertModal, setShowDeleteAlertModal] = useState(false);
  const toggleShowDeleteAlertModal = () =>
    setShowDeleteAlertModal(!showDeleteAlertModal);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [teamMemberId, setTeamMemberId] = useState(null);
  const { deleteTeamMember } = useServerSideQueries();

  useEffect(() => {
    if (!dataTable) {
      const table = $(tableRef.current).DataTable({
        processing: true,
        serverSide: true,
        bDestroy: true,
        ajax: async (data, callback) => {
          const response = await axiosClient.post("/team/admin", data);
          callback(response.data);
        },
        columns: [
          {
            title: "#ID",
            data: null,
            render: (data) => {
              return `
              <td class="px-4 py-3 text-center">
                <p class="text-sm font-semibold text-primary dark:text-slate-100">
                  ${data.id}
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
                    <p class="font-semibold text-sm text-dark dark:text-slate-100 leading-tight">
                      ${data.name}
                    </p>
                  </div>
                </td>
              `;
            },
          },
          {
            title: "Email",
            data: null,
            render: (data) => {
              return `
              <td class="px-4 py-3">
                <p class="dark:text-slate-100 text-sm text-ellipsis overflow-hidden ...">
                  ${data.email}
                </p>
              </td>`;
            },
          },
          {
            title: "Phone Number",
            data: null,
            render: (data) => {
              return `
              <td class="px-4 py-3">
                <p class="dark:text-slate-100 text-sm text-ellipsis overflow-hidden ...">
                  ${data.phone}
                </p>
              </td>`;
            },
          },
          {
            title: "Action",
            data: null,
            render: (data) => {
              return `
              <div class="flex justify-center items-center gap-2">
                <button class="text-secondary edit_category dark:text-primary-dark text-sm font-semibold" data-id="${data.id}">
                  Edit
                </button>
                |
                <button class="text-secondary delete_user dark:text-primary-dark text-sm font-semibold" data-id="${data.id}">
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

  useEffect(() => {
    const table = $(tableRef.current);

    table.on("click", ".edit_category", function (e) {
      e.preventDefault();
      const teamMemberId = $(this).data("id");
      setEditTeamMemberData(teamMemberId);
      navigate(`/edit-team-member/${teamMemberId}`);
    });

    table.on("click", ".delete_user", function (e) {
      e.preventDefault();
      const teamMemberId = $(this).data("id");
      setTeamMemberId(teamMemberId);
      toggleShowDeleteAlertModal();
    });

    return () => {
      table.off("click", ".edit_category");
      table.off("click", ".delete_user");
    };
  }, [dataTable]);

  // Reload the table if a new team member is created
  useEffect(() => {
    if (reloadDataTable) {
      dataTable.ajax.reload();
    }
  }, [reloadDataTable, dataTable]);

  const handleDeleteTeamMember = async () => {
    setLoading(true);
    try {
      const { success, message } = await deleteTeamMember(teamMemberId);

      if (!success) return toast.error(message);

      reloadTable();
      toggleShowDeleteAlertModal();
      toast.success(message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error deleting team member", error);
    }
  };

  // Reload the table if the category is updated
  const reloadTable = () => {
    if (dataTable) {
      dataTable.ajax.reload();
    }
  };

  return (
    <>
      {/* Categories Table */}
      <div className="overflow-x-auto dark:bg-darkGray shadow-md rounded-md dark:border dark:border-gray/50 mt-5">
        <table
          ref={tableRef}
          id="users_table"
          className="min-w-full bg-white dark:bg-darkGray stripe"
        >
          <thead className="rounded-md py-5">
            <tr className="bg-primary dark:bg-gray text-white text-sm rounded-t-md">
              <th className="px-4 py-5 font-semibold text-start"></th>
              <th className="px-4 py-5 font-semibold text-start"></th>
              <th className="px-4 py-5 font-semibold text-start"></th>
              <th className="px-4 py-5 font-semibold text-center"></th>
            </tr>
          </thead>
          <tbody className="text-gray"></tbody>
        </table>
      </div>

      {/* Edit Category Modal */}
      {showModal && (
        <ModalTransparent onClose={toggleShowModal}>
          <EditCategoryForm
            category={editTeamMemberData}
            reloadTable={reloadTable}
            toggleShowModal={toggleShowModal}
          />
        </ModalTransparent>
      )}

      {/* Delete Alert Modal */}
      {showDeleteAlertModal && (
        <ModalTransparent onClose={toggleShowDeleteAlertModal}>
          <ActionWarningComponent
            handleClick={handleDeleteTeamMember}
            cancel={toggleShowDeleteAlertModal}
            loading={loading}
            message={
              <p>
                Are you sure you want to delete this category? <br />{" "}
                <span className="font-semibold text-primary">
                  {teamMemberId}
                </span>
              </p>
            }
          />
        </ModalTransparent>
      )}
    </>
  );
};

export default TeamMembersTable;
