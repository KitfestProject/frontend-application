import { Loader, AccountSidebarMenu } from "@/components";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { BiInfoCircle, BiSolidCheckCircle } from "react-icons/bi";

const ChangePasswordComponent = () => {
  const { updateUserPassword } = useServerSideQueries();
  const initialPasswordFormData = {
    old_password: "",
    new_password: "",
    confirm_password: "",
  };
  const [passwordData, setPasswordData] = useState(initialPasswordFormData);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPasswordData({ ...passwordData, [name]: value });
  };

  const updatePassword = async () => {
    setLoading(true);
    const { new_password, confirm_password } = passwordData;

    if (new_password !== confirm_password) {
      setLoading(false);
      return toast.error("Passwords do not match!", {
        icon: <BiInfoCircle className="text-white text-2xl" />,
        style: {
          borderRadius: "10px",
          background: "#ff0000",
          color: "#fff",
        },
      });
    }

    const response = await updateUserPassword(passwordData);
    const { success, message } = response;

    if (!success) {
      setLoading(false);
      return toast.error(message, {
        icon: <BiInfoCircle className="text-white text-2xl" />,
        style: {
          borderRadius: "10px",
          background: "#ff0000",
          color: "#fff",
        },
      });
    }

    setPasswordData(initialPasswordFormData);
    toast.success(message, {
      icon: <BiSolidCheckCircle className="text-white text-2xl" />,
      style: {
        borderRadius: "10px",
        background: "#00c20b",
        color: "#fff",
      },
    });
    setLoading(false);
  };

  return (
    <section className="container mx-auto">
      <div className="py-5 md:py-10 flex gap-10">
        <div className="w-[25%] hidden md:block">
          <AccountSidebarMenu />
        </div>

        <div className="w-full md:w-[75%]">
          <div className="h-full max-h-[600px] overflow-y-scroll">
            <div className="p-5">
              <div className="border-b border-gray/30 pb-3 mb-3">
                <h5 className="font-bold text-xl dark:text-gray">
                  Change Your Account Password
                </h5>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="preferenceIcon"
                  className="text-dark font-semibold dark:text-gray text-sm"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  name="old_password"
                  value={passwordData.old_password}
                  onChange={handleInputChange}
                  className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-[15px]"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="preferenceIcon"
                  className="text-dark font-semibold dark:text-gray text-sm"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="new_password"
                  value={passwordData.new_password}
                  onChange={handleInputChange}
                  className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-[15px]"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="preferenceIcon"
                  className="text-dark font-semibold dark:text-gray text-sm"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  value={passwordData.confirm_password}
                  onChange={handleInputChange}
                  className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-[15px]"
                />
              </div>

              <div className="mt-5">
                <button
                  onClick={updatePassword}
                  className="bg-primary text-white px-5 py-2 rounded flex justify-center items-center gap-2"
                >
                  {loading ? <Loader /> : "Save Password"}
                </button>
              </div>
            </div>
          </div>

          <Toaster position="top-right" />

          {/* Debugging output */}
          {/* <div className="text-xs text-slate-400">
            <pre>{JSON.stringify(userData, null, 2)}</pre>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ChangePasswordComponent;
