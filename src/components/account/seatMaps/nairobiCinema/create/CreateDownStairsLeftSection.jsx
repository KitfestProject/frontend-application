import {
  Loader,
  NewTheaterSeatComponent as Seat,
  SeatMapButton,
  CreateTheaterSeatsDrawer,
  ModalTransparent,
  PrimaryLightButton,
  PrimaryButton,
} from "@/components";
import { BiEditAlt, BiInfoCircle, BiPlus, BiSave, BiX } from "react-icons/bi";
import { useCallback, useContext, useState } from "react";
import { CreateNairobiCinemaContext } from "@/context/NairobiCinemaFormContext";

const calculateTotalDiscount = (tickets) => {
  return tickets.reduce((acc, ticket) => {
    const ticketDiscount = parseFloat(ticket.discount) || 0;
    const ticketAmount = parseFloat(ticket.amount) || 0;
    const discountAmount = ticketAmount * (ticketDiscount / 100);
    const validDiscountAmount = Math.min(ticketAmount, discountAmount);
    return acc + validDiscountAmount;
  }, 0);
};

const CreateDownStairsLeftSection = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { nairobiCinemaFormData } = useContext(CreateNairobiCinemaContext);
  const sectionData = nairobiCinemaFormData.downStairsLeftSection;
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [seatInfo, setSeatInfo] = useState({});
  const [sectionInfo, setSectionInfo] = useState(null);

  const toggleShowModal = () => setShowModal((prev) => !prev);

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  const handleSeatSelected = (seat) => {
    setSeatInfo(seat);
    toggleShowModal();
  };

  const totalDiscount = calculateTotalDiscount(
    sectionData.rows.flatMap((row) => row.seats)
  );

  return (
    <div className="flex flex-col justify-center items-center relative">
      {sectionData?._id ? (
        <>
          {/* Edit seat Button */}
          <div className="">
            <SeatMapButton
              handleClick={toggleDrawerOpen}
              icon={<BiEditAlt className="text-3xl" />}
              classes="bg-primary text-white"
            />
          </div>
        </>
      ) : (
        <>
          {/* Add Seats Button */}
          <div className="">
            <SeatMapButton
              handleClick={toggleDrawerOpen}
              icon={<BiPlus className="text-3xl" />}
              classes="bg-primary text-white"
            />
          </div>
        </>
      )}

      <div className="flex flex-col gap-2 border-gray/50 rounded-lg p-5 relative items-end">
        {sectionData.rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            {row.seats.map((seat, seatIndex) => {
              const seatData = {
                id: seat._id,
                seatId: seat.id,
                seatNumber: seat.SN,
                row: row.rowLabel,
                column: seat.column,
                price: seat.price,
                discount: seat.discount,
                status: seat.status,
                position: sectionData.location,
                description: sectionData.description,
              };
              return (
                <Seat
                  key={seatIndex}
                  isGrayedOut={seat.SN === null}
                  seatData={seatData}
                  onClick={() => handleSeatSelected(seatData)}
                />
              );
            })}
            <span className="dark:text-gray text-sm">{row.rowLabel}</span>
          </div>
        ))}
      </div>

      {/* Handle Drawer Open */}
      <CreateTheaterSeatsDrawer
        isOpen={drawerOpen}
        onClose={toggleDrawerOpen}
        sectionKey="downStairsLeftSection"
      />

      {/* Validation Modal */}
      {showModal && (
        <ModalTransparent
          title="Create Seats"
          onClose={toggleShowModal}
          icon={<BiInfoCircle className="text-white text-2xl" />}
        >
          <div className="bg-white dark:bg-darkGray w-[600px] rounded-md dark:border dark:border-gray/30 p-5">
            {/* Modal Title */}
            <h5 className="text-2xl text-center font-bold tracking-tighter mb-5 border-b border-primary dark:border-gray pb-3">
              Edit Seat No.{" "}
              <span className="text-primary dark:text-primary">
                ({seatInfo?.seatNumber})
              </span>{" "}
              Details
            </h5>

            <div className="flex flex-col gap-3 items-center justify-center">
              <div className="w-full">
                <div className="mt-5 w-full">
                  {/* Price Input */}
                  <div className="mb-5">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-semibold text-primary dark:text-gray">
                        Seat Number
                      </label>
                    </div>

                    <input
                      type="text"
                      name="price"
                      min={0}
                      value={seatInfo?.seatNumber}
                      className="w-full text-dark bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-base"
                    />
                  </div>
                </div>
                <div className="mt-5 w-full">
                  {/* Price Input */}
                  <div className="mb-5">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-semibold text-primary dark:text-gray">
                        Seat Price
                      </label>
                    </div>

                    <input
                      type="number"
                      name="price"
                      min={0}
                      value={seatInfo?.price}
                      className="w-full text-dark bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-base"
                    />
                  </div>
                </div>
                <div className="mt-5 w-full">
                  {/* Price Input */}
                  <div className="mb-5">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-semibold text-primary dark:text-gray">
                        Seat Discount
                      </label>
                    </div>

                    <input
                      type="number"
                      name="price"
                      min={0}
                      value={seatInfo?.discount}
                      className="w-full text-dark bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-base"
                    />
                  </div>
                </div>
                <div className="mt-5 w-full">
                  {/* Price Input */}
                  <div className="mb-5">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-semibold text-primary dark:text-gray">
                        Seat Status
                      </label>
                    </div>

                    <input
                      type="text"
                      name="price"
                      min={0}
                      value={seatInfo?.seatNumber}
                      className="w-full text-dark bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-base"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 w-full">
                <PrimaryLightButton
                  title="Cancel"
                  handleClick={toggleShowModal}
                  classes="flex w-full justify-center items-center gap-2 bg-[#732e1c80] dark:border dark:border-gray/50"
                  icon={<BiX />}
                />
                <PrimaryButton
                  title="Save"
                  handleClick={() => {}}
                  classes="flex w-full justify-center items-center gap-2 dark:bg-primary"
                  icon={loading ? <Loader /> : <BiSave />}
                  loading={loading}
                />
              </div>
            </div>
          </div>
        </ModalTransparent>
      )}
    </div>
  );
};

export default CreateDownStairsLeftSection;
