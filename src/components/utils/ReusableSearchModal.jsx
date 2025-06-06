import Select from "react-select";
import { BiSearch, BiTrash, BiX, BiXCircle } from "react-icons/bi";
import { useState, useEffect, useContext, useCallback } from "react";
import { FaSliders, FaCircleExclamation } from "react-icons/fa6";
import {
  SearchModal,
  SearchResultComponent,
  EmptySearchMessage,
  SearchSkeletonComponent,
} from "@/components";
import { SearchContext } from "@/context/SearchContext";
import toast, { Toaster } from "react-hot-toast";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import _ from "lodash";

const ReusableSearchModal = ({ show, onClose }) => {
  const { searchData, setSearchData } = useContext(SearchContext);
  const { searchArtistAndEvents } = useServerSideQueries();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

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

  if (!show) return null;

  const noResults =
    !loading &&
    searchResult &&
    searchResult.events.length === 0 &&
    searchResult.artists.length === 0;

  return (
    <SearchModal onClose={onClose}>
      <div className="md:w-[600px] min-h-auto rounded-md">
        <div className="sticky flex items-center cursor-pointer border-b border-gray/20 py-2 pl-5">
          <BiSearch
            style={{ fontSize: "28px" }}
            className="text-primary dark:text-slate-100"
          />
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
            className="w-full h-[45px] p-2 text-md outline-none text-dark dark:bg-darkGray ml-3 pl-3 dark:text-slate-100 border-r-[1px] border-primary dark:border-slate-100 placeholder:italic placeholder:font-light"
          />

          <div className="w-[130px] flex items-center justify-center gap-2">
            <button onClick={onClose} className="">
              <BiX className="text-3xl text-primary dark:text-slate-100" />
            </button>
          </div>
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
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </SearchModal>
  );
};

export default ReusableSearchModal;
