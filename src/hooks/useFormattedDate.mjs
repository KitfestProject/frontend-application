import { useState, useEffect } from "react";

function useFormattedDate(isoDateString) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const formatDate = (isoString) => {
      const date = new Date(isoString);

      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const dayOfWeek = daysOfWeek[date.getUTCDay()];
      const month = months[date.getUTCMonth()];
      const day = date.getUTCDate().toString().padStart(2, "0");

      return `${dayOfWeek}, ${month} ${day}`;
    };

    setFormattedDate(formatDate(isoDateString));
  }, [isoDateString]);

  return formattedDate;
}

export default useFormattedDate;

// const formattedDate = useFormattedDate(isoDateString);
