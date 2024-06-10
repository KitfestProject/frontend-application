import { useNavigate } from "react-router-dom";
import { FaCircleExclamation, FaSliders } from "react-icons/fa6";
import Select from "react-select";
import { BiSearch } from "react-icons/bi";
import {
  CustomInput,
  SearchModal,
  SearchComponent,
  CustomDateInput,
  UniversalOutlineButton,
} from "@/components";
import useAuthStore from "@/store/UseAuthStore";
import LandingImage from "@/assets/landing.png";
import { useContext, useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import { SearchContext } from "@/context/SearchContext";

const HeroComponent = () => {
  const { searchData, setSearchData, getEventCategories, getEventLocations } =
    useContext(SearchContext);
  const [showSearchModal, setShowSearchModal] = useState(false);
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
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const toggleShowSearchModal = () => {
    setShowSearchModal(!showSearchModal);
  };

  const toggleShowFilters = () => {
    setShowFilters(!showFilters);
  };

  useEffect(() => {
    // Get Categories
    const foundCategories = getEventCategories();
    const filtered = foundCategories.map((category) => ({
      label: category.title,
      value: category.id,
    }));

    setCategories(filtered);

    // Get Locations
    const foundLocations = getEventLocations();
    const filteredLocations = foundLocations.map((location) => ({
      label: location.name,
      value: location.id,
    }));

    setLocations(filteredLocations);
  }, [getEventCategories, getEventLocations]);

  const selectStyle = {
    input: (styles) => {
      return {
        ...styles,
        outline: "#732E1C",
        boxShadow: "none",
        focus: "none",
        borderRadius: "5px",
        padding: "4px 0",
        width: "100%",
        marginTop: "5px",
      };
    },
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: "#732E1C",
        color: "#FFFFFF",
        borderRadius: "5px",
      };
    },
    multiValueLabel: (styles) => {
      return {
        ...styles,
        color: "#FFFFFF",
      };
    },
    option: (style) => {
      return {
        ...style,
        color: "black",
        backgroundColor: "white",
        "&:hover": {
          backgroundColor: "#732E1C",
          color: "white",
        },
      };
    },
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

  return (
    <section className="h-[650px] relative dark:border-b dark:border-slate-200 mb-10 md:mb-20">
      <img
        src={LandingImage}
        alt="Landing page image"
        className="w-full h-full object-cover"
      />

      {/* Image overlay */}
      <div className="absolute top-0 left-0 w-full h-[650px] bg-black bg-opacity-55">
        <div className="flex flex-col items-center justify-center h-full ">
          <h1 className="text-[50px] md:text-[60px] font-[800] tracking-tighter leading-none text-slate-100 text-center mb-5">
            Experience the Magic <br /> of Kenyan Theatre
          </h1>
          <p className="text-base md:text-lg text-white text-center font-light leading-tight">
            Immerse yourself in the vibrant world of Kenyan theatre and{" "}
            <br className="hidden md:block" />
            discover the rich cultural heritage of our nation through{" "}
            <br className="hidden md:block" />
            captivating performances, thought-provoking stories, and{" "}
            <br className="hidden md:block" />
            unforgettable experiences.
          </p>
          <div className="flex gap-5 mt-5">
            <UniversalOutlineButton
              handleClick={() => {
                user ? navigate("/events") : navigate("/auth-login");
              }}
              title="Get started"
            />
          </div>
        </div>
      </div>

      {/* Search and location filter */}
      <SearchComponent
        classes={"absolute -bottom-8 left-0 w-full hidden md:block"}
        title={"Search events, artists, and more"}
        handleClick={toggleShowSearchModal}
      />

      {/* Search Modal */}
      {showSearchModal && (
        <SearchModal onClose={toggleShowSearchModal}>
          <div className=" md:w-[600px] min-h-auto rounded-md">
            {/* Search input */}
            <div className="sticky flex items-center cursor-pointer border-b border-gray/10 py-2 pl-5">
              <BiSearch
                style={{ fontSize: "28px" }}
                className="text-primary dark:text-slate-100"
              />
              <input
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

              {/* Search Filter */}
              <div className="w-[130px] flex items-center justify-center gap-2">
                <FaSliders
                  onClick={toggleShowFilters}
                  style={{ fontSize: "20px" }}
                  className="text-primary dark:text-slate-100"
                />
                {/* Close Modal icon */}
                <button onClick={toggleShowSearchModal} className="">
                  <BiX className="text-3xl text-primary dark:text-slate-100" />
                </button>
              </div>
            </div>

            {/* Search Result Area */}
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

            {/* Filters Area */}
            {showFilters && (
              <div className="h-[550px] overflow-y-scroll">
                <div className="h-[500px] flex flex-col justify-between">
                  {/* Form Area */}
                  <div className="">
                    {/* Filter Title */}
                    <div className="p-5 pb-5">
                      <h5 className="font-semibold text-dark text-lg">
                        Provide Filters
                      </h5>

                      {/* Category Tags */}
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
                          placeholder="Select event categories..."
                          styles={selectStyle}
                        />
                      </div>

                      {/* Event End Date Input */}
                      <div className="mt-3">
                        <label
                          htmlFor="eventEndDate"
                          className="text-xs text-gray"
                        >
                          Event Dat
                        </label>
                        <CustomDateInput
                          date={eventDate}
                          handleChange={handleEventDateChange}
                        />
                      </div>

                      {/* Event Locations */}
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
                          placeholder="Select event locations..."
                          styles={selectStyle}
                        />
                      </div>

                      {/* Select Event Type */}
                      <div className="mt-3">
                        <label
                          htmlFor="eventType"
                          className="text-xs text-gray dark:text-slate-100"
                        >
                          Event Type
                        </label>
                        <div className="flex gap-5 items-center w-full">
                          <EventTypePaidTab
                            selectedType={selectedType}
                            handleChange={handleEventTypeChange}
                          />
                          <EventTypeFreeTab
                            selectedType={selectedType}
                            handleChange={handleEventTypeChange}
                          />
                        </div>
                      </div>

                      {/* Event Amount */}
                      <div className="mt-3">
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
                          placeholder="Enter event amount..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Filter Button */}
                  <div className="w-full flex gap-5 p-5">
                    <button className="flex-1 bg-primary text-slate-100 py-2 rounded-md">
                      Apply Filter
                    </button>
                    <button className="flex-1 bg-slate-200 text-dark py-2 rounded-md">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Debug */}
          {/* <div className="text-xs text-gray">
            <pre>{JSON.stringify(searchData, null, 2)}</pre>
          </div> */}
        </SearchModal>
      )}
    </section>
  );
};

const EventTypeFreeTab = ({ selectedType, handleChange }) => {
  return (
    <div className="w-full">
      <label className="block cursor-pointer">
        <div
          className={`flex-1 ${
            selectedType === "free"
              ? "bg-[#f1ded9] border border-primary dark:bg-gray"
              : "bg-white border border-slate-300 dark:bg-gray"
          }  p-4 rounded-md`}
        >
          <div className="flex gap-3">
            <div
              className={`w-5 h-5 ${
                selectedType === "free" ? "bg-primary" : "bg-gray dark:bg-dark"
              }  rounded-full flex justify-center items-center`}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p
              className={`text-sm font-bold ${
                selectedType === "free" ? "text-primary" : "text-dark"
              } `}
            >
              Free
            </p>
          </div>
        </div>
        <input
          type="radio"
          value="free"
          checked={selectedType === "free"}
          onChange={handleChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

const EventTypePaidTab = ({ selectedType, handleChange }) => {
  return (
    <div className="w-full">
      <label className="block cursor-pointer">
        <div
          className={`flex-1 ${
            selectedType === "paid"
              ? "bg-[#f1ded9] border border-primary dark:bg-gray"
              : "bg-white border border-slate-300 dark:bg-gray"
          }  p-4 rounded-md`}
        >
          <div className="flex gap-3">
            <div
              className={`w-5 h-5 ${
                selectedType === "paid" ? "bg-primary" : "bg-gray dark:bg-dark"
              }  rounded-full flex justify-center items-center`}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p
              className={`text-sm font-bold ${
                selectedType === "paid" ? "text-primary" : "text-dark"
              } `}
            >
              Paid
            </p>
          </div>
        </div>
        <input
          type="radio"
          value="paid"
          checked={selectedType === "paid"}
          onChange={handleChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default HeroComponent;
