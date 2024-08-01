import { AccountSidebarMenu } from "@/components";
import { useState } from "react";

const UpdateProfileComponent = () => {
  const initialUserFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    county: "",
  };
  const [userData, setUserData] = useState(initialUserFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const updateProfileDetails = () => {};

  return (
    <section className="container mx-auto">
      <div className="py-5 md:py-10 flex gap-10">
        <div className="w-[25%] hidden md:block">
          <AccountSidebarMenu />
        </div>

        <div className="w-full md:w-[75%]">
          <div className="h-full overflow-y-scroll">
            <div className="md:p-5">
              <div className="border-b border-gray/30 pb-3 mb-3">
                <h5 className="font-bold text-xl dark:text-gray">
                  Personal Information
                </h5>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                <div className="mb-5">
                  <label className="text-dark font-semibold dark:text-gray text-sm">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleInputChange}
                    className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-[15px]"
                  />
                </div>

                <div className="mb-5">
                  <label className="text-dark font-semibold dark:text-gray text-sm">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleInputChange}
                    className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-[15px]"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="preferenceIcon"
                  className="text-dark font-semibold dark:text-gray text-sm"
                >
                  Email Address
                </label>{" "}
                <p className="text-gray dark:text-gray text-xs font-semibold mb-2">
                  Provide your email address i.e (example@gmail.com)
                </p>
                <input
                  type="text"
                  name="email"
                  value={userData.icon}
                  onChange={handleInputChange}
                  className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-[15px]"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="preferenceIcon"
                  className="text-dark font-semibold dark:text-gray text-sm"
                >
                  Phone Number
                </label>{" "}
                <p className="text-gray dark:text-gray text-xs font-semibold mb-2">
                  Provide your phone number i.e (07********)
                </p>
                <input
                  type="text"
                  name="phone"
                  value={userData.icon}
                  onChange={handleInputChange}
                  className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-[15px]"
                />
              </div>

              <div className="border-t border-gray/30 pt-5">
                <div className="flex justify-between items-center mb-3">
                  <h5 className="font-bold text-xl dark:text-gray">
                    Address Details
                  </h5>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                <div className="mb-5">
                  <label className="text-dark font-semibold dark:text-gray text-sm">
                    Address
                  </label>
                  <p className="text-gray dark:text-gray text-xs font-semibold mb-2">
                    This field is (optional)
                  </p>
                  <input
                    type="text"
                    name="address"
                    value={userData.address}
                    onChange={handleInputChange}
                    className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-[15px]"
                  />
                </div>

                <div className="mb-5">
                  <label className="text-dark font-semibold dark:text-gray text-sm">
                    County
                  </label>
                  <p className="text-gray dark:text-gray text-xs font-semibold mb-2">
                    This field is (optional)
                  </p>
                  <input
                    type="text"
                    name="county"
                    value={userData.county}
                    onChange={handleInputChange}
                    className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-[15px]"
                  />
                </div>
              </div>

              <div className="mt-5">
                <button
                  onClick={updateProfileDetails}
                  className="bg-primary text-white px-5 py-2 rounded"
                >
                  Save Details
                </button>
              </div>

              {/* Debugging output */}
              <div className="text-xs text-slate-400">
                <pre>{JSON.stringify(userData, null, 2)}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateProfileComponent;
