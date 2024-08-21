import { EventContext } from "@/context/EventDetailsContext";
import { useContext } from "react";

const MapCanvasComponent = () => {
  const ga_key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const { eventDetails } = useContext(EventContext);

  const latitude = eventDetails?.longitude;
  const longitude = eventDetails?.latitude;
  // const longitude = 36.81569580988629;
  // const latitude = -1.278110749214124;

  if (!latitude || !longitude) {
    return <div>Location details are not available.</div>;
  }

  const mapUrl = `https://www.google.com/maps/embed/v1/view?key=${ga_key}&center=${latitude},${longitude}&zoom=15&maptype=roadmap`;

  return (
    <div>
      <iframe
        src={mapUrl}
        height="450"
        style={{
          borderRadius: "10px",
          width: "100%",
        }}
        allowFullScreen={true}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapCanvasComponent;
