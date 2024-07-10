const EditorPicks = ({ title, image, summary, timestamp }) => {
  return (
    <div className="bg-white dark:bg-darkGray w-full md:w-1/2 shadow-md">
      <div className="flex flex-col md:flex-row w-full">
        {/* Editor Pick Image */}
        <div className="w-full md:w-1/2 bg-gray-300 dark:bg-darkGray">
          <img
            src={image}
            alt="Editor Pick"
            className="w-full h-[300px] object-cover"
          />
        </div>

        {/* Editor Pick Content */}
        <div className="w-full md:w-1/2 p-5 dark:border dark:border-gray/50 dark:rounded-r-md">
          <div className="flex flex-col justify-between h-full">
            {/* Blog Details Area */}
            <div className="">
              <h3 className="text-dark text-xl font-bold tracking-tighter mb-3 leading-tight">
                {title}
              </h3>
              <p className="text-sm text-gray">{summary}</p>
            </div>

            {/* Date & Author */}
            <div className="mt-5 flex-1 place-content-end">
              <p className="text-xs text-gray">{timestamp}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPicks;
