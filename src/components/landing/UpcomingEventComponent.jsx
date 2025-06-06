import { CustomDropdown, TheaterEventsScroll } from "@/components";

const UpcomingEventComponent = () => {
  const eventTypes = [
    "Event Type",
    "Music",
    "Dance",
    "Theatre",
    "Comedy",
    "Art",
    "Fashion",
    "Food",
  ];

  const categories = [
    "Any Category",
    "Music",
    "Dance",
    "Theatre",
    "Comedy",
    "Poetry",
    "Art",
    "Fashion",
    "Food",
  ];

  return (
    <section className="container mx-auto py-5 md:py-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <h2 className="text-[30px] md:text-[35px] tracking-tighter font-bold text-dark dark:text-slate-200 mb-3 md:mb-0">
          Upcoming Events
        </h2>

        {/* Event Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <CustomDropdown
            className=""
            title="Sort By Week"
            data={["Sort By Week", "This Week", "Next Week", "This Month"]}
          />
          <CustomDropdown className="" title="Event Type" data={eventTypes} />
          <CustomDropdown className="" title="Any Category" data={categories} />
        </div>
      </div>

      <div className="w-full my-3">
        <TheaterEventsScroll />
      </div>
    </section>
  );
};

export default UpcomingEventComponent;
