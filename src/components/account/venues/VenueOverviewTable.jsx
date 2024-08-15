import { useRef, useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axiosClient from "@/axiosClient";
import { useNavigate } from "react-router-dom";
import { ModalTransparent, ActionWarningComponent } from "@/components";
import useServerSideQueries from "@/hooks/useServerSideQueries";

const VenueOverviewTable = () => {
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);
  const [showDeleteAlertModal, setShowDeleteAlertDialog] = useState(false);
  const [venueId, setVenueId] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { deleteSingleVenue } = useServerSideQueries();

  const toggleShowDeleteAlertModal = () =>
    setShowDeleteAlertDialog((prev) => !prev);

  useEffect(() => {
    if (!dataTable) {
      const table = $(tableRef.current).DataTable({
        processing: true,
        serverSide: true,
        bDestroy: true,
        ajax: async (data, callback) => {
          const response = await axiosClient.post("/venues/admin_fetch", data);
          callback(response.data);
        },
        columns: [
          {
            title: "#ID",
            data: "_id",
            render: (data) => `
              <td class="px-4 py-3 text-center">
                <p class="text-sm font-semibold text-primary dark:text-slate-100">${data}</p>
              </td>`,
          },
          {
            title: "Name",
            data: "name",
            render: (data) => `
              <td class="px-4 py-3">
                <div class="flex items-center gap-3">
                  <p class="font-semibold text-sm text-dark dark:text-slate-100 leading-tight">${data}</p>
                </div>
              </td>`,
          },
          {
            title: "Image",
            data: "image",
            render: (data) => `
              <td class="px-4 py-3">
                <img src="${data}" alt="venue" class="w-20 h-10 rounded" />
              </td>`,
          },
          {
            title: "Address",
            data: "address",
            render: (data) => `
              <td class="px-4 py-3">
                <p class="dark:text-slate-100 text-sm text-ellipsis overflow-hidden">${data}</p>
              </td>`,
          },
          {
            title: "Action",
            data: null,
            render: (data) => `
              <div class="flex justify-center items-center gap-2">
                <button class="text-secondary edit_venue dark:text-primary-dark text-sm font-semibold" data-venue='${JSON.stringify(
                  data
                )}'>
                  Edit
                </button>
                |
                <button class="text-secondary delete_venue dark:text-primary-dark text-sm font-semibold" data-id="${
                  data._id
                }">
                  Delete
                </button>
              </div>`,
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

    table.on("click", ".edit_venue", function (e) {
      e.preventDefault();
      const venue = $(this).data("venue");
      navigate(`/venues/edit-venue/${venue._id}`);
    });

    table.on("click", ".delete_venue", function (e) {
      e.preventDefault();
      const venueId = $(this).data("id");
      setVenueId(venueId);
      toggleShowDeleteAlertModal();
    });

    return () => {
      table.off("click", ".edit_venue");
      table.off("click", ".delete_venue");
    };
  }, [dataTable]);

  // Handle reload table
  const reloadTable = () => {
    if (dataTable) {
      dataTable.ajax.reload();
    }
  };

  // Handle delete venue
  const handleDeleteVenue = async () => {
    setLoading(true);
    const { success, message } = await deleteSingleVenue(venueId);

    if (!success) {
      setLoading(false);
      return toast.error(message);
    }

    setLoading(false);
    toggleShowDeleteAlertModal();
    reloadTable();
    toast.success(message);
  };

  return (
    <>
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
              <th className="px-4 py-5 font-semibold text-start"></th>
            </tr>
          </thead>
          <tbody className="text-gray"></tbody>
        </table>
      </div>

      {showDeleteAlertModal && (
        <ModalTransparent onClose={toggleShowDeleteAlertModal}>
          <ActionWarningComponent
            handleClick={handleDeleteVenue}
            cancel={toggleShowDeleteAlertModal}
            loading={loading}
            message={`Are you sure you want to delete this venue?`}
          />
        </ModalTransparent>
      )}
    </>
  );
};

export default VenueOverviewTable;
