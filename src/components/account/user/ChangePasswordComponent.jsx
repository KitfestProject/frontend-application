import { AccountSidebarMenu } from "@/components";
import { useState } from "react";

const ChangePasswordComponent = () => {
  const initialPasswordFormData = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const [passwordData, setPasswordData] = useState(initialPasswordFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPasswordData({ ...passwordData, [name]: value });
  };

  const updatePassword = () => {};

  return (
    <section className="container mx-auto">
      <div className="py-5 md:py-10 flex gap-10">
        <AccountSidebarMenu />

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
                  type="text"
                  name="currentPassword"
                  value={passwordData.currentPassword}
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
                  type="text"
                  name="newPassword"
                  value={passwordData.newPassword}
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
                  type="text"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={updatePassword}
                  className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-[15px]"
                />
              </div>

              <div className="mt-5">
                <button className="bg-primary text-white px-5 py-2 rounded">
                  Save Details
                </button>
              </div>
            </div>
          </div>

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
