import { useLocation } from "react-router-dom";
import {
  Footer,
  Navigation,
  ThemeChanger,
  DynamicHelmet,
  EventBannerComponent,
  EventDetailSectionComponent,
} from "../../components";

const EventDetails = () => {
  const location = useLocation();
  const eventData = location.state.event;

  return (
    <div className="dark:bg-dark min-h-screen w-full">
      <DynamicHelmet
        title="KITFT - All events page."
        description="KITFest is an immersive and enlightening theatrical experience, where diverse performances and educational opportunities come together to inspire and connect artists and audiences from around the world, as well as enjoy the magical Kenya through tourism and cultural experiences."
        seoImage={eventData.image}
        seoTitle={eventData.title}
        seoDescription={eventData.description}
      />

      {/* Navigation Section */}
      <Navigation />

      {/* Event Banner */}
      <EventBannerComponent eventData={eventData} />

      {/* Event Details Section */}
      <EventDetailSectionComponent eventData={eventData} />

      {/* Footer */}
      <Footer />

      {/* Theme Changer */}
      <ThemeChanger />
    </div>
  );
};

export default EventDetails;
