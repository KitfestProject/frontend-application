import Select from "react-dropdown-select";
import { BiCheckCircle, BiError, BiInfoCircle } from "react-icons/bi";
import { CustomInput, MessageInput, TagsInput } from "@/components";
import useScreenSize from "@/hooks/useScreenSize";
import { CreateVenueContext } from "@/context/CreateVenueFormContext";
import { useContext } from "react";

const VenueGeneralInformation = () => {
  const isMobile = useScreenSize();
  const { venueFormData, setVenueFormData } = useContext(CreateVenueContext);

  const options = [
    {
      label: "Nairobi Cinema Sit Map",
      value: "/create-nairobi-cinema-seat-map",
    },
  ];

  const handleSitMapChange = (selectedValue) => {
    if (selectedValue && selectedValue.length > 0) {
      setVenueFormData((prev) => ({
        ...prev,
        seatMapUrl: selectedValue[0].value,
      }));
    } else {
      setVenueFormData((prev) => ({
        ...prev,
        seatMapUrl: "",
      }));
    }
  };

  const renderMobileError = () => {
    if (isMobile) {
      return isAllInformationFilled && isMobile ? (
        <BiCheckCircle className="text-green-600 text-xl ml-2" />
      ) : (
        <BiError className="text-2xl inline text-yellow-600" />
      );
    }
  };

  return (
    <div className="mt-5 border-b border-slate-200 dark:border-slate-700 pb-5">
      <h1 className="text-xl font-bold flex gap-2 items-center mb-5">
        <BiInfoCircle className="text-2xl text-primary dark:text-gray" />
        General Information
        {renderMobileError()}
      </h1>

      {/* Venue Name */}
      <div className="mb-5">
        <CustomInput
          name="name"
          value={venueFormData.name}
          type="text"
          data={venueFormData}
          setData={setVenueFormData}
          title="Name"
          info="Provide a venue name. Users will be able to see this."
          required={true}
        />
      </div>

      {/* Venue Capacity */}
      <div className="mb-5">
        <CustomInput
          name="capacity"
          value={venueFormData.capacity}
          type="text"
          data={venueFormData}
          setData={setVenueFormData}
          title="Capacity"
          info="Provide a venue capacity. Users will be able to see this."
          required={true}
        />
      </div>

      {/* Venue Location */}
      <div className="mb-5">
        <CustomInput
          name="location"
          value={venueFormData.location}
          type="text"
          data={venueFormData}
          setData={setVenueFormData}
          title="Location"
          info="Provide a venue location. Users will be able to see this."
          required={true}
        />
      </div>

      {/* Venue Address */}
      <div className="mb-5">
        <CustomInput
          name="address"
          value={venueFormData.address}
          type="text"
          data={venueFormData}
          setData={setVenueFormData}
          title="Address"
          info="Provide a venue address. Users will be able to see this."
          required={true}
        />
      </div>

      {/* Venue Longitude */}
      <div className="mb-5">
        <CustomInput
          name="longitude"
          value={venueFormData.longitude}
          type="text"
          data={venueFormData}
          setData={setVenueFormData}
          title="Longitude"
          info="Provide a venue geo location (Longitude). Users will be able to see this."
          required={true}
        />
      </div>

      {/* Venue Latitude */}
      <div className="mb-5">
        <CustomInput
          name="latitude"
          value={venueFormData.latitude}
          type="text"
          data={venueFormData}
          setData={setVenueFormData}
          title="Latitude"
          info="Provide a venue geo location (Latitude). Users will be able to see this."
          required={true}
        />
      </div>

      {/* Venue SitMap Url */}
      <div className="mt-5">
        <label
          htmlFor="event-category"
          className="text-dark dark:text-slate-100 font-bold text-sm"
        >
          Select Seat Map <span className="text-gray">(Optional)</span>
        </label>
        <small className="block text-gray mb-1">
          Choose a seat map for this venue
        </small>
        <Select
          options={options}
          onChange={handleSitMapChange}
          values={options.filter(
            (option) => option.value === venueFormData.seatMapUrl
          )}
          className="w-full bg-[#F5F5F5] dark:bg-gray dark:text-dark rounded-md text-gray"
          placeholder="Select Seat Map"
        />
      </div>
    </div>
  );
};

export default VenueGeneralInformation;
