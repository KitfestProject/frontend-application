import { BiCheckCircle, BiInfoCircle } from "react-icons/bi";
import useTimeAgo from "@/hooks/useTimeAgo";
import { CreateTeamMemberContext } from "@/context/CreateTeamMemberContext";
import { useContext } from "react";

const CreateTeamMemberSidebar = ({ title }) => {
  const { formatFullDate } = useTimeAgo();
  const {
    isNameFilled,
    isTeamFilled,
    isImageFilled,
    isEmailFilled,
    isGeneralInfoFilled,
    isPositionsFilled,
    isPhoneNumberFilled,
    isSocialDetailsFilled,
  } = useContext(CreateTeamMemberContext);

  return (
    <div className="w-[25%] hidden md:block">
      <div className="sticky top-[120px] dark:border dark:border-gray dark:p-3 dark:rounded-md">
        <h1 className="text-2xl font-bold text-dark dark:text-slate-100 mb-5">
          {title}
        </h1>

        <div className="bg-[#F5F5F5] dark:bg-darkGray rounded-md pb-3">
          <div className="p-5 pb-3 border-b border-slate-300 dark:border-gray">
            <p className="text-gray text-sm">Last Updated</p>
            <p className="text-primary font-bold text-sm dark:text-secondary">
              {formatFullDate(new Date())}
            </p>

            <p className="text-gray mt-5 text-sm">Team Member Status</p>

            <p className="text-yellow-600 font-bold text-sm dark:text-yellow-600">
              Draft
            </p>
          </div>

          <div className="p-5 pb-3 border-b mb-3 border-slate-300 dark:border-gray">
            <h1 className="text-md font-bold">Team Member Information</h1>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Profile Image
              {isImageFilled ? (
                <BiCheckCircle className="text-green-600 ml-2 text-xl" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2 text-xl" />
              )}
            </p>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Name
              {isNameFilled ? (
                <BiCheckCircle className="text-green-600 ml-2 text-xl" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2 text-xl" />
              )}
            </p>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Email
              {isEmailFilled ? (
                <BiCheckCircle className="text-green-600 ml-2 text-xl" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2 text-xl" />
              )}
            </p>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Phone
              {isPhoneNumberFilled ? (
                <BiCheckCircle className="text-green-600 ml-2 text-xl" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2 text-xl" />
              )}
            </p>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Team
              {isTeamFilled ? (
                <BiCheckCircle className="text-green-600 ml-2 text-xl" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2 text-xl" />
              )}
            </p>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Position
              {isPositionsFilled ? (
                <BiCheckCircle className="text-green-600 ml-2 text-xl" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2 text-xl" />
              )}
            </p>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Social Links
              {isSocialDetailsFilled ? (
                <BiCheckCircle className="text-green-600 ml-2 text-xl" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2 text-xl" />
              )}
            </p>
          </div>

          <div className="p-5 pb-3">
            <h1 className="text-md font-bold">Publish Team member</h1>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Review and publish
              {isGeneralInfoFilled ? (
                <BiCheckCircle className="text-green-600 ml-2 text-xl" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2 text-xl" />
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTeamMemberSidebar;
