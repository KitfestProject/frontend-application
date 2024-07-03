import { useRef, useState, useEffect } from "react";
import { FaRegTrashCan, FaEye } from "react-icons/fa6";
import { BiEdit } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axiosClient from "@/axiosClient";
import ProfileAvatar from "@/assets/profile-avatar.jpeg";
import { recentBookings } from "@/components/data/StaticData";
import { ModalTransparent } from "@/components";
import EditBlogForm from "./EditBlogForm";

const BlogsTable = () => {
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);
  const baseUrl = import.meta.env.VITE_KITFT_API_PRODUCTION;
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const toggleModalShow = () => setShowModal(!showModal);

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

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const renderEventRow = (blog, index) => (
    <TableRow
      key={index}
      blog={blog}
      index={index}
      onEditClick={handleEditClick}
    />
  );

  return (
    <>
      <h2 className="text-lg font-bold text-dark dark:text-slate-100 mb-5">
        Current Blogs
      </h2>

      <div className="overflow-x-auto dark:bg-darkGray shadow-md rounded-md dark:border dark:border-gray/30">
        <table
          ref={tableRef}
          id="attendee_table"
          className="min-w-full bg-white dark:bg-darkGray"
        >
          <thead className="rounded-md">
            <tr className="bg-primary dark:bg-gray text-white text-sm">
              <th className="px-4 py-3 font-semibold text-start">#ID</th>
              <th className="px-4 py-3 font-semibold text-start">
                Event Details
              </th>
              <th className="px-4 py-3 font-semibold text-start">Event Date</th>
              <th className="px-4 py-3 font-semibold text-start">Status</th>
              <th className="px-4 py-3 font-semibold text-start">Category</th>
              <th className="px-4 py-3 font-semibold text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray">
            {recentBookings.map(renderEventRow)}
          </tbody>
        </table>

        {/* Edit Modal */}
        {showModal && (
          <ModalTransparent onClose={toggleModalShow}>
            <EditBlogForm user={selectedUser} close={toggleModalShow} />
          </ModalTransparent>
        )}
      </div>
    </>
  );
};

const TableRow = ({ blog, index, onEditClick }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case "published":
        return "bg-green-600";
      case "draft":
        return "bg-yellow-600";
      case "cancelled":
        return "bg-red-600";
      default:
        return "";
    }
  };

  return (
    <tr
      className={`dark:border-b ${
        index % 2 === 0 ? "odd:bg-primary/5 dark:odd:bg-gray/20" : ""
      } dark:text-slate-200 dark:border-gray/30`}
    >
      <td className="px-4 text-center">
        <p className="text-sm font-semibold text-dark dark:text-slate-100">
          {blog.id}
        </p>
      </td>
      <td className="px-4">
        <div className="flex items-center gap-3">
          <img src={blog.eventImage} alt="blog" className="w-20 h-14 rounded" />
          <div>
            <p className="font-semibold text-sm text-dark dark:text-slate-100 leading-tight">
              {blog.title}
            </p>
            <p className="text-xs text-gray-400">{blog.location}</p>
          </div>
        </div>
      </td>
      <td className="px-4">
        <p className="dark:text-slate-100 text-sm">{blog.created_at}</p>
      </td>
      <td className="px-4">
        <div className="flex justify-start items-center gap-2">
          <div
            className={`${getStatusClass(blog.status)} w-2 h-2 rounded-full`}
          ></div>
          <p className="dark:text-slate-100 text-sm">{blog.status}</p>
        </div>
      </td>
      <td className="px-4 text-center">
        <p className="dark:text-slate-100 text-sm">{blog.capacity}</p>
      </td>
      <td className="px-4">
        <div className="flex items-center gap-2">
          <Link
            to={`/blogs/edit-blog/${blog.id}`}
            className="text-yellow-500 text-lg"
          >
            <BiEdit />
          </Link>
          |
          <button className="text-blue-500 text-lg">
            <FaEye />
          </button>
          |
          <button className="text-red-600">
            <FaRegTrashCan />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BlogsTable;
