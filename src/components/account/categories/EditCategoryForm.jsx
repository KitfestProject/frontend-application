import { MessageInput } from "@/components";
import { useState } from "react";

const EditCategoryForm = ({ category }) => {
  const [name, setName] = useState(category.title);
  const [description, setDescription] = useState(category.description);

  const handleUpdateCategory = () => {
    // Send request to the server
  };

  const handleSetMessage = (ev) => {
    const message = ev.target.value;
    setDescription((prev) => ({
      ...prev,
      description: message,
    }));
  };

  const handleInputChange = (e) => {};

  return (
    <div className="bg-white dark:bg-darkGray w-[700px] rounded-md dark:border dark:border-gray/30">
      {/* Modal Title */}
      <div className="p-5 bg-primary flex justify-between items-center text-white dark:bg-gray rounded-t-md">
        <h5 className="text-2xl font-bold tracking-tighter">Edit category</h5>
      </div>

      {/* Create Category form */}
      <div className="h-full max-h-[600px] overflow-y-scroll">
        <div className="p-5">
          <div className="mb-5">
            <label
              htmlFor="preferenceName"
              className="text-dark font-semibold dark:text-gray"
            >
              Category Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-[15px]"
            />
          </div>

          {/* Event Description */}
          <div className="mt-5">
            <label
              htmlFor="event-description"
              className="text-dark dark:text-slate-100 font-semibold text-sm"
            >
              Description
            </label>
            <small className="block text-gray mb-1">
              Provide some details about the category
            </small>
            <MessageInput value={description} onChange={handleSetMessage} />
          </div>

          <div className="mt-5">
            <button
              onClick={handleUpdateCategory}
              className="bg-primary text-white px-5 py-2 rounded"
            >
              Update Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategoryForm;
