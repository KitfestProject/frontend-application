import { useContext, useState } from "react";
import { BiCalendar, BiHeart, BiMap, BiSolidHeart } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import { UserAccountContext } from "@/context/UserAccountContext";
import useTimeAgo from "@/hooks/useTimeAgo";
import useCurrencyConverter from "@/hooks/useCurrencyConverter";

const TicketCard = () => {
  const { clientTicketData } = useContext(UserAccountContext);
  const [isWhitelisted, setIsWhitelisted] = useState(false);
  const { formatFullDate, formatDateTime } = useTimeAgo();
  const { formatCurrency } = useCurrencyConverter();

  const handleWishlistEvent = () => {};

  return (
    <>
      {clientTicketData?.map((ticket, index) => {
        return (
          <div
            key={index}
            className=" flex flex-col md:flex-row gap-3 w-full md:w-[80%] bg-white dark:bg-darkGray dark:text-slate-100 rounded-md shadow-md dark:border dark:border-gray/30"
          >
            <div className="w-full md:w-[50%] md:h-[200px] bg-primary rounded-md relative">
              <img
                src={ticket.cover_image}
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
                  {formatDateTime(ticket.purchased_at)}
                </h1>

                <p className="text-sm font-bold text-dark dark:text-slate-300">
                  <span className="text-primary">
                    {ticket.quantity} Tickets
                  </span>{" "}
                  Total {formatCurrency(ticket.total_price)}
                </p>
              </div>

              <div className="px-5 py-3">
                <h1 className="text-md font-bold text-dark dark:text-slate-300 mb-2">
                  {ticket.event}
                </h1>

                <p className="text-sm text-gray dark:text-slate-300 flex gap-2 items-center mb-2">
                  <BiCalendar className="text-gray inline text-lg" />
                  {formatFullDate(ticket.event_start_date)}
                </p>

                <p className="text-sm text-gray dark:text-slate-300 flex gap-2 items-center">
                  <BiMap className="text-gray inline text-lg" />
                  Event Location: {ticket.location}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      <Toaster />
    </>
  );
};

export default TicketCard;
