import PropTypes from "prop-types";
import { createContext, useState, useContext } from "react";

export const StateContext = createContext({
  currentUser: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
  updateUser: () => {},
  logout: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [venueData, setVenueData] = useState(null);
  const [venueDetails, setVenueDetails] = useState(null);
  const [eventData, setEventData] = useState(null);
  const [blogData, setBlogData] = useState(null);
  const [blogDetails, setBlogDetails] = useState(null);
  const [stateLoading, setStateLoading] = useState(false);
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(8);

  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("ACCESS_TOKEN");
  };

  const [token, setToken] = useState(() =>
    localStorage.getItem("ACCESS_TOKEN")
  );

  const _setToken = (token) => {
    setToken(token);

    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  return (
    <StateContext.Provider
      value={{
        user,
        token,
        limit,
        start,
        logout,
        setUser,
        setStart,
        setLimit,
        blogData,
        venueData,
        eventData,
        updateUser,
        blogDetails,
        setBlogData,
        venueDetails,
        setVenueData,
        setEventData,
        stateLoading,
        setBlogDetails,
        setVenueDetails,
        setStateLoading,
        setToken: _setToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useStateContext = () => useContext(StateContext);
