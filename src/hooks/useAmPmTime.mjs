import { useState, useEffect } from "react";

function useAmPmTime(time) {
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    const determineAmPm = (time) => {
      const [hours, minutes] = time.split(":");
      const intHours = parseInt(hours, 10);

      if (intHours < 12) {
        return `${time} AM`;
      } else if (intHours === 12) {
        return `${time} PM`;
      } else {
        return `${(intHours - 12).toString().padStart(2, "0")}:${minutes} PM`;
      }
    };

    setFormattedTime(determineAmPm(time));
  }, [time]);

  return formattedTime;
}

export default useAmPmTime;

// const formattedTime = useAmPmTime(time);
