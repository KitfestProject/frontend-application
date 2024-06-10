import { useLocation } from "react-router-dom";
import {
  Footer,
  Navigation,
  ThemeChanger,
  DynamicHelmet,
  EventBannerComponent,
  EventDetailSectionComponent,
} from "@/components";
import { useContext } from "react";
import { EventContext } from "@/context/EventDetailsContext";

const EventDetails = () => {
  const location = useLocation();
  const { getEventBySlug, getUrlSlug } = useContext(EventContext);
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  const slug = getUrlSlug(location.pathname);

  const eventDetails = getEventBySlug(slug);

  const seoImageFullUrl = eventDetails?.image
    ? `${baseUrl}${eventDetails.image}`
    : null;

  return (
    <div className="dark:bg-dark min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - All events page."
        description="KITFest is an immersive and enlightening theatrical experience, where diverse performances and educational opportunities come together to inspire and connect artists and audiences from around the world, as well as enjoy the magical Kenya through tourism and cultural experiences."
        seoImage={seoImageFullUrl}
        seoTitle={eventDetails?.title}
        seoDescription={eventDetails?.description}
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Event Banner */}
      <EventBannerComponent eventData={eventDetails} />

      {/* Event Details Section */}
      <EventDetailSectionComponent eventData={eventDetails} />

      {/* Footer */}
      <Footer />

      {/* Theme Changer */}
      <ThemeChanger />
    </div>
  );
};

export default EventDetails;
