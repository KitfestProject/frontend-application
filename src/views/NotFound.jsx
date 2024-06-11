import { FaCircleExclamation, FaArrowRightLong } from "react-icons/fa6";
import { DynamicHelmet, ThemeChanger } from "@/components";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen grid place-content-center">
      <DynamicHelmet
        title="Error: 404 - Page Not Found!"
        description="The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable."
      />

      <div className="bg-white dark:bg-darkGray p-10 max-w-[600px] shadow-md w-full rounded-md dark:text-slate-100 dark:border dark:border-slate-200">
        <div className="flex items-center justify-center gap-3 mb-5">
          <FaCircleExclamation className="text-3xl text-primary" />

          <h1 className="text-3xl font-bold text-primary dark:text-slate-100">
            Oops! 404
          </h1>
        </div>

        <div className="">
          <h2 className="text-lg font-semibold dark:text-slate-100">
            Something Went Wrong!
          </h2>
          <p className="text-gray-500 text-dark mb-3 dark:text-slate-100">
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
          </p>
          <p className="text-gray-500 text-dark mb-3 dark:text-slate-100">
            Here are a few things you can try:
          </p>

          <ul className="list-disc list-inside text-gray-500 text-dark mt-3 dark:text-slate-100">
            <li>Check the URL for typos</li>
            <li>Refresh the page</li>
            <li>Go back to the previous page</li>
          </ul>

          <div className="mt-5">
            <p className="text-gray-500 text-dark mb-3 dark:text-slate-100">
              If you continue to experience problems, please contact our support
              team at support{" "}
              <a
                href="mailto:theatreke@gmail.com"
                className="text-primary font-semibold"
              >
                theatreke@gmail.com.
              </a>{" "}
              Thank you for your patience and understanding.
            </p>

            <h5 className="text-gray-500 text-dark mb-3 text-lg font-semibold dark:text-slate-100">
              Keep the Theatre Alive!
            </h5>

            <p className="text-gray-500 text-dark mb-3 dark:text-slate-100">
              While you're here, why not browse our{" "}
              <a
                href="/"
                className="text-primary font-semibold hover:text-gray"
              >
                upcoming events?
              </a>{" "}
              We're always adding new and exciting performances.
            </p>

            <div className="w-full flex justify-center items-center mt-5">
              <button
                onClick={() => navigate("/")}
                className={`btn bg-primary text-slate-100 hover:bg-darkGray dark:text-white dark:bg-gray hover:border-primary py-2 px-5 md:px-8 rounded cursor-pointer transition ease-in-out delay-150 text-[18px] font-normal tracking-tighter flex justify-center items-center gap-1`}
              >
                Take Me Home
                <FaArrowRightLong className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ThemeChanger />
    </div>
  );
};

export default NotFound;
