import {
  ThemeChanger,
  DynamicHelmet,
  UserNavigation,
  VenuesComponent,
} from "../../components";

const VenueScreen = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="Venue Management Page!"
        description="Manage all venues. You are accessing this page as an admin."
        keywords="Venues"
      />

      <UserNavigation />

      <VenuesComponent />

      <ThemeChanger />
    </div>
  );
};

export default VenueScreen;
