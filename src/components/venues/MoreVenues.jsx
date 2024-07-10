const MoreVenues = ({ title, image, summary, timestamp }) => {
  return (
    <div className="bg-white dark:bg-darkGray w-full md:w-1/2 shadow-md">
      <div className="flex flex-col md:flex-row w-full">
        {/* Venue Image */}
        <div className="w-full md:w-1/2 bg-gray-300 dark:bg-darkGray">
          <img
            src={image}
            alt="Venue Image"
            className="w-full h-[300px] object-cover"
          />
        </div>

        {/* Venue Content */}
        <div className="w-full md:w-1/2 p-5 dark:border dark:border-gray/50 dark:rounded-r-md">
          <div className="flex flex-col justify-between h-full">
            {/* Venue Details Area */}
            <div className="">
              <h3 className="text-dark text-xl font-bold tracking-tighter leading-tight mb-2">
                {title}
              </h3>
              <p className="text-xs text-gray mb-5 font-semibold">
                {timestamp}
              </p>
              <p className="text-sm text-gray">{summary}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreVenues;
