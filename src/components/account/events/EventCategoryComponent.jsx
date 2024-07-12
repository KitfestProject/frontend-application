import { BiPlus } from "react-icons/bi";
import {
  MessageInput,
  ModalTransparent,
  EventCategoriesTable,
} from "@/components";
import { useState } from "react";

const EventCategoryComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => setShowModal(!showModal);
  const initialCategoryData = {
    name: "",
    description: "",
  };
  const [categoryData, setCategoryData] = useState(initialCategoryData);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "name" || name === "icon") {
      setCategoryData({ ...categoryData, [name]: value });
    }
  };

  const handleCreateCategory = () => {
    // Send post request to server
  };

  const handleSetMessage = (ev) => {
    const message = ev.target.value;
    setCategoryData((prev) => ({
      ...prev,
      description: message,
    }));
  };

  return (
    <>
      <div className="flex items-center justify-between w-full mt-10">
        <h1 className="text-xl font-semibold text-dark dark:text-slate-100 pb-3">
          Event Categories
        </h1>

        <button
          onClick={toggleShowModal}
          className="text-sm flex items-center gap-1 px-5 py-2 bg-primary text-white rounded-md"
        >
          <BiPlus />
          Create Category
        </button>
      </div>

      {/* Event Categories Table */}
      <EventCategoriesTable />

      {/* Create Category Modal */}
      {showModal && (
        <ModalTransparent onClose={toggleShowModal}>
          <div className="bg-white dark:bg-darkGray w-[700px] rounded-md dark:border dark:border-gray/30">
            {/* Modal Title */}
            <div className="p-5 bg-primary flex justify-between items-center text-white dark:bg-gray rounded-t-md">
              <h5 className="text-2xl font-bold tracking-tighter">
                Create new category
              </h5>
            </div>

            {/* Create Category form */}
            <div className="h-full max-h-[600px] overflow-y-scroll">
              <div className="p-5">
                <div className="mb-5">
                  <label
                    htmlFor="preferenceName"
                    className="text-dark font-semibold dark:text-gray text-sm"
                  >
                    Category Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={categoryData.name}
                    onChange={handleInputChange}
                    className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-[15px]"
                  />
                </div>

                {/* Category Description */}
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
                  <MessageInput
                    value={categoryData.description}
                    onChange={handleSetMessage}
                  />
                </div>

                <div className="mt-5">
                  <button
                    onClick={handleCreateCategory}
                    className="bg-primary text-white px-5 py-2 rounded"
                  >
                    Create Category
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ModalTransparent>
      )}
    </>
  );
};

export default EventCategoryComponent;
