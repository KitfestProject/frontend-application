const CustomInput = ({
  info,
  name,
  value,
  type,
  title,
  data,
  setData,
  required,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="">
      <label
        htmlFor="event-title"
        className="text-dark dark:text-slate-100 font-bold text-sm"
      >
        {title} {required && <span className="text-red-500">*</span>}
      </label>
      {info && <small className="block text-gray mb-1">{info}</small>}

      <input
        type={type}
        name={name}
        value={value}
        onChange={handleInputChange}
        className="w-full text-primary bg-[#F5F5F5] dark:bg-gray p-2 rounded-md outline-none text-[15px]"
      />
    </div>
  );
};

export default CustomInput;
