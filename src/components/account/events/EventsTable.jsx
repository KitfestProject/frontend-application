import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import toast from "react-hot-toast";
import axiosClient from "@/axiosClient";
import useTimeAgo from "@/hooks/useTimeAgo";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import "datatables.net-dt/css/dataTables.dataTables.css";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { BiInfoCircle, BiSolidCheckCircle } from "react-icons/bi";
import { ModalTransparent, ActionWarningComponent } from "@/components";

const EventsTable = () => {
  const tableRef = useRef(null);
  const navigate = useNavigate();
  const { formatEventDate } = useTimeAgo();
  const [eventId, setEventId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataTable, setDataTable] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteAlertModal, setShowDeleteAlertModal] = useState(false);
  const toggleShowDeleteAlertModal = () =>
    setShowDeleteAlertModal(!showDeleteAlertModal);
  const { deleteEvent, updateEventStatus } = useServerSideQueries();

  useEffect(() => {
    if (!dataTable) {
      const table = $(tableRef.current).DataTable({
        processing: true,
        serverSide: true,
        bDestroy: true,
        ajax: async (data, callback) => {
          const response = await axiosClient.post("/events/admin_fetch", data);
          callback(response.data);
        },
        columns: [
          {
            title: "Event Details",
            data: null,
            render: (data) => {
              return `
              <td class="px-4 py-3">
                <div class="flex items-center gap-3">
                  <img
                    src="${data.cover_image}"
                    alt="event"
                    class="w-20 h-10 rounded"
                  />
                  <div>
                    <p class="font-semibold text-sm text-dark dark:text-slate-100 leading-tight">
                      ${data.title}
                    </p>
                    <p class="text-xs text-gray dark:text-gray">${data.address}</p>
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
                <p class="dark:text-slate-100 text-sm">${formatEventDate(
                  data.date
                )}</p>
              </td>`;
            },
          },
          {
            title: "Status",
            data: null,
            render: (data) => {
              return `
                  <div id="custom-switch-${data.id}" class="custom-switch ${
                data.status === "published" ? "active" : ""
              }" data-id="${data.id}">
                <div class="switch-toggle"></div>
              </div>
              `;
            },
          },
          {
            title: "Action",
            data: null,
            render: (data) => {
              return `
              <div class="flex items-center gap-2">
                <a href="/my-events/edit-event/${data._id}" class="text-blue-500 text-md event-link" data-id="${data.id}">
                  View
                </a>
                |
                <button class="text-orange-600 delete-button text-md" data-id="${data.id}">
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
    $(document).on("click", ".event-link", function (e) {
      e.preventDefault();
      const eventId = $(this).data("id");
      navigate(`/my-events/edit-event/${eventId}`);
    });

    $(document).on("click", ".delete-button", function (e) {
      e.preventDefault();
      const eventId = $(this).data("id");
      setEventId(eventId);
      toggleShowDeleteAlertModal();
    });

    $(document).on("click", ".custom-switch", async function () {
      const $switch = $(this);
      const eventId = $switch.data("id");
      const isActive = $switch.hasClass("active");

      $switch.toggleClass("active");

      const status = isActive ? "published" : "draft";
      const { success, message } = await updateEventStatus(eventId, status);

      if (!success) {
        toast.error(
          "Please complete setting seat map prices before you can publish this event.",
          {
            icon: <BiInfoCircle className="text-white text-2xl w-10" />,
            position: "top-right",
            style: {
              borderRadius: "10px",
              background: "#ff0000",
              color: "#fff",
            },
          }
        );

        $switch.toggleClass("active");

        return;
      }

      toast.success(message, {
        icon: <BiSolidCheckCircle className="text-white text-2xl w-10" />,
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#00c20b",
          color: "#fff",
        },
      });

      // Reload DataTable
      if (dataTable) {
        dataTable.ajax.reload();
      }
    });

    return () => {
      $(document).off("click", ".event-link");
      $(document).off("click", ".delete-button");
      $(document).off("click", ".custom-switch");
    };
  }, [navigate]);

  // Handle delete event
  const handleDeleteEvent = async () => {
    setLoading(true);
    await deleteEvent(eventId)
      .then((response) => {
        const { success, message } = response;

        if (!success) {
          console.log(message);

          setLoading(false);

          toast.error(message, {
            icon: <BiInfoCircle className="text-white text-2xl w-10" />,
            position: "top-right",
            style: {
              borderRadius: "10px",
              background: "#ff0000",
              color: "#fff",
            },
          });
          return;
        }

        setLoading(false);

        toggleShowDeleteAlertModal();

        toast.success(message, {
          icon: <BiSolidCheckCircle className="text-white text-2xl w-10" />,
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#00c20b",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        toast.error("An error occurred while deleting event.", {
          icon: <BiInfoCircle className="text-white text-2xl w-10" />,
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#ff0000",
            color: "#fff",
          },
        });
      });
  };

  return (
    <>
      <div className="w-full mt-5">
        <div className="overflow-x-auto dark:bg-darkGray shadow-md rounded-md dark:border dark:border-gray/50">
          <table
            ref={tableRef}
            id="attendee_table"
            className="min-w-full bg-white dark:bg-darkGray stripe"
          >
            <thead className="rounded-md py-5">
              <tr className="bg-primary dark:bg-gray text-white text-sm rounded-t-md">
                <th className="px-4 py-5 font-semibold text-start">
                  Event Details
                </th>
                <th className="px-4 py-5 font-semibold text-start">Date</th>
                <th className="px-4 py-5 font-semibold text-start">Status</th>
                <th className="px-4 py-5 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray"></tbody>
          </table>
        </div>

        {/* Delete Prompt Modal */}
        {showDeleteAlertModal && (
          <ModalTransparent onClose={toggleShowDeleteAlertModal}>
            <ActionWarningComponent
              handleClick={handleDeleteEvent}
              cancel={toggleShowDeleteAlertModal}
              loading={loading}
              message={
                <p>
                  Are you sure you want to delete this Event? <br />
                  <span className="font-semibold text-primary">
                    ID: {eventId}
                  </span>{" "}
                </p>
              }
            />
          </ModalTransparent>
        )}
      </div>
    </>
  );
};

export default EventsTable;
