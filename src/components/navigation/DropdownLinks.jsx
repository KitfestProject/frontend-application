import { LogoutLink, DropdownLink, BecomeOrganizerButton } from "@/components";

const DropdownLinks = ({ logout }) => (
  <div className="flex flex-col">
    <DropdownLink to="/sales-dashboard" label="Dashboard" />
    <DropdownLink to="/user-dashboard" label="Profile" />
    <DropdownLink to="/settings" label="Settings" />
    <LogoutLink logout={logout} />
    <BecomeOrganizerButton />
  </div>
);

export default DropdownLinks;
