import { BiCheck, BiInfoCircle } from "react-icons/bi";
import useTimeAgo from "@/hooks/useTimeAgo";
import { useContext } from "react";
import { CreateVenueContext } from "@/context/CreateVenueFormContext";

const CreateVenueSidebar = ({ title }) => {
  const { formatFullDate } = useTimeAgo();
  const {
    isNameFilled,
    validateInputs,
    isSeatMapFilled,
    isAddressFilled,
    isCapacityFilled,
    isVenueImageFilled,
    isDescriptionFilled,
    areAmenitiesSelected,
    isLongitudeAndLatitudeFilled,
  } = useContext(CreateVenueContext);

  return (
    <div className="w-[25%] hidden md:block">
      <div className="sticky top-[120px] dark:border dark:border-gray/30 dark:p-3 dark:rounded-md">
        <h1 className="text-2xl font-bold text-dark dark:text-slate-100 mb-5">
          {title}
        </h1>

        <div className="bg-[#F5F5F5] dark:bg-darkGray rounded-md pb-3">
          <div className="p-5 pb-3 border-b border-slate-300 dark:border-gray">
            <p className="text-gray text-sm">Last Updated</p>
            <p className="text-primary font-bold text-sm dark:text-secondary">
              {formatFullDate(new Date())}
            </p>

            <p className="text-gray mt-5 text-sm">Venue Status</p>

            <p className="text-yellow-600 font-bold text-sm dark:text-yellow-600">
              Draft
            </p>
          </div>

          <div className="p-5 pb-3 border-b mb-3 border-slate-300 dark:border-gray">
            <h1 className="text-md font-bold">Venue Information</h1>

            <p className="text-gray dark:text-gray text-sm mt-5 flex justify-between items-center">
              Cover Image
              {isVenueImageFilled ? (
                <BiCheck className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2" />
              )}
            </p>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Venue Name
              {isNameFilled ? (
                <BiCheck className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2" />
              )}
            </p>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Capacity
              {isCapacityFilled ? (
                <BiCheck className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2" />
              )}
            </p>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Description
              {isDescriptionFilled ? (
                <BiCheck className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2" />
              )}
            </p>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Address
              {isAddressFilled ? (
                <BiCheck className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2" />
              )}
            </p>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              seat Map Image
              {isSeatMapFilled ? (
                <BiCheck className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2" />
              )}
            </p>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Longitude & Latitude
              {isLongitudeAndLatitudeFilled ? (
                <BiCheck className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2" />
              )}
            </p>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Amenities
              {areAmenitiesSelected ? (
                <BiCheck className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2" />
              )}
            </p>
          </div>

          <div className="p-5 pb-3">
            <h1 className="text-md font-bold">Publish Venue</h1>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Review and publish
              {validateInputs ? (
                <BiCheck className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2" />
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateVenueSidebar;
