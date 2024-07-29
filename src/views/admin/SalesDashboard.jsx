import {
  DynamicHelmet,
  UserNavigation,
  DashboardComponent,
} from "@/components";
import { UserAccountContext } from "@/context/UserAccountContext";
import { useContext, useEffect } from "react";
import useServerSideQueries from "@/hooks/useServerSideQueries";

const SalesDashboard = () => {
  const { setUserAccountData } =
    useContext(UserAccountContext);
  const { getAdminOrganizersOverview } = useServerSideQueries();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAdminOrganizersOverview();
      const { success, message, data } = response;

      // console.log(data);

      if (!success) {
        console.log(message);
        return;
      }

      setUserAccountData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="Sales Dashboard"
        description="Manage your sales and view your sales dashboard."
        keywords="Sales Dashboard"
      />

      <UserNavigation />

      <DashboardComponent />
    </div>
  );
};

export default SalesDashboard;
