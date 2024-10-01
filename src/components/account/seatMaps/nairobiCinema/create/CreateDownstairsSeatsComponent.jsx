import {
  CreateDownStairsLeftSection,
  CreateDownStairsMiddleSection,
  CreateDownStairsRightSection,
} from "@/components/";

const CreateDownstairsSeatsComponent = () => {
  return (
    <div className="p-5 border border-gray/30 bg-gray0dark: dark:border-gray rounded-t-md">
      <div className="flex justify-center items-end md:gap-5">
        {/* Down Stairs Right Section */}
        <CreateDownStairsLeftSection />

        {/* Down Stairs Middle Section */}
        <CreateDownStairsMiddleSection />

        {/* Down Stairs Left Section */}
        <CreateDownStairsRightSection />
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

export default CreateDownstairsSeatsComponent;
