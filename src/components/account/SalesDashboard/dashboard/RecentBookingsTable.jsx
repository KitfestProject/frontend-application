import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";
import axiosClient from "@/axiosClient";
import ProfileAvatar from "@/assets/profile-avatar.svg";

const RecentBookingsTable = () => {
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);
  const baseUrl = `${import.meta.env.VITE_KITFT_API_PRODUCTION}`;
  const navigate = useNavigate();

  const recentBookings = [
    {
      ticketCode: "#5678380",
      buyerName: "John Doe",
      buyerEmail: "johndoe@gmail.com",
      purchaseDate: "2021-10-12",
      purchaseTime: "8:00 AM",
      ticketSold: 2,
      totalPrice: "Ksh 200",
    },
    {
      ticketCode: "#5670001",
      buyerName: "Daniel Makenzi",
      buyerEmail: "daniel@danielmakenzi.com",
      purchaseDate: "2021-10-12",
      purchaseTime: "9:00 AM",
      ticketSold: 1,
      totalPrice: "Ksh 1,000",
    },
    {
      ticketCode: "#5671132",
      buyerName: "Samuel Kamau",
      buyerEmail: "samuelkamau@gmail.com",
      purchaseDate: "2021-10-12",
      purchaseTime: "12:00 AM",
      ticketSold: 3,
      totalPrice: "Ksh 500",
    },
    {
      ticketCode: "#5671177",
      buyerName: "Eunice Makenzi",
      buyerEmail: "eunicemakenzi@gmail.com",
      purchaseDate: "2021-10-12",
      purchaseTime: "11:00 AM",
      ticketSold: 1,
      totalPrice: "Ksh 600",
    },
    {
      ticketCode: "#5671199",
      buyerName: "Michel Sam",
      buyerEmail: "michelsam@gmail.com",
      purchaseDate: "2021-10-12",
      purchaseTime: "10:00 AM",
      ticketSold: 1,
      totalPrice: "Ksh 400",
    },
  ];

  return (
    <div className="w-full mt-10">
      <h1 className="text-xl font-semibold text-dark dark:text-slate-100 mb-3">
        Recent Bookings
      </h1>

      <div className="overflow-x-auto dark:bg-darkGray shadow-md rounded-md dark:border dark:border-slate-700">
        <table
          ref={tableRef}
          id="attendee_table"
          className="min-w-full bg-white dark:bg-darkGray"
        >
          <thead className="rounded-md">
            <tr className="bg-primary dark:bg-gray text-white">
              <th className="px-4 py-3 font-semibold text-start">Code</th>
              <th className="px-4 py-3 font-semibold text-start">
                Buyer Details
              </th>
              <th className="px-4 py-3 font-semibold text-start">
                Purchase Date
              </th>
              <th className="px-4 py-3 font-semibold text-start">Time</th>
              <th className="px-4 py-3 font-semibold text-start">
                Ticket Sold
              </th>
              <th className="px-4 py-3 font-semibold text-start">
                Total Price
              </th>
            </tr>
          </thead>

          <tbody className="text-gray">
            {recentBookings.map((booking, index) => (
              <tr
                key={index}
                className={`dark:border-b ${
                  index % 2 === 0 ? "odd:bg-primary/5 dark:odd:bg-gray/20" : ""
                } dark:text-slate-200 dark:border-gray/30`}
              >
                {/* Ticket Code */}
                <td className="px-4 py-3">
                  <p className="text-sm font-semibold text-secondary dark:text-slate-100">
                    {booking.ticketCode}
                  </p>
                </td>

                {/* Buyer Information */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={ProfileAvatar}
                      alt="user"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-dark dark:text-slate-100 leading-tight">
                        {booking.buyerName}
                      </p>
                      <p className="text-sm text-gray-400">
                        {booking.buyerEmail}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Purchase Date */}
                <td className="px-4 py-3">
                  <p className="dark:text-slate-100">{booking.purchaseDate}</p>
                </td>

                {/* Purchase Time */}
                <td className="px-4 py-3">
                  <p className="dark:text-slate-100">{booking.purchaseTime}</p>
                </td>

                {/* Total Ticket Purchase */}
                <td className="px-4 py-3 text-center">
                  <p className="dark:text-slate-100">2</p>
                </td>

                {/* Total Price */}
                <td className="px-4 py-3">
                  <p className="dark:text-slate-100">{booking.totalPrice}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentBookingsTable;
