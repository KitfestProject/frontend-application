import { useContext } from "react";
import Switch from "react-switch";
import { UploadAdvertImage } from "@/components";
import { CreateEventFormContext } from "@/context/CreateEventFormContext";

const EventAdvertisement = () => {
  const { eventFormData, setEventFormData } = useContext(
    CreateEventFormContext
  );

  const handleSwitchChange = (checked) => {
    setEventFormData((prevState) => ({
      ...prevState,
      isAdvertisement: checked,
    }));
  };

  return (
    <>
      <div className="my-5">
        <div className="flex gap-3 items-center">
          <h1 className="text-2xl font-bold">Event has Advertisement</h1>

          <Switch
            onChange={handleSwitchChange}
            checked={eventFormData.isAdvertisement}
            offColor={"#C5C0BF"}
            onColor={"#732e1c"}
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>
        <p className="text-xs text-gray dark:text-gray">
          Switch on if the event has an advertisement banner. {" "}
          Advertisement will be available after approval by the admin.
        </p>
      </div>

      {eventFormData.isAdvertisement && (
        <div className="mt-5">
          {/* Add advertisement details form here */}
          <UploadAdvertImage />
        </div>
      )}

      {/* Output the current state for debugging */}
      {/* <pre className="mt-6 text-gray text-xs">
        {JSON.stringify(eventFormData, null, 2)}
      </pre> */}
    </>
  );
};

export default EventAdvertisement;
