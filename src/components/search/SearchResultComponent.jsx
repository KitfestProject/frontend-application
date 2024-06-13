import { EventSearchComponent, ArtistSearchComponent } from "@/components";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "@/context/SearchContext";

const SearchResultComponent = () => {
  const { getArtists, getEvents } = useContext(SearchContext);
  const [searchArtists, setSearchArtists] = useState([]);
  const [searchEvents, setSearchEvents] = useState([]);

  useEffect(() => {
    const artists = getArtists();
    setSearchArtists(artists);

    const events = getEvents();
    setSearchEvents(events);
  }, []);

  return (
    <div className="flex flex-col gap-5">
      {/* Artist search result title */}
      <div className="flex items-center">
        <div className="w-1/2">
          <h5 className="text-gray dark:text-slate-200 text-md font-semibold flex items-center gap-2">
            Artists{" "}
            <span className="border-[0.9px] h-6 w-6 rounded-full bg-gray/20 text-xs flex justify-center items-center">
              {searchArtists.length}
            </span>
          </h5>
        </div>
        <div className="w-1/2 flex justify-end">
          <button className="text-primary font-semibold dark:text-slate-100">
            See all
          </button>
        </div>
      </div>

      <div className="flex flex-col border-b border-gray/20 pb-3">
        {
          // Loop through the searchArtists array and display the ArtistSearchComponent
          searchArtists.map((artist, index) => (
            <ArtistSearchComponent
              key={index}
              name={artist.name}
              image={artist.image}
              title={artist.role}
              isLastItem={index === searchArtists.length - 1}
            />
          ))
        }
      </div>

      {/* Event search result title */}
      <div className="flex items-center gap-5">
        <div className="w-1/2">
          <h5 className="text-gray dark:text-slate-200 text-md font-semibold flex items-center gap-2">
            Events{" "}
            <span className="border-[0.9px] h-6 w-6 rounded-full bg-gray/20 text-xs flex justify-center items-center">
              2
            </span>
          </h5>
        </div>
        <div className="w-1/2 flex justify-end">
          <button className="text-primary font-semibold dark:text-slate-100">
            See all
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        {searchEvents.map((event, index) => (
          <EventSearchComponent
            key={index}
            slug={event.slug}
            title={event.title}
            image={event.image}
            date={event.startDate}
            isLastItem={index === searchEvents.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResultComponent;
