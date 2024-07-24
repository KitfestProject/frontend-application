import {
  Loader,
  ModalTransparent,
  SiteLogoComponent,
  CreateSectionTitle,
  ViewSectionDetails,
  CreateSectionRowsSeats,
  CreateSectionUniformPrice,
} from "@/components";
import { useContext, useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import useThemeStore from "@/store/UseThemeStore";
import { BiX, BiSave, BiSolidCheckCircle } from "react-icons/bi";
import { RightDrawer, PrimaryButton, PrimaryLightButton } from "@/components";
import { CreateNairobiCinemaContext } from "@/context/NairobiCinemaFormContext";
import useScreenSize from "@/hooks/useScreenSize";
import axiosClient from "@/axiosClient";

const CreateTheaterSeatsDrawer = ({ isOpen, onClose, sectionKey }) => {
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const {
    clearSeatMapSection,
    nairobiCinemaFormData,
    setNairobiCinemaFormData,
    checkSectionForPriceAndDiscount,
  } = useContext(CreateNairobiCinemaContext);
  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );
  const sectionData = nairobiCinemaFormData[sectionKey];
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [globalPrice, setGlobalPrice] = useState(0);
  const [globalDiscountPrice, setGlobalDiscountPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModalShow = () => setShowModal((prev) => !prev);

  const toggleDropdown = () => setIsDropDownOpen((prev) => !prev);

  const handleCreateSeatSectionSeats = async () => {

    setLoading(true);

    try {
      const response = await axiosClient.post("/seatmap", sectionData);

      const { success, message, data } = response.data;

      if (success) {
        clearSeatMapSection(sectionKey);

        toast.success(message, {
          icon: <BiSolidCheckCircle className="text-white text-2xl" />,
          style: {
            borderRadius: "10px",
            background: "#00c20b",
            color: "#fff",
          },
        });
      } else {
        toast.error(message, {
          icon: <BiInfoCircle className="text-white text-2xl" />,
          style: {
            borderRadius: "10px",
            background: "#ff0000",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred while publishing the venue.";

      toast.error(errorMessage, {
        icon: <BiInfoCircle className="text-white text-2xl" />,
        style: {
          borderRadius: "10px",
          background: "#ff0000",
          color: "#fff",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (rowIndex, seatId, field, value) => {
    setNairobiCinemaFormData((prevState) => {
      const updatedRows = prevState[sectionKey].rows.map((row, rIdx) => {
        if (rIdx === rowIndex) {
          return {
            ...row,
            seats: row.seats.map((seat) => {
              if (seat.id === seatId) {
                return {
                  ...seat,
                  [field]: value,
                };
              }
              return seat;
            }),
            [field]: value,
          };
        }
        return row;
      });

      return {
        ...prevState,
        [sectionKey]: {
          ...prevState[sectionKey],
          rows: updatedRows,
          [field]: value,
        },
      };
    });
  };

  const filteredRows = sectionData.rows
    .map((row) => ({
      ...row,
      seats: row.seats.filter((seat) => seat.SN !== null),
    }))
    .filter((row) => row.seats.length > 0);

  const totalSeats = filteredRows.reduce(
    (acc, row) => acc + row.seats.length,
    0
  );
  const totalRows = filteredRows.length;

  const totalColumns = Math.max(
    ...filteredRows.map((row) =>
      Math.max(...row.seats.map((seat) => seat.column))
    )
  );

  const totalPrice = filteredRows.reduce((acc, row) => {
    const rowTotal = row.seats.reduce(
      (acc, seat) => acc + (+seat.price ?? 0),
      0
    );
    return acc + rowTotal;
  }, 0);

  const handleSetGlobalSeatPrice = () => {
    if (globalPrice === 0 || globalDiscountPrice === 0) {
      toast.error("Please enter a valid price and discount price", {
        icon: <BiInfoCircle className="text-white text-2xl" />,
        style: {
          borderRadius: "10px",
          background: "#ff0000",
          color: "#fff",
        },
      });
      return;
    }

    setNairobiCinemaFormData((prevState) => {
      const updatedRows = prevState[sectionKey].rows.map((row) => ({
        ...row,
        seats: row.seats.map((seat) => ({
          ...seat,
          price: +globalPrice,
          discount: +globalDiscountPrice,
        })),
      }));

      return {
        ...prevState,
        [sectionKey]: {
          ...prevState[sectionKey],
          rows: updatedRows,
        },
      };
    });

    toast.success("Global section seat price set successfully", {
      icon: <BiSolidCheckCircle className="text-white text-2xl" />,
      style: {
        borderRadius: "10px",
        background: "#00c20b",
        color: "#fff",
      },
    });
  };

  const isMobile = useScreenSize();

  return (
    <>
      <RightDrawer
        isOpen={isOpen}
        onClose={onClose}
        drawerWidth={isMobile ? "100%" : "30%"}
      >
        <Toaster position="top-right" />
        <div className="flex flex-col gap-4 bg-white dark:bg-darkGray min-h-screen">
          <div className="px-5 mt-5 border-b pb-5 border-gray/30">
            <SiteLogoComponent theme={isDarkMode} />
          </div>

          <div className="h-[calc(100vh-100px)] overflow-y-scroll pb-[100px] scroll-smooth">
            {/* Section Details */}
            <CreateSectionTitle
              sectionData={sectionData}
              handleInputChange={handleInputChange}
            />

            {/* Set Uniform Price */}
            <CreateSectionUniformPrice
              {...{
                globalPrice,
                isDropDownOpen,
                toggleDropdown,
                setGlobalPrice,
                globalDiscountPrice,
                setGlobalDiscountPrice,
                handleSetGlobalSeatPrice,
              }}
            />

            {/* Section Details */}
            <ViewSectionDetails
              {...{ totalRows, totalColumns, totalSeats, totalPrice }}
            />

            {/* Section Rows */}
            {sectionData.rows.map((row, rowIndex) => (
              <CreateSectionRowsSeats
                key={rowIndex}
                {...{ row, rowIndex, handleInputChange }}
              />
            ))}
          </div>

          {/* Create Section Button */}
          <div className="flex justify-center items-center gap-3 mt-5 fixed bottom-0 w-full p-3 bg-white dark:bg-gray/80 border-t border-gray/30 dark:border-gray/50">
            <PrimaryLightButton
              title="Clear Seats"
              handleClick={() => {
                clearSeatMapSection(sectionKey);
                setGlobalPrice(0);
                setGlobalDiscountPrice(0);

                toast.success("Global price removed from seats successfully", {
                  icon: <BiSolidCheckCircle className="text-white text-2xl" />,
                  style: {
                    borderRadius: "10px",
                    background: "#00c20b",
                    color: "#fff",
                  },
                });
              }}
              classes="flex w-full justify-center items-center gap-2 bg-[#732e1c80] dark:border dark:border-gray/50"
              icon={<BiX />}
            />
            <PrimaryButton
              title="Create Seats"
              handleClick={() => {
                const seatsHasPrices =
                  checkSectionForPriceAndDiscount(sectionKey);

                if (!seatsHasPrices) {
                  toggleModalShow();
                  return;
                }

                handleCreateSeatSectionSeats();
              }}
              classes="flex w-full justify-center items-center gap-2 dark:bg-primary"
              icon={loading ? <Loader /> : <BiSave />}
              loading={loading}
            />
          </div>
        </div>
      </RightDrawer>

      {/* Validation Modal */}
      {showModal && (
        <ModalTransparent
          title="Create Seats"
          onClose={toggleModalShow}
          icon={<BiInfoCircle className="text-white text-2xl" />}
        >
          <div className="bg-white dark:bg-darkGray w-[400px] rounded-md dark:border dark:border-gray/30 p-5">
            {/* Modal Title */}
            <h5 className="text-2xl text-center font-bold tracking-tighter mb-5">
              Are you sure?
            </h5>

            <div className="flex flex-col gap-3 items-center justify-center">
              <p className="text-sm text-darkGray dark:text-gray mb-5">
                Some of the seats in this section will be set without prices.
                Are you sure you want to create the seats?
              </p>

              <div className="flex gap-3">
                <PrimaryLightButton
                  title="Cancel"
                  handleClick={toggleModalShow}
                  classes="flex w-full justify-center items-center gap-2 bg-[#732e1c80] dark:border dark:border-gray/50"
                  icon={<BiX />}
                />
                <PrimaryButton
                  title="Create"
                  handleClick={handleCreateSeatSectionSeats}
                  classes="flex w-full justify-center items-center gap-2 dark:bg-primary"
                  icon={loading ? <Loader /> : <BiSave />}
                  loading={loading}
                />
              </div>
            </div>
          </div>
        </ModalTransparent>
      )}
    </>
  );
};

export default CreateTheaterSeatsDrawer;
