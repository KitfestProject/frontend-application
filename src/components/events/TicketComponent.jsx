import PropTypes from "prop-types";

const TicketComponent = ({
  ticketValues,
  selectedTicketType,
  handleSelect,
}) => {
  return ticketValues.map((ticket) => (
    <div key={ticket.id} className="mb-3">
      <label className="block cursor-pointer">
        <div
          className={`w-full h-auto shadow-md rounded-md flex justify-start items-center cursor-pointer relative ${
            selectedTicketType == ticket.id
              ? "bg-[#fcf4f3] border border-secondary dark:border-white dark:bg-primary"
              : "bg-white dark:bg-dark"
          }`}
        >
          <div className="p-3 w-full flex flex-col">
            {/* Ticket Title */}
            <h3 className="text-lg font-semibold text-dark dark:text-slate-100">
              {ticket.name}
            </h3>
            {/* Ticket Amount & Discount Badge */}
            <div className="flex items-center justify-between dark:text-slate-100">
              <p className="text-sm font-semibold text-gray dark:text-slate-100">
                KES {ticket.price} / <span className="font-normal">Ticket</span>
              </p>
            </div>
            <div className="bg-secondary dark:bg-primary text-white text-xs font-semiBold h-14 w-14 rounded-full absolute top-2 right-1 flex flex-col items-center justify-center font-bold">
              <span>{ticket.discount}%</span> Off
            </div>
          </div>
          <input
            type="radio"
            value={ticket.id}
            checked={selectedTicketType == ticket.id}
            onChange={handleSelect}
            className="hidden"
          />
        </div>
      </label>
    </div>
  ));
};

TicketComponent.propTypes = {
  ticketValues: PropTypes.array.isRequired,
  selectedTicketType: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default TicketComponent;
