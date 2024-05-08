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
    const date = new Date(inputDate.replace(/-/g, "/"));

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

    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const dayOfMonth = date.getDate();

    const formattedDate = `${day.toUpperCase()}, ${month.toUpperCase()} ${dayOfMonth} ${year}`;

    return formattedDate;
  }

  return {
    timeAgo,
    formatDate,
    formatDuration,
    formatEventDate,
    checkDateIsInThePast,
  };
};

export default useTimeAgo;
