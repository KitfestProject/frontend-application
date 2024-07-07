import { BiCheckCircle, BiInfoCircle } from "react-icons/bi";
import useTimeAgo from "@/hooks/useTimeAgo";
import { CreateArtistContext } from "@/context/CreateArtistFormContext";
import { useContext } from "react";

const CreateArtistSidebar = ({ title }) => {
  const { formatFullDate } = useTimeAgo();
  const {
    isNameFilled,
    isEmailFilled,
    isPhoneFilled,
    isDescriptionFilled,
    isImageFilled,
    isRoleFilled,
    isAllInformationFilled,
  } = useContext(CreateArtistContext);

  return (
    <div className="w-[25%] hidden md:block">
      <div className="sticky top-[120px]">
        <h1 className="text-2xl font-bold text-dark dark:text-slate-100 mb-5">
          {title}
        </h1>

        <div className="bg-[#F5F5F5] dark:bg-darkGray rounded-md pb-3">
          <div className="p-5 pb-3 border-b border-slate-300 dark:border-gray">
            <p className="text-gray text-sm">Last Updated</p>
            <p className="text-primary font-bold text-sm dark:text-slate-100">
              {formatFullDate(new Date())}
            </p>

            <p className="text-gray mt-5 text-sm">Artist Status</p>

            <p className="text-yellow-600 font-bold text-sm">Draft</p>
          </div>

          <div className="p-5 pb-3 border-b mb-3 border-slate-300 dark:border-gray">
            <h1 className="text-md font-bold">Artist Information</h1>

            <p className="text-gray text-sm mt-5 flex justify-between items-center">
              Artist Cover Image
              {isImageFilled ? (
                <BiCheckCircle className="text-green-600 ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2" />
              )}
            </p>

            <p className="text-gray text-sm mt-5 flex justify-between items-center">
              Name
              {isNameFilled ? (
                <BiCheckCircle className="text-green-600 ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2" />
              )}
            </p>

            <p className="text-gray text-sm mt-5 flex justify-between items-center">
              Email Address
              {isEmailFilled ? (
                <BiCheckCircle className="text-green-600 ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2" />
              )}
            </p>

            <p className="text-gray text-sm mt-5 flex justify-between items-center">
              Phone
              {isPhoneFilled ? (
                <BiCheckCircle className="text-green-600 ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2" />
              )}
            </p>

            <p className="text-gray text-sm mt-5 flex justify-between items-center">
              Role
              {isRoleFilled ? (
                <BiCheckCircle className="text-green-600 ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2" />
              )}
            </p>

            <p className="text-gray text-sm mt-5 flex justify-between items-center">
              Content
              {isDescriptionFilled ? (
                <BiCheckCircle className="text-green-600 ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2" />
              )}
            </p>
          </div>

          <div className="p-5 pb-3">
            <h1 className="text-md font-bold">Publish Artist</h1>

            <p className="text-gray text-sm mt-5 flex justify-between items-center">
              Review and publish
              {isAllInformationFilled ? (
                <BiCheckCircle className="text-green-600 ml-2" />
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

export default CreateArtistSidebar;
