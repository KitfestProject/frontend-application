import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useTimeAgo from "@/hooks/useTimeAgo";

const EventSearchComponent = ({ title, slug, image, date, isLastItem }) => {
  const navigate = useNavigate();
  const { formatFullDate } = useTimeAgo();

  return (
    <div
      onClick={() => navigate("/events/" + slug)}
      className={`flex items-center gap-5 rounded-md hover:bg-primary/10 p-3 cursor-pointer ${
        isLastItem ? "" : "border-b border-gray/10"
      }`}
    >
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <div className="">
            <div className="w-[100px] h-[55px] rounded-md bg-gray/20">
              <img
                src={image ?? "/images/Event-1.png"}
                className="w-full h-full rounded object-cover"
                alt="Event banner image"
              />
            </div>
          </div>

          <div className="">
            <h5 className="text-dark text-md leading-tight font-semibold">
              {title}
            </h5>
            <p className="text-gray text-xs">{formatFullDate(date)}</p>
          </div>
        </div>
      </div>
      <div className="w-[100px] flex justify-end">
        <button className="text-primary dark:text-slate-100">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

EventSearchComponent.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default EventSearchComponent;
