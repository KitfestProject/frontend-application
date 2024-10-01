import {
  CreateUpstairsFrontRowLeftSection,
  CreateUpstairsFrontRowMiddleSection,
  CreateUpstairsFrontRowRightSection,
  CreateUpstairsBackRowLeftSection,
  CreateUpstairsBackRowMiddleSection,
  CreateUpstairsBackRowRightSection,
} from "@/components";

const CreateUpstairsSeatsComponent = () => {
  return (
    <div className="p-5 dark:border dark:border-gray rounded-b-md dark:bg-gray bg-primary">
      {/* Upstairs */}
      <div className="flex justify-center items-center">
        <h5 className="uppercase font-bold text-white dark:text-darkGray text-2xl">
          Upstairs
        </h5>
      </div>

      {/* Front Row Section */}
      <div className="flex justify-center items-start md:gap-10 mb-10">
        {/* Upstairs Front Row Left Section */}
        <CreateUpstairsFrontRowLeftSection />

        {/* Upstairs Front Row Middle Section */}
        <CreateUpstairsFrontRowMiddleSection />

        {/* Upstairs Front Row Right Section */}
        <CreateUpstairsFrontRowRightSection />
      </div>

      {/* Back Row Section */}
      <div className="flex justify-center items-start md:gap-10">
        {/* Upstairs Back Row Left Section */}
        <CreateUpstairsBackRowLeftSection />

        {/* Upstairs Back Row Middle Section */}
        <CreateUpstairsBackRowMiddleSection />

        {/* Upstairs Back Row Right Section */}
        <CreateUpstairsBackRowRightSection />
      </div>
    </div>
  );
};

export default CreateUpstairsSeatsComponent;
