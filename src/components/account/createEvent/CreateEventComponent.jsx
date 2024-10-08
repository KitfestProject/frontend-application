import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  NextButton,
  EventCharges,
  CancelButton,
  EventPreview,
  PreviousButton,
  LocationAndTime,
  UploadEventCover,
  EventAdvertisement,
  CreateEventSidebar,
  PublishEventButton,
  GeneralInformation,
} from "@/components";
import { useNavigate } from "react-router-dom";
import { BiInfoCircle, BiSolidCheckCircle } from "react-icons/bi";
import { CreateEventFormContext } from "@/context/CreateEventFormContext";

const CreateEventComponent = () => {
  const [isPreview, setIsPreview] = useState(false);
  const {
    loading,
    eventFormData,
    createNewEvent,
    clearEventForm,
    hasSeatMapSelected,
    clearSelectedSeatMap,
    isCompleteEventWithSeatMap,
    isCompleteEventWithTickets,
  } = useContext(CreateEventFormContext);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleStepChange = (step) => {
    if (step < 1 || step > 4) {
      return;
    }
    setCurrentStep(step);
  };

  // Publish event with tickets
  const handlePublishEventWithTickets = async () => {
    if (!isCompleteEventWithTickets)
      return toast.error(
        "The form requires your attention. Please fill all the required fields.",
        {
          icon: <BiInfoCircle className="text-white text-2xl" />,
          position: "bottom-right",
          style: {
            borderRadius: "10px",
            background: "#ff0000",
            color: "#fff",
          },
        }
      );

    const response = await createNewEvent();
    const { success, message, data } = response;

    if (success) {
      toast.success(message, {
        icon: <BiSolidCheckCircle className="text-white text-2xl" />,
        position: "bottom-right",
        style: {
          borderRadius: "10px",
          background: "#00c20b",
          color: "#fff",
        },
      });

      currentStep === 1;
    }

    if (!success) {
      toast.error(message, {
        icon: <BiInfoCircle className="text-white text-2xl" />,
        position: "bottom-right",
        style: {
          borderRadius: "10px",
          background: "#ff0000",
          color: "#fff",
        },
      });
    }
  };

  // Publish event with seat map
  const handlePublishEventWithSeatMap = async () => {
    if (!isCompleteEventWithSeatMap)
      return toast.error(
        "The form requires your attention. Please fill all the required fields.",
        {
          icon: <BiInfoCircle className="text-white text-2xl" />,
          position: "bottom-right",
          style: {
            borderRadius: "10px",
            background: "#ff0000",
            color: "#fff",
          },
        }
      );

    const response = await createNewEvent();
    const { success, message, data } = response;

    if (success) {
      // Redirect to the create seat Map page
      setTimeout(() => {
        navigate(data.venue.seat_map_url + "/pricing/" + data.event_id);
      }, 3000);

      toast.success(message, {
        icon: <BiSolidCheckCircle className="text-white text-2xl" />,
        position: "bottom-right",
        style: {
          borderRadius: "10px",
          background: "#00c20b",
          color: "#fff",
        },
      });

      currentStep === 1;
    }

    if (!success) {
      toast.error(message, {
        icon: <BiInfoCircle className="text-white text-2xl" />,
        position: "bottom-right",
        style: {
          borderRadius: "10px",
          background: "#ff0000",
          color: "#fff",
        },
      });
    }
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
                {currentStep === 1 && (
                  <>
                    <UploadEventCover />

                    <EventAdvertisement />
                  </>
                )}
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
                        handleClick={() => {
                          handleStepChange(currentStep - 1);
                          clearSelectedSeatMap();
                        }}
                      />
                    )}
                    {currentStep < 4 && hasSeatMapSelected && (
                      <PublishEventButton
                        title={"Publish"}
                        loading={loading}
                        handleClick={handlePublishEventWithSeatMap}
                      />
                    )}

                    {currentStep < 4 && !hasSeatMapSelected && (
                      <NextButton
                        title={"Next"}
                        handleClick={() => handleStepChange(currentStep + 1)}
                      />
                    )}

                    {currentStep === 4 && (
                      <PublishEventButton
                        title={"Publish"}
                        loading={loading}
                        handleClick={handlePublishEventWithTickets}
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

      {/* Debugging */}
      <div className="container mx-auto py-10 text-xs text-gray">
        <pre>{JSON.stringify(eventFormData, null, 2)}</pre>
      </div>
    </>
  );
};

export default CreateEventComponent;
