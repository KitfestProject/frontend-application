import { EventSearchComponent, ArtistSearchComponent } from "@/components";
import { useNavigate } from "react-router-dom";

const SearchResultComponent = ({ searchResult }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5">
      {searchResult?.artists.length > 0 && (
        <>
          {/* Artist search result title */}
          <div className="flex items-center mt-3 px-5">
            <div className="w-1/2">
              <h5 className="text-gray dark:text-slate-200 text-md font-semibold flex items-center gap-2">
                Artists{" "}
                <span className="border-[0.9px] h-6 w-6 rounded-full bg-gray/20 text-xs flex justify-center items-center">
                  {searchResult?.artists.length}
                </span>
              </h5>
            </div>
            <div className="w-1/2 flex justify-end">
              <button onClick={() => navigate("/artists")} className="text-primary font-semibold dark:text-slate-100">
                See all
              </button>
            </div>
          </div>

          <div className="flex flex-col border-b border-gray/20 pb-3 mb-5">
            {
              // Loop through the searchArtists array and display the ArtistSearchComponent
              searchResult?.artists.map((artist, index) => (
                <ArtistSearchComponent
                  key={index}
                  artist={artist}
                  name={artist.name}
                  image={artist.image}
                  title={artist.category}
                  isLastItem={index === searchResult?.artists.length - 1}
                />
              ))
            }
          </div>
        </>
      )}

      {searchResult?.events.length > 0 && (
        <>
          {/* Event search result title */}
          <div className="flex items-center gap-5 mt-3 px-5">
            <div className="w-1/2">
              <h5 className="text-gray dark:text-slate-200 text-md font-semibold flex items-center gap-2">
                Events{" "}
                <span className="border-[0.9px] h-6 w-6 rounded-full bg-gray/20 text-xs flex justify-center items-center">
                  {searchResult?.events.length}
                </span>
              </h5>
            </div>
            <div className="w-1/2 flex justify-end">
              <button onClick={() => navigate("/events")} className="text-primary font-semibold dark:text-slate-100">
                See all
              </button>
            </div>
          </div>

          <div className="flex flex-col mb-5">
            {searchResult?.events.map((event, index) => (
              <EventSearchComponent
                key={index}
                event={event}
                slug={event.slug}
                title={event.title}
                image={event.image}
                date={event.date}
                isLastItem={index === searchResult?.events.length - 1}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResultComponent;
