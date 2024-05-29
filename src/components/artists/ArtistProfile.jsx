import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ArtistProfile = ({ artist }) => {
  return (
    <div className="bg-white dark:bg-darkGray rounded-lg shadow-lg overflow-hidden dark:border dark:border-slate-700">
      <div className="bg-gray-200 dark:bg-gray-800 h-40 sm:h-[230px] w-full">
        <img
          src={artist?.image}
          alt="Artist Profile"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="p-3">
        <h1 className="text-xl font-bold text-primary dark:text-slate-100 mb-1 text-center">
          {artist.name}
        </h1>
        <p className="text-gray text-sm uppercase tracking-tight leading-tight text-center">
          {artist.role}
        </p>
        <div className="mt-2 hidden">
          <a
            href="#"
            className="text-primary text-sm bg-[#fff1ee] hover:bg-primary hover:text-slate-100 dark:bg-[#fff1ee]/50 py-2 rounded-sm dark:text-dark w-full flex items-center justify-center gap-2"
          >
            View Profile <FaArrowRightLong />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;
