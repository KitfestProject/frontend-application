import { useState } from "react";
import axiosClient from "@/axiosClient";
import { BiCheck, BiX } from "react-icons/bi";
import { CustomDateInput } from "@/components";

const EditUserForm = ({ user, close }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date());

  console.log(user.regDate);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axiosClient.put(`/users/${user.id}`, {
        name,
        email,
        role,
        password,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePublicationDate = (selected) => {};

  return (
    <div className="w-[500px] bg-white dark:bg-darkGray dark:border dark:border-gray/50">
      <div className="bg-primary dark:bg-gray text-white flex justify-between items-center">
        <h1 className="text-lg font-semibold p-5">Edit User Details</h1>
        {/* Close Modal Icon */}
        <button
          onClick={close}
          className="absolute top-5 right-5 text-dark dark:text-slate-100"
        ></button>
      </div>

      <form onSubmit={handleSubmit} className="p-5">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-sm text-dark dark:text-slate-100"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-primary bg-[#F5F5F5] dark:bg-gray p-2 rounded-md outline-none text-[15px]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm text-dark dark:text-slate-100"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-primary bg-[#F5F5F5] dark:bg-gray p-2 rounded-md outline-none text-[15px]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="role"
              className="text-sm text-dark dark:text-slate-100"
            >
              Role
            </label>
            <input
              type="text"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full text-primary bg-[#F5F5F5] dark:bg-gray p-2 rounded-md outline-none text-[15px]"
            />
          </div>

          {/* Select date */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="date"
              className="text-sm text-dark dark:text-slate-100"
            >
              Date
            </label>
            <CustomDateInput
              title="Registered Date"
              date={new Date()}
              handleChange={handlePublicationDate}
              className="w-full text-primary bg-[#F5F5F5] dark:bg-gray p-2 rounded-md outline-none text-[15px]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-sm text-dark dark:text-slate-100"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-primary bg-[#F5F5F5] dark:bg-gray p-2 rounded-md outline-none text-[15px]"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="bg-gray/40 text-gray py-3 px-5 hover:bg-primary hover:text-slate-100 dark:bg-primary dark:text-slate-100 rounded-md flex justify-center items-center gap-1 text-sm"
              disabled={loading}
            >
              <BiX className="text-[23px]" />{" "}
              {loading ? "Loading..." : "Cancel"}
            </button>
            <button
              type="submit"
              className="bg-primary text-slate-100 py-3 px-8 hover:bg-primary hover:text-slate-100 dark:bg-primary dark:text-slate-100 rounded-md flex justify-center items-center gap-1 text-sm"
              disabled={loading}
            >
              <BiCheck className="text-[23px]" />{" "}
              {loading ? "Loading..." : "Save User"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUserForm;
