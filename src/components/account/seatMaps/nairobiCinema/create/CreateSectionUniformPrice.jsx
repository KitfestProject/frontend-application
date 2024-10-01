import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const CreateSectionUniformPrice = ({
  globalPrice,
  isDropDownOpen,
  toggleDropdown,
  setGlobalPrice,
  globalDiscountPrice,
  setGlobalDiscountPrice,
  handleSetGlobalSeatPrice,
}) => {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary dark:text-slate-200">
          Set Uniform Price for Section
        </h1>

        {/* Toggle Dropdown */}
        <button onClick={toggleDropdown} className="">
          {isDropDownOpen ? (
            <BiChevronUp className="text-primary text-2xl dark:text-gray" />
          ) : (
            <BiChevronDown className="text-primary text-2xl dark:text-gray" />
          )}
        </button>
      </div>

      {/* Global Pricing Section */}
      {isDropDownOpen && (
        <div className="mt-5">
          {/* Price Input */}
          <div className="mb-5">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-primary dark:text-gray">
                Enter Price (Ksh.)
              </label>
            </div>

            <input
              type="number"
              name="price"
              value={globalPrice}
              min={0}
              onChange={(e) => setGlobalPrice(e.target.value)}
              className="w-full text-dark bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-base"
            />
          </div>

          {/* Discount Price Input */}
          <div className="mb-5">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-primary dark:text-gray">
                Enter Discount price (Ksh.)
              </label>
            </div>

            <input
              type="number"
              name="discount"
              value={globalDiscountPrice}
              min={0}
              onChange={(e) => setGlobalDiscountPrice(e.target.value)}
              className="w-full text-dark bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-base"
            />
          </div>

          {/* Set Global Price Button */}
          <div className="flex justify-end items-center">
            <button
              onClick={handleSetGlobalSeatPrice}
              className="text-white bg-primary px-5 py-2 rounded-md place-self-end"
            >
              Set Price
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateSectionUniformPrice;
