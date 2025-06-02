import { BiSolidPhone, BiSolidMap } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TopNavigationMenu = () => {
  return (
    <div className="hidden bg-primary dark:bg-dark dark:border-b dark:border-gray/30 w-full text-slate-100 md:flex justify-center items-center p-3 z-50">
      <div className="flex gap-4">
        {/* Company Phone Number */}
        <div className="flex gap-2 items-center">
          <BiSolidPhone className="text-xl" />
          <p>
            <a href="tel:+254794785768">(+254) 794 785768</a>
          </p>
        </div>

        {/* Separator */}
        <span className="text-white ">&#8226;</span>

        {/* Company Email - Icon only */}
        <div className="flex gap-2 items-center">
          <a href="mailto:theatreke@kitfest.co.ke">
            <HiOutlineMail className="text-xl" />
          </a>
        </div>

        {/* Separator */}
        <span className="text-white ">&#8226;</span>

        {/* Company Address */}
        <div className="flex gap-2 items-center">
          <BiSolidMap className="text-xl" />
          <p>Maendeleo House, Loita Street, Nairobi</p>
        </div>

        {/* Separator */}
        <span className="text-white ">&#8226;</span>

        {/* Social Media Icons with links */}
        <div className="flex gap-4">
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

export default TopNavigationMenu;
