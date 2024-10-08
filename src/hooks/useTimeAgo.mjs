import React from "react";

const useTimeAgo = () => {
  function timeAgo(dateString) {
    const currentDate = new Date();
    const targetDate = new Date(dateString);
    const timeDifference = currentDate - targetDate;
    const seconds = Math.floor(timeDifference / 1000);

    if (seconds < 60) {
      return seconds + " seconds ago";
    }

    const minutes = Math.floor(seconds / 60);

    if (minutes < 60) {
      return minutes + " minutes ago";
    }

    const hours = Math.floor(minutes / 60);

    if (hours < 24) {
      return hours + " hours ago";
    }

    const days = Math.floor(hours / 24);

    if (days < 31) {
      return days + " days ago";
    }

    const months = Math.floor(days / 30); // Approximating a month as 30 days

    if (months < 12) {
      return months + " months ago";
    }

    const years = Math.floor(months / 12);

    return years + " years ago";
  }

  function formatDuration(dateString) {
    const currentDate = new Date();
    const targetDate = new Date(dateString);
    const timeDifference = currentDate - targetDate;
    const seconds = Math.floor(timeDifference / 1000);

    if (seconds < 60) {
      return seconds + " seconds";
    }

    const minutes = Math.floor(seconds / 60);

    if (minutes < 60) {
      return minutes + " minutes";
    }

    const hours = Math.floor(minutes / 60);

    if (hours < 24) {
      return hours + " hours";
    }

    const days = Math.floor(hours / 24);

    if (days < 31) {
      return days + " days";
    }

    const months = Math.floor(days / 30); // Approximating a month as 30 days

    if (months < 12) {
      return months + " months";
    }

    const years = Math.floor(months / 12);

    return years + " years";
  }

  function formatDate(inputDate) {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(inputDate);
    const formattedDate = date.toLocaleDateString("en-US", options);

    // Extract the day and month parts
    const [, month, day] = formattedDate.match(/(\w+)\s(\d+)/);

    // Convert the day to a number and add 'th', 'st', 'nd', or 'rd'
    const numericDay = parseInt(day, 10);
    let dayString = numericDay.toString();
    if (numericDay >= 11 && numericDay <= 13) {
      dayString += "th";
    } else {
      const lastDigit = numericDay % 10;
      switch (lastDigit) {
        case 1:
          dayString += "st";
          break;
        case 2:
          dayString += "nd";
          break;
        case 3:
          dayString += "rd";
          break;
        default:
          dayString += "th";
          break;
      }
    }

    // Combine the formatted month and day
    return `${dayString} ${month}`;
  }

  function checkDateIsInThePast(dateString) {
    const currentDate = new Date();
    const targetDate = new Date(dateString);

    return currentDate > targetDate;
  }

  function formatEventDate(inputDate) {
    const date = new Date(inputDate);
    if (isNaN(date)) {
      return "Invalid Date";
    }

    const days = [
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

    // Use local time methods instead of UTC methods
    const dayIndex = date.getDay();
    const monthIndex = date.getMonth();
    const day = days[dayIndex];
    const month = months[monthIndex];
    const year = date.getFullYear();
    const dayOfMonth = date.getDate();

    if (!day || !month) {
      console.error("Day or month is undefined:", { day, month });
      return "Invalid Date";
    }

    const formattedDate = `${day.toUpperCase()}, ${month.toUpperCase()} ${dayOfMonth} ${year}`;

    return formattedDate;
  }

  function formatFullDate(dateString) {
    const date = new Date(dateString);

    const days = [
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

    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const dayOfMonth = String(date.getDate()).padStart(2, "0");

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = String(minutes).padStart(2, "0");

    return `${dayName}, ${monthName} ${dayOfMonth} | ${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  function formatTableDate(dateString) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function determineAmPm(time) {
    if (!time || typeof time !== "string") {
      return "Invalid time";
    }

    const [hours, minutes] = time.split(":").map(Number);

    if (
      isNaN(hours) ||
      isNaN(minutes) ||
      hours < 0 ||
      hours > 23 ||
      minutes < 0 ||
      minutes > 59
    ) {
      return "Invalid time";
    }

    const period = hours < 12 ? "AM" : "PM";
    const adjustedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM and 12 to 12 for 12 PM
    const formattedTime = `${adjustedHours}:${
      minutes < 10 ? "0" : ""
    }${minutes} ${period}`;

    return formattedTime;
  }

  function calculateEventDuration(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return "Invalid date(s)";
    }

    const durationMs = end - start;

    if (durationMs < 0) {
      return "End date is before start date";
    }

    const millisecondsInMinute = 1000 * 60;
    const millisecondsInHour = millisecondsInMinute * 60;
    const millisecondsInDay = millisecondsInHour * 24;

    if (durationMs < millisecondsInDay) {
      const hours = Math.floor(durationMs / millisecondsInHour);
      const minutes = Math.floor(
        (durationMs % millisecondsInHour) / millisecondsInMinute
      );
      return `${hours} hours and ${minutes} minutes`;
    } else {
      const days = Math.floor(durationMs / millisecondsInDay);
      return `${days} days`;
    }
  }

  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);

    const monthNames = [
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

    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const isPM = hours >= 12;

    hours = hours % 12 || 12;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const ampm = isPM ? "PM" : "AM";

    return `${month} ${day} | ${hours}:${formattedMinutes} ${ampm}`;
  };

  function formatBlogDate(dateInput) {
    const date = new Date(dateInput);
    const day = date.getDate();
    const year = date.getFullYear();

    const monthNames = [
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

    const month = monthNames[date.getMonth()];

    return `${day} ${month} ${year}`;
  }

  const formatTicketDateTime = (dateString, timeString) => {
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long", // e.g., "Sunday"
      year: "numeric",
      month: "long", // e.g., "October"
      day: "numeric", // e.g., "24"
    });

    const [startTime, endTime] = timeString.split(" - ");
    const formattedStartTime = new Date(
      `1970-01-01T${startTime}`
    ).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
    const formattedEndTime = new Date(
      `1970-01-01T${endTime}`
    ).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });

    return `${formattedDate} from ${formattedStartTime} to ${formattedEndTime}`;
  };

  return {
    timeAgo,
    formatDate,
    formatFullDate,
    formatDuration,
    formatDateTime,
    formatEventDate,
    formatBlogDate,
    checkDateIsInThePast,
    determineAmPm,
    calculateEventDuration,
    formatTableDate,
    formatTicketDateTime,
  };
};

export default useTimeAgo;
