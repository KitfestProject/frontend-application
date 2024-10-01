import { BiEditAlt } from "react-icons/bi";

const CreateSectionTitle = ({ sectionData, handleInputChange }) => {
  return (
    <div className="">
      <div className="flex flex-col mt-5 px-5 pb-5 border-b border-gray/30">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary dark:text-slate-200">
            {sectionData.full_sec_name}
          </h1>
          <BiEditAlt className="text-primary dark:text-gray" />
        </div>

        <label className="text-sm font-semibold text-primary dark:text-gray mt-5">
          Change Section Name
        </label>

        <input
          type="text"
          readOnly={true}
          name="full_sec_name"
          value={sectionData.full_sec_name}
          onChange={(e) =>
            handleInputChange(0, 0, e.target.name, e.target.value)
          }
          className="w-full text-dark bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-base"
        />
      </div>

      {/* Section Abbreviation */}
      <div className="flex flex-col mt-5 px-5 pb-5 border-b border-gray/30">
        <div className="flex justify-between items-center">
          <label className="text-sm font-semibold text-primary dark:text-gray">
            Change Section Name abbreviation
          </label>
        </div>

        <input
          type="text"
          readOnly={true}
          name="abbr_name"
          value={sectionData.abbr_name}
          onChange={(e) =>
            handleInputChange(0, 0, e.target.name, e.target.value)
          }
          className="w-full text-dark bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-base"
        />
      </div>

      {/* Section Description */}
      <div className="flex flex-col mt-5 px-5 pb-5 border-b border-gray/30">
        <div className="flex justify-between items-center">
          <label className="text-sm font-semibold text-primary dark:text-gray">
            Change Section Description
          </label>
        </div>

        <input
          type="text"
          readOnly={true}
          name="description"
          value={sectionData.description}
          onChange={(e) =>
            handleInputChange(0, 0, e.target.name, e.target.value)
          }
          className="w-full text-dark bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-base"
        />
      </div>
    </div>
  );
};

export default CreateSectionTitle;
