import { useContext } from "react";
import { FaMessage } from "react-icons/fa6";
import { MessageInput } from "@/components";
import { BsShift } from "react-icons/bs";
import { IoIosReturnLeft } from "react-icons/io";
import { CreateArtistContext } from "@/context/CreateArtistFormContext";

const MoreArtistInformation = () => {
  const { artistFormData, setArtistFormData } = useContext(CreateArtistContext);

  const handleInputChange = (index, newValue) => {
    const updatedContent = artistFormData.artistContent.map((item, i) =>
      i === index ? { ...item, content: newValue } : item
    );
    setArtistFormData((prevData) => ({
      ...prevData,
      artistContent: updatedContent,
    }));
  };

  return (
    <>
      <div className="mt-5 pb-5">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold flex gap-2 items-center mb-5">
            <FaMessage className="text-xl text-primary dark:text-gray" /> Artist
            Content
          </h1>

          {/* Keyboard shortcuts for creating space */}
          <div className="flex gap-2">
            <span className="flex items-center gap-1 text-primary dark:text-gray text-sm">
              Use Shift <BsShift className="text-lg mx-2" />
              + Enter <IoIosReturnLeft className="text-lg mx-2" /> to create a
              paragraph
            </span>
          </div>
        </div>

        {artistFormData?.artistContent.map((section, index) => (
          <div key={index} className="mb-5">
            <label
              htmlFor={`artist-section-${index}`}
              className="text-dark dark:text-slate-100 font-bold text-sm"
            >
              {section.title}
            </label>
            <small className="block text-gray mb-1">
              Enter the content of the artist to be displayed on the artist
              page.
            </small>
            <MessageInput
              id={`artist-section-${index}`}
              name={`section-${index}`}
              value={section.content}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MoreArtistInformation;
