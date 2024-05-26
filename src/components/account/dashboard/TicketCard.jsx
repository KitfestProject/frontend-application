import React, { useState } from "react";
import { BiCalendar, BiHeart, BiMap, BiSolidHeart } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";

const TicketCard = () => {
  const [isWhitelisted, setIsWhitelisted] = useState(false);

  const handleWishlistEvent = () => {
    setIsWhitelisted(!isWhitelisted);

    if (isWhitelisted) {
      toast.success("Removed from wishlist");
    }

    if (!isWhitelisted) {
      toast.success("Added to wishlist");
    }
  };

  return (
    <>
      <div className=" flex flex-col md:flex-row gap-3 w-[80%] bg-white dark:bg-darkGray dark:text-slate-100 rounded-md shadow-md dark:border dark:border-slate-700">
        <div className="w-[50%] md:h-[200px] bg-primary rounded-md relative">
          <img
            src="/images/Event-3.png"
            alt="event"
            className="w-full h-full object-cover rounded-md"
          />
          <button
            onClick={handleWishlistEvent}
            className="absolute top-3 right-3 p-2 bg-secondary rounded-full"
          >
            {isWhitelisted ? (
              <BiSolidHeart className="text-white text-xl" />
            ) : (
              <BiHeart className="text-white text-xl" />
            )}
          </button>
        </div>

        <div className="flex-1">
          <div className="p-5 border-b border-slate-300 dark:border-slate-800 md:mr-3">
            <h1 className="text-lg font-bold text-primary dark:text-slate-300">
              February 20 | 08:00 PM
            </h1>

            <p className="text-sm font-bold text-dark dark:text-slate-300">
              <span className="text-primary">2 Tickets</span> Total Ksh 3,000
            </p>
          </div>

          <div className="px-5 py-3">
            <h1 className="text-md font-bold text-dark dark:text-slate-300 mb-2">
              Tech Conference
            </h1>

            <p className="text-sm text-gray dark:text-slate-300 flex gap-2 items-center mb-2">
              <BiCalendar className="text-gray inline text-lg" />
              Saturday, February 20 | 12:00 PM
            </p>

            <p className="text-sm text-gray dark:text-slate-300 flex gap-2 items-center">
              <BiMap className="text-gray inline text-lg" />
              Event Location: Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>

      <Toaster />
    </>
  );
};

export default TicketCard;
