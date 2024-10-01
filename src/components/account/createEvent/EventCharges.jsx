import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { FaArrowLeftLong, FaTicket } from "react-icons/fa6";
import PaidEventSection from "./PaidEventSection";
import FreeEventTab from "./FreeEventTab";
import PaidEventTab from "./PaidEventTab";
import { CreateEventFormContext } from "@/context/CreateEventFormContext";
import { BiError, BiCheckCircle, BiInfoCircle } from "react-icons/bi";
import useScreenSize from "@/hooks/useScreenSize.mjs";
import { ModalTransparent, ActionWarningComponent } from "@/components";

const EventCharges = () => {
  const {
    eventData,
    eventFormData,
    clearEventForm,
    setEventFormData,
    isEventChargesFilled,
  } = useContext(CreateEventFormContext);
  const [selectedChargeType, setSelectedChargeType] = useState("free");
  const isMobile = useScreenSize();
  const [loading, setLoading] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const toggleShowWarning = () => setShowWarning((previous) => !previous);

  useEffect(() => {
    if (eventFormData.isPaid) {
      setSelectedChargeType(eventFormData.isPaid);
    }
  }, [eventFormData.isPaid]);

  const handleChargesChange = (event) => {
    const selectedTicked = event.target.value;

    // console.log(selectedTicked);
    setSelectedChargeType(selectedTicked);

    setEventFormData({
      ...eventFormData,
      isPaid: selectedTicked,
    });
  };

  const renderMobileError = () => {
    if (isMobile) {
      return isEventChargesFilled && isMobile ? (
        <BiCheckCircle className="text-green-600 text-xl ml-2" />
      ) : (
        <BiError className="text-2xl inline text-yellow-600" />
      );
    }
  };

  // Handle navigate back
  const handleNavigateBack = () => {
    setShowWarning(false);
    clearEventForm();
    window.history.back();
  };

  return (
    <div className="mt-5 border-b border-slate-200 dark:border-slate-700 pb-5">
      <div className="flex justify-between items-center mb-1">
        <h1 className="text-xl font-bold flex gap-2 items-center mb-5">
          <FaTicket className="text-xl text-primary dark:text-gray" />
          Ticket And Charges
          {renderMobileError()}
        </h1>

        {!eventData && (
          <>
            {/* Back to Events page */}
            <div className="">
              <button
                onClick={toggleShowWarning}
                className="bg-primary text-slate-100 text-sm px-8 py-2 rounded-md flex justify-center items-center gap-2"
              >
                <FaArrowLeftLong />
                Back
              </button>
            </div>
          </>
        )}
      </div>

      <div className="grid grid-cols-2 gap-5">
        {/* Paid Tab */}
        <PaidEventTab
          selectedChargeType={selectedChargeType}
          handleChange={handleChargesChange}
        />

        {/* Free Tab */}
        <FreeEventTab
          selectedChargeType={selectedChargeType}
          handleChange={handleChargesChange}
        />
      </div>

      {/* Paid Charges */}
      <PaidEventSection />

      {/* Show Warning Modal */}
      {showWarning && (
        <ModalTransparent
          title="Navigate back!"
          onClose={toggleShowWarning}
          icon={<BiInfoCircle className="text-white text-2xl" />}
        >
          <ActionWarningComponent
            handleClick={handleNavigateBack}
            cancel={toggleShowWarning}
            loading={loading}
            message={
              <p>
                Are you sure you want to close this page? <br /> All or some of
                your changes might be lost.
              </p>
            }
          />
        </ModalTransparent>
      )}
    </div>
  );
};

EventCharges.propTypes = {
  isEventChargesFilled: PropTypes.bool,
};

export default EventCharges;
