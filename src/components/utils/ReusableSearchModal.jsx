import Select from "react-select";
import { BiSearch, BiX } from "react-icons/bi";
import { useState, useEffect, useContext } from "react";
import { FaCircleExclamation, FaSliders } from "react-icons/fa6";
import { SearchModal, CustomDateInput, EventTypeTab } from "@/components";
import { SearchContext } from "@/context/SearchContext";
import { motion, AnimatePresence } from "framer-motion";

const ReusableSearchModal = ({ show, onClose }) => {
  const { searchData, setSearchData, getEventCategories, getEventLocations } =
    useContext(SearchContext);
  const [error, setError] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedType, setSelectedType] = useState(
    searchData.filters.eventType || "free"
  );
  const [eventDate, setEventDate] = useState(
    new Date(searchData.filters.eventData) || null
  );

  useEffect(() => {
    const foundCategories = getEventCategories();
    const filtered = foundCategories.map((category) => ({
      label: category.title,
      value: category.id,
    }));
    setCategories(filtered);

    const foundLocations = getEventLocations();
    const filteredLocations = foundLocations.map((location) => ({
      label: location.name,
      value: location.id,
    }));
    setLocations(filteredLocations);
  }, [getEventCategories, getEventLocations]);

  const toggleShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const selectStyle = {
    input: (styles) => ({
      ...styles,
      outline: "#732E1C",
      boxShadow: "none",
      focus: "none",
      borderRadius: "5px",
      padding: "4px 0",
      width: "100%",
      marginTop: "5px",
    }),
    multiValue: (styles) => ({
      ...styles,
      backgroundColor: "#732E1C",
      color: "#FFFFFF",
      borderRadius: "5px",
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: "#FFFFFF",
    }),
    option: (style) => ({
      ...style,
      color: "black",
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "#732E1C",
        color: "white",
      },
    }),
  };

  const getSelectedCategories = () => {
    return categories.filter((category) =>
      searchData.filters.categories.includes(category.value)
    );
  };

  const handleEventDateChange = (selected) => {
    setEventDate(selected);
    const date = selected?.toISOString();
    setSearchData((prev) => ({
      ...prev,
      filters: {
        ...prev.filters,
        eventData: date,
      },
    }));
  };

  const handleEventTypeChange = (event) => {
    const selectedType = event.target.value;
    setSelectedType(selectedType);
    setSearchData({
      ...searchData,
      filters: {
        ...searchData.filters,
        eventType: selectedType,
      },
    });
  };

  if (!show) return null;

  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <SearchModal onClose={onClose}>
      <div className="md:w-[600px] min-h-auto rounded-md">
        <div className="sticky flex items-center cursor-pointer border-b border-gray/10 py-2 pl-5">
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
            className="w-full h-[45px] p-2 text-md outline-none text-dark dark:bg-dark dark:rounded-md ml-3 pl-3 dark:text-slate-100 border-r-[1px] border-primary dark:border-slate-100 placeholder:italic placeholder:font-light"
          />

          <div className="w-[130px] flex items-center justify-center gap-2">
            <FaSliders
              onClick={toggleShowFilters}
              style={{ fontSize: "20px" }}
              className="text-primary dark:text-slate-100"
            />
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
                  "Dennis"
                </b>
              </p>
            </div>
          </div>
        )}

        <AnimatePresence>
          {showFilters && (
            <motion.div
              key="filters"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={filterVariants}
              transition={{ duration: 0.3 }}
              className="h-[550px] overflow-y-scroll"
            >
              <div className="h-[500px] flex flex-col justify-between">
                <div className="p-5 pb-5">
                  <h5 className="font-semibold text-dark text-lg">
                    Provide Filters
                  </h5>

                  <div className="mt-3">
                    <label
                      htmlFor="categories"
                      className="text-xs text-gray dark:text-slate-100 flex-1"
                    >
                      Select category
                    </label>
                    <Select
                      options={categories}
                      className="basic-multi-select"
                      isMulti
                      onChange={(selected) => {
                        const selectedCategories = selected.map(
                          (category) => category.value
                        );
                        setSearchData((prev) => ({
                          ...prev,
                          filters: {
                            ...prev.filters,
                            categories: selectedCategories,
                          },
                        }));
                      }}
                      value={getSelectedCategories()}
                      placeholder="Select categories..."
                      styles={selectStyle}
                    />
                  </div>

                  <div className="mt-3">
                    <label htmlFor="eventEndDate" className="text-xs text-gray">
                      Event Date
                    </label>
                    <CustomDateInput
                      date={eventDate}
                      handleChange={handleEventDateChange}
                    />
                  </div>

                  <div className="mt-3">
                    <label
                      htmlFor="locations"
                      className="text-xs text-gray dark:text-slate-100"
                    >
                      Select location
                    </label>
                    <Select
                      options={locations}
                      className="basic-multi-select"
                      onChange={(selected) => {
                        setSearchData((prev) => ({
                          ...prev,
                          filters: {
                            ...prev.filters,
                            locationId: selected.value,
                          },
                        }));
                      }}
                      value={locations.find(
                        (location) =>
                          location.value === searchData.filters.locationId
                      )}
                      isSearchable={true}
                      placeholder="Select locations..."
                      styles={selectStyle}
                    />
                  </div>

                  <div className="mt-3">
                    <label
                      htmlFor="eventType"
                      className="text-xs text-gray dark:text-slate-100"
                    >
                      Event Type
                    </label>
                    <div className="flex gap-5 items-center w-full">
                      <EventTypeTab
                        type="free"
                        selectedType={selectedType}
                        handleChange={handleEventTypeChange}
                      />
                      <EventTypeTab
                        type="paid"
                        selectedType={selectedType}
                        handleChange={handleEventTypeChange}
                      />
                    </div>
                  </div>

                  {
                    // Show amount input field if eventType is paid
                    searchData.filters.eventType === "paid" ? (
                      <motion.div
                        key="amount"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={filterVariants}
                        transition={{ duration: 0.3 }}
                        className="mt-3"
                      >
                        <label
                          htmlFor="amount"
                          className="text-xs text-gray dark:text-slate-100"
                        >
                          Event Amount
                        </label>
                        <input
                          className="w-full text-primary bg-[#F5F5F5] dark:bg-gray p-2 rounded-md outline-none text-[15px]"
                          type="number"
                          name="amount"
                          value={searchData.filters.amount}
                          onChange={(ev) => {
                            setSearchData((prev) => ({
                              ...prev,
                              filters: {
                                ...prev.filters,
                                amount: ev.target.value,
                              },
                            }));
                          }}
                          placeholder="Enter amount..."
                        />
                      </motion.div>
                    ) : (
                      <div className="h-[75px]"></div>
                    )
                  }
                </div>

                <div className="w-full flex gap-5 p-5">
                  <button className="flex-1 bg-primary text-slate-100 py-2 rounded-md">
                    Apply Filter
                  </button>
                  <button className="flex-1 bg-slate-200 text-dark py-2 rounded-md">
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Handle Search result */}
          {!showFilters && <div className="p-5">Search Input area</div>}
        </AnimatePresence>
      </div>
    </SearchModal>
  );
};

export default ReusableSearchModal;
