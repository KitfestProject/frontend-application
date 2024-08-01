import { createContext, useContext, useState } from "react";
import useServerSideQueries from "@/hooks/useServerSideQueries";

export const UserAccountContext = createContext();

export const UserAccountProvider = ({ children }) => {
  const [userAccountData, setUserAccountData] = useState(null);
  const { getUserDashboardOverview } = useServerSideQueries();
  const [userProfileData, setUserProfileData] = useState(null);
  const [userWishlistData, setUserWishlistData] = useState(null);
  const [userDataLoading, setUserDataLoading] = useState(false);
  const [clientTicketData, setClientTicketData] = useState(null); /* New */
  const [limit, setLimit] = useState(10);
  const [start, setStart] = useState(0);

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
        limit,
        setLimit,
        start,
        setStart,
        clientTicketData,
        setClientTicketData,
        userDataLoading,
        setUserDataLoading,
        userWishlistData,
        setUserWishlistData,
        userProfileData,
        setUserProfileData,
        userAccountData,
        setUserAccountData,
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
