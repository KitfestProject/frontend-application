const AdvertCardComponent = ({ image, title, date }) => {
  return (
    <div className="bg-white dark:bg-darkGray p-3 rounded-lg shadow-md">
      <div className="flex flex-col gap-2">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] object-cover rounded"
        />

        <div className="">
          <h5 className="text-primary text-lg font-semibold">{title}</h5>
          <p className="text-gray dark:text-gray-300 text-sm">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default AdvertCardComponent;
