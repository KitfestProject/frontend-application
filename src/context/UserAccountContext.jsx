import { createContext, useEffect, useState } from "react";
import useServerSideQueries from "@/hooks/useServerSideQueries";

export const UserAccountContext = createContext();

export const UserAccountProvider = ({ children }) => {
  const [userAccountData, setUserAccountData] = useState(null);
  const { getUserDashboardOverview } = useServerSideQueries();

  const getUserAccountData = () => {};

  const updateUserAccountData = () => {};

  const deleteUserAccountData = () => {};

  // Fetch user dashboard data
  const fetchUserDashboardData = async () => {
    const response = await getUserDashboardOverview();
    const { success, message, data } = response;

    // console.log(data);

    if (!success) {
      console.log(message);
      return;
    }

    setUserAccountData(data);
  };

  return (
    <UserAccountContext.Provider
      value={{
        userAccountData,
        getUserAccountData,
        updateUserAccountData,
        deleteUserAccountData,
        fetchUserDashboardData,
      }}
    >
      {children}
    </UserAccountContext.Provider>
  );
};
