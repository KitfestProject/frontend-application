import ProfileAvatar from "@/assets/profile-avatar.svg";
import useAuthStore from "@/store/UseAuthStore";
import { BiLogOut } from "react-icons/bi";

const LoggedInUserProfileMobile = () => {
  const { user, logout } = useAuthStore();

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-2">
        <img
          src={ProfileAvatar}
          alt={"Profile Avatar"}
          className="w-[50px] h-[50px] object-cover rounded-full"
        />
        <div className="">
          <p className="text-base font-semibold dark:text-slate-100">
            Hi, {user?.name || "Jane Doe"}
          </p>
          <p className="text-sm dark:text-slate-100">
            {user?.email || "janedoe@gmail.com"}
          </p>
        </div>
      </div>

      {/* Logout Button */}
      <div onClick={logout} className="rounded bg-red-500 p-2 shadow-md">
        <BiLogOut className="text-slate-200 text-3xl" />
      </div>
    </div>
  );
};

export default LoggedInUserProfileMobile;
