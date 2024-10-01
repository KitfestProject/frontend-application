import PropTypes from "prop-types";
import { BottomDrawer, SearchSkeletonComponent } from "@/components";
import { Link } from "react-router-dom";
import useThemeStore from "@/store/UseThemeStore";
import { BiSearchAlt2 } from "react-icons/bi";
import { SearchContext } from "@/context/SearchContext";
import { useContext, useState, useEffect, useCallback } from "react";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import { FaCircleExclamation } from "react-icons/fa6";
import SearchResultComponent from "../search/SearchResultComponent";
import _ from "lodash";

const MobileSearch = ({ handleToggleSearchArea, isSearchOpen }) => {
  const { searchData, setSearchData } = useContext(SearchContext);
  const { searchArtistAndEvents } = useServerSideQueries();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );
  const drawerHeight = "100%";

  // Debounced search function
  const debouncedSearch = useCallback(
    _.debounce(async (searchTerm) => {
      if (searchTerm.search !== "") {
        setLoading(true);
        setError(false);
        try {
          const { success, message, data } = await searchArtistAndEvents(
            searchTerm
          );

          if (success) {
            setSearchData((prev) => ({
              ...prev,
              search: searchTerm.search,
            }));
            setSearchResult(data);
            setLoading(false);
          } else {
            setError(true);
            toast.error(message);
          }
        } catch (err) {
          setError(true);
          toast.error("An error occurred while searching.");
        } finally {
          setLoading(false);
        }
      } else {
        setSearchResult(null);
        setLoading(false);
      }
    }, 500),
    []
  );

  useEffect(() => {
    debouncedSearch(searchData);

    return () => debouncedSearch.cancel();
  }, [searchData.search]);

  const noResults =
    !loading &&
    searchResult &&
    searchResult.events.length === 0 &&
    searchResult.artists.length === 0;

  return (
    <div>
      <BottomDrawer
        isOpen={isSearchOpen}
        onClose={handleToggleSearchArea}
        height={drawerHeight}
      >
        <div className="p-3 flex justify-between items-center border-b border-gray">
          {/* Logo */}
          <Link to="/" className="cursor-pointer">
            <img
              src={
                isDarkMode
                  ? "/images/kitft-logo-dark.png"
                  : "/images/kitft-logo-light.png"
              }
              alt="logo"
              className="w-[150px] h-[50px] object-contain"
            />
          </Link>

          {/* Action Button */}
          <div className="flex items-center gap-3"></div>
        </div>

        {/* Search Input */}
        <div className="m-3 p-1 rounded-full bg-[#f1f5f9] dark:bg-darkGray dark:text-slate-100 dark:border-slate-500 border border-gray flex gap-1 items-center">
          <BiSearchAlt2 className="text-gray text-3xl ml-2" />
          <input
            autoComplete="off"
            type="text"
            name="search"
            value={searchData.search}
            onChange={(ev) => {
              setSearchData((prev) => ({
                ...prev,
                search: ev.target.value,
              }));
            }}
            placeholder={"Search events, artists, and more"}
            className="w-full p-3 font-light bg-[#f1f5f9] dark:bg-darkGray rounded-full dark:text-slate-100 dark:border-slate-500 border-none focus:outline-none"
          />
        </div>

        {error && (
          <div className="h-[calc(400px-45px)]">
            <div className="flex flex-col items-center gap-5 justify-center h-full">
              <FaCircleExclamation className="text-2xl text-primary dark:text-slate-100" />
              <p className="text-dark text-base md:text-md dark:text-white text-center font-light leading-tight">
                No search result found for:{" "}
                <b className="font-semibold text-primary dark:text-slate-100">
                  "{searchData.search}"
                </b>
              </p>
            </div>
          </div>
        )}

        <div className="max-h-[550px] h-full overflow-y-scroll">
          {loading ? (
            <SearchSkeletonComponent />
          ) : noResults ? (
            <div className="h-[calc(400px-120px)]">
              <div className="flex flex-col items-center gap-5 justify-center h-full">
                <FaCircleExclamation className="text-2xl text-primary dark:text-slate-100" />
                <p className="text-dark text-base md:text-md dark:text-white text-center font-light leading-tight">
                  No search result found for:{" "}
                  <b className="font-semibold text-primary dark:text-slate-100">
                    "{searchData.search}"
                  </b>
                </p>
              </div>
            </div>
          ) : (
            <SearchResultComponent searchResult={searchResult} />
          )}
        </div>
      </BottomDrawer>
    </div>
  );
};

MobileSearch.propTypes = {
  handleToggleSearchArea: PropTypes.func.isRequired,
  isSearchOpen: PropTypes.bool.isRequired,
};

export default MobileSearch;
