import { AccountSidebarMenu, SingleEventSkeleton } from "@/components";
import { events } from "@/components/data/StaticData";
import useTruncate from "@/hooks/useTruncate";
import { motion } from "framer-motion";
import useTimeAgo from "@/hooks/useTimeAgo";
import { Link, useNavigate } from "react-router-dom";
import {
  BiCalendar,
  BiInfoCircle,
  BiSolidCheckCircle,
  BiTrash,
} from "react-icons/bi";
import { FaLocationDot, FaTriangleExclamation } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { UserAccountContext } from "@/context/UserAccountContext";
import useServerSideQueries from "@/hooks/useServerSideQueries.mjs";

const MyWishlistComponent = () => {
  const {
    userWishlistData,
    userDataLoading,
    setUserWishlistData,
    setUserDataLoading,
  } = useContext(UserAccountContext);
  const { truncateDescription } = useTruncate();
  const { formatDate } = useTimeAgo();
  const navigate = useNavigate();
  const { deleteWishlistItem } = useServerSideQueries();

  const handleWishlistEvent = async (eventId) => {
    const response = await deleteWishlistItem(eventId);
    const { success, message } = response;

    if (!success) {
      return toast.error(message, {
        icon: <BiInfoCircle className="text-white text-2xl" />,
        style: {
          borderRadius: "10px",
          background: "#ff0000",
          color: "#fff",
        },
      });
    }

    toast.success(message, {
      icon: <BiSolidCheckCircle className="text-white text-2xl" />,
      style: {
        borderRadius: "10px",
        background: "#00c20b",
        color: "#fff",
      },
    });

    // Refetch wishlist
    fetchWishlist();
  };

  const fetchWishlist = async () => {
    setUserDataLoading(true);
    const response = await getUserWishlist();
    const { success, message, data } = response;

    if (!success) {
      setUserDataLoading(false);
      console.log(message);
      return;
    }

    setUserWishlistData(data);
    setUserDataLoading(false);
  };

  function generateEventsSkeleton() {
    const events = [];
    for (let i = 0; i < 4; i++) {
      events.push(<SingleEventSkeleton classes={"md:ml-5"} key={i} />);
    }
    return events;
  }

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
            {userDataLoading ? (
              generateEventsSkeleton()
            ) : (
              <>
                {userWishlistData &&
                  userWishlistData.length > 0 &&
                  userWishlistData.map((wishlist, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-darkGray shadow-md rounded-lg dark:border-[1px] dark:border-gray/30 transition ease-in-out delay-150 md:ml-5 relative"
                    >
                      <div onClick={() => navigate(`/events/${wishlist.id}`)}>
                        <div className="overflow-hidden">
                          <motion.div
                            className="h-[250px]"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            layout
                          >
                            <img
                              src={wishlist.image}
                              alt={wishlist.title}
                              className="w-full h-full object-cover rounded-t-lg mb-3"
                            />
                          </motion.div>
                        </div>
                      </div>
                      <div className="p-5">
                        <Link
                          to={{
                            pathname: `/events/${wishlist.id}`,
                            state: { wishlist },
                          }}
                        >
                          <h3 className="text-xl font-bold text-primary dark:text-slate-200">
                            {wishlist.title}
                          </h3>
                        </Link>
                        <p className="text-sm dark:text-slate-100 flex items-center gap-2">
                          <BiCalendar /> {formatDate(wishlist.start_date)}
                        </p>
                        <p className="text-sm dark:text-slate-100 mb-3 font-bold flex items-center gap-2">
                          <FaLocationDot /> Venue: {wishlist.address}
                        </p>
                        <p className="text-sm text-gray dark:text-slate-100">
                          {truncateDescription(wishlist.description, 90)}
                        </p>
                      </div>

                      {/* Remove From wishlist */}
                      <button
                        onClick={() => handleWishlistEvent(wishlist.id)}
                        className="absolute top-3 right-3 p-2 bg-secondary rounded-full"
                      >
                        <BiTrash className="text-white text-xl" />
                      </button>
                    </div>
                  ))}
              </>
            )}
          </div>

          {/* No Events */}
          {userWishlistData && userWishlistData.length === 0 && (
            <div className="text-center w-full mt-[20%] grid place-content-center">
              <div className="flex flex-col justify-center items-center w-full">
                <FaTriangleExclamation className="text-primary text-4xl" />
                <h3 className="text-xl font-bold tracking-tighter dark:text-slate-100">
                  No Events in your Wishlist
                </h3>
              </div>

              <p className="text-sm text-gray dark:text-gray">
                You have no events in your wishlist.
              </p>

              <Link
                to="/events"
                className="text-primary dark:text-primary-dark mt-5 border rounded-md border-primary py-2"
              >
                Explore Events
              </Link>
            </div>
          )}
        </div>
      </div>

      <Toaster />
    </section>
  );
};

export default MyWishlistComponent;
