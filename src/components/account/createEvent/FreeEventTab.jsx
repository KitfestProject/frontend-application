const FreeEventTab = ({ selectedChargeType, handleChange }) => {
  return (
    <div className="">
      <label className="block cursor-pointer">
        <div
          className={`flex-1 ${
            selectedChargeType === "free"
              ? "bg-[#f1ded9] border border-primary dark:bg-gray"
              : "bg-white border border-slate-300 dark:bg-gray"
          }  p-4 rounded-md`}
        >
          <div className="flex gap-3">
            <div
              className={`w-5 h-5 ${
                selectedChargeType === "free"
                  ? "bg-primary"
                  : "bg-gray dark:bg-dark"
              }  rounded-full flex justify-center items-center`}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p
              className={`text-sm font-bold ${
                selectedChargeType === "free" ? "text-primary" : "text-dark"
              } `}
            >
              Free
            </p>
          </div>
        </div>
        <input
          type="radio"
          value="free"
          checked={selectedChargeType === "free"}
          onChange={handleChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default FreeEventTab;
