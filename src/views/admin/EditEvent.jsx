import {
  DynamicHelmet,
  UserNavigation,
  EditEventComponent,
} from "@/components";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { CreateEventFormContext } from "@/context/CreateEventFormContext";

const EditEvent = () => {
  const { eventData, setEventData, setEventFormData } = useContext(
    CreateEventFormContext
  );
  const { getSingleEvent } = useServerSideQueries();
  const location = useLocation();
  const eventId = location.pathname.split("/").pop();

  useEffect(() => {
    const fetchSingleEvent = async (eventId) => {
      const response = await getSingleEvent(eventId);

      const { success, data, message } = response;

      if (!success) {
        // console.log(message);
        return;
      }

      setEventData(data);
    };

    fetchSingleEvent(eventId);
  }, [eventId]);

  useEffect(() => {
    if (eventData) {
      setEventFormData((prevFormData) => ({
        ...prevFormData,
        title: eventData?.title || "",
        description: eventData?.description || "",
        category: eventData?.category?._id || "",
        tags: eventData?.tags || [],
        address: eventData?.address || "",
        longitude: eventData?.longitude || "",
        latitude: eventData?.latitude || "",
        eventDate: {
          start_date: eventData?.event_date?.start_date || null,
          end_date: eventData?.event_date?.end_date || null,
        },
        eventStartTime: eventData?.event_start_time || "",
        eventEndTime: eventData?.event_end_time || "",
        venue: eventData?.venue?._id || "",
        hasSeatMap: eventData?.has_seat_map || false,
        isPaid: eventData.is_paid || "free",
        tickets: convertKeysToCamelCase(eventData?.tickets) || [
          {
            ticketType: +"earlyBird",
            ticketPrice: +"",
            ticketDiscountPrice: +"",
            ticketQuantity: +"",
          },
        ],
        coverImage: eventData.cover_image || null,
        isScheduledPublished: eventData.is_scheduled_published || false,
        publicationDate: eventData.publication_date || null,
        publishTime: eventData.publish_time || null,
      }));
    }
  }, [eventData]);

  function toCamelCase(key) {
    return key.replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace("-", "").replace("_", "")
    );
  }

  function convertKeysToCamelCase(array) {
    return array.map((obj) => {
      const newObj = {};
      for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
          const camelCaseKey = toCamelCase(key);
          newObj[camelCaseKey] = obj[key];
        }
      }
      return newObj;
    });
  }

  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 h-auto min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - Edit Event"
        description="Edit event details"
      />

      <UserNavigation />

      <EditEventComponent />
    </div>
  );
};

export default EditEvent;
