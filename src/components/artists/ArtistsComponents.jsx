import ArtistProfile from "./ArtistProfile";
import { artists } from "@/components/data/StaticData";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import useServerSideQueries from "@/hooks/useServerSideQueries";

const ArtistsComponents = () => {
  const { getArtists } = useServerSideQueries();
  const [loading, setLoading] = useState(true);
  const [artistData, setArtistData] = useState(null);

  useEffect(() => {
    const fetchArtists = async () => {
      setLoading(true);
      const { success, message, data } = await getArtists();

      if (!success) {
        console.log(message);
        setLoading(false);
        return;
      }

      setArtistData(data);
      console.log(message);
      setLoading(false);
    };

    fetchArtists();
  }, []);

  function generateUpcomingEventSkeleton() {
    const events = [];
    for (let i = 0; i < 10; i++) {
      events.push(<ArtistProfileSkeleton key={i} />);
    }
    return events;
  }
  return (
    <div className="container mx-auto">
      <div className="py-20">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-slate-100 dark:text-gray-100 tracking-tight">
          Artists
        </h1>

        <p className="w-full mt-2 text-gray-600 dark:text-gray-300 md:w-1/2 text-lg text-gray">
          Meet the actors, directors, playwrights, and creatives who bring
          stories to life on stage. Connect with your favorite artists and
          follow their journey in the dynamic Kenyan theatre scene.
        </p>

        {/* Search Artist Area */}
        <div className="flex items-center">
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-slate-100 dark:text-gray-100 tracking-tight mt-10">
              Explore Artists
            </h1>
          </div>

          <div className="w-1/2 hidden md:block">
            <div className="mt-10 flex items-center gap-2 bg-[#f1f1f1] dark:bg-darkGray dark:border dark:border-slate-700 p-2 rounded-md">
              <BiSearch className="text-gray-400 text-3xl text-primary dark:text-gray-300" />
              <input
                type="text"
                placeholder="Search Artist"
                className="w-full md:px-4 py-2 bg-gray-100 dark:bg-darkGray dark:text-slate-100 text-gray-800 rounded-lg focus:outline-none"
              />

              <button className="bg-primary text-white px-6 py-2 text-sm rounded-md ml-2">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mt-10">
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-5">
            {!loading &&
              artistData?.map((artist, index) => (
                <ArtistProfile key={index} artist={artist} />
              ))}

            {loading && generateUpcomingEventSkeleton()}
          </div>
        </div>
      </div>
    </div>
  );
};

const ArtistProfileSkeleton = () => {
  return (
    <div className="bg-white dark:bg-dark rounded-lg shadow-lg overflow-hidden dark:border dark:border-slate-700 transition ease-in-out delay-150 animate-pulse">
      <div className="h-[330px] flex justify-center items-center bg-gray">
        <div className="">
          <img
            src={"/images/kitft-logo-dark.png"}
            alt="Artist Profile"
            className="h-full rounded-lg w-[150px]"
          />
        </div>
      </div>

      <div className="p-3">
        <h3 className="bg-gray w-[100px] h-3 rounded-full mb-2"></h3>
        <p className="bg-gray h-3 w-[150px] rounded-full mb-2"></p>
      </div>
    </div>
  );
};

export default ArtistsComponents;
