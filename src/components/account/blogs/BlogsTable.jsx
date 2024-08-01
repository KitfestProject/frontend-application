import { useRef, useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axiosClient from "@/axiosClient";
import useTimeAgo from "@/hooks/useTimeAgo";

const BlogsTable = () => {
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);
  const { formatTableDate } = useTimeAgo();

  const getStatusClass = (status) => {
    if (status) {
      return "bg-green-600";
    } else {
      return "bg-red-600";
    }
  };

  useEffect(() => {
    if (!dataTable) {
      const table = $(tableRef.current).DataTable({
        processing: true,
        serverSide: true,
        bDestroy: true,
        ajax: async (data, callback) => {
          const response = await axiosClient.post("/blogs/list", data);
          callback(response.data);
        },
        columns: [
          {
            title: "Blog Details",
            data: null,
            render: (data) => {
              return `
              <td class="px-4">
                <div class="flex items-center gap-3">
                  <img src="${data.cover_image}" alt="blog" class="w-20 h-14 rounded" />
                  <div>
                    <p class="font-semibold text-sm text-dark dark:text-slate-100 leading-tight">
                      ${data.name}
                    </p>
                    <p class="text-xs text-gray-400">${data.category}</p>
                  </div>
                </div>
              </td>`;
            },
          },
          {
            title: "Post Date",
            data: null,
            render: (data) => {
              return `
                <td class="px-4">
                  <p class="dark:text-slate-100 text-sm">${formatTableDate(
                    data.created_at
                  )}</p>
                </td>
              `;
            },
          },
          {
            title: "Status",
            data: null,
            render: (data) => {
              return `
              <td class="px-4">
              <div class="flex gap-3 items-center">
                <div class="flex justify-start items-center gap-2">
                  <div
                    class="${getStatusClass(data.active)} w-2 h-2 rounded-full"
                  ></div>
                  <p class="dark:text-slate-100 text-sm">${
                    data.active ? "Published" : "drafted"
                  }</p>
                </div>

                
                  <div id="custom-switch-${data.id}" class="custom-switch ${
                data.active ? "active" : ""
              }" data-id="${data.id}">
                    <div class="switch-toggle"></div>
                  </div>
                </div>
              </td>`;
            },
          },
          {
            title: "Action",
            data: null,
            render: (data) => {
              return `
                <td class="px-4">
                  <div class="flex items-center gap-2">
                    <Link
                      to="/blogs/edit-blog/${data._id}"
                      class="text-dark dark:text-gray text-sm"
                    >
                      Edit
                    </Link>
                    |
                    <button class="text-blue-500 text-sm">
                      View
                    </button>
                    |
                    <button class="text-red-600 text-sm">
                      Delete
                    </button>
                  </div>
                </td>
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

  return (
    <>
      <h2 className="text-lg font-bold text-dark dark:text-slate-100 mb-5">
        Current Blogs
      </h2>

      <div className="overflow-x-auto dark:bg-darkGray shadow-md rounded-md dark:border dark:border-gray/30">
        <table
          ref={tableRef}
          id="attendee_table"
          className="min-w-full bg-white dark:bg-darkGray stripe"
        >
          <thead className="rounded-md">
            <tr className="bg-primary dark:bg-gray text-white text-sm">
              <th className="px-4 py-3 font-semibold text-start">
                Event Details
              </th>
              <th className="px-4 py-3 font-semibold text-start">Event Date</th>
              <th className="px-4 py-3 font-semibold text-start">Status</th>
              <th className="px-4 py-3 font-semibold text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray"></tbody>
        </table>
      </div>
    </>
  );
};

export default BlogsTable;
