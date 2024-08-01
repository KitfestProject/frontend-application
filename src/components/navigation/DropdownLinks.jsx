import useAuthStore from "@/store/UseAuthStore";
import { LogoutLink, DropdownLink, BecomeOrganizerButton } from "@/components";

const DropdownLinks = ({ logout }) => {
  const { user } = useAuthStore();
  const role = user?.role;

  return (
    <div className="flex flex-col">
      {role === "organizer" || role === "admin" ? (
        <DropdownLink to="/sales-dashboard" label="Dashboard" />
      ) : null}

      <DropdownLink to="/user-dashboard" label="Profile" />
      <DropdownLink to="/settings" label="Settings" />
      <LogoutLink logout={logout} />

      {role === "user" ? <BecomeOrganizerButton /> : null}
    </div>
  );
};

export default DropdownLinks;
