import { useNavigate } from "react-router-dom";

const SingleBlogComponent = ({ blog, image, title, summary, timestamp }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blogs/${blog._id}`)}
      className="bg-white dark:bg-darkGray rounded-lg shadow-md"
    >
      <img
        src={image}
        alt="Blog Image"
        className="object-cover w-full h-52 rounded-t-lg"
      />

      <div className="p-5 dark:border dark:border-gray/50 rounded-b-md">
        <h5 className="text-lg font-bold text-gray-800 dark:text-gray-100 leading-tight mb-3 text-dark dark:text-slate-100 tracking-tighter">
          {title}
        </h5>

        <div className="max-h-[80px] h-full overflow-y-scroll mb-3">
          <div
            dangerouslySetInnerHTML={{
              __html: summary,
            }}
            className="text-sm text-gray dark:text-gray-300 dark:text-slate-100 mb-5"
          />
        </div>

        <p className="text-xs text-gray dark:text-gray-300 dark:text-slate-100">
          {timestamp}
        </p>
      </div>
    </div>
  );
};

export default SingleBlogComponent;
