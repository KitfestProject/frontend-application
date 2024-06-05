import React, { useContext, useEffect } from "react";
import { BiCheck, BiInfoCircle } from "react-icons/bi";
import { CreateEventFormContext } from "../../../context/CreateEventFormContext";

const CreateEventSidebar = ({ isPreview }) => {
  const {
    isFreeEvent,
    isCoverImageFilled,
    isGeneralInfoFilled,
    isLocationTimeFilled,
    isEventChargesFilled,
    isScheduledPublished,
  } = useContext(CreateEventFormContext);

  return (
    <div className="w-[25%] hidden md:block">
      <div className="sticky top-[120px]">
        <h1 className="text-2xl font-bold text-dark dark:text-slate-100 mb-5">
          Create An Event
        </h1>

        <div className="bg-[#F5F5F5] dark:bg-darkGray rounded-md pb-3">
          <div className="p-5 pb-3 border-b border-slate-300 dark:border-gray">
            <p className="text-gray text-sm">Last Updated</p>
            <p className="text-dark font-bold text-sm dark:text-slate-100">
              Monday, June 06 | 06:42 AM
            </p>

            <p className="text-gray mt-5 text-sm">Event Status</p>
            {isScheduledPublished ? (
              <p className="text-green-600 font-bold text-sm">
                Scheduled Published
              </p>
            ) : (
              <p className="text-yellow-600 font-bold text-sm">Draft</p>
            )}
          </div>

          <div className="p-5 pb-3 border-b mb-3 border-slate-300 dark:border-gray">
            <h1 className="text-md font-bold uppercase">Event Information</h1>

            <p className="text-gray text-sm mt-5 flex justify-between items-center">
              Event Cover Image
              {isCoverImageFilled ? (
                <BiCheck className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2" />
              )}
            </p>

            <p className="text-gray text-sm mt-5 flex justify-between items-center">
              General Information
              {isGeneralInfoFilled ? (
                <BiCheck className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2" />
              )}
            </p>

            <p className="text-gray text-sm mt-5 flex justify-between items-center">
              Location and time
              {isLocationTimeFilled ? (
                <BiCheck className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2" />
              )}
            </p>

            <p className="text-gray text-sm mt-5 flex justify-between items-center">
              Ticket And Charges
              {isEventChargesFilled || isFreeEvent ? (
                <BiCheck className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2" />
              )}
            </p>

            <p className="text-gray text-sm mt-5 flex justify-between items-center">
              Free Event
              {isFreeEvent ? (
                <BiCheck className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2" />
              )}
            </p>
          </div>

          <div className="p-5 pb-3">
            <h1 className="text-md font-bold uppercase">Publish Event</h1>

            <p className="text-gray text-sm mt-5 flex justify-between items-center">
              Review and publish
              {isPreview ? (
                <BiCheck className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2" />
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEventSidebar;
