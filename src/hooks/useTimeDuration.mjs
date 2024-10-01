import { useState, useEffect } from "react";

const useTimeDuration = (startTime, endTime) => {
  const [duration, setDuration] = useState({ hours: 0, minutes: 0 });

  useEffect(() => {
    if (!startTime || !endTime) return;

    const parseTime = (time) => {
      const [hours, minutes] = time.split(":").map(Number);
      return { hours, minutes };
    };

    const calculateDuration = () => {
      const { hours: startHours, minutes: startMinutes } = parseTime(startTime);
      const { hours: endHours, minutes: endMinutes } = parseTime(endTime);

      let totalStartMinutes = startHours * 60 + startMinutes;
      let totalEndMinutes = endHours * 60 + endMinutes;

      let diffMinutes = totalEndMinutes - totalStartMinutes;

      // If the end time is before the start time, assume the end time is on the next day
      if (diffMinutes < 0) {
        diffMinutes += 24 * 60; // Add 24 hours worth of minutes
      }

      const hours = Math.floor(diffMinutes / 60);
      const minutes = diffMinutes % 60;

      setDuration({ hours, minutes });
    };

    calculateDuration();
  }, [startTime, endTime]);

  return duration;
};

export default useTimeDuration;
