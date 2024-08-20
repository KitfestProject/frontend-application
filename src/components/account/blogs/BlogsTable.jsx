import { useRef, useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import toast from "react-hot-toast";
import axiosClient from "@/axiosClient";
import useTimeAgo from "@/hooks/useTimeAgo";
import { useNavigate } from "react-router-dom";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { ModalTransparent, ActionWarningComponent } from "@/components";
import { BiInfoCircle } from "react-icons/bi";

const BlogsTable = ({ fetchStats }) => {
  const tableRef = useRef(null);
  const navigate = useNavigate();
  const { formatTableDate } = useTimeAgo();
  const [blogId, setBlogId] = useState(null);
  const [dataTable, setDataTable] = useState(null);
  const { deleteSingleBlog, updateBlogStatus } = useServerSideQueries();
  const [showDeleteAlertModal, setShowDeleteAlertDialog] = useState(false);
  const [loading, setLoading] = useState(false); // Added to handle loading state

  const toggleShowDeleteAlertModal = () =>
    setShowDeleteAlertDialog((prev) => !prev);

  useEffect(() => {
    if (!dataTable) {
      const table = $(tableRef.current).DataTable({
        processing: true,
        serverSide: true,
        destroy: true,
        ajax: async (data, callback) => {
          try {
            const response = await axiosClient.post("/blogs/list", data);
            callback(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        },
        columns: [
          {
            title: "Blog Details",
            data: null,
            render: (data) => {
              return `
                <div class="flex items-center gap-3 w-full max-w-[400px]">
                  <img src="${data.cover_image}" alt="blog" class="w-20 h-14 rounded" />
                  <div>
                    <p class="font-semibold text-sm text-dark dark:text-slate-100 leading-tight">
                      ${data.name}
                    </p>
                    <p class="text-xs text-gray-400">${data.category}</p>
                  </div>
                </div>
              `;
            },
          },
          {
            title: "Author",
            data: null,
            render: (data) => {
              return `<p class="dark:text-slate-100 text-sm">${data.author_name}</p>`;
            },
          },
          {
            title: "Post Date",
            data: "created_at",
            render: (created_at) => {
              return `
                <p class="dark:text-slate-100 text-sm">${formatTableDate(
                  created_at
                )}</p>
              `;
            },
          },
          {
            title: "Status",
            data: null,
            render: (data) => {
              return `
                  <div id="custom-switch-${data.id}" class="custom-switch ${
                data.active ? "active" : ""
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
                  <button class="text-dark dark:text-gray edit_system_blog text-sm" data-id="${data.id}">
                    Edit
                  </button>
                  |
                  <button data-view="${data.id}" class="text-blue-500 text-sm view_system_blog">
                    View
                  </button>
                  |
                  <button class="text-red-600 text-sm delete_system_blog" data-id="${data.id}">
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

    table.on("click", ".edit_system_blog", function (e) {
      e.preventDefault();
      const blogId = $(this).data("id");
      navigate(`/blogs/edit-blog/${blogId}`);
    });

    table.on("click", ".view_system_blog", function (e) {
      e.preventDefault();
      const blogId = $(this).data("view");
      navigate(`/blogs/${blogId}`);
    });

    table.on("click", ".delete_system_blog", function (e) {
      e.preventDefault();
      const blogId = $(this).data("id");
      setBlogId(blogId);
      toggleShowDeleteAlertModal();
    });

    table.on("click", ".custom-switch", async function (e) {
      e.preventDefault();
      const $switch = $(this);
      const blogId = $switch.data("id");

      $switch.toggleClass("active");
      console.log(blogId);

      const { success, message } = await updateBlogStatus(blogId);

      if (!success) {
        $switch.toggleClass("active");
        toast.error(message, {
          icon: <BiInfoCircle className="text-white text-2xl" />,
          position: "bottom-right",
          style: {
            borderRadius: "10px",
            background: "#ff0000",
            color: "#fff",
          },
        });
        return;
      }

      await fetchStats();
      toast.success(message, {
        icon: <BiInfoCircle className="text-white text-2xl" />,
        position: "bottom-right",
        style: {
          borderRadius: "10px",
          background: "#00b74a",
          color: "#fff",
        },
      });
    });

    return () => {
      table.off("click", ".edit_system_blog");
      table.off("click", ".view_system_blog");
      table.off("click", ".delete_system_blog");
      table.off("click", ".custom-switch");
    };
  }, [dataTable, navigate]);

  const handleDeleteBlog = async () => {
    setLoading(true);
    const { success, message } = await deleteSingleBlog(blogId);

    if (!success) {
      setLoading(false);
      return toast.error(message);
    }

    toggleShowDeleteAlertModal();
    dataTable.ajax.reload(null, false); // Reload the table without resetting the paging
    setLoading(false);
    return toast.success("Blog deleted successfully!");
  };

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
                Blog Details
              </th>
              <th className="px-4 py-3 font-semibold text-start"></th>
              <th className="px-4 py-3 font-semibold text-start"></th>
              <th className="px-4 py-3 font-semibold text-start"></th>
              <th className="px-4 py-3 font-semibold text-center"></th>
            </tr>
          </thead>
          <tbody className="text-gray"></tbody>
        </table>
      </div>

      {showDeleteAlertModal && (
        <ModalTransparent onClose={toggleShowDeleteAlertModal}>
          <ActionWarningComponent
            handleClick={handleDeleteBlog}
            cancel={toggleShowDeleteAlertModal}
            loading={loading}
            message={`Are you sure you want to delete this blog?`}
          />
        </ModalTransparent>
      )}
    </>
  );
};

export default BlogsTable;
