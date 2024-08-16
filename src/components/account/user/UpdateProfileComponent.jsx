import { Loader, AccountSidebarMenu } from "@/components";
import { useContext, useState } from "react";
import { UserAccountContext } from "@/context/UserAccountContext";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import toast, { Toaster } from "react-hot-toast";

const UpdateProfileComponent = () => {
  const { userProfile, setUserProfile } = useContext(UserAccountContext);
  const { updateUserProfile } = useServerSideQueries();
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserProfile((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const updateProfileDetails = async () => {
    setLoading(true);

    const dataToStore = {
      name: userProfile?.firstName + " " + userProfile?.lastName,
      email: userProfile?.email,
      phone: userProfile?.phone,
      address: userProfile?.address,
      county: userProfile?.county,
    };

    const { success, message } = await updateUserProfile(dataToStore);

    if (!success) {
      setLoading(false);
      toast.error(message);
      return;
    }

    setLoading(false);
    toast.success(message);
  };

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
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={userProfile.firstName}
                    onChange={handleInputChange}
                    className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-[15px]"
                  />
                </div>

                <div className="mb-5">
                  <label className="text-dark font-semibold dark:text-gray text-sm">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={userProfile.lastName}
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
                  Email Address <span className="text-red-500">*</span>
                </label>{" "}
                <p className="text-gray dark:text-gray text-xs font-semibold mb-2">
                  Provide your email address i.e (example@gmail.com)
                </p>
                <input
                  type="text"
                  name="email"
                  value={userProfile.email}
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
                  value={userProfile.icon}
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
                    value={userProfile.address}
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
                    value={userProfile.county}
                    onChange={handleInputChange}
                    className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-[15px]"
                  />
                </div>
              </div>

              {/* Submit Updated profile details button */}
              <div className="mt-5 flex justify-end items-center">
                <button
                  onClick={updateProfileDetails}
                  className="bg-primary text-white px-5 py-2 rounded w-1/4 flex justify-center items-center gap-2"
                >
                  {loading ? <Loader /> : "Save Details"}
                </button>
              </div>

              {/* Debugging output */}
              {/* <div className="text-xs text-slate-400">
                <pre>{JSON.stringify(userProfile, null, 2)}</pre>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateProfileComponent;
