import React from "react";

const MapCanvasComponent = ({ longitude, latitude }) => {
  const center = {
    lat: -1.2780787398866773,
    lng: 36.8157183675582,
  };

  return (
    <div>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.825243644997!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f178b29827375%3A0xc2d7a4329db9f683!2sKenya%20International%20Theatre%20Festival%20(KITFest)!5e0!3m2!1sen!2ske!4v1715168628123!5m2!1sen!2ske`}
        height="450"
        style={{
          borderRadius: "10px",
          width: "100%",
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapCanvasComponent;
