import { BiPlus, BiSolidSave } from "react-icons/bi";
import {
  Loader,
  MessageInput,
  OverViewTitle,
  CategoryTable,
  ModalTransparent,
} from "@/components";
import { useState } from "react";
import axiosClient from "@/axiosClient";
import toast, { Toaster } from "react-hot-toast";

const CategoriesOverview = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => setShowModal(!showModal);
  const [loading, setLoading] = useState(false);
  const [reloadTable, setReloadTable] = useState(false);
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

  const handleCreateCategory = async () => {
    if (categoryData.name === "" || categoryData.description === "") {
      return toast.error(
        "Please provide the name and description of the category to continue."
      );
    }

    setLoading(true);

    try {
      // API Call to publish venue
      const response = await axiosClient.post("/categories", categoryData);

      const { success, message } = response.data;

      if (success) {
        // Reset form data
        setCategoryData(initialCategoryData);
        toast.success(message);
        setShowModal(false);

        // Trigger table reload
        setReloadTable((prev) => !prev);
      } else {
        toast.error(message);
        setShowModal(false);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred while publishing the venue.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
      setShowModal(false);
    }
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
      {/* Overview Title */}
      <div className="flex items-center justify-between w-full">
        <OverViewTitle
          title="Categories Management"
          breadcrumbTitle="Categories"
        />

        <button
          onClick={toggleShowModal}
          className="text-sm flex items-center gap-1 px-5 py-2 bg-primary text-white rounded-md"
        >
          <BiPlus />
          Create Category
        </button>
      </div>

      {/* Event Categories Table */}
      <CategoryTable reloadDataTable={reloadTable} />

      {/* Create Category Modal */}
      {showModal && (
        <ModalTransparent onClose={toggleShowModal}>
          <div className="bg-white dark:bg-darkGray w-[500px] rounded-md dark:border dark:border-gray/30">
            {/* Modal Title */}
            <div className="p-5 bg-primary flex justify-between items-center text-white dark:bg-primary rounded-t-md">
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
                    className="text-dark dark:text-gray font-semibold text-sm"
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
                    className="bg-primary text-white px-8 py-2 rounded flex justify-center items-center gap-1"
                  >
                    {loading && <Loader />}

                    {!loading && (
                      <>
                        <BiSolidSave className="w-5 h-5" />
                        {"Create Category"}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Debugging */}
            {/* <div className="text-gray text-xs mt-5">
              <pre>{JSON.stringify(categoryData, null, 2)}</pre>
            </div> */}
          </div>
        </ModalTransparent>
      )}

      <Toaster position="bottom-right" />
    </>
  );
};

export default CategoriesOverview;
