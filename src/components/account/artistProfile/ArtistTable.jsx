import { useRef, useState, useEffect } from "react";
import { FaRegTrashCan, FaEye } from "react-icons/fa6";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axiosClient from "@/axiosClient";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useTimeAgo from "@/hooks/useTimeAgo";
import ProfileAvatar from "@/assets/profile-avatar.svg";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { ModalTransparent, ActionWarningComponent } from "@/components";

const ArtistTable = () => {
  const tableRef = useRef(null);
  const navigate = useNavigate();
  const [dataTable, setDataTable] = useState(null);
  const { formatTableDate } = useTimeAgo();
  const [loading, setLoading] = useState(false);
  const [artistId, setArtistId] = useState(null);
  const { deleteArtist } = useServerSideQueries();
  const [showDeleteAlertModal, setShowDeleteAlertDialog] = useState(false);

  const toggleShowDeleteAlertModal = () =>
    setShowDeleteAlertDialog((prev) => !prev);

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
            render: (data) => {
              return `
              <div class="flex justify-center items-center gap-2">
                <button class="text-primary edit_user dark:text-primary-dark edit_artist" data-id='${data.id}'>
                  Edit
                </button>
                |
                <button class="text-secondary edit_user dark:text-primary-dark delete_artist" data-id="${data.id}">
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

    table.on("click", ".delete_artist", function () {
      const artistId = $(this).data("id");
      setArtistId(artistId);
      toggleShowDeleteAlertModal();
    });

    table.on("click", ".edit_artist", function () {
      const artistId = $(this).data("id");
      navigate(`/artists/edit-artist/${artistId}`);
    });

    return () => {
      table.off("click", ".delete_artist");
      table.off("click", ".edit_artist");
    };
  }, [dataTable]);

  // Handle delete artist
  const handleDeleteArtist = async () => {
    setLoading(true);
    const { success, message } = await deleteArtist(artistId);

    if (!success) {
      setLoading(false);
      return toast.error(message);
    }

    toggleShowDeleteAlertModal();
    setLoading(false);
    toast.success(message);

    dataTable.ajax.reload();
  };

  return (
    <>
      <div className="flex items-center justify-between w-full mt-10 mb-5">
        <h1 className="text-xl font-semibold text-dark dark:text-slate-100 pb-3">
          Registered Artists
        </h1>

        <div className=""></div>
      </div>

      <div className="overflow-x-auto dark:bg-darkGray shadow-md rounded-md dark:border dark:border-gray/50">
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
            </tr>
          </thead>
          <tbody className="text-gray"></tbody>
        </table>
      </div>

      {showDeleteAlertModal && (
        <ModalTransparent onClose={toggleShowDeleteAlertModal}>
          <ActionWarningComponent
            handleClick={handleDeleteArtist}
            cancel={toggleShowDeleteAlertModal}
            loading={loading}
            message={`Are you sure you want to delete this artist?`}
          />
        </ModalTransparent>
      )}
    </>
  );
};

export default ArtistTable;
