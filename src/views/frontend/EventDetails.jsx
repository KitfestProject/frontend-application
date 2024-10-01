import { useLocation } from "react-router-dom";
import {
  Footer,
  Navigation,
  DynamicHelmet,
  EventBannerComponent,
  EventDetailSectionComponent,
} from "@/components";
import { Suspense, useContext, useEffect, useState } from "react";
import { EventContext } from "@/context/EventDetailsContext";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { useSeatStore } from "@/store/UseSeatStore";

const EventDetails = () => {
  const location = useLocation();
  const { getUrlSlug, eventDetails, setEventDetails, setEventDetailsLoading } =
    useContext(EventContext);
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;
  const { getSingleEvent } = useServerSideQueries();
  const slugOrId = getUrlSlug(location.pathname);
  const { setEventId } = useSeatStore();

  useEffect(() => {
    setEventId(slugOrId);

    const getSingleEventsData = async () => {
      setEventDetailsLoading(true);
      const response = await getSingleEvent(slugOrId);

      const { success, data } = response;

      // console.log(data);

      if (!success) {
        setEventDetailsLoading(false);
        console.log("Error loading event details. " + message);
      }

      if (success) {
        setEventDetailsLoading(false);
        setEventDetails(data);
      }
    };

    getSingleEventsData();
  }, [slugOrId, setEventDetails]);

  const seoImageFullUrl = eventDetails?.cover_image
    ? `${baseUrl}${eventDetails.cover_image}`
    : null;

  return (
    <div className="dark:bg-dark min-h-screen w-full">
      <DynamicHelmet
        title={`KITFT - ${eventDetails?.title}`}
        description="KITFest is an immersive and enlightening theatrical experience, where diverse performances and educational opportunities come together to inspire and connect artists and audiences from around the world, as well as enjoy the magical Kenya through tourism and cultural experiences."
        keywords={eventDetails?.tags?.map((tag) => tag).join(", ")}
        seoImage={seoImageFullUrl}
        seoTitle={eventDetails?.title}
        seoDescription={eventDetails?.description}
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Event Banner */}
      <Suspense fallback={<div>Loading...</div>}>
        <EventBannerComponent />

        {/* Event Details Section */}
        <EventDetailSectionComponent />
      </Suspense>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventDetails;
