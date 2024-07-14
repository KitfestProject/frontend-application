import {
  DynamicHelmet,
  UserNavigation,
  MyWishlistComponent,
} from "@/components";

const MyWishlist = () => {
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
