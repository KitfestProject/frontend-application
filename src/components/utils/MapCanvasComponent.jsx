// import { EventContext } from "@/context/EventDetailsContext";
// import { useContext } from "react";

// const MapCanvasComponent = () => {
//   const { eventDetails } = useContext(EventContext);

//   const longitude = eventDetails?.longitude;
//   const latitude = eventDetails?.latitude;

//   // Generate the map URL using the latitude and longitude
//   const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.825243644997!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f178b29827375%3A0xc2d7a4329db9f683!2sKenya%20International%20Theatre%20Festival%20(KITFest)!5e0!3m2!1sen!2ske!4v1715168628123!5m2!1sen!2ske`;

//   return (
//     <div>
//       <iframe
//         src={mapUrl}
//         height="450"
//         style={{
//           borderRadius: "10px",
//           width: "100%",
//         }}
//         allowFullScreen=""
//         referrerPolicy="no-referrer-when-downgrade"
//       ></iframe>
//     </div>
//   );
// };

// export default MapCanvasComponent;

import { EventContext } from "@/context/EventDetailsContext";
import { useContext } from "react";

const MapCanvasComponent = () => {
  const ga_key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const { eventDetails } = useContext(EventContext);

  console.log(eventDetails);

  // const longitude = eventDetails?.longitude;
  // const latitude = eventDetails?.latitude;
  const longitude = 36.81569580988629;
  const latitude = -1.278110749214124;

  // Check if latitude and longitude are available
  if (!latitude || !longitude) {
    return <div>Location details are not available.</div>;
  }

  // Generate the map URL using the latitude and longitude
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
