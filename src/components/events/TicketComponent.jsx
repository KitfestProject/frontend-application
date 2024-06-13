import PropTypes from "prop-types";

const TicketComponent = ({
  ticketValues,
  handleSelect,
  selectedTicketType,
}) => {
  return ticketValues.map((ticket) => (
    <div key={ticket.id} className="mb-3">
      <label className="block cursor-pointer">
        <div
          className={`w-[95%] h-auto shadow-md rounded-md flex justify-start items-center cursor-pointer relative ${
            selectedTicketType == ticket.id
              ? "bg-[#fcf4f3] border border-secondary dark:border-gray dark:bg-primary"
              : "bg-white dark:bg-dark"
          }`}
        >
          <div className="p-3 w-full flex flex-col">
            {/* Ticket Title */}
            <h3 className="text-lg font-semibold text-dark dark:text-slate-300">
              {ticket.title} Ticket
            </h3>

            {/* Ticket Amount & Discount Badge */}
            <div className="flex items-center justify-between dark:text-slate-300">
              <p className="text-sm text-gray dark:text-slate-300">
                KES {ticket.price} / <span className="font-normal">Ticket</span>
              </p>
            </div>
            <div className="bg-secondary dark:bg-gray text-white text-[12px] leading-none font-semibold h-[48px] w-[48px] rounded-full absolute top-2 -right-5 flex flex-col items-center justify-center">
              <span>{ticket.discount}%</span> Off
            </div>
          </div>
          <input
            type="radio"
            value={ticket.id}
            checked={selectedTicketType == ticket.id}
            onChange={handleSelect(ticket)}
            className="hidden"
          />
        </div>
      </label>
    </div>
  ));
};

TicketComponent.propTypes = {
  ticketValues: PropTypes.array.isRequired,
  selectedTicketType: PropTypes.string,
  handleSelect: PropTypes.func.isRequired,
};

export default TicketComponent;
