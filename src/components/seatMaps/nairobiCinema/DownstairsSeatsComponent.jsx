import {
  DownStairsLeftSection,
  DownStairsMiddleSection,
  DownStairsRightSection,
} from "@/components/";

const DownstairsSeatsComponent = () => {
  return (
    <div className="p-5 border border-gray/30 bg-gray0dark: dark:border-gray rounded-t-md">
      <div className="flex justify-center items-end md:gap-5">
        {/* Down Stairs Right Section */}
        <DownStairsLeftSection />

        {/* Down Stairs Middle Section */}
        <DownStairsMiddleSection />

        {/* Down Stairs Left Section */}
        <DownStairsRightSection />
      </div>

      {/* Downstairs */}
      <div className="flex justify-center items-center">
        <h5 className="uppercase font-bold text-primary dark:text-gray text-2xl">
          Downstairs
        </h5>
      </div>
    </div>
  );
};

export default DownstairsSeatsComponent;
