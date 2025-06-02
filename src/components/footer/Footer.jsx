import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { UniversalButton } from "@/components";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
            <p className="text-slate-100 mt-4 text-sm ">
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
            </div>
          </div>

          {/* Middle Section - Important Links */}
          <div className="hidden md:block">
            <h1 className="text-white text-[20px] font-bold">
              Important Links
            </h1>
            <div className="flex flex-col mt-4 space-y-2">
              <Link
                to="/"
                className="text-slate-100 dark:text-gray hover:text-white text-sm"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="text-slate-100 dark:text-gray hover:text-white text-sm"
              >
                About
              </Link>
              <Link
                to="/venues"
                className="text-slate-100 dark:text-gray hover:text-white text-sm"
              >
                Venues
              </Link>
              <Link
                to="/events"
                className="text-slate-100 dark:text-gray hover:text-white text-sm"
              >
                Events
              </Link>
              <Link
                to="/blog"
                className="text-slate-100 dark:text-gray hover:text-white text-sm"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-slate-100 dark:text-gray hover:text-white text-sm"
              >
                Contact
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
        {/* Links */}
        <div className="flex items-center space-x-1 md:space-x-4">
          <p className="text-slate-100 text-xs md:text-base">
            © {currentYear} Theater Ke
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
          <a
            href="https://web.facebook.com/kitfestke"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-xl hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://www.instagram.com/kitfest_ke/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl hover:text-pink-600 transition-colors" />
          </a>
          <a
            href="https://www.youtube.com/@kitfest_ke"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-xl hover:text-red-600 transition-colors" />
          </a>
          <a
            href="https://x.com/kitfest_ke"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="text-xl hover:text-black transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/company/kitfest-trust/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl hover:text-blue-600 transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
