import { useState } from "react";
import Switch from "react-switch";
import { Link } from "react-router-dom";

const SystemPreferencesTable = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [emailNotificationEnabled, setEmailNotificationEnabled] =
    useState(false);
  const [smsNotificationEnabled, setSmsNotificationEnabled] = useState(false);
  const [pushNotificationEnabled, setPushNotificationEnabled] = useState(false);

  const handleDarkModeChange = (checked) => {
    setDarkMode(checked);
  };

  const handleSwitchChange = (checked) => {
    setNotificationEnabled(checked);
  };

  const handleEmailNotificationSwitchChange = (checked) => {
    setEmailNotificationEnabled(checked);
  };

  const handleSmsNotificationSwitchChange = (checked) => {
    setSmsNotificationEnabled(checked);
  };

  const handlePushNotificationSwitchChange = (checked) => {
    setPushNotificationEnabled(checked);
  };

  return (
    <div className="my-10">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold text-dark dark:text-slate-100">
          System Preferences
        </h1>
        <Link
          to="/account/settings/preferences"
          className="text-primary hover:text-primary-dark"
        >
          Edit
        </Link>
      </div>
      
      <div className="mt-2">
        <table className="w-full">
          <tbody>
            <tr className="border-b border-gray/20">
              <td className="py-2">Dark Mode</td>
              <td className="py-2">{darkMode ? "Enabled" : "Disabled"}</td>
              {/* Switch */}
              <td className="text-end">
                <Switch
                  onChange={handleDarkModeChange}
                  checked={darkMode}
                  offColor={"#C5C0BF"}
                  onColor={"#732e1c"}
                  uncheckedIcon={false}
                  checkedIcon={false}
                />
              </td>
            </tr>
            <tr className="border-b border-gray/20">
              <td className="py-2">Notifications</td>
              <td className="py-2">
                {notificationEnabled ? "Enabled" : "Disabled"}
              </td>
              {/* Switch */}
              <td className="text-end">
                <Switch
                  onChange={handleSwitchChange}
                  checked={notificationEnabled}
                  offColor={"#C5C0BF"}
                  onColor={"#732e1c"}
                  uncheckedIcon={false}
                  checkedIcon={false}
                />
              </td>
            </tr>
            <tr className="border-b border-gray/20">
              <td className="py-2">Email Notifications</td>
              <td className="py-2">
                {emailNotificationEnabled ? "Enabled" : "Disabled"}
              </td>
              {/* Switch */}
              <td className="text-end">
                <Switch
                  onChange={handleEmailNotificationSwitchChange}
                  checked={emailNotificationEnabled}
                  offColor={"#C5C0BF"}
                  onColor={"#732e1c"}
                  uncheckedIcon={false}
                  checkedIcon={false}
                />
              </td>
            </tr>
            <tr className="border-b border-gray/20">
              <td className="py-2">SMS Notifications</td>
              <td className="py-2">
                {smsNotificationEnabled ? "Enabled" : "Disabled"}
              </td>
              {/* Switch */}
              <td className="text-end">
                <Switch
                  onChange={handleSmsNotificationSwitchChange}
                  checked={smsNotificationEnabled}
                  offColor={"#C5C0BF"}
                  onColor={"#732e1c"}
                  uncheckedIcon={false}
                  checkedIcon={false}
                />
              </td>
            </tr>
            <tr className="border-b border-gray/20">
              <td className="py-2">Push Notifications</td>
              <td className="py-2">
                {pushNotificationEnabled ? "Enabled" : "Disabled"}
              </td>
              {/* Switch */}
              <td className="text-end">
                <Switch
                  onChange={handlePushNotificationSwitchChange}
                  checked={pushNotificationEnabled}
                  offColor={"#C5C0BF"}
                  onColor={"#732e1c"}
                  uncheckedIcon={false}
                  checkedIcon={false}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SystemPreferencesTable;
