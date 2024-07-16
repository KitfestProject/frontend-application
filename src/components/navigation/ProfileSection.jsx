import ProfileAvatar from "@/assets/profile-avatar.svg";

const ProfileSection = ({ user }) => (
  <>
    <div className="hover:bg-lightGray dark:hover:bg-gray/10 dark:hover:shadow-primaryLight p-2 hover:shadow-md rounded-full transition ease-in-out delay-150 cursor-pointer">
      <img
        src={ProfileAvatar}
        className="w-[40px] rounded-full"
        alt="Profile Avatar"
      />
    </div>
    <div className="cursor-pointer">
      <h5 className="text-primary dark:text-slate-100 font-bold">
        Hi, {user?.name || "Jane Doe"}
      </h5>
      <p className="text-gray dark:text-gray text-sm">{user?.email || "janedoe@gmail.com"}</p>
    </div>
  </>
);

export default ProfileSection;
