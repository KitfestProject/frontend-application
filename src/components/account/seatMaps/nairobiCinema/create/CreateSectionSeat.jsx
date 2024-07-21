const CreateSectionSeat = ({
  row,
  seat,
  rowIndex,
  seatIndex,
  handleInputChange,
}) => {
  return (
    <div
      className={`flex gap-3 mb-5 px-5 ${
        row.seats.filter((seat) => seat.SN !== null).length - 1 !== seatIndex
          ? "border-b border-gray/30 pb-5"
          : ""
      }`}
    >
      <div className="">
        <div className="flex justify-between items-center">
          <label className="text-sm font-semibold text-primary dark:text-gray">
            Seat Number
          </label>
        </div>

        <input
          type="text"
          name="SN"
          value={seat.SN}
          onChange={(e) =>
            handleInputChange(rowIndex, seat.id, "SN", e.target.value)
          }
          className="w-full text-dark bg-[#F5F5F5] dark:bg-gray dark:text-cyan-400 p-2 rounded-md outline-none text-base"
        />
      </div>

      <div className="">
        <div className="flex justify-between items-center">
          <label className="text-sm font-semibold text-primary dark:text-gray">
            Price (Ksh.)
          </label>
        </div>

        <input
          type="number"
          name="price"
          min={0}
          value={seat.price ?? 0}
          onChange={(e) =>
            handleInputChange(rowIndex, seat.id, "price", e.target.value)
          }
          className="w-full text-dark bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-base"
        />
      </div>

      <div className="">
        <div className="flex justify-between items-center">
          <label className="text-sm font-semibold text-primary dark:text-gray">
            Discount (Ksh.)
          </label>
        </div>

        <input
          type="number"
          name="discount"
          min={0}
          value={seat.discount ?? 0}
          onChange={(e) =>
            handleInputChange(rowIndex, seat.id, "discount", e.target.value)
          }
          className="w-full text-dark bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-base"
        />
      </div>
    </div>
  );
};

export default CreateSectionSeat;
