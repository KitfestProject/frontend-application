import { useRef, useState, useEffect } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import toast from "react-hot-toast";
import "datatables.net-dt/css/dataTables.dataTables.css";
import { BiInfoCircle, BiSolidCheckCircle } from "react-icons/bi";
import {
  ModalTransparent,
  EditCategoryForm,
  ActionWarningComponent,
} from "@/components";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import axiosClient from "@/axiosClient";
import useTruncate from "@/hooks/useTruncate";
import { Navigate, useNavigate } from "react-router-dom";

const CategoryTable = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => setShowModal(!showModal);
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);
  const [editCategoryData, setEditCategoryData] = useState(null);
  const { getSystemCategories, deleteSystemCategory } = useServerSideQueries();
  const [categories, setCategories] = useState(null);
  const [showDeleteAlertModal, setShowDeleteAlertModal] = useState(false);
  const toggleShowDeleteAlertModal = () =>
    setShowDeleteAlertModal(!showDeleteAlertModal);
  const [loading, setLoading] = useState(false);
  const { truncateDescription } = useTruncate();
  const navigate = useNavigate();

  useEffect(() => {
    if (!dataTable) {
      const table = $(tableRef.current).DataTable({
        processing: true,
        serverSide: true,
        bDestroy: true,
        ajax: async (data, callback) => {
          const response = await axiosClient.post(
            "/categories/admin_fetch",
            data
          );
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
                  ${data._id}
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
            title: "Description",
            data: null,
            render: (data) => {
              return `
              <td class="px-4 py-3">
                <p class="dark:text-slate-100 text-sm text-ellipsis overflow-hidden ...">
                  ${truncateDescription(data.description, 50)}
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
                <button class="text-secondary edit_user dark:text-primary-dark text-sm font-semibold" data-id="${data._id}">
                  Edit
                </button>
                |
                <button class="text-secondary delete_user dark:text-primary-dark text-sm font-semibold" data-id="${data._id}">
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
    $(document).on("click", ".edit_user", function (e) {
      e.preventDefault();
      const categoryId = $(this).data("id");
      navigate(`/categories-edit/${categoryId}`);
    });
  }, []);

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
          <EditCategoryForm category={editCategoryData} />
        </ModalTransparent>
      )}

      {/* Delete Alert Modal */}
      {showDeleteAlertModal && (
        <ModalTransparent onClose={toggleShowDeleteAlertModal}>
          <ActionWarningComponent
            handleClick={handleDeleteSystemCategory}
            cancel={toggleShowDeleteAlertModal}
            loading={loading}
            message="Are you sure you want to delete this category?"
          />
        </ModalTransparent>
      )}
    </>
  );
};

export default CategoryTable;
