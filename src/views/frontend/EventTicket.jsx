import React, { useEffect, useMemo, useState } from "react";
import { FaCouch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import ThemeChanger from "../../components/ThemeChanger";
import Navigation from "../../components/utils/Navigation";
import DynamicHelmet from "../../components/DynamicHelmet";
import CouchComponent from "../../components/events/CouchComponent";
import { BiArrowBack } from "react-icons/bi";
import useThemeStore from "../../store/UseThemeStore";
import { useGetSeatIds } from "../../store/UseSeatStore";

const EventTicket = () => {
  const location = useLocation();
  const eventData = location.state.eventData;
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [selectedSeatId, setSelectedSeatId] = useState(null);
  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );
  const getSeatIds = useGetSeatIds();

  const selectedSeats = useMemo(() => {
    return getSeatIds.map((seatId) => "SN " + seatId).join(", ");
  }, [getSeatIds]);

  useEffect(() => {
    setSelectedSeat(selectedSeats);
  }, [getSeatIds]);

  const generateSeats = (seatNumber) => {
    const seats = [];

    // Generate 500 empty seats
    for (let i = 1; i <= seatNumber; i++) {
      seats.push({ id: i, status: "available" });
    }

    // Update specific seats as needed
    seats[1].status = "selected";
    seats[19].status = "booked";
    seats[50].status = "booked";
    seats[10].status = "selected";
    seats[22].status = "booked";

    return seats;
  };

  const seats = generateSeats(eventData.availableSeats);

  return (
    <div className="dark:bg-dark min-h-screen w-full relative">
      <DynamicHelmet
        title={`KITFT - Purchase your event ticket with ease.`}
        description={`Purchase your event ticket with ease. ${eventData.title} is an immersive and enlightening theatrical experience, where diverse performances and educational opportunities come together to inspire and connect artists and audiences from around the world, as well as enjoy the magical Kenya through tourism and cultural experiences.`}
        seoImage={eventData.image}
        seoTitle={eventData.title}
        seoDescription={eventData.description}
      />

      {/* Navigation Section */}
      {/* <Navigation /> */}

      <section className="container mx-auto bg-white dark:bg-darkGray pb-20 pt-10">
        <div className="">
          {/* Logo */}
          <Link to="/" className="cursor-pointer">
            <img
              src={
                isDarkMode
                  ? "/images/kitft-logo-dark.png"
                  : "/images/kitft-logo-light.png"
              }
              alt="logo"
              className="w-[150px] h-[50px] object-contain"
            />
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-bold text-primary dark:text-darkGray text-center mb-10 uppercase bg-[#fcf4f3] px-20 py-5 rounded-md">
            Stage
          </h1>
        </div>

        <div className="">
          <h3 className="text-dark dark:text-slate-100 font-bold flex gap-2 justify-start items-center">
            Capacity:{" "}
            <span className="text-primary dark:text-secondary dark:bg-[#ccc] dark:px-4">
              {seats.length - 3} / {seats.length}
            </span>
          </h3>

          <p className="text-gray dark:text-[#ccc] font-bold text-lg">
            Select your preferred seat to book
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-3">
          {/* Seat Map */}
          <div className="">
            <div className="flex gap-5 mt-5">
              <div className="flex items-center gap-2">
                <div className="couch-icon-map empty">
                  <FaCouch className="text-2xl" />
                </div>
                <span className="text-dark dark:text-slate-100 font-bold">
                  Available
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="couch-icon-map selected">
                  <FaCouch className="text-2xl" />
                </div>
                <span className="text-dark dark:text-slate-100 font-bold">
                  Selected
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="couch-icon-map booked">
                  <FaCouch className="text-2xl" />
                </div>
                <span className="text-dark dark:text-slate-100 font-bold">
                  Booked
                </span>
              </div>
            </div>
          </div>

          <div className="">
            <h3 className="text-dark dark:text-slate-100 font-bold flex gap-2 justify-start items-center">
              Seat Selected:{" "}
              <div className="bg-[#ccc] px-4">
                <span className="text-primary dark:text-secondary">
                  {selectedSeat.length > 0 ? selectedSeat : "--"}
                </span>
              </div>
            </h3>
          </div>
        </div>

        <div className="seat-grid border-2 border-[#ccc] rounded-lg p-5 relative">
          {seats.map((seat) => (
            <CouchComponent
              key={seat.id}
              seatId={seat.id}
              status={seat.status}
              selectedSeatId={selectedSeatId}
              setSelectedSeatId={setSelectedSeatId}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}

      {/* Theme Changer */}
      <ThemeChanger />

      {/* Arrow Back */}
      <button
        className="absolute top-12 left-5 bg-primary hover:bg-[#fcf4f3] hover:text-dark dark:bg-gray text-white dark:text-slate-200 p-2 rounded-full shadow-md"
        onClick={() => window.history.back()}
      >
        <BiArrowBack />
      </button>
    </div>
  );
};

export default EventTicket;
