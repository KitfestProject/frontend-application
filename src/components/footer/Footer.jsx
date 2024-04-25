import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import PrimaryButton from "../../components/utils/PrimaryButton";
import UniversalButton from "../../components/utils/UniversalButton";

const Footer = () => {
  return (
    <div className="bg-primary dark:bg-darkGray">
      {/* Top footer section */}
      <div className="container mx-auto py-5 md:py-20 border-b border-slate-300">
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
            <h1 className="text-white text-[20px] font-bold">Categories</h1>
            <div className="flex flex-col mt-4 space-y-2">
              <a href="#" className="text-slate-100 hover:text-white text-sm">
                All
              </a>
              <a href="#" className="text-slate-100 hover:text-white text-sm">
                Plays
              </a>
              <a href="#" className="text-slate-100 hover:text-white text-sm">
                Musicals
              </a>
              <a href="#" className="text-slate-100 hover:text-white text-sm">
                Poetry
              </a>
              <a href="#" className="text-slate-100 hover:text-white text-sm">
                Dance
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="hidden md:block">
            <h1 className="text-white text-[20px] font-bold">Resources</h1>
            <div className="flex flex-col mt-4 space-y-2">
              <a href="#" className="text-slate-100 hover:text-white text-sm">
                User Guides
              </a>
              <a href="#" className="text-slate-100 hover:text-white text-sm">
                Help Center
              </a>
              <a href="#" className="text-slate-100 hover:text-white text-sm">
                Partners
              </a>
              <a href="#" className="text-slate-100 hover:text-white text-sm">
                Taxes
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="hidden md:block">
            <h1 className="text-white text-[20px] font-bold">Company</h1>
            <div className="flex flex-col mt-4 space-y-2">
              <a href="#" className="text-slate-100 hover:text-white text-sm">
                About
              </a>
              <a href="#" className="text-slate-100 hover:text-white text-sm">
                Join Us
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-2 hidden md:block">
            <h1 className="text-white text-[20px] font-bold">Stay in loop</h1>
            <p className="text-slate-100 mt-4 text-sm">
              Subscribe to our newsletter to receive updates on upcoming events,
              performances, and exclusive offers.
            </p>

            <div className="flex mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-b-2 border-slate-100 text-white outline-none"
              />
              <UniversalButton title="Subscribe" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="flex flex-col gap-3 md:flex-row justify-between items-center py-8 container mx-auto">
        {/* Select Language */}
        <div className="flex items-center space-x-4">
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
        </div>

        {/* Links */}
        <div className="flex items-center space-x-1 md:space-x-4">
          <p className="text-slate-100 text-xs">© 2024 Theater Ke</p>{" "}
          <span className="text-white ">&#8226;</span>
          <p className="text-slate-100 text-xs">Terms & Conditions</p>
          <span className="text-white text-xs">&#8226;</span>
          <p className="text-slate-100 text-xs">Privacy Policy</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-2">
          <a href="#" className="text-slate-100">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="#" className="text-slate-100">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="#" className="text-slate-100">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="#" className="text-slate-100">
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
