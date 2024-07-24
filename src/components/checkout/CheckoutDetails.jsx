import { useContext, useEffect, useState } from "react";
import { CheckoutFormContext } from "@/context/CheckoutFormContext";
import {
  FaCouch,
  FaRegClock,
  FaLocationDot,
  FaArrowLeftLong,
  FaCalendarCheck,
} from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import useAuthStore from "@/store/UseAuthStore";
import { useSeatStore } from "@/store/UseSeatStore";
import useTimeAgo from "@/hooks/useTimeAgo";
import { EventContext } from "@/context/EventDetailsContext";
import {
  CustomInput,
  NewSeatTicketComponent,
  NewTicketComponent,
} from "@/components";

const CheckoutDetails = () => {
  const { selectedSeats } = useSeatStore();
  const { eventDetails, eventDetailsLoading } = useContext(EventContext);
  const { checkoutFormData, setCheckoutFormData } =
    useContext(CheckoutFormContext);
  const { formatFullDate } = useTimeAgo();
  const [tickets, setTickets] = useState([]);
  const [seats, setSeats] = useState([]);
  const { token } = useAuthStore();
  let ticketNumber = 0;
  const location = useLocation();

  const [currentSelectedSeats, setCurrentSelectedSeats] = useState([]);
  const eventData = location.state.eventData;

  useEffect(() => {
    setTickets(checkoutFormData.tickets || []);
    setSeats(checkoutFormData.seats || []);
    setCurrentSelectedSeats(selectedSeats);
  }, [checkoutFormData]);

  const handleNavigateBack = () => {
    window.history.back();
  };

  const seatIds = currentSelectedSeats
    .map((seat) => (seat.seatNumber === null ? "Empty" : seat.seatNumber))
    .join(", ");

  return (
    <>
      {/* Purchase Ticket */}
      <div className="flex items-center gap-3 mb-5">
        {/* Arrow Back */}
        <div
          onClick={handleNavigateBack}
          className="flex items-center gap-2 cursor-pointer"
        >
          <FaArrowLeftLong className="text-gray dark:text-gray" />
        </div>

        {/* Title */}
        <h1 className="text-md font-semibold text-gray dark:text-gray">
          Purchase Ticket
        </h1>

        {/* Countdown */}
        <div className="flex items-center gap-2 bg-slate-200 dark:bg-gray px-4 py-1 rounded-full">
          <FaRegClock className="text-gray dark:text-white" />
          <p className="text-gray text-xs dark:text-white">Time Left</p>

          <div className="flex items-center gap-2">
            <p className="text-gray text-xs dark:text-white">01</p>
            <p className="text-gray text-xs dark:text-white">:</p>
            <p className="text-gray text-xs dark:text-white">30</p>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="mb-5">
        {eventDetailsLoading ? (
          <div className="text-darkGray dark:text-slate-100">Loading...</div>
        ) : (
          <h1 className="text-2xl font-bold text-dark dark:text-slate-100 mb-5">
            {eventDetails?.title}
          </h1>
        )}

        <div className="flex flex-col md:flex-row gap-5 md:gap-10 md:items-center pb-5 border-b border-slate-200 dark:border-gray/50">
          <div className="flex gap-5 items-center">
            <div className="p-5 rounded-md bg-[#fcf4f3]">
              <FaCalendarCheck className="text-2xl text-primary" />
            </div>
            <div className="flex flex-col">
              <p className="text-md text-gray-500 text-dark dark:text-slate-100 mt-2 font-bold">
                Date and time
              </p>
              {eventDetailsLoading ? (
                <div className="text-darkGray dark:text-slate-100">
                  Loading...
                </div>
              ) : (
                <p className="text-sm text-gray dark:text-gray">
                  {formatFullDate(eventDetails?.event_date?.start_date)}
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-5 items-center">
            <div className="p-5 rounded-md bg-[#fcf4f3]">
              <FaLocationDot className="text-2xl text-primary" />
            </div>
            <div className="flex flex-col">
              <p className="text-md text-gray-500 text-dark dark:text-slate-100 mt-2 font-bold">
                Place
              </p>
              {eventDetailsLoading ? (
                <div className="text-darkGray dark:text-slate-100">
                  Loading...
                </div>
              ) : (
                <p className="text-sm text-gray dark:text-gray">
                  {eventDetails.address}
                </p>
              )}
            </div>
          </div>

          {selectedSeats.length > 0 && (
            <div className="flex gap-5 items-center">
              <div className="p-5 rounded-md bg-[#fcf4f3]">
                <FaCouch className="text-2xl text-primary" />
              </div>
              <div className="flex flex-col">
                <p className="text-md text-gray-500 text-dark dark:text-slate-100 mt-2 font-bold">
                  Seat(s) <span className="text-primary">{seatIds}</span>
                </p>
                <Link
                  to={`/events-ticket/nairobi-cinema-seating-plan/${eventDetails._id}`}
                  className="text-sm text-primary dark:text-gray"
                >
                  View Seat
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact Information */}
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-dark dark:text-white">
            Contact Information
          </h1>

          {/* Login Button */}
          {token === null && (
            <Link
              to="/auth-login"
              className="mt-5 text-primary py-3 rounded-md"
            >
              Login
            </Link>
          )}
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 md:mb-10">
          {/* First Name Input */}
          <CustomInput
            name="firstName"
            value={checkoutFormData.firstName}
            type="text"
            data={checkoutFormData}
            setData={setCheckoutFormData}
            title="First Name"
            info="Provide your first name"
          />

          {/* Last Name Input */}
          <CustomInput
            name="lastName"
            value={checkoutFormData.lastName}
            type="text"
            data={checkoutFormData}
            setData={setCheckoutFormData}
            title="Last Name"
            info="Provide your last name"
          />

          {/* Email Input */}
          <CustomInput
            name="email"
            value={checkoutFormData.email}
            type="email"
            data={checkoutFormData}
            setData={setCheckoutFormData}
            title="Email"
            info="Provide your email"
          />

          {/* Phone Number Input */}
          <CustomInput
            name="phoneNumber"
            value={checkoutFormData.phoneNumber}
            type="tel"
            data={checkoutFormData}
            setData={setCheckoutFormData}
            title="Phone Number"
            info="Provide your phone number"
          />

          <div className="">
            {/* Receive Update on upcoming events */}
            <div className="flex items-center space-x-2 checkbox-container mb-2">
              <label htmlFor="updateMe" className="dark:text-white text-sm">
                <input
                  type="checkbox"
                  id="updateMe"
                  name="updateMe"
                  value={checkoutFormData.updateMe}
                  onChange={(e) =>
                    setCheckoutFormData({
                      ...checkoutFormData,
                      updateMe: e.target.checked,
                    })
                  }
                  className="w-5 h-5 "
                />
                <span className="checkmark"></span> Keep me updated on this
                event
              </label>
            </div>

            {/* Agree to terms and conditions */}
            <div className="flex items-center space-x-2 checkbox-container">
              <label htmlFor="agree" className="dark:text-white text-sm">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  value={checkoutFormData.agree}
                  onChange={(e) =>
                    setCheckoutFormData({
                      ...checkoutFormData,
                      agree: e.target.checked,
                    })
                  }
                  className="w-5 h-5 "
                />
                <span className="checkmark"></span> I agree with the{" "}
                <Link to="/" className="text-primary">
                  Terms of Use
                </Link>{" "}
                &{" "}
                <Link to="/" className="text-primary">
                  Privacy Policy
                </Link>
              </label>
            </div>
          </div>
        </form>

        {/* Ticket Section */}
        <div className="w-full">
          {/* Show seats selected */}

          <h1 className="text-xl font-bold text-dark dark:text-white">
            Selected Seats Ticket(s)
          </h1>

          {
            // Loop through the seats
            seats?.map((seat, index) => {
              ticketNumber++;

              return (
                <NewSeatTicketComponent
                  key={index}
                  seatIndex={index}
                  seat={seat}
                />
              );
            })
          }

          {/* Show ticket selected */}
          {!selectedSeats && selectedSeats.length > 0 && (
            <>
              <h1 className="text-xl font-bold text-dark dark:text-white">
                Ticket(s)
              </h1>

              {
                // Loop through the tickets
                tickets?.map((ticket, index) => {
                  ticketNumber++;

                  return (
                    <NewTicketComponent
                      key={index}
                      ticketIndex={index}
                      ticket={ticket}
                    />
                  );
                })
              }
            </>
          )}
        </div>

        {/* Debugging output */}
        {/* <div className="text-xs text-gray mt-5">
          <pre>{JSON.stringify(checkoutFormData, null, 2)}</pre>
        </div> */}
      </div>
    </>
  );
};

export default CheckoutDetails;
