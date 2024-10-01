import { LeftDrawer, SiteLogoComponent } from "@/components";
import useScreenSize from "@/hooks/useScreenSize";
import useThemeStore from "@/store/UseThemeStore";

const SeatMapEventDetailsDrawer = ({ isOpen, onClose, event }) => {
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );
  const isMobile = useScreenSize();

  return (
    <>
      <LeftDrawer
        isOpen={isOpen}
        onClose={onClose}
        drawerWidth={isMobile ? "100%" : "30%"}
      >
        <div className="flex flex-col gap-4 bg-white dark:bg-darkGray min-h-screen">
          <div className="px-5 mt-5 border-b pb-5 border-gray/30">
            <SiteLogoComponent theme={isDarkMode} />
          </div>

          <div className="h-[calc(100vh-100px)] overflow-y-scroll pb-[100px] scroll-smooth">
            {/* Section Details */}
            <div className="left-0 w-full h-full ">
              <div className="relative">
                <img
                  src={event?.cover_image}
                  alt="Event Cover"
                  className="w-full h-[250px] object-cover"
                />
                {/* Image Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                <div className="absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 rounded">
                  {event?.is_paid === "free" ? (
                    <span className="text-green-600">Seat Map Plan</span>
                  ) : (
                    <span className="text-blue-600">Ticket Plan</span>
                  )}
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{event?.title}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: event?.description,
                  }}
                  className="text-sm text-gray dark:text-gray mb-4"
                />
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">Event Dates</h3>
                  <p className="text-gray dark:text-gray">
                    Start:{" "}
                    {new Date(
                      event?.event_date.start_date
                    ).toLocaleDateString()}
                  </p>
                  <p className="text-gray dark:text-gray">
                    End:{" "}
                    {new Date(event?.event_date.end_date).toLocaleDateString()}
                  </p>
                </div>
                <div className="mb-5 pb-5 border-b border-gray/30 dark:border-gray/30">
                  <h3 className="text-lg font-semibold">Event Time</h3>
                  <p className="text-gray dark:text-gray">
                    {event?.event_start_time} - {event?.event_end_time}
                  </p>
                </div>

                <div className="mb-5 pb-5 border-b border-gray/30 dark:border-gray/30">
                  <h3 className="text-lg font-semibold">Venue</h3>
                  <p className="text-gray dark:text-gray">
                    {event?.venue.name}
                  </p>
                  <p className="text-gray dark:text-gray">
                    {event?.venue.location}
                  </p>

                  {/* Venue Image */}
                  <div className="relative w-full rounded-md my-3">
                    <img
                      src={event?.venue.image}
                      alt="Venue"
                      className="w-full h-[250px] object-cover rounded-md mt-2"
                    />

                    {/* Image Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                  </div>

                  <div className="mt-2">
                    <h4 className="text-md font-semibold">Amenities</h4>
                    <ul className="list-disc pl-5">
                      {event?.venue.amenities.map((amenity) => (
                        <li
                          key={amenity._id}
                          className={
                            amenity.value
                              ? "text-green-600"
                              : "text-gray dark:text-gray"
                          }
                        >
                          {amenity.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">Organizer</h3>
                  <p className="text-gray dark:text-gray">
                    {event?.organizer.name}
                  </p>
                  <p className="text-gray dark:text-gray">
                    {event?.organizer.email}
                  </p>
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">Tags</h3>
                  <div className="flex flex-wrap">
                    {event?.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray text-slate-100 px-2 py-1 rounded mr-2 mb-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LeftDrawer>
    </>
  );
};

export default SeatMapEventDetailsDrawer;
