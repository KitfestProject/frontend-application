import useCurrencyConverter from "@/hooks/useCurrencyConverter";

const ViewSectionDetails = ({
  totalRows,
  totalColumns,
  totalSeats,
  totalPrice,
  sectionDiscount
}) => {
  const { formatCurrency } = useCurrencyConverter();

  return (
    <div className="">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center bg-primary px-5 py-2">
          <h1 className="text-lg font-semibold text-slate-100 dark:text-slate-200">
            Section Details
          </h1>
        </div>
      </div>

      <div className="px-5 my-3">
        <table className="w-full">
          <tbody>
            <tr className="border-b border-gray/20">
              <td className="py-2 text-dark font-semibold dark:text-gray">
                Total Rows:
              </td>
              {/* Switch */}
              <td className="text-end">{totalRows}</td>
            </tr>
            <tr className="border-b border-gray/20">
              <td className="py-2 text-dark font-semibold dark:text-gray">
                Total Columns:
              </td>
              {/* Switch */}
              <td className="text-end">{totalColumns}</td>
            </tr>
            <tr className="border-b border-gray/20">
              <td className="py-2 text-dark font-semibold dark:text-gray">
                Total Seats:
              </td>
              {/* Switch */}
              <td className="text-end">{totalSeats}</td>
            </tr>
            <tr className="">
              <td className="py-2 text-dark font-semibold dark:text-gray">
                Total Discount:
              </td>
              {/* Switch */}
              <td className="text-end dark:text-green-500">{formatCurrency(sectionDiscount)}</td>
            </tr>
            <tr className="">
              <td className="py-2 text-dark font-semibold dark:text-gray">
                Total Price:
              </td>
              {/* Switch */}
              <td className="text-end dark:text-green-500">{formatCurrency(totalPrice)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewSectionDetails;
