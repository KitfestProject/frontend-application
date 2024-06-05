import Switch from "react-switch";
import DraftButton from "./PreviousButton";
import CreateEventSidebar from "./CreateEventSidebar";
import PublishEventButton from "./PublishEventButton";
import CustomDateInput from "../../utils/CustomDateInput";
import CustomTimeInput from "../../utils/CustomTimeInput";
import React, { useContext, useEffect, useState } from "react";
import { FaArrowLeftLong, FaLocationDot } from "react-icons/fa6";
import { BiCalendar, BiImage, BiSolidHeart } from "react-icons/bi";
import { CreateEventFormContext } from "../../../context/CreateEventFormContext";

const EventPreview = ({ isPreview, setIsPreview }) => {
  const { eventFormData, setEventFormData } = useContext(
    CreateEventFormContext
  );
  const [isPublished, setIsPublished] = useState(true);
  const [publicationDate, setPublicationDate] = useState(
    eventFormData.publicationDate || new Date()
  );
  const [publishTime, setPublishTime] = useState(
    eventFormData.publishTime || "10:00"
  );
  const [selectedImage, setSelectedImage] = useState(null);
  const [discountPrice, setDiscountPrice] = useState(null);
  const [title, setTitle] = useState(null);
  const [eventDate, setEventDate] = useState(null);
  const [eventStartTime, setEventStartTime] = useState(null);
  const [eventAddress, setEventAddress] = useState(null);

  const handleSwitchChange = (checked) => {
    setIsPublished(checked);

    setEventFormData({
      ...eventFormData,
      isScheduledPublished: checked,
    });
  };

  const handleNavigateBack = () => {
    setIsPreview(false);
  };

  useEffect(() => {
    if (eventFormData.coverImage) {
      setSelectedImage(URL.createObjectURL(eventFormData.coverImage));
    } else {
      setSelectedImage("/images/Event-3.png");
    }

    if (eventFormData.ticketDiscountPrice) {
      setDiscountPrice(eventFormData.ticketDiscountPrice);
    } else {
      setDiscountPrice("1,000");
    }

    if (eventFormData.title) {
      setTitle(eventFormData.title);
    } else {
      setTitle("Ngoma n’ Sarakasi");
    }

    if (eventFormData.eventDate && eventFormData.eventStartTime) {
      setEventDate(eventFormData.eventDate.start_date);
      setEventStartTime(eventFormData.eventStartTime);
    } else {
      setEventDate("Saturday, February 20");
      setEventStartTime("08:00 PM");
    }

    if (eventFormData.address) {
      setEventAddress(eventFormData.address);
    } else {
      setEventAddress("Sarakasi Dome, Ngara");
    }
  }, [eventFormData]);

  const handlePublicationDate = (selected) => {
    setPublicationDate(selected);
    const date = selected.toISOString();

    setEventFormData({
      ...eventFormData,
      publicationDate: date,
    });
  };

  const handlePublishTime = (selected) => {
    setPublishTime(selected);

    setEventFormData({
      ...eventFormData,
      publishTime: selected,
    });
  };

  return (
    <section className="container mx-auto py-10">
      <div className="flex gap-8">
        {/* Sidebar Area */}
        <CreateEventSidebar
          eventFormData={eventFormData}
          isPreview={isPreview}
        />

        {/* Preview Area */}
        <div className="w-full md:w-[75%]">
          <div className="border-b border-slate-200 dark:border-slate-700 pb-5">
            {/* Back Icon */}
            <div
              onClick={handleNavigateBack}
              className="flex items-center gap-3 mb-3 cursor-pointer"
            >
              <FaArrowLeftLong className="text-xl text-gray" />
              <p className="text-gray text-sm"> Event information</p>
            </div>

            <div className="flex justify-between items-center mb-1">
              <h1 className="text-xl font-bold">
                <BiImage className="text-2xl inline mr-2 text-primary dark:text-gray" />
                Review Event
              </h1>
            </div>
          </div>

          <div className="mt-5 border-b border-slate-200 dark:border-slate-700 pb-[100px]">
            <div className="w-full h-[250px] flex bg-[#F5F5F5] dark:bg-darkGray dark:border dark:border-slate-700 rounded-r-md relative mb-10">
              <div className="w-1/2 h-full relative rounded-md">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={selectedImage}
                  alt="Event Cover"
                />

                <div className="absolute top-3 right-3 p-2 bg-secondary rounded-full">
                  <BiSolidHeart className="text-white text-xl" />
                </div>
              </div>

              <div className="w-1/2">
                <div className="w-full h-full flex justify-center items-center p-3">
                  <div className="flex flex-col gap-3 justify-start">
                    <p className="font-bold text-primary text-sm">
                      From {"Ksh. " + discountPrice}
                    </p>
                    <h1 className="text-2xl font-bold">{title}</h1>

                    {/* Time And Location */}
                    <div className="">
                      <h5 className="font-bold text-primary flex items-center gap-2">
                        <BiCalendar className="inline" /> {eventDate} |{" "}
                        {eventStartTime}
                      </h5>
                      <p className="text-gray font-light flex items-center gap-2">
                        <FaLocationDot className="inline" /> {eventAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="absolute top-0 right-0 bg-green-600 text-white p-1 rounded-bl-xl rounded-tr-md px-3 py-2">
                <p className="text-xs font-bold">New Event!</p>
              </div>
            </div>

            {/* Publish Switch */}
            <div className=" pb-5">
              <div className="flex gap-3 items-center mb-1">
                <h1 className="text-2xl font-bold">Publish schedule</h1>

                <Switch
                  onChange={handleSwitchChange}
                  checked={eventFormData.isScheduledPublished}
                  offColor={"#C5C0BF"}
                  onColor={"#732e1c"}
                  uncheckedIcon={false}
                  checkedIcon={false}
                />
              </div>
              <p className="text-xs text-gray">
                Set the publishing time to ensure that your event appears on the
                website at the designated time
              </p>
            </div>

            {/* Publish Date & Time Input */}
            <div className="grid grid-cols-2 gap-5">
              <CustomDateInput
                title="Publish Date"
                date={publicationDate}
                handleChange={handlePublicationDate}
              />

              {/* Publish Time Input */}
              <CustomTimeInput
                title="End Time"
                time={publishTime}
                handleChange={handlePublishTime}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 mt-5">
            <DraftButton title={"Save Draft"} handleClick={() => {}} />
            <PublishEventButton title={"Publish"} handleClick={() => {}} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventPreview;
