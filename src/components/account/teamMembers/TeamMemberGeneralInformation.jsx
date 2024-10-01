import { useContext } from "react";
import { CustomInput, MessageInput } from "@/components";
import { BiCheckCircle, BiError, BiInfoCircle } from "react-icons/bi";
import { CreateTeamMemberContext } from "@/context/CreateTeamMemberContext";
import { FaMessage } from "react-icons/fa6";
import useScreenSize from "@/hooks/useScreenSize";

const TeamMemberGeneralInformation = () => {
  const { teamMemberFormData, setTeamMemberFormData } = useContext(
    CreateTeamMemberContext
  );
  const isMobile = useScreenSize();

  const handleInputChange = (index, newValue) => {
    const updatedContent = teamMemberFormData.socialDetails.map((item, i) =>
      i === index ? { ...item, socialLink: newValue } : item
    );
    setTeamMemberFormData((prevData) => ({
      ...prevData,
      socialDetails: updatedContent,
    }));
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
    <div className="mt-5 border-b border-slate-200 dark:border-gray pb-5">
      <h1 className="text-xl font-bold flex gap-2 items-center mb-5">
        <BiInfoCircle className="text-2xl text-primary dark:text-gray" />
        User Information
        {renderMobileError()}
      </h1>

      {/* Name Input */}
      <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* First Name */}
        <CustomInput
          name="firstName"
          value={teamMemberFormData.firstName}
          type="text"
          data={teamMemberFormData}
          setData={setTeamMemberFormData}
          title="First Name"
          info="Enter the team member name"
        />

        {/* Last Name */}
        <CustomInput
          name="lastName"
          value={teamMemberFormData.lastName}
          type="text"
          data={teamMemberFormData}
          setData={setTeamMemberFormData}
          title="Last Name"
          info="Enter the team member last name"
        />
      </div>

      {/* Email */}
      <div className="mb-5">
        <CustomInput
          name="email"
          value={teamMemberFormData.email}
          type="text"
          data={teamMemberFormData}
          setData={setTeamMemberFormData}
          title="Email Address"
          info="Enter the new member's email address"
        />
      </div>

      {/* Phone Number */}
      <div className="mb-5">
        <CustomInput
          name="phone"
          value={teamMemberFormData.phone}
          type="text"
          data={teamMemberFormData}
          setData={setTeamMemberFormData}
          title="Phone Number"
          info="Enter the new member's phone number"
        />
      </div>

      {/* Position */}
      <div className="mb-5">
        <CustomInput
          name="position"
          value={teamMemberFormData.position}
          type="text"
          data={teamMemberFormData}
          setData={setTeamMemberFormData}
          title="Position"
          info="Enter the team member position"
        />
      </div>

      {/* Team Name */}
      <div className="mb-5">
        <CustomInput
          name="team"
          value={teamMemberFormData.team}
          type="text"
          data={teamMemberFormData}
          setData={setTeamMemberFormData}
          title="Team Name"
          info="Enter the team member team name"
        />
      </div>

      <div className="mt-10">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold flex gap-2 items-center mb-5">
            <FaMessage className="text-xl text-primary dark:text-gray" />
            Social Links
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {teamMemberFormData.socials.map((section, index) => (
            <div key={index} className="mb-5">
              <label
                htmlFor={`artist-section-${index}`}
                className="text-dark dark:text-slate-100 font-bold text-sm"
              >
                {section.socialType}
              </label>
              <small className="block text-gray mb-1">
                Enter the social link of the team member
              </small>
              <MessageInput
                id={`artist-section-${index}`}
                name={`section-${index}`}
                value={section.link}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberGeneralInformation;
