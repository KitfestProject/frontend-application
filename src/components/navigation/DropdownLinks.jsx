import useAuthStore from "@/store/UseAuthStore";
import toast, { Toaster } from "react-hot-toast";
import { LogoutLink, DropdownLink, BecomeOrganizerButton } from "@/components";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { useState } from "react";

const DropdownLinks = ({ logout }) => {
  const { user } = useAuthStore();
  const role = user?.role;
  const { userBecomeOrganizer } = useServerSideQueries();
  const [loading, setLoading] = useState(false);

  const handleBecomeOrganizer = async () => {
    setLoading(true);
    const { success, message } = await userBecomeOrganizer();

    if (!success) {
      setLoading(false);
      toast.error(message, {
        duration: 4000,
        position: "bottom-right",
      });
      return;
    }

    setLoading(false);
    toast.success(message, {
      duration: 4000,
      position: "bottom-right",
    });
  };

  return (
    <>
      <div className="flex flex-col">
        {role === "organizer" || role === "admin" ? (
          <>
            <DropdownLink to="/sales-dashboard" label="Dashboard" />
            <DropdownLink to="/settings" label="Settings" />
          </>
        ) : null}

        <DropdownLink to="/user-dashboard" label="Profile" />
        <LogoutLink logout={logout} />

        {role === "user" ? (
          <div className="px-3">
            <BecomeOrganizerButton
              handleClick={handleBecomeOrganizer}
              loading={loading}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default DropdownLinks;
