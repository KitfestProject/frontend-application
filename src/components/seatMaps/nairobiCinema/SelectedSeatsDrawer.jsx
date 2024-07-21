import React from "react";
import { RightDrawer, PrimaryButton } from "@/components";
import { BiX } from "react-icons/bi";
import { useSeatStore } from "@/store/UseSeatStore";
import { BiInfoCircle } from "react-icons/bi";
import useThemeStore from "@/store/UseThemeStore";
import { SiteLogoComponent } from "@/components";
import useScreenSize from "@/hooks/useScreenSize";
import useCurrencyConverter from "@/hooks/useCurrencyConverter";

const SelectedSeatsDrawer = ({ isOpen, onClose }) => {
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );
  const { selectedSeats, clearSeats } = useSeatStore();
  const { formatCurrency } = useCurrencyConverter();
  const isMobile = useScreenSize();

  const handleClearSelectedSeats = () => {
    clearSeats();
    onClose();
  };

  return (
    <>
      <RightDrawer
        isOpen={isOpen}
        onClose={onClose}
        drawerWidth={isMobile ? "100%" : "30%"}
      >
        <div className="flex flex-col gap-4 bg-white dark:bg-darkGray min-h-screen">
          <div className="px-5 mt-5 border-b pb-5 border-gray/30">
            <SiteLogoComponent theme={isDarkMode} />
          </div>

          <div className="h-[calc(100vh-100px)] overflow-y-scroll pb-20">
            {/* Event Details */}
            <div className="border-b border-gray/30 pb-4 mb-10 p-5">
              {/* Event Banner Image */}
              <div className="w-full h-[200px] bg-gray-200 rounded-lg mb-4">
                <img
                  src="/images/Event-1.png"
                  alt="Event Banner"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Event Title */}
              <h1 className="text-2xl font-bold mb-2 dark:text-white">
                Event Title
              </h1>
              <div className="flex justify-between items-center">
                {/* Event Location */}
                <span className="text-sm text-gray-500 dark:text-gray block mb-1">
                  Maendeleo House, Loita Street, Nairobi
                </span>
                {/* Theater Name */}
                <span className="text-sm text-gray-500 dark:text-gray block">
                  Nairobi Cinema
                </span>
              </div>
            </div>

            {/* Selected Ticket Details */}
            <div className="border-b border-gray/30">
              <div className="flex justify-between items-center px-5">
                <h2 className="text-xl font-semibold mb-2 dark:text-white">
                  Selected Seats
                </h2>

                {/* Clear all link */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleClearSelectedSeats}
                    className="text-primary dark:text-secondary font-semibold"
                  >
                    Clear all
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2 pb-5 px-5">
                {selectedSeats.length === 0 && (
                  <div className="text-center flex flex-col justify-center items-center text-gray dark:text-gray my-10 border border-dashed rounded-md p-5 py-16">
                    <BiInfoCircle className="text-4xl text-gray dark:text-gray" />
                    No seats selected
                  </div>
                )}

                {selectedSeats?.map((seat, index) => {
                  const isLastSeat = index !== selectedSeats.length - 1;

                  return (
                    <UserSelectedSeatComponent
                      key={seat.seatId}
                      seat={seat}
                      isLastSeat={isLastSeat}
                    />
                  );
                })}
              </div>
            </div>

            {/* Total & Checkout Button */}
            <div className="flex justify-between items-center p-5">
              {/* Total Tickets */}
              <div>
                <span className="text-lg font-bold dark:text-white">
                  {selectedSeats.length} Ticket
                  {selectedSeats.length !== 1 && "s"}
                </span>
              </div>

              {/* Total Amount */}
              <div className="flex flex-col items-start">
                <div className="flex gap-2">
                  <span className="text-lg font-bold dark:text-white">
                    Total:
                  </span>
                  <span className="text-lg font-bold text-primary dark:text-green-500">
                    {formatCurrency(
                      selectedSeats.reduce(
                        (total, seat) => total + (seat.price ?? 0),
                        0
                      )
                    )}
                  </span>
                </div>
                <small className="text-gray">VAT inclusive</small>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="px-5 fixed w-full bg-white bottom-0 p-3 border border-t dark:border-gray/30 dark:bg-darkGray">
              <PrimaryButton
                title="Reserve Seats"
                classes="dark:border dark:border-gray/30 w-full dark:bg-primary"
              />
            </div>
          </div>
        </div>
      </RightDrawer>
    </>
  );
};

const UserSelectedSeatComponent = ({ seat, isLastSeat }) => {
  const { removeSelectedSeat } = useSeatStore();
  const handleRemoveSingleSelectedSeats = (seatId) =>
    removeSelectedSeat(seatId);
  const { formatCurrency } = useCurrencyConverter();

  return (
    <div
      className={`flex justify-between items-center p-3 text-gray-700 dark:text-gray-300 ${
        isLastSeat && "border-b border-gray/30"
      }`}
    >
      <div>
        <div className="flex gap-3 items-center">
          <span className="font-bold text-2xl tracking-tighter dark:text-slate-200">
            {seat.seatNumber}
          </span>
          <span className="text-md font-semibold">{seat.position}</span>
          <span className="text-md font-semibold text-primary dark:text-green-500">
            {formatCurrency(seat.price) ?? formatCurrency(0)}
          </span>
        </div>
        <p className="text-md text-gray dark:text-gray">{seat.description}</p>
      </div>
      <button
        onClick={() => handleRemoveSingleSelectedSeats(seat.seatId)}
        className="w-8 h-8 flex justify-center items-center rounded-full bg-gray/30"
      >
        <BiX className="text-2xl text-white" />
      </button>
    </div>
  );
};

export default SelectedSeatsDrawer;
