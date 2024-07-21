import { CreateSectionSeat } from "@/components";

const CreateSectionRowsSeats = ({ row, rowIndex, handleInputChange }) => {
  return (
    <div className="mb-5">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center bg-primary px-5 py-2">
          <h1 className="text-lg font-semibold text-slate-100 dark:text-slate-200">
            <span>Seat Row</span>{" "}
            <span className="text-slate-200 dark:text-gray">
              {rowIndex + 1}
            </span>{" "}
            - <span>({row.rowLabel})</span>
          </h1>

          <div className="flex justify-center items-center gap-2">
            {/* Row Seats Count */}
            <div className="w-8 h-8 rounded-full flex justify-center items-center border-2 border-gray">
              <h5 className="text-slate-200 dark:text-slate-200">
                {row.seats.filter((seat) => seat.SN !== null).length}
              </h5>
            </div>

            <span className="text-slate-200">Seats</span>
          </div>
        </div>
      </div>

      <div className="dark:bg-gray/20 pt-5 dark:border-b dark:border-gray/40">
        <div className="flex flex-col gap-2 mb-5 px-5 border-b border-gray/30 pb-5">
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold text-primary dark:text-gray">
              Change Seat Row Label
            </label>
          </div>

          <input
            type="text"
            name="rowLabel"
            value={row.rowLabel}
            onChange={(e) =>
              handleInputChange(rowIndex, 0, "rowLabel", e.target.value)
            }
            className="w-full text-dark bg-[#F5F5F5] dark:bg-gray dark:text-cyan-400 p-2 rounded-md outline-none text-base"
          />
        </div>

        {row.seats
          .filter((seat) => seat.SN !== null)
          .map((seat, seatIndex) => (
            <CreateSectionSeat
              key={seatIndex}
              {...{ row, rowIndex, seat, seatIndex, handleInputChange }}
            />
          ))}
      </div>
    </div>
  );
};

export default CreateSectionRowsSeats;
