export const socialStyle = {
  root: {
    background: "linear-gradient(45deg, #732E1C 30%, #B40000 90%)",
    borderRadius: 3,
    border: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "1rem",
    width: "100%",
    maxWidth: "400px",
    "@media (maxWidth: 640px)": {
      maxWidth: "90%",
      padding: "0.5rem",
    },
  },
  copyContainer: {
    border: "1px solid blue",
    background: "rgb(0,0,0,0.7)",
    padding: "10px",
    "@media (maxWidth: 640px)": {
      padding: "5px", // Adjust padding on smaller screens
    },
  },
  title: {
    color: "aquamarine",
    fontStyle: "italic",
    fontSize: "1.5rem",
    "@media (maxWidth: 640px)": {
      fontSize: "1rem", // Smaller text on mobile
    },
  },
};
