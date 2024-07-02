import { BiSolidPhone, BiSolidMap } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TopNavigationMenu = () => {
  return (
    <div className="hidden bg-primary dark:bg-dark dark:border-b dark:border-gray/30 w-full text-slate-100 md:flex justify-center items-center p-3">
      <div className="flex gap-4">
        {/* Company Phone Number */}
        <div className="flex gap-2 items-center">
          <BiSolidPhone className="text-xl" />
          <p>123-456-7890</p>
        </div>

        {/* Separator */}
        <span className="text-white ">&#8226;</span>

        {/* Company Email */}
        <div className="flex gap-2 items-center">
          <HiOutlineMail className="text-xl" />
          <p>
            <a href="mailto:info@example.com">info@kitfest.com</a>
          </p>
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

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <FaFacebook className="text-xl" />
          <FaXTwitter className="text-xl" />
          <FaInstagram className="text-xl" />
          <FaLinkedin className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default TopNavigationMenu;
