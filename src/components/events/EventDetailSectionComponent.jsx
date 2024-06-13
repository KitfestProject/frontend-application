import PropTypes from "prop-types";
import { TicketTypeSelector, EventDetailsComponent } from "@/components";

const EventDetailSectionComponent = ({ eventData }) => {
  return (
    <section className="py-10 md:py-20 bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
          <div className="col-span-2 mb-20 md:mb-0">
            {/* Timing and Location */}
            <h3 className="text-2xl font-bold text-dark dark:text-slate-200 mb-10">
              Timing and location
            </h3>

            {/* Event Details Component */}
            <EventDetailsComponent eventData={eventData} />
          </div>

          {/* PRICE SECTION */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-dark dark:text-slate-200 mb-10">
              Price
            </h3>

            {/* Ticket Selection */}
            <div className="w-full">
              {/* Ticket Selection component */}
              <TicketTypeSelector tickets={eventData.tickets} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

EventDetailSectionComponent.propTypes = {
  eventData: PropTypes.object.isRequired,
};

export default EventDetailSectionComponent;
