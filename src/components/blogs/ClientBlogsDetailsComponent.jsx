import { useContext } from "react";
import ProfileAvatar from "/images/profile-avatar.svg";
import { StateContext } from "@/context/ContextProvider";
import useTimeAgo from "@/hooks/useTimeAgo";

const ClientBlogsDetailsComponent = () => {
  const { blogDetails } = useContext(StateContext);
  const { formatBlogDate } = useTimeAgo();

  return (
    <div className="dark:bg-darkGray">
      <div className="container pb-20">
        {/* Blog Image */}
        <div className="w-full md:h-[480px] bg-cover bg-center bg-no-repeat my-10 bg-primary">
          <img
            className="w-full h-[200px] md:h-full object-cover rounded-md"
            src={blogDetails?.cover_image}
            alt={blogDetails?.name}
          />
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[70%]">
            {/* Blog Title */}
            <div className="max-w-[500px]">
              <h1 className="text-4xl font-bold tracking-tighter mt-5">
                {blogDetails?.name}
              </h1>
            </div>

            {/* Blog Author */}
            <p className="text-sm text-gray mt-3 dark:text-gray">
              Posted on {formatBlogDate(blogDetails?.created_at)}
            </p>

            {/* Blog Content Area */}
            <div
              dangerouslySetInnerHTML={{
                __html: blogDetails?.content,
              }}
              className="pr-5 border-b border-gray/30 py-10"
            />

            {/* Author */}
            <div className="">
              <div className="flex items-center mt-5">
                <div className="w-[80px] md:w-12 h-12 bg-cover bg-center rounded-full">
                  <img
                    src={ProfileAvatar}
                    alt="Author Image"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="ml-3">
                  <h5 className="font-bold">John Doe</h5>
                  <p className="text-sm text-gray">
                    By Jane Wangui Wangui particularly enjoys musicals and has a
                    passion for writing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[30%]">
            {/* Stay Updated */}
            <div className="">
              <div className="bg-white shadow-md dark:bg-darkGray rounded-md p-5 mt-5 dark:border dark:border-gray/30">
                <h5 className="font-bold text-lg">Stay Updated</h5>
                <p className="text-gray mt-3">
                  Be the first to know all the latest theater news with the
                  Theater KE newsletter. Subscribe to our newsletter to get our
                  latest news.
                </p>

                <form action="" className="my-5">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray/50 p-2 rounded outline-none focus:outline-none dark:bg-darkGray dark:text-white placeholder:italic font-thin"
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary text-white mt-3 rounded-md p-2"
                  >
                    Subscribe
                  </button>
                </form>

                <small className="text-gray leading-tight">
                  Sign in now to receive updates on news, shows, exclusive
                  discounts and more. We respect your privacy and you can
                  unsubscribe any time, though we hope you will stick around.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientBlogsDetailsComponent;
