import ArtistProfile from "./ArtistProfile";
import { artists } from "@/components/data/StaticData";
import { BiSearch } from "react-icons/bi";

const ArtistsComponents = () => {
  return (
    <div className="container mx-auto">
      <div className="py-20">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-slate-100 dark:text-gray-100 tracking-tight">
          Artists
        </h1>

        <p className="mt-2 text-gray-600 dark:text-gray-300 w-1/2 text-lg text-gray">
          Meet the actors, directors, playwrights, and creatives who bring
          stories to life on stage. Connect with your favorite artists and
          follow their journey in the dynamic Kenyan theatre scene.
        </p>

        {/* Search Artist Area */}
        <div className="flex items-center">
          <div className="w-1/2">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-slate-100 dark:text-gray-100 tracking-tight mt-10">
              Explore Artists
            </h1>
          </div>

          <div className="w-1/2">
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
          <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-5">
            {artists?.map((artist) => (
              <ArtistProfile key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistsComponents;
