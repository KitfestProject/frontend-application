import {
  Loader,
  SeatMapButton,
  PrimaryButton,
  ModalTransparent,
  PrimaryLightButton,
  ActionWarningComponent,
  CreateTheaterSeatsDrawer,
  NewTheaterSeatComponent as Seat,
} from "@/components";
import {
  BiEditAlt,
  BiInfoCircle,
  BiPlus,
  BiSave,
  BiSolidCheckCircle,
  BiX,
} from "react-icons/bi";
import { useCallback, useContext, useState } from "react";
import { CreateNairobiCinemaContext } from "@/context/NairobiCinemaFormContext";
import useServerSideQueries from "@/hooks/useServerSideQueries";
import toast from "react-hot-toast";
import { RiDeleteBin5Line } from "react-icons/ri";

const CreateDownStairsLeftSection = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { nairobiCinemaFormData, nairobiCinemaDataLoading } = useContext(
    CreateNairobiCinemaContext
  );
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [seatInfo, setSeatInfo] = useState({});
  const sectionData = nairobiCinemaFormData.downStairsLeftSection;
  const [newSeatDetails, setNewSeatDetails] = useState({
    SN: "",
    price: 0,
    discount: 0,
    status: "",
  });

  // Added
  const { updateSectionSeat, deleteSeatMapSection } = useServerSideQueries();
  const [deleteSectionModal, setDeleteSectionModal] = useState(false);

  const toggleShowDeleteModal = () =>
    setDeleteSectionModal((previous) => !previous);

  const toggleShowModal = () => setShowModal((prev) => !prev);

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  const handleSeatSelected = (seat) => {
    if (!sectionData?._id) {
      return;
    }

    setSeatInfo(seat);
    setNewSeatDetails((previous) => ({
      ...previous,
      SN: seat.seatNumber,
      price: seat.price,
      discount: seat.discount,
      status: seat.status,
      _id: seat.id,
    }));
    toggleShowModal();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewSeatDetails({
      ...newSeatDetails,
      [name]: value,
    });
  };

  // Handle update new seat details
  const handleUpdateNewSeatDetails = async () => {
    setLoading(true);

    const newSeatsData = {
      seats: [newSeatDetails],
    };

    console.log({
      sectionId: sectionData?._id,
      newSeatsData,
    });

    const { success, message, data } = await updateSectionSeat(
      sectionData?._id,
      newSeatsData
    );

    if (!success) {
      setLoading(false);
      return toast.error(message, {
        icon: <BiInfoCircle className="text-white text-2xl" />,
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#ff0000",
          color: "#fff",
        },
      });
    }

    setLoading(false);
    toggleShowModal();
    toast.success(message, {
      icon: <BiSolidCheckCircle className="text-white text-2xl" />,
      position: "top-right",
      style: {
        borderRadius: "10px",
        background: "#00c20b",
        color: "#fff",
      },
    });
  };

  const totalDiscount = calculateTotalDiscount(
    sectionData.rows.flatMap((row) => row.seats)
  );

  // Added
  const handleDeleteSection = async (sectionId) => {
    setLoading(true);
    const { success, message } = await deleteSeatMapSection(sectionId);

    if (!success) {
      setLoading(false);
      return toast.error(message, {
        icon: <BiInfoCircle className="text-white text-2xl" />,
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#ff0000",
          color: "#fff",
        },
      });
    }

    setLoading(false);
    toast.success(message, {
      icon: <BiSolidCheckCircle className="text-white text-2xl" />,
      position: "top-right",
      style: {
        borderRadius: "10px",
        background: "#00c20b",
        color: "#fff",
      },
    });
  };

  return (
    <div className="flex flex-col justify-center items-center relative">
      {nairobiCinemaDataLoading ? (
        <div className="text-gray font-semibold text-md place-content-center">
          Arranging Seats...
        </div>
      ) : (
        <>
          {sectionData?._id ? (
            <>
              {/* Edit seat Button */}
              <div className="flex justify-center items-center gap-2">
                {/* Edit Button */}
                <SeatMapButton
                  handleClick={toggleDrawerOpen}
                  icon={<BiEditAlt className="text-3xl" />}
                  classes="bg-primary text-white"
                />

                {/* Delete button // Added */}
                <SeatMapButton
                  handleClick={toggleShowDeleteModal}
                  icon={<RiDeleteBin5Line className="text-2xl" />}
                  classes="bg-red-500 text-white"
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
        </>
      )}

      {/* Handle Drawer Open */}
      <CreateTheaterSeatsDrawer
        isOpen={drawerOpen}
        onClose={toggleDrawerOpen}
        sectionKey="downStairsLeftSection"
        sectionDiscount={totalDiscount}
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
            <h5 className="text-2xl text-center font-bold tracking-tighter mb-5 border-b border-gray/30 dark:border-gray pb-3">
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
                      name="SN"
                      min={0}
                      readOnly={true}
                      value={newSeatDetails.SN}
                      onChange={handleInputChange}
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
                      value={newSeatDetails.price}
                      onChange={handleInputChange}
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
                      name="discount"
                      min={0}
                      value={newSeatDetails.discount}
                      onChange={handleInputChange}
                      className="w-full text-dark bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-base"
                    />
                  </div>
                </div>
                <div className="mt-5 w-full">
                  {/* Price Input */}
                  <div className="mb-5">
                    <label className="text-sm font-semibold text-primary dark:text-gray">
                      Seat Status
                    </label>{" "}
                    <small className="text-gray dark:text-gray">
                      Example (available, selected and booked in this field)
                    </small>
                    <input
                      type="text"
                      name="status"
                      min={0}
                      value={newSeatDetails.status}
                      onChange={handleInputChange}
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
                  handleClick={handleUpdateNewSeatDetails}
                  classes="flex w-full justify-center items-center gap-2 dark:bg-primary"
                  icon={loading ? <Loader /> : <BiSave />}
                  loading={loading}
                />
              </div>
            </div>
          </div>
        </ModalTransparent>
      )}

      {/* Show Delete Section Warning Modal */}
      {deleteSectionModal && (
        <ModalTransparent
          title="Delete Section"
          onClose={toggleShowDeleteModal}
          icon={<BiInfoCircle className="text-white text-2xl" />}
        >
          <ActionWarningComponent
            handleClick={() => handleDeleteSection(sectionData?._id)}
            cancel={toggleShowDeleteModal}
            loading={loading}
            message="Are you sure you want to delete this section?"
          />
        </ModalTransparent>
      )}
    </div>
  );
};

const calculateTotalDiscount = (seats) => {
  return seats.reduce((acc, seat) => {
    const seatDiscount = parseFloat(seat.discount) || 0;
    const seatAmount = parseFloat(seat.amount) || 0;
    const discountAmount = seatAmount * (seatDiscount / 100);
    const validDiscountAmount = Math.min(seatAmount, discountAmount);
    return acc + validDiscountAmount;
  }, 0);
};

export default CreateDownStairsLeftSection;
