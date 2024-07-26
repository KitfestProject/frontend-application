import { categories } from "@/components/data/StaticData";

const TheatreCategories = () => {
  return (
    <section className="pt-10 bg-secondary dark:bg-darkGray pb-10 md:pb-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-[36px] tracking-tighter font-bold text-slate-100 dark:text-slate-200">
            Explore Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-10">
          {categories.slice(0, 6).map((event, index) => (
            <div
              key={index}
              className="bg-white dark:bg-primary shadow-md rounded-lg flex justify-center items-center flex-col py-10"
            >
              <div className="w-[100px] h-[100px] bg-white rounded mb-2 p-2">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-contain rounded-t-lg mb-3"
                />
              </div>
              <h3 className="text-xl font-normal text-dark dark:text-slate-200 mb-3">
                {event.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheatreCategories;
