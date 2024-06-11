import PropTypes from "prop-types";
import {
  categories,
  locations,
  artists,
  upcomingEvents as events,
} from "@/components/data/StaticData";
import { createContext, useState } from "react";

export const SearchContext = createContext();

const initialSearchData = {
  search: "",
  hasFilter: false,
  filters: {
    categories: [],
    eventData: new Date(),
    locationId: "",
    eventType: "free",
    amount: "",
  },
};

export const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState(initialSearchData);

  const getEventCategories = () => {
    //TODO: Get all events categories from the sever
    const foundCategories = categories;

    return foundCategories;
  };

  const getEventLocations = () => {
    //TODO: Get all events locations from the sever
    const foundLocations = locations;

    return foundLocations;
  };

  const getArtists = () => {
    //TODO: Get all artists from the sever
    const foundArtists = artists.slice(0, 2);

    return foundArtists;
  };

  const getEvents = () => {
    // TODO: Get all events from the server
    const foundEvents = events.slice(0, 2);

    return foundEvents;
  };

  return (
    <SearchContext.Provider
      value={{
        getEvents,
        getArtists,
        searchData,
        setSearchData,
        getEventLocations,
        getEventCategories,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchProvider;
