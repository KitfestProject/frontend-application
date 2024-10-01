import { Loader, MessageInput } from "@/components";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useServerSideQueries from "@/hooks/useServerSideQueries";

const EditCategoryForm = ({ category, reloadTable, toggleShowModal }) => {
  const [name, setName] = useState(category?.name || "");
  const [description, setDescription] = useState(category?.description || "");
  const { updateSingleCategory } = useServerSideQueries();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setName(category?.name || "");
    setDescription(category?.description || "");
  }, [category]);

  const handleUpdateCategory = async () => {
    setLoading(true);
    if (name === "" || description === "") {
      setLoading(false);
      return alert("Please provide the name and description of the category.");
    }

    const categoryData = {
      name,
      description,
    };

    const { success, message } = await updateSingleCategory(
      category?._id,
      categoryData
    );

    if (!success) {
      setLoading(false);
      return toast.error(message);
    }

    toast.success(message);
    reloadTable();
    setLoading(false);
    toggleShowModal();
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleSetMessage = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="bg-white dark:bg-darkGray w-[600px] rounded-md dark:border dark:border-gray/30">
      <Toaster />

      {/* Modal Title */}
      <div className="p-5 bg-primary flex justify-between items-center text-white dark:bg-gray rounded-t-md">
        <h5 className="text-2xl font-bold tracking-tighter">Edit Category</h5>
      </div>

      {/* Edit Category form */}
      <div className="h-full max-h-[600px] overflow-y-scroll">
        <div className="p-5">
          <div className="mb-5">
            <label
              htmlFor="preferenceName"
              className="text-dark dark:text-slate-100 font-semibold text-sm"
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

          {/* Category Description */}
          <div className="mt-5">
            <label
              htmlFor="category-description"
              className="text-dark dark:text-slate-100 font-semibold text-sm"
            >
              Description
            </label>
            <small className="block text-gray mb-1">
              Provide some details about the category
            </small>
            <MessageInput value={description} onChange={handleSetMessage} />
          </div>

          <div className="mt-5 flex justify-end items-center">
            <button
              onClick={handleUpdateCategory}
              className="bg-primary text-white px-8 py-2 rounded w-1/2 flex justify-center items-center gap-1"
            >
              {loading ? <Loader /> : "Update Category"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategoryForm;
