import React, { useContext } from "react";
import {
  FaPhone,
  FaTicket,
  FaRegClock,
  FaCreditCard,
  FaLocationDot,
  FaArrowLeftLong,
  FaCalendarCheck,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CustomInput } from "../../components";
import { CheckoutFormContext } from "../../context/CheckoutFormContext";

const CheckoutComponent = () => {
  const { checkoutFormData, setCheckoutFormData } =
    useContext(CheckoutFormContext);
  return (
    <div className="bg-white dark:bg-darkGray">
      <div className="container mx-auto rounded-md py-10">
        <div className="flex gap-10">
          {/* Checkout Details */}
          <div className="w-[75%]">
            {/* Purchase Ticket */}
            <div className="flex items-center gap-3 mb-5">
              {/* Arrow Back */}
              <div className="flex items-center gap-2">
                <FaArrowLeftLong className="text-gray dark:text-white" />
              </div>

              {/* Title */}
              <h1 className="text-md font-bold text-gray dark:text-white">
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
              <h1 className="text-2xl font-bold text-dark dark:text-slate-100 mb-5">
                The kenya theater award
              </h1>

              <div className="flex gap-10 items-center pb-5 border-b border-slate-200 dark:border-slate-700">
                <div className="flex gap-5 items-center">
                  <div className="p-5 rounded-md bg-[#fcf4f3]">
                    <FaCalendarCheck className="text-2xl text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-md text-gray-500 text-dark dark:text-slate-100 mt-2 font-bold">
                      DATE AND TIME
                    </p>
                    <p className="text-sm text-gray dark:text-gray-400">
                      Saturday, February 20 | 7:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-center">
                  <div className="p-5 rounded-md bg-[#fcf4f3]">
                    <FaLocationDot className="text-2xl text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-md text-gray-500 text-dark dark:text-slate-100 mt-2 font-bold">
                      PLACE
                    </p>
                    <p className="text-sm text-gray dark:text-gray-400">
                      Nairobi Cinema
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-center">
                  <div className="p-5 rounded-md bg-[#fcf4f3]">
                    <FaTicket className="text-2xl text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-md text-gray-500 text-dark dark:text-slate-100 mt-2 font-bold">
                      SEAT N35
                    </p>
                    <Link
                      to=""
                      className="text-sm text-primary dark:text-gray-400"
                    >
                      View Seat
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-dark dark:text-white">
                  Contact Information
                </h1>

                {/* Login Button */}
                <button className="mt-5 text-primary py-3 rounded-md">
                  Login
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                {/* First Name Input */}
                <CustomInput
                  name="firstName"
                  value={checkoutFormData.firstName}
                  type="text"
                  data={checkoutFormData}
                  setData={setCheckoutFormData}
                  title="First Name"
                  info="Enter your first name"
                />

                {/* Last Name Input */}
                <CustomInput
                  name="lastName"
                  value={checkoutFormData.lastName}
                  type="text"
                  data={checkoutFormData}
                  setData={setCheckoutFormData}
                  title="Last Name"
                  info="Enter your last name"
                />

                {/* Email Input */}
                <CustomInput
                  name="email"
                  value={checkoutFormData.email}
                  type="email"
                  data={checkoutFormData}
                  setData={setCheckoutFormData}
                  title="Email"
                  info="Enter your email"
                />

                {/* Phone Number Input */}
                <CustomInput
                  name="phoneNumber"
                  value={checkoutFormData.phoneNumber}
                  type="tel"
                  data={checkoutFormData}
                  setData={setCheckoutFormData}
                  title="Phone Number"
                  info="Enter your phone number"
                />

                <div className="">
                  {/* Receive Update on upcoming events */}
                  <div className="flex items-center space-x-2 checkbox-container mb-2">
                    <label htmlFor="update" className="dark:text-white text-sm">
                      <input
                        type="checkbox"
                        id="update"
                        name="update"
                        className="w-5 h-5 "
                      />
                      <span className="checkmark"></span> Keep me updated on
                      this event
                    </label>
                  </div>

                  {/* Agree to terms and conditions */}
                  <div className="flex items-center space-x-2 checkbox-container">
                    <label htmlFor="terms" className="dark:text-white text-sm">
                      <input
                        type="checkbox"
                        id="terms"
                        name="terms"
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
              </div>

              {/* Ticket Section */}
              <div className="w-full">
                <h1 className="text-xl font-bold text-dark dark:text-white">
                  Ticket
                </h1>
              </div>
            </div>
          </div>

          {/* Checkout summary */}
          <div className="w-[25%] mt-[50px]">
            <div className="bg-[#FBFAFA] dark:bg-gray p-5 rounded-md py-10 border border-slate-200 dark:border-gray sticky top-[120px]">
              <h1 className="text-md text-dark dark:text-white font-bold">
                Checkout Summary
              </h1>

              {/* Ticket Price */}
              <div className="flex items-center justify-between mt-5 border-b border-[#E3E0DF] pb-3 dark:border-[#3a3a3a]">
                <p className="text-sm text-gray dark:text-white">1X</p>
                <p className="text-sm text-dark font-bold dark:text-white">
                  Ksh 500
                </p>
              </div>

              {/* Service Fee */}
              <div className="flex items-center justify-between mt-5">
                <p className="text-sm text-gray dark:text-white">Subtotal</p>
                <p className="text-sm text-dark font-bold dark:text-white">
                  Ksh 50
                </p>
              </div>

              {/* Discount */}
              <div className="flex items-center justify-between mt-3 border-b border-[#E3E0DF] pb-3 dark:border-[#3a3a3a]">
                <p className="text-sm text-gray dark:text-white">
                  Discount{" "}
                  <span className="bg-secondary px-2 py-1 text-white text-xs rounded-full">
                    10%
                  </span>
                </p>
                <p className="text-sm text-dark font-bold dark:text-white">
                  Ksh 50
                </p>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between mt-5 border-b border-[#E3E0DF] pb-3 dark:border-[#3a3a3a]">
                <p className="text-sm text-gray dark:text-white font-bold">
                  Total
                </p>
                <p className="text-sm text-dark font-bold dark:text-white font-bold">
                  Ksh 550
                </p>
              </div>

              {/* Payment Method */}
              <div className="mt-5">
                <h1 className="text-md text-dark dark:text-white font-bold">
                  Payment Method
                </h1>

                <div className="flex items-center gap-5 mt-5">
                  <div className="p-3 rounded-md bg-[#fcf4f3]">
                    <FaCreditCard className="text-xl text-primary" />
                  </div>
                  <p className="text-sm text-gray dark:text-white">
                    Credit Card
                  </p>
                </div>
              </div>

              {/* Payment Button */}
              <button className="w-full mt-5 bg-primary text-white py-3 rounded-md">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
