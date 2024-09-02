import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import XIcon from "@/assets/X-icon-dark.svg";
import { PrimaryButton, UniversalButton } from "@/components";

const Footer = () => {
  return (
    <div className="bg-primary dark:bg-darkGray border-t border-[#ccc] dark:border-gray/30">
      {/* Top footer section */}
      <div className="container mx-auto py-5 md:py-20 border-b border-[#ccc] dark:border-gray/30">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {/* Left Section */}
          <div className="col-span-2">
            <img
              src="/images/kitft-logo-dark.png"
              alt=""
              className="w-[100px] md:w-[150px]"
            />
            <p className="text-slate-100 mt-4 text-sm hidden">
              Immerse yourself in the vibrant world of Kenyan theatre and
              discover the rich cultural heritage of our nation through
              captivating performances.
            </p>
          </div>

          {/* Middle Section */}
          <div className="hidden md:block">
            <h1 className="text-white text-[20px] font-bold">Resources</h1>
            <div className="flex flex-col mt-4 space-y-2">
              <Link
                to="/user-guide"
                className="text-slate-100 dark:text-gray hover:text-white text-sm"
              >
                User Guides
              </Link>
              <Link
                to="/help-center"
                className="text-slate-100 dark:text-gray hover:text-white text-sm"
              >
                Help Center
              </Link>
              {/* <Link
                to="/partners"
                className="text-slate-100 hover:text-white text-sm"
              >
                Partners
              </Link>
              <Link
                to="/taxes"
                className="text-slate-100 hover:text-white text-sm"
              >
                Taxes
              </Link> */}
            </div>
          </div>

          {/* Middle Section */}
          <div className="hidden md:block">
            <h1 className="text-white text-[20px] font-bold">Company</h1>
            <div className="flex flex-col mt-4 space-y-2">
              <Link
                to="/about-us"
                className="text-slate-100 dark:text-gray hover:text-white text-sm"
              >
                About
              </Link>
              <Link
                to="/auth-login"
                className="text-slate-100 dark:text-gray hover:text-white text-sm"
              >
                Careers
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-3 hidden md:block">
            <h1 className="text-white text-[20px] font-bold">Stay in loop</h1>
            <p className="text-slate-100 dark:text-gray mt-4 text-sm">
              Subscribe to our newsletter to receive updates on upcoming events,
              performances, and exclusive offers.
            </p>

            <div className="flex mt-4 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-b border-gray/50 text-white outline-none w-full"
              />
              <UniversalButton title="Subscribe" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="flex flex-col gap-3 md:flex-row justify-between items-center py-8 container mx-auto">
        {/* Select Language */}
        {/* <div className="flex items-center space-x-4">
          <p className="text-slate-100 text-sm">Select Language:</p>
          <select
            name="language"
            id="language"
            className="bg-transparent border-b-2 text-sm border-slate-100 text-white outline-none"
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
          </select>
        </div> */}

        {/* Links */}
        <div className="flex items-center space-x-1 md:space-x-4">
          <p className="text-slate-100 text-xs md:text-base">
            © 2024 Theater Ke
          </p>{" "}
          <span className="text-white ">&#8226;</span>
          <Link
            to="/terms-conditions"
            className="text-slate-100 text-xs md:text-base"
          >
            Terms & Conditions
          </Link>
          <span className="text-white text-xs">&#8226;</span>
          <Link
            to="/privacy-policy"
            className="text-slate-100 text-xs md:text-base"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-2">
          <Link to="" className="text-slate-100">
            <FaFacebook className="text-2xl" />
          </Link>
          <Link to="" className="text-slate-100">
            <img src={XIcon} className="w-[20px]" />
          </Link>
          <Link to="" className="text-slate-100">
            <FaInstagram className="text-2xl" />
          </Link>
          <Link to="" className="text-slate-100">
            <FaLinkedin className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
