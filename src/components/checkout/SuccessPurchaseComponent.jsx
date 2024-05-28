import React from "react";
import {
  FaPhone,
  FaTicket,
  FaRegClock,
  FaCreditCard,
  FaLocationDot,
  FaCalendarCheck,
} from "react-icons/fa6";

const SuccessPurchaseComponent = () => {
  let number = 0;
  const ticketData = [
    {
      id: 1,
      ticketNumber: "1",
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phoneNumber: "0712345678",
      code: "MRCE-123456789",
    },
    {
      id: 2,
      ticketNumber: "2",
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@gmail.com",
      phoneNumber: "0712345678",
      code: "MRCE-123456789",
    },
    {
      id: 3,
      ticketNumber: "3",
      firstName: "Emmaculate",
      lastName: "Karanja",
      email: "emmaculatekaranjs@gmail.com",
      phoneNumber: "0725121243",
      code: "MRCE-23456542",
    },
  ];
  return (
    <div className="bg-white dark:bg-darkGray">
      <div className="container mx-auto rounded-md py-20">
        {/* Event Details */}
        <div className="pb-10 border-b border-slate-200 dark:border-slate-700 mb-10">
          <h1 className="text-2xl font-bold text-dark dark:text-slate-100">
            The kenya theater award
          </h1>

          <div className="mt-5 flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <div className="p-8 rounded-md bg-[#fcf4f3]">
                <FaCalendarCheck className="text-2xl text-primary" />
              </div>
              <div className="flex flex-col">
                <p className="text-lg text-gray-500 text-dark dark:text-slate-100 mt-2 font-bold">
                  DATE AND TIME
                </p>
                <p className="text-sm text-gray dark:text-gray-400">
                  Saturday, February 20 <br /> 7:00 PM
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="p-8 rounded-md bg-[#fcf4f3]">
                <FaRegClock className="text-2xl text-primary" />
              </div>
              <div className="flex flex-col">
                <p className="text-lg text-gray-500 text-dark dark:text-slate-100 mt-2 font-bold">
                  DURATION
                </p>
                <p className="text-sm text-gray dark:text-gray-400">2 hours</p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="p-8 rounded-md bg-[#fcf4f3]">
                <FaLocationDot className="text-2xl text-primary" />
              </div>
              <div className="flex flex-col">
                <p className="text-lg text-gray-500 text-dark dark:text-slate-100 mt-2 font-bold">
                  PLACE
                </p>
                <p className="text-sm text-gray dark:text-gray-400">
                  Nairobi Cinema
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="p-8 rounded-md bg-[#fcf4f3]">
                <FaTicket className="text-2xl text-primary" />
              </div>
              <div className="flex flex-col">
                <p className="text-lg text-gray-500 text-dark dark:text-slate-100 mt-2 font-bold">
                  1 Ticket
                </p>
                <p className="text-sm text-gray dark:text-gray-400">
                  Email eTicket
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Purchase Details */}
        <div className="pb-10 border-b border-slate-200 dark:border-slate-700 mb-10">
          <h1 className="text-xl font-bold text-dark dark:text-slate-100 flex gap-3 items-center">
            <FaCreditCard className="text-primary" /> Purchase Information
          </h1>

          <div className="mt-5 flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <div className="flex flex-col">
                <p className="text-lg text-gray-500 text-dark dark:text-slate-100 mt-2">
                  Payment Reference
                </p>
                <p className="text-sm text-gray dark:text-gray-400">
                  1234567890
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="flex flex-col">
                <p className="text-lg text-gray-500 text-dark dark:text-slate-100 mt-2">
                  Purchase Date
                </p>
                <p className="text-sm text-gray dark:text-gray-400">
                  20th February 2021
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="flex flex-col">
                <p className="text-lg text-gray-500 text-dark dark:text-slate-100 mt-2">
                  Seat Number
                </p>
                <p className="text-sm text-gray dark:text-gray-400">
                  A1, A2, A3
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="flex flex-col">
                <p className="text-lg text-gray-500 text-dark dark:text-slate-100 mt-2">
                  Total Price
                </p>
                <p className="text-sm text-gray dark:text-gray-400">Ksh 1000</p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="flex flex-col">
                <p className="text-lg text-gray-500 text-dark dark:text-slate-100 mt-2">
                  Payment Method
                </p>
                <p className="text-sm text-gray dark:text-gray-400">Mpesa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="pb-10 border-b border-slate-200 dark:border-slate-700 mb-10">
          <h1 className="text-xl font-bold text-dark dark:text-slate-100 flex items-center gap-2">
            <FaPhone className="text-primary" />
            Contact Information
          </h1>

          <div className="mt-5 flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <div className="flex flex-col">
                <p className="text-lg text-gray-500 text-dark dark:text-slate-100 mt-2">
                  First Name
                </p>
                <p className="text-sm text-gray dark:text-gray-400">John</p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="flex flex-col">
                <p className="text-lg text-gray-500 text-dark dark:text-slate-100 mt-2">
                  Last Name
                </p>
                <p className="text-sm text-gray dark:text-gray-400">Doe</p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="flex flex-col">
                <p className="text-lg text-gray-500 text-dark dark:text-slate-100 mt-2">
                  Email
                </p>
                <p className="text-sm text-gray dark:text-gray-400">
                  testemail@gmail.com
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="flex flex-col">
                <p className="text-lg text-gray-500 text-dark dark:text-slate-100 mt-2">
                  Phone Number
                </p>
                <p className="text-sm text-gray dark:text-gray-400">
                  0712345678
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ticket Details */}
        <div className="pb-10 mb-10">
          <h1 className="text-xl font-bold text-dark dark:text-slate-100 flex items-center gap-3">
            <FaTicket className="text-primary" /> Ticket ({ticketData.length})
            Total: Ksh. 3000
          </h1>

          {
            // Tickets
            ticketData.map((ticket) => {
              number++;

              return (
                <div
                  key={ticket.id}
                  className="mt-5 flex justify-between items-center bg-[#FBFAFA] dark:bg-darkGray dark:border-slate-700 p-5 rounded-md border border-slate-200"
                >
                  {/* Ticket Number */}
                  <div className="flex justify-center items-center">
                    <div className="flex justify-center">
                      <h1 className="text-lg text-gray-500 text-dark dark:text-slate-100 mt-2">
                        {number}.
                      </h1>
                    </div>
                  </div>

                  <div className="flex gap-5 items-center">
                    <div className="flex flex-col">
                      <p className="text-md text-gray-500 text-dark dark:text-slate-100 mt-2">
                        First Name
                      </p>
                      <p className="text-sm text-gray dark:text-gray-400">
                        {ticket.firstName}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-center">
                    <div className="flex flex-col">
                      <p className="text-md text-gray-500 text-dark dark:text-slate-100 mt-2">
                        Last Name
                      </p>
                      <p className="text-sm text-gray dark:text-gray-400">
                        {ticket.lastName}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-center">
                    <div className="flex flex-col">
                      <p className="text-md text-gray-500 text-dark dark:text-slate-100 mt-2">
                        Email
                      </p>
                      <p className="text-sm text-gray dark:text-gray-400">
                        {ticket.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-center">
                    <div className="flex flex-col">
                      <p className="text-md text-gray-500 text-dark dark:text-slate-100 mt-2">
                        Phone Number
                      </p>
                      <p className="text-sm text-gray dark:text-gray-400">
                        {ticket.phoneNumber}
                      </p>
                    </div>
                  </div>

                  {/* Ticket Code */}
                  <div className="bg-white dark:bg-darkGray rounded p-5">
                    <div className="flex gap-5 items-center">
                      <div className="">
                        <p className="text-md text-gray-500 text-gray dark:text-slate-100 mt-2">
                          Code
                        </p>
                        <p className="text-sm text-primary dark:text-gray-400">
                          {ticket.code}
                        </p>
                      </div>

                      {/* QR-code */}
                      <div className="">
                        <img
                          className="w-20 h-20"
                          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=123456789"
                          alt="QR Code"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Ticket Actions */}
                  <div className="flex gap-5 items-center">
                    <div className="flex flex-col">
                      <button className="bg-primary text-white px-5 py-2 rounded-md text-sm">
                        View Ticket
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default SuccessPurchaseComponent;
