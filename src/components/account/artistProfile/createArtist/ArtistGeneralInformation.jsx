import Select from "react-dropdown-select";
import { BiCheckCircle, BiError, BiInfoCircle } from "react-icons/bi";
import { CustomInput, MessageInput, TagsInput } from "@/components";
import { CreateArtistContext } from "@/context/CreateArtistFormContext";
import { useEffect, useState, useContext } from "react";
import useScreenSize from "@/hooks/useScreenSize";

const ArtistGeneralInformation = () => {
  const { artistFormData, setArtistFormData, isAllInformationFilled } =
    useContext(CreateArtistContext);
  const isMobile = useScreenSize();

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
        General Information
        {renderMobileError()}
      </h1>

      {/* Artist Name */}
      <div className="mb-5">
        <CustomInput
          name="name"
          value={artistFormData.name}
          type="text"
          data={artistFormData}
          setData={setArtistFormData}
          title="Name"
          info="Enter the name of the artist"
        />
      </div>

      {/* Artist Email */}
      <div className="mb-5">
        <CustomInput
          name="email"
          value={artistFormData.email}
          type="email"
          data={artistFormData}
          setData={setArtistFormData}
          title="Email Address"
          info="Enter the email address of the artist"
        />
      </div>

      {/* Artist Phone */}
      <div className="mb-5">
        <CustomInput
          name="phone"
          value={artistFormData.phone}
          type="text"
          data={artistFormData}
          setData={setArtistFormData}
          title="Phone Number"
          info="Enter the phone number of the artist"
        />
      </div>

      {/* Artist Role */}
      <div className="mb-5">
        <CustomInput
          name="role"
          value={artistFormData.role}
          type="text"
          data={artistFormData}
          setData={setArtistFormData}
          title="Role"
          info="Enter the role of the artist"
        />
      </div>
    </div>
  );
};

export default ArtistGeneralInformation;
