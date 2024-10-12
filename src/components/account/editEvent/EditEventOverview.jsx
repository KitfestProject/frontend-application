import {
  BiDownload,
  BiInfoCircle,
  BiPencil,
  BiSolidCheckCircle,
  BiTrash,
} from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import {
  Loader,
  EventCharges,
  LocationAndTime,
  UploadEventCover,
  GeneralInformation,
  ModalTransparent,
  EventAdvertisement,
  EditEventDeleteWarning,
  PrimaryButtonWithLoader,
  EventShowTimeAdminComponent,
} from "@/components";
import toast from "react-hot-toast";
import { BiSave } from "react-icons/bi";
import { useContext, useState } from "react";
import useTimeAgo from "@/hooks/useTimeAgo";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { CreateEventFormContext } from "@/context/CreateEventFormContext";
import { FaEye, FaCircleExclamation, FaCircleCheck } from "react-icons/fa6";

const EditEventOverview = () => {
  const [params, setParams] = useState({
    id: "",
    event_show_id: "",
    show_time_id: "",
  });
  const { eventData, eventFormData } = useContext(CreateEventFormContext);
  const [showModal, setShowModal] = useState(false);
  const toggleModalShow = () => setShowModal((prev) => !prev);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const eventId = location.pathname.split("/").pop();
  let updateTime = new Date();
  const { deleteEvent, updateEventDetails, downloadAttendance } =
    useServerSideQueries();
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [showEventLocationWarningModal, setShowEventLocationWarningModal] =
    useState(false);
  const [showTicketWarningModal, setShowTicketWarningModal] = useState(false);
  const [showDownloadAttendeesModal, setShowDownloadAttendeesModal] =
    useState(false);
  const toggleShowAttendeesModal = () =>
    setShowDownloadAttendeesModal((prev) => !prev);

  if (!eventData?.createdAt && eventData?.updatedAt) {
    updateTime = eventData?.updatedAt;
  }

  const { timeAgo } = useTimeAgo();
  const status = eventData?.status;

  const toggleShowWarningModal = () => setShowWarningModal((prev) => !prev);
  const toggleShowEventLocationWarningModal = () =>
    setShowEventLocationWarningModal((prev) => !prev);
  const toggleShowTicketWarningModal = () =>
    setShowTicketWarningModal((prev) => !prev);

  // Handle update general information
  const handleGeneralInformationUpdate = async () => {
    setLoading(true);
    await updateEventDetails(eventId, eventFormData)
      .then((response) => {
        const { success, message, data } = response;

        if (!success) {
          console.log(message);

          setLoading(false);

          toast.error(message, {
            icon: <BiInfoCircle className="text-white text-2xl" />,
            position: "top-right",
            style: {
              borderRadius: "10px",
              background: "#ff0000",
              color: "#fff",
            },
          });
          return;
        }

        // console.log(data);
        setLoading(false);

        setShowWarningModal(false);

        toast.success(message, {
          icon: <BiSolidCheckCircle className="text-white text-2xl" />,
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

        toast.error("An error occurred while updating event details.", {
          icon: <BiInfoCircle className="text-white text-2xl" />,
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#ff0000",
            color: "#fff",
          },
        });
      });
  };

  // Handle update time and location information
  const handleLocationInformationUpdate = async () => {
    setLoading(true);
    await updateEventDetails(eventId, eventFormData)
      .then((response) => {
        const { success, message, data } = response;

        if (!success) {
          console.log(message);

          setLoading(false);

          toast.error(message, {
            icon: <BiInfoCircle className="text-white text-2xl" />,
            position: "top-right",
            style: {
              borderRadius: "10px",
              background: "#ff0000",
              color: "#fff",
            },
          });
          return;
        }

        // console.log(data);
        setLoading(false);

        setShowEventLocationWarningModal(false);

        toast.success(message, {
          icon: <BiSolidCheckCircle className="text-white text-2xl" />,
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

        toast.error("An error occurred while updating event details.", {
          icon: <BiInfoCircle className="text-white text-2xl" />,
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#ff0000",
            color: "#fff",
          },
        });
      });
  };

  // Handle update ticket information
  const handleTicketInformationUpdate = async () => {
    setLoading(true);
    await updateEventDetails(eventId, eventFormData)
      .then((response) => {
        const { success, message, data } = response;

        if (!success) {
          console.log(message);

          setLoading(false);

          toast.error(message, {
            icon: <BiInfoCircle className="text-white text-2xl" />,
            position: "top-right",
            style: {
              borderRadius: "10px",
              background: "#ff0000",
              color: "#fff",
            },
          });
          return;
        }

        // console.log(data);
        setLoading(false);

        setShowTicketWarningModal(false);

        toast.success(message, {
          icon: <BiSolidCheckCircle className="text-white text-2xl" />,
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

        toast.error("An error occurred while updating event details.", {
          icon: <BiInfoCircle BiInfoCircleclassName="text-white text-2xl" />,
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#ff0000",
            color: "#fff",
          },
        });
      });
  };

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
            icon: <BiInfoCircle className="text-white text-2xl" />,
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

        setShowModal(false);

        toast.success(message, {
          icon: <BiSolidCheckCircle className="text-white text-2xl" />,
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
          icon: <BiInfoCircle className="text-white text-2xl" />,
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#ff0000",
            color: "#fff",
          },
        });
      });
  };

  // Download attendance
  const handleDownloadAttendance = async () => {
    setLoading(true);

    await downloadAttendance(params)
      .then((response) => {
        const { success, message, data } = response;

        if (!success) {
          console.log(message);

          setLoading(false);

          toast.error(message, {
            icon: <BiInfoCircle className="text-white text-2xl" />,
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

        toast.success(message, {
          icon: <BiSolidCheckCircle className="text-white text-2xl" />,
          position: "top-right",
          style: {
            borderRadius: "10px",
            background: "#00c20b",
            color: "#fff",
          },
        });

        toggleShowAttendeesModal();

        // Redirect to the download link after 3 seconds
        setTimeout(() => {
          window.open(data, "_blank");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        toast.error("An error occurred while downloading attendance.", {
          icon: <BiInfoCircle className="text-white text-2xl" />,
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
    <div className="w-full">
      {/* Title Area */}
      <div className="border-b border-gray/30 pb-3">
        <div className="flex items-baseline justify-between w-full">
          <h1 className="text-xl font-semibold text-dark dark:text-slate-100">
            Edit Event
          </h1>

          <div className="flex justify-center items-center gap-2">
            {/* Download attendance Button */}
            <button
              onClick={() => {
                setParams((prev) => ({ ...prev, id: eventId }));
                toggleShowAttendeesModal();
              }}
              className="text-sm flex justify-center items-center gap-1 px-5 py-2 bg-green-500 text-white rounded-md"
            >
              {loading ? (
                <Loader />
              ) : (
                <>
                  <BiDownload />
                  Download Attendance
                </>
              )}
            </button>

            {eventData?.has_seat_map ? (
              <>
                {/* Edit Sit Map Link */}
                <Link
                  to={
                    eventData.venue.seat_map_url + "/pricing/" + eventData._id
                  }
                  className="text-sm flex justify-center items-center gap-1 px-5 py-2 bg-primary text-white rounded-md"
                >
                  <BiPencil />
                  Edit Seats
                </Link>

                {/* View Seat Booking Progress button */}
                <Link
                  to={`${eventData.venue.seat_map_url}/progress/${eventData._id}`}
                  className="text-sm flex justify-center items-center gap-1 px-5 py-2 bg-primary text-white rounded-md"
                >
                  <FaEye className="text-lg" />
                  View Seat Booking Progress
                </Link>
              </>
            ) : null}

            {/* Delete Event Button */}
            <button
              onClick={toggleModalShow}
              className="text-sm flex justify-center items-center gap-1 px-5 py-2 bg-red-500 text-white rounded-md"
            >
              <BiTrash />
              Delete
            </button>
          </div>
        </div>

        {/* Event Status and last updated time */}
        <div className="mt-3 flex justify-between items-center">
          <div>
            {status === "published" ? (
              <>
                <p className="text-dark dark:text-slate-100 text-sm flex gap-2 items-center">
                  Event Status:{" "}
                  <span className="text-green-500 flex gap-1 items-center">
                    {status} <FaCircleCheck className="text-lg" />{" "}
                  </span>
                </p>
              </>
            ) : (
              <>
                <p className="text-dark dark:text-slate-100 text-sm flex gap-2 items-center">
                  Event Status:{" "}
                  <span className="text-yellow-600 flex gap-1 items-center">
                    {status} <FaCircleExclamation className="text-lg" />
                  </span>
                </p>
              </>
            )}
          </div>

          <div>
            <p className="text-dark dark:text-slate-100 text-sm">
              Last Updated:{" "}
              <span className="text-yellow-600">{timeAgo(updateTime)}</span>
            </p>
          </div>
        </div>
      </div>

      {/* image and event general information */}
      <div className="grid grid-cols-1 pt-5 gap-5">
        {/* Event Cover Image */}
        <div className="pt-3">
          <UploadEventCover />

          <EventAdvertisement />
        </div>

        {/* General information */}
        <div className="pt-3">
          <GeneralInformation />

          {/* Submit Button */}
          <div className="flex justify-end items-center gap-3 mt-5">
            <PrimaryButtonWithLoader
              title="Save"
              handleClick={toggleShowWarningModal}
              classes="flex justify-center items-center gap-2 dark:bg-primary"
              icon={loading ? <Loader /> : <BiSave />}
              loading={loading}
            />
          </div>
        </div>

        {/* Location & Timing */}
        <div className="pt-3">
          <LocationAndTime />

          {/* Submit Button */}
          <div className="flex justify-end items-center gap-3 mt-5">
            <PrimaryButtonWithLoader
              title="Save"
              handleClick={toggleShowEventLocationWarningModal}
              classes="flex justify-center items-center gap-2 dark:bg-primary"
              icon={loading ? <Loader /> : <BiSave />}
              loading={loading}
            />
          </div>
        </div>

        {!eventData?.has_seat_map && (
          <>
            {/* Edit Ticket Section */}
            <div className="pt-3">
              <EventCharges />

              {/* Submit Button */}
              <div className="flex justify-end items-center gap-3 mt-5">
                <PrimaryButtonWithLoader
                  title="Save"
                  handleClick={toggleShowTicketWarningModal}
                  classes="flex justify-center items-center gap-2 dark:bg-primary"
                  icon={loading ? <Loader /> : <BiSave />}
                  loading={loading}
                />
              </div>
            </div>
          </>
        )}

        {/* Debugging output */}
        {/* <div className="text-gray text-xs">
          <pre>{JSON.stringify(eventFormData, null, 2)}</pre>
        </div> */}
      </div>

      {/* Delete Event Modal */}
      {showModal && (
        <ModalTransparent onClose={toggleModalShow}>
          <EditEventDeleteWarning
            handleClick={handleDeleteEvent}
            cancel={toggleModalShow}
            loading={loading}
          />
        </ModalTransparent>
      )}

      {/* Show warning Modal */}
      {showWarningModal && (
        <ModalTransparent onClose={toggleShowWarningModal}>
          <EditEventDeleteWarning
            handleClick={handleGeneralInformationUpdate}
            cancel={toggleShowWarningModal}
            loading={loading}
            message="You are about to update the event general information. Do you wish to continue?"
          />
        </ModalTransparent>
      )}

      {/* Show Event Location Warning Modal */}
      {showEventLocationWarningModal && (
        <ModalTransparent onClose={toggleShowEventLocationWarningModal}>
          <EditEventDeleteWarning
            handleClick={handleLocationInformationUpdate}
            cancel={toggleShowEventLocationWarningModal}
            loading={loading}
            message="You are about to update the event location and time. Do you wish to continue?"
          />
        </ModalTransparent>
      )}

      {/* Show Ticket Warning Modal */}
      {showTicketWarningModal && (
        <ModalTransparent onClose={toggleShowTicketWarningModal}>
          <EditEventDeleteWarning
            handleClick={handleTicketInformationUpdate}
            cancel={toggleShowTicketWarningModal}
            loading={loading}
            message="You are about to update the event ticket information. Do you wish to continue?"
          />
        </ModalTransparent>
      )}

      {/* Show Attendees Modal */}
      {showDownloadAttendeesModal && (
        <ModalTransparent onClose={toggleShowAttendeesModal}>
          <div className="bg-white dark:bg-darkGray w-[600px] rounded-md dark:border dark:border-gray/30">
            {/* Modal Title */}
            <div className="p-3 bg-primary/50 flex justify-between items-center text-white dark:bg-gray rounded-t-md">
              <h5 className="text-2xl font-bold tracking-tighter">
                Get Event Attendance List
              </h5>
            </div>

            {/* Get Attendance Section */}
            <div className="h-full max-h-[600px] overflow-y-scroll">
              <div className="p-5">
                <EventShowTimeAdminComponent
                  eventData={eventData}
                  setParams={setParams}
                />

                <div className="mt-5 flex justify-end items-center">
                  <button
                    onClick={handleDownloadAttendance}
                    className="bg-primary text-white px-8 py-2 rounded w-1/2 flex justify-center items-center gap-1"
                  >
                    {loading ? <Loader /> : "Get Attendance"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ModalTransparent>
      )}
    </div>
  );
};

export default EditEventOverview;
