import React, { useContext, useState } from "react";
import NextButton from "./createEvent/NextButton";
import DraftButton from "./createEvent/DraftButton";
import EventCharges from "./createEvent/EventCharges";
import CancelButton from "./createEvent/CancelButton";
import EventPreview from "./createEvent/EventPreview";
import LocationAndTime from "./createEvent/LocationAndTime";
import UploadEventCover from "./createEvent/UploadEventCover";
import GeneralInformation from "./createEvent/GeneralInformation";
import CreateEventSidebar from "./createEvent/CreateEventSidebar";
import { CreateEventFormContext } from "../../context/CreateEventFormContext";
import toast, { Toaster } from "react-hot-toast";

const CreateEventComponent = () => {
  const [isPreview, setIsPreview] = useState(false);
  const { isCompleteFormFilled } = useContext(CreateEventFormContext);

  const handleShowPreview = () => {
    if (!isCompleteFormFilled) {
      toast.error(
        "Please provide all the required information before previewing the event. Make sure you fill all the fields marked with *"
      );
      return;
    }

    setIsPreview(true);
  };

  return (
    <>
      {!isPreview && (
        <section className="container mx-auto py-10">
          <div className="flex gap-8">
            {/* Create Event Sidebar */}
            <CreateEventSidebar isPreview={isPreview} />

            {/* Create Event Form */}
            <div className="w-full md:w-[75%] scroll-smooth">
              <form autoComplete="off">
                {/* Upload Event Cover */}
                <UploadEventCover />

                {/* General Information */}
                <GeneralInformation />

                {/* Location and Time */}
                <LocationAndTime />

                {/* Event Charges */}
                <EventCharges />

                {/* Save and next buttons */}
                <div className="flex justify-between mt-5">
                  <CancelButton title={"Cancel"} handleClick={() => {}} />

                  <div className="flex justify-end gap-3">
                    <DraftButton title={"Save Draft"} handleClick={() => {}} />
                    <NextButton
                      title={"Next"}
                      handleClick={handleShowPreview}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Preview Area */}
      {isPreview && (
        <EventPreview isPreview={isPreview} setIsPreview={setIsPreview} />
      )}

      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
};

export default CreateEventComponent;
