import { BiInfoCircle } from "react-icons/bi";
import useTimeAgo from "@/hooks/useTimeAgo";
import { useContext } from "react";
import { CreateBlogFromContext } from "@/context/CreateBlogFromContext";

const CreateBlogSidebar = ({ title }) => {
  const { formatFullDate } = useTimeAgo();
  const {
    isTagsFilled,
    isTitleFilled,
    isContentFilled,
    isCategoryFilled,
    isCoverImageFilled,
    isDescriptionFilled,
    isAllInformationFilled,
  } = useContext(CreateBlogFromContext);
  return (
    <div className="w-[25%] hidden md:block">
      <div className="sticky top-[120px] dark:border dark:border-gray/30 rounded-md p-3">
        <h1 className="text-2xl font-bold text-dark dark:text-slate-100 mb-5">
          {title}
        </h1>

        <div className="bg-[#F5F5F5] dark:bg-darkGray rounded-md pb-3">
          <div className="p-5 pb-3 border-b border-slate-300 dark:border-gray">
            <p className="text-gray text-sm">Last Updated</p>
            <p className="text-primary font-bold text-sm dark:text-secondary">
              {formatFullDate(new Date())}
            </p>

            <p className="text-gray mt-5 text-sm">Blog Status</p>

            <p className="text-yellow-600 font-bold text-sm dark:text-yellow-600">
              Draft
            </p>
          </div>

          <div className="p-5 pb-3 border-b mb-3 border-slate-300 dark:border-gray">
            <h1 className="text-md font-bold">Blog Information</h1>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Cover Image
              {isCoverImageFilled ? (
                <BiCheckCircleCircle className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2 text-xl" />
              )}
            </p>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Title
              {isTitleFilled ? (
                <BiCheckCircle className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2 text-xl" />
              )}
            </p>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Description
              {isDescriptionFilled ? (
                <BiCheckCircle className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2 text-xl" />
              )}
            </p>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Category
              {isCategoryFilled ? (
                <BiCheckCircle className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2 text-xl" />
              )}
            </p>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Tags
              {isTagsFilled ? (
                <BiCheckCircle className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2 text-xl" />
              )}
            </p>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Content
              {isContentFilled ? (
                <BiCheckCircle className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2 text-xl" />
              )}
            </p>
          </div>

          <div className="p-5 pb-3">
            <h1 className="text-md font-bold">Publish Blog</h1>

            <p className="text-gray dark:text-gray  text-sm mt-5 flex justify-between items-center">
              Review and publish
              {isAllInformationFilled ? (
                <BiCheckCircle className="text-green-600 text-xl ml-2" />
              ) : (
                <BiInfoCircle className="text-red-600 ml-2 text-xl" />
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogSidebar;
