import { useRef } from "react";
import { draftedEvents } from "@/components/data/StaticData";
import { useNavigate } from "react-router-dom";

const EventSubmissionsComponents = () => {
  const tableRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div className="w-full mt-10">
      <h1 className="text-xl font-semibold text-dark dark:text-slate-100 pb-3">
        Events Submissions
      </h1>

      <div className="overflow-x-auto dark:bg-darkGray shadow-md rounded-md dark:border dark:border-slate-700">
        <table
          ref={tableRef}
          id="attendee_table"
          className="min-w-full bg-white dark:bg-darkGray"
        >
          <thead className="rounded-md">
            <tr className="bg-primary dark:bg-gray text-white">
              <th className="px-4 py-4 font-semibold text-start">Name</th>
              <th className="px-4 py-4 font-semibold text-start">Date</th>
              <th className="px-4 py-4 font-semibold text-start">Venue</th>
              <th className="px-4 py-4 font-semibold text-start">Action</th>
            </tr>
          </thead>

          <tbody className="text-gray">
            {draftedEvents.map((event, index) => (
              <tr
                key={index}
                className={`dark:border-b py-4 ${
                  index % 2 === 0 ? "odd:bg-primary/5 dark:odd:bg-gray/20" : ""
                } dark:text-slate-200 dark:border-gray/30`}
              >
                {/* Event name */}
                <td className="px-4 py-3">
                  <p className="text-sm font-semibold text-black dark:text-slate-100">
                    {event.title}
                  </p>
                </td>

                {/* Event Date */}
                <td className="px-4 py-3">
                  <p className="dark:text-slate-100 text-sm">{event.date}</p>
                </td>

                {/* Venue */}
                <td className="px-4 py-3">
                  <p className="dark:text-slate-100 text-sm">{event.venue}</p>
                </td>

                {/* Actions */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button className="text-green-500 text-sm">Approve</button>|
                    <button className="text-red-600 text-sm">Decline</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventSubmissionsComponents;
