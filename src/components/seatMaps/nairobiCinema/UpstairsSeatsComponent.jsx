import {
  UpstairsFrontRowLeftSection,
  UpstairsFrontRowMiddleSection,
  UpstairsFrontRowRightSection,
  UpstairsBackRowLeftSection,
  UpstairsBackRowMiddleSection,
  UpstairsBackRowRightSection,
} from "@/components";

const UpstairsSeatsComponent = () => {
  return (
    <div className="p-5 dark:border dark:border-gray rounded-b-md dark:bg-gray bg-primary">
      {/* Upstairs */}
      <div className="flex justify-center items-center">
        <h5 className="uppercase font-bold text-white dark:text-darkGray text-2xl">
          Upstairs
        </h5>
      </div>

      {/* Front Row Section */}
      <div className="flex justify-center items-end md:gap-16 mb-10">
        {/* Upstairs Front Row Left Section */}
        <UpstairsFrontRowLeftSection />

        {/* Upstairs Front Row Middle Section */}
        <UpstairsFrontRowMiddleSection />

        {/* Upstairs Front Row Right Section */}
        <UpstairsFrontRowRightSection />
      </div>

      {/* Back Row Section */}
      <div className="flex justify-center items-start md:gap-5">
        {/* Upstairs Back Row Left Section */}
        <UpstairsBackRowLeftSection />

        {/* Upstairs Back Row Middle Section */}
        <UpstairsBackRowMiddleSection />

        {/* Upstairs Back Row Right Section */}
        <UpstairsBackRowRightSection />
      </div>
    </div>
  );
};

export default UpstairsSeatsComponent;
