import {
  FaBell,
  FaLock,
  FaHeart,
  FaPencil,
  FaTicket,
  FaRightFromBracket,
} from "react-icons/fa6";
import ProfileAvatar from "@/assets/profile-avatar.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "@/store/UseAuthStore";
import { BiPencil, BiGridAlt } from "react-icons/bi";
import { ModalTransparent } from "@/components";
import { useContext, useState, useEffect } from "react";
import { UserAccountContext } from "@/context/UserAccountContext";
import useServerSideQueries from "@/hooks/useServerSideQueries";

const AccountSidebarMenu = () => {
  const { userProfile, setUserProfile } = useContext(UserAccountContext);
  const { getUserProfile } = useServerSideQueries();
  const [userProfileData, setUserProfileData] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState();
  const toggleModalShow = () => setShowModal(!showModal);

  const handleLogout = () => {
    logout();
    navigate("/auth-login");
  };

  const handleImageChange = () => {
    // Handle image changes
  };

  useEffect(() => {
    const fetchUserProfileDetails = async () => {
      setLoading(true);
      const { success, data, message } = await getUserProfile();

      if (!success) {
        setLoading(false);
        console.log("Error fetching user profile data");
        return;
      }

      setLoading(false);
      setUserProfileData(data);
    };

    fetchUserProfileDetails();
  }, []);

  useEffect(() => {
    if (userProfileData) {
      setUserProfile((previous) => ({
        ...previous,
        firstName: userProfileData.name.split(" ")[0] || "",
        lastName: userProfileData.name.split(" ")[1] || "",
        email: userProfileData.email || "",
        phone: userProfileData.phone || "",
        address: userProfileData.address || "",
        county: userProfileData.county || "",
      }));
    }
  }, [userProfileData]);

  const MenuItem = ({ to, icon: Icon, label }) => (
    <Link to={to}>
      <li
        className={`flex items-center gap-3 py-3 px-5 ${
          location.pathname === to ? "account-nav-active" : ""
        } cursor-pointer`}
      >
        <span className="text-primary dark:text-slate-100">
          <Icon className="text-xl inline mr-2" />
          {label}
        </span>
      </li>
    </Link>
  );

  return (
    <>
      <div className="sticky top-[120px]">
        <h1 className="text-2xl font-bold text-dark dark:text-slate-100">
          My Profile
        </h1>

        <div className="bg-[#F5F5F5] dark:bg-darkGray rounded-md pb-5">
          {/* Account Profile */}
          <div className="flex justify-center mt-3 md:my-5 dark:border dark:border-gray/30 pb-3 border-b border-primary/60">
            <div className="flex flex-col gap-3 items-center justify-center mt-10">
              {/* Profile Avatar */}
              <div className="relative">
                <img
                  src={ProfileAvatar}
                  alt="profile"
                  className="w-[130px] h-[130px] rounded-full object-cover mt-5"
                />
                <button
                  onClick={handleImageChange}
                  className="bg-primary text-slate-100 w-10 h-10 rounded-full flex justify-center items-center absolute right-0 bottom-0 border border-gray"
                >
                  <BiPencil />
                </button>
              </div>

              {/* User Details */}
              <div>
                {loading ? (
                  <div className="animate-pulse flex justify-center items-center mb-3">
                    <div className="w-[100px] h-5 bg-gray/50 rounded-full"></div>
                  </div>
                ) : (
                  <h3 className="text-2xl text-center font-semibold text-primary dark:text-slate-100">
                    {userProfileData?.name}
                  </h3>
                )}

                {loading ? (
                  <div className="animate-pulse flex justify-center items-center">
                    <div className="w-[200px] h-5 bg-gray/50 rounded-full"></div>
                  </div>
                ) : (
                  <p className="text-sm text-center font-light text-dark dark:text-slate-200 mb-3">
                    {userProfileData?.email}
                  </p>
                )}

                {/* <div className="flex gap-5 justify-between">
                  <div className="flex gap-2 px-4 py-2 items-center bg-light dark:bg-dark rounded-md">
                    <h4 className="text-sm text-primary dark:text-slate-100">
                      10
                    </h4>
                    <p className="text-sm text-primary dark:text-slate-200">
                      Purchases
                    </p>
                  </div>

                  <div className="flex gap-2 px-4 py-2 items-center bg-light dark:bg-dark rounded-md">
                    <h4 className="text-sm text-primary dark:text-slate-100">
                      5
                    </h4>
                    <p className="text-sm text-primary dark:text-slate-200">
                      Reviews
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Profile Menu */}
          <div className="dark:bg-darkGray rounded-md dark:border dark:border-gray/30">
            {/* Menu list */}
            <ul>
              <MenuItem
                to="/user-dashboard"
                icon={BiGridAlt}
                label="Dashboard"
              />
              <MenuItem to="/my-tickets" icon={FaTicket} label="My Tickets" />
              <MenuItem
                to="/notifications"
                icon={FaBell}
                label="Notifications"
              />
              <MenuItem
                to="/update-profile"
                icon={FaPencil}
                label="Update Profile"
              />
              <MenuItem to="/my-wishlist" icon={FaHeart} label="My Wishlist" />
              <MenuItem
                to="/change-password"
                icon={FaLock}
                label="Change Password"
              />

              {/* Handle Account Logout */}
              <li
                onClick={toggleModalShow}
                className="flex items-center gap-3 py-3 px-5 account-nav cursor-pointer"
              >
                <span className="text-primary dark:text-slate-100">
                  <FaRightFromBracket className="text-xl inline mr-2" />
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Show Alert Modal */}
      {showModal && (
        <ModalTransparent onClose={toggleModalShow}>
          <div className="w-[400px] bg-white dark:bg-darkGray rounded-lg shadow-lg dark:border dark:border-gray/30">
            <div className="bg-primary text-slate-200 w-full p-3 rounded-t-lg">
              <h5 className="text-2xl text-center font-semibold tracking-tighter text-slate-100">
                Logout
              </h5>
            </div>

            {/* Logout Message */}
            <div className="w-full p-5 flex justify-center items-center h-full">
              <div className="">
                <h5 className="mb-5 text-xl text-dark font-semibold tracking-tighter">
                  Are you sure you want to logout?
                </h5>

                <div className="flex gap-5 items-center">
                  <button
                    onClick={toggleModalShow}
                    className="bg-[#FCF4F3] px-8 py-2 rounded-md shadow-md dark:text-dark"
                  >
                    cancel
                  </button>
                  <button
                    onClick={handleLogout}
                    className="bg-secondary text-slate-100 px-8 py-2 rounded-md shadow-md"
                  >
                    Logout
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

export default AccountSidebarMenu;
