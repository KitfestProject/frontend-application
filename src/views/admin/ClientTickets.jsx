import { DynamicHelmet, UserNavigation, ProfileComponent } from "@/components";
import { useContext, useEffect } from "react";
import { UserAccountContext } from "@/context/UserAccountContext";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import toast from "react-hot-toast";

const ClientTickets = () => {
  const { limit, start, setClientTicketData, setUserDataLoading } =
    useContext(UserAccountContext);
  const { getUserTickets } = useServerSideQueries();

  useEffect(() => {
    const fetchTickets = async () => {
      setUserDataLoading(true);
      const response = await getUserTickets(limit, start);
      const { success, message, data } = response;

      console.log(data);

      if (!success) {
        setUserDataLoading(false);
        toast.error(message);
        return;
      }

      toast.success(message);
      setClientTicketData(data);
      setUserDataLoading(false);
    };

    fetchTickets();
  }, [limit, start]);

  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - My Tickets"
        description="Find all your tickets organized in your account."
      />
      <UserNavigation />

      <ProfileComponent />
    </div>
  );
};

export default ClientTickets;
