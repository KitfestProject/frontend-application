import {
  DynamicHelmet,
  UserNavigation,
  EditEventComponent,
} from "@/components";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { useEffect, useContext } from "react";
import { CreateEventFormContext } from "@/context/CreateEventFormContext";
import { useLocation } from "react-router-dom";

const EditEvent = () => {
  const { eventData, setEventData } = useContext(CreateEventFormContext);
  const { getSingleEvent } = useServerSideQueries();
  const location = useLocation();

  const eventId = location.pathname.split("/").pop();

  useEffect(() => {
    const fetchSingleEvent = async (eventId) => {
      const response = await getSingleEvent(eventId);

      const { success, data, message } = response;

      // console.log(data);

      if (!success) {
        console.log(message);
        return;
      }

      setEventData(data);
    };

    fetchSingleEvent(eventId);

    // return () => {
    //   setEventData({});
    // };
  }, []);

  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 h-auto min-h-screen w-full">
      <DynamicHelmet title="KITFT - Edit Event" description="" />
      <UserNavigation />

      <EditEventComponent />
    </div>
  );
};

export default EditEvent;
