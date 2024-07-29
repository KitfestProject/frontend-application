import { useRef, useState, useEffect } from "react";
import { FaPencil } from "react-icons/fa6";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axiosClient from "@/axiosClient";
import { ModalTransparent, EditCategoryForm } from "@/components";
import { categories } from "@/components/data/StaticData";

const CategoryTable = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => setShowModal(!showModal);
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);
  const baseUrl = import.meta.env.VITE_KITFT_API_PRODUCTION;
  const [editCategoryData, setEditCategoryData] = useState(null);

  useEffect(() => {
    if (!dataTable) {
      const table = $(tableRef.current).DataTable();
      setDataTable(table);
    }

    return () => {
      if (dataTable) {
        dataTable.destroy();
      }
    };
  }, [dataTable]);

  const handleCategoryClick = (category) => {
    setEditCategoryData(category);
    toggleShowModal(true);
  };

  const renderCategories = (category, index) => (
    <TableRow
      key={index}
      category={category}
      index={index}
      onEditClick={handleCategoryClick}
    />
  );

  return (
    <>
      {/* Categories Table */}
      <div className="overflow-x-auto dark:bg-darkGray shadow-md rounded-md dark:border dark:border-gray/50 mt-5">
        <table
          ref={tableRef}
          id="categories_table"
          className="min-w-full bg-white dark:bg-darkGray"
        >
          <thead className="rounded-md py-5">
            <tr className="bg-primary dark:bg-gray text-white text-sm rounded-t-md">
              <th className="px-4 py-5 font-semibold text-start">#ID</th>
              <th className="px-4 py-5 font-semibold text-start">Category</th>
              <th className="px-4 py-5 font-semibold text-start">
                Description
              </th>
              <th className="px-4 py-5 font-semibold text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray">
            {categories.map(renderCategories)}
          </tbody>
        </table>
      </div>

      {/* Edit Category Modal */}
      {showModal && (
        <ModalTransparent onClose={toggleShowModal}>
          <EditCategoryForm category={editCategoryData} />
        </ModalTransparent>
      )}
    </>
  );
};

const TableRow = ({ category, index, onEditClick }) => {
  return (
    <tr
      className={`dark:border-b ${
        index % 2 === 0 ? "odd:bg-primary/5 dark:odd:bg-gray/20" : ""
      } dark:text-slate-200 dark:border-gray/30`}
    >
      <td className="px-4 py-3 text-center">
        <p className="text-sm font-semibold text-dark dark:text-slate-100">
          {category.id}
        </p>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <p className="font-semibold text-sm text-dark dark:text-slate-100 leading-tight">
            {category.title}
          </p>
        </div>
      </td>
      <td className="px-4 py-3">
        <p className="dark:text-slate-100 text-sm text-ellipsis overflow-hidden ...">
          {category.description}
        </p>
      </td>
      <td className="px-4 py-3 text-right">
        <button
          onClick={() => onEditClick(category)}
          className="text-orange-600"
        >
          <FaPencil />
        </button>
      </td>
    </tr>
  );
};

export default CategoryTable;
