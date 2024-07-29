import { useState } from "react";
import TicketTable from "./TicketTable";
import Select from "react-dropdown-select";
import { BiDownload } from "react-icons/bi";

const TicketOverview = () => {
  const initialFilter = {
    category: "all",
    documentType: "pdf",
  };
  const [downloadFilter, setDownloadFilter] = useState(initialFilter);

  const typeOptions = [
    { value: "all", label: "All" },
    { value: "upcoming", label: "Upcoming" },
    { value: "past", label: "Past" },
  ];

  const documentOptions = [
    { value: "pdf", label: "PDF" },
    { value: "csv", label: "CSV" },
    { value: "excel", label: "Excel" },
  ];

  const handleEventTicketTypeChange = (selectedValue) => {
    if (selectedValue && selectedValue.length > 0) {
      setDownloadFilter((prev) => ({
        ...prev,
        category: selectedValue[0].value,
      }));
    } else {
      setEventFormData((prev) => ({
        ...prev,
        category: "",
      }));
    }
  };

  const handleDocumentTypeChange = (selectedValue) => {
    if (selectedValue && selectedValue.length > 0) {
      setDownloadFilter((prev) => ({
        ...prev,
        documentType: selectedValue[0].value,
      }));
    } else {
      setEventFormData((prev) => ({
        ...prev,
        documentType: "",
      }));
    }
  };

  return (
    <div className="w-full md:w-[75%]">
      <div className="flex justify-between items-start border-b border-slate-200 dark:border-gray/20 pb-3">
        <div className="">
          <div className="flex items-center gap-2 mb-1 text-sm">
            <p className="text-gray tracking-tight">Account</p>
            <span className="text-gray-500">/</span>
            <p className="text-gray-500 tracking-tight">Tickets</p>
          </div>

          <h1 className="text-2xl font-bold text-dark dark:text-primary">
            Ticket Management
          </h1>
        </div>

        {/* Download ticket */}
        <div className="flex items-center gap-2">
          {/* Select Event */}
          <div className="w-[200px]">
            <Select
              options={typeOptions}
              onChange={handleEventTicketTypeChange}
              values={typeOptions.filter(
                (option) => option.value === downloadFilter.category
              )}
              className="w-full bg-[#F5F5F5] dark:bg-gray dark:text-dark rounded-md text-gray"
              placeholder="Download"
            />
          </div>

          <div className="w-[200px]">
            <Select
              options={documentOptions}
              onChange={handleDocumentTypeChange}
              values={documentOptions.filter(
                (option) => option.value === downloadFilter.documentType
              )}
              className="w-full bg-[#F5F5F5] dark:bg-gray dark:text-dark rounded-md text-gray"
              placeholder="Download"
            />
          </div>

          {/* Download button */}
          <button className="text-white bg-primary px-5 py-2 rounded-md text-sm flex justify-center items-center gap-2">
            <BiDownload /> Download
          </button>
        </div>
      </div>

      {/* Tickets Table */}
      <div className="w-full mt-5">
        <h1 className="text-xl font-semibold text-dark dark:text-slate-100 pb-3">
          Ticket Sales
        </h1>

        <TicketTable />

        {/* Debugging */}
        <div className="text-gray text-xs mt-5">
          <pre>{JSON.stringify(downloadFilter, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default TicketOverview;
