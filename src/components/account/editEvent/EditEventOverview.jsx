/**
 *
 * ===== Edit Event component =====
 * - Event status (published/drafted)
 * - Last updated date
 * - Edit seat map if event has one
 * - Delete event button
 * - Update event image
 * - Update event tickets
 *
 */

import { BiPencil, BiPlus, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  ModalTransparent,
  UploadEventCover,
  GeneralInformation,
  EditEventDeleteWarning,
} from "@/components";
import { CreateEventFormContext } from "@/context/CreateEventFormContext";
import { useContext, useState } from "react";
import { FaEye, FaCircleExclamation, FaCircleCheck } from "react-icons/fa6";
import useTimeAgo from "@/hooks/useTimeAgo";

const EditEventOverview = () => {
  const { eventData } = useContext(CreateEventFormContext);
  const [showModal, setShowModal] = useState(false);
  const toggleModalShow = () => setShowModal((prev) => !prev);
  const [loading, setLoading] = useState(false);
  let updateTime = new Date();
  let createdTime = eventData?.createdAt;

  if (!eventData?.createdAt && eventData?.updatedAt) {
    updateTime = eventData?.updatedAt;
  }

  const { timeAgo } = useTimeAgo();
  const status = eventData?.status;

  const handleDeleteEvent = () => {
    toggleModalShow();
  };

  // console.log(eventData);

  return (
    <div className="w-full">
      {/* Title Area */}
      <div className="border-b border-gray/30 pb-3">
        <div className="flex items-baseline justify-between w-full">
          <h1 className="text-xl font-semibold text-dark dark:text-slate-100">
            Edit Event
          </h1>

          <div className="flex justify-center items-center gap-2">
            {eventData?.has_seat_map ? (
              <>
                {/* Edit Sit Map Link */}
                <Link
                  to={eventData.venue.seat_map_url + "/pricing/" + eventData._id}
                  className="text-sm flex justify-center items-center gap-1 px-5 py-2 bg-primary text-white rounded-md"
                >
                  <BiPencil />
                  Edit Sit Map
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
            ) : (
              <>
                {/* Edit Event Ticket Link */}
                <Link
                  to={""}
                  className="text-sm flex justify-center items-center gap-1 px-5 py-2 bg-primary text-white rounded-md"
                >
                  <BiPencil />
                  Edit Ticket
                </Link>
              </>
            )}

            {/* Delete Event Button */}
            <button
              onClick={handleDeleteEvent}
              className="text-sm flex justify-center items-center gap-1 px-5 py-2 bg-red-500 text-white rounded-md"
            >
              <BiTrash />
              Delete Event
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
        </div>

        {/* General information */}
        <div className="pt-3">
          <GeneralInformation />
        </div>
      </div>

      {/* Delete Event Modal */}
      {showModal && (
        <ModalTransparent onClose={toggleModalShow}>
          <EditEventDeleteWarning
            handleClick={() => {}}
            cancel={toggleModalShow}
            loading={loading}
          />
        </ModalTransparent>
      )}
    </div>
  );
};

export default EditEventOverview;
