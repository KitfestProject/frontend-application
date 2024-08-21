import { useContext } from "react";
import { EventContext } from "@/context/EventDetailsContext";

const UserProfileSection = () => {
  const { artistDetails } = useContext(EventContext);

  if (!artistDetails) {
    // Handle the case where artistDetails is not available
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full mb-10">
      <div className="flex items-center gap-5">
        <div className="w-[180px] h-[180px] bg-gray-300 dark:bg-darkGray rounded-lg shadow-md">
          <img
            src={artistDetails.image}
            alt="Artist Profile"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        <div className="">
          <h2 className="text-2xl font-sans font-bold text-gray-800 mb-2 dark:text-gray-100 text-primary tracking-tighter dark:text-gray">
            {artistDetails.name}
          </h2>
          <p className="text-xs text-gray-600 dark:text-gray-300 text-gray leading-tight uppercase">
            {artistDetails.category}
          </p>
        </div>
      </div>

      {/* Artist Description */}
      <div className="mt-5 md:pr-5">
        {artistDetails.artist_content?.map((content, index) => (
          <div key={index}>
            <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
              {content.title}
            </h5>

            <div
              dangerouslySetInnerHTML={{ __html: content.content }}
              className="text-gray-600 dark:text-gray-300 leading-tight mb-5"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfileSection;
