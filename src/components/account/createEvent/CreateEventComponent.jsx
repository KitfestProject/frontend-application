import React, { useContext, useState } from "react";
import NextButton from "./NextButton";
import EventCharges from "./EventCharges";
import CancelButton from "./CancelButton";
import EventPreview from "./EventPreview";
import LocationAndTime from "./LocationAndTime";
import UploadEventCover from "./UploadEventCover";
import GeneralInformation from "./GeneralInformation";
import CreateEventSidebar from "./CreateEventSidebar";
import { CreateEventFormContext } from "../../../context/CreateEventFormContext";
import toast, { Toaster } from "react-hot-toast";
import PreviousButton from "./PreviousButton";

const CreateEventComponent = () => {
  const [isPreview, setIsPreview] = useState(false);
  const { isCompleteFormFilled, clearEventForm } = useContext(
    CreateEventFormContext
  );
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = (step) => {
    if (step < 1 || step > 4) {
      return;
    }
    setCurrentStep(step);
  };

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
              <div>
                {currentStep === 1 && <UploadEventCover />}
                {currentStep === 2 && <GeneralInformation />}
                {currentStep === 3 && <LocationAndTime />}
                {currentStep === 4 && <EventCharges />}

                {/* Navigation buttons */}
                <div className="flex justify-between mt-5">
                  <CancelButton
                    title={"Clear Form"}
                    handleClick={() => clearEventForm()}
                  />
                  <div className="flex justify-end gap-3">
                    {currentStep > 1 && (
                      <PreviousButton
                        title={"Previous"}
                        handleClick={() => handleStepChange(currentStep - 1)}
                      />
                    )}
                    {currentStep < 4 && (
                      <NextButton
                        title={"Next"}
                        handleClick={() => handleStepChange(currentStep + 1)}
                      />
                    )}
                    {currentStep === 4 && (
                      <NextButton
                        title={"Preview"}
                        handleClick={handleShowPreview}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Preview Area */}
      {isPreview && (
        <EventPreview isPreview={isPreview} setIsPreview={setIsPreview} />
      )}

      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};

export default CreateEventComponent;
