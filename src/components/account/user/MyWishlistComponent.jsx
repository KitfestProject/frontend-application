import { AccountSidebarMenu, SingleEventSkeleton } from "@/components";
import { events } from "@/components/data/StaticData";
import useTruncate from "@/hooks/useTruncate";
import { motion } from "framer-motion";
import useTimeAgo from "@/hooks/useTimeAgo";
import { Link, useNavigate } from "react-router-dom";
import { BiCalendar, BiTrash } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const MyWishlistComponent = () => {
  const { truncateDescription } = useTruncate();
  const { formatDate } = useTimeAgo();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleWishlistEvent = (eventId) => {
    if (isWhitelisted) {
      toast.success("Removed from wishlist");
    }

    if (!isWhitelisted) {
      toast.success("Added to wishlist");
    }
  };

  function generateEventsSkeleton() {
    const events = [];
    for (let i = 0; i < 4; i++) {
      events.push(<SingleEventSkeleton classes={"md:ml-5"} key={i} />);
    }
    return events;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container mx-auto">
      <div className="py-5 md:py-10 flex gap-10">
        <div className="w-[25%] hidden md:block">
          <AccountSidebarMenu />
        </div>

        <div className="w-full md:w-[75%]">
          <div className="p-5">
            <div className="border-b border-gray/30 pb-3 mb-3">
              <h5 className="font-bold text-xl dark:text-slate-100">
                My Wishlist Events
              </h5>
            </div>
          </div>

          {/* Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {!loading &&
              events.slice(0, 4).map((event, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-darkGray shadow-md rounded-lg dark:border-[1px] dark:border-gray/30 transition ease-in-out delay-150 md:ml-5 relative"
                >
                  <div onClick={() => navigate(`/events/${event.slug}`)}>
                    <div className="overflow-hidden">
                      <motion.div
                        className="h-[250px]"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        layout
                      >
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover rounded-t-lg mb-3"
                        />
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-5">
                    <Link
                      to={{
                        pathname: `/events/${event.slug}`,
                        state: { event },
                      }}
                    >
                      <h3 className="text-xl font-bold text-primary dark:text-slate-200">
                        {event.title}
                      </h3>
                    </Link>
                    <p className="text-sm dark:text-slate-100 flex items-center gap-2">
                      <BiCalendar /> {formatDate(event.startDate)}
                    </p>
                    <p className="text-sm dark:text-slate-100 mb-3 font-bold flex items-center gap-2">
                      <FaLocationDot /> Venue: {event.location}
                    </p>
                    <p className="text-sm text-gray dark:text-slate-100">
                      {truncateDescription(event.description, 90)}
                    </p>
                  </div>

                  {/* Remove From wishlist */}
                  <button
                    onClick={() => handleWishlistEvent(event.id)}
                    className="absolute top-3 right-3 p-2 bg-secondary rounded-full"
                  >
                    <BiTrash className="text-white text-xl" />
                  </button>
                </div>
              ))}

            {loading && generateEventsSkeleton()}
          </div>
        </div>
      </div>

      <Toaster />
    </section>
  );
};

export default MyWishlistComponent;
