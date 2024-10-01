const TicketTabButton = ({ ticket, handleClick, selected }) => {
  return (
    <button
      type="button"
      className={`py-1 px-5 rounded-md text-xs ${
        selected === ticket.type
          ? "bg-primary text-white"
          : "bg-slate-100 dark:text-slate-100 dark:bg-gray shadow-sm"
      }`}
      onClick={handleClick}
    >
      {ticket.title}
    </button>
  );
};

export default TicketTabButton;
