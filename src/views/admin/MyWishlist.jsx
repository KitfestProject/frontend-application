import {
  DynamicHelmet,
  UserNavigation,
  MyWishlistComponent,
} from "@/components";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { UserAccountContext } from "@/context/UserAccountContext";
import { useContext, useEffect } from "react";

const MyWishlist = () => {
  const { setUserWishlistData, setUserDataLoading } =
    useContext(UserAccountContext);
  const { getUserWishlist } = useServerSideQueries();

  useEffect(() => {
    const fetchWishlist = async () => {
      setUserDataLoading(true);
      const response = await getUserWishlist();
      const { success, message, data } = response;

      // console.log(data);

      if (!success) {
        setUserDataLoading(false);
        console.log(message);
        return;
      }

      setUserWishlistData(data);
      setUserDataLoading(false);
    };

    fetchWishlist();
  }, []);

  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - My Wishlist"
        description="View your wishlist and manage them."
      />
      <UserNavigation />

      <MyWishlistComponent />
    </div>
  );
};

export default MyWishlist;
