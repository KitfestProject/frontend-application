import { Loader, PrimaryButton, MessageInput } from "@/components";
import { useEffect, useState } from "react";
import useServerSideQueries from "@/hooks/useServerSideQueries";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const { saveContactInfo } = useServerSideQueries();

  const initialContactFormData = {
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
  const [contactFormData, setContactFormData] = useState(
    initialContactFormData
  );
  const handleSetMessage = (ev) => {
    const message = ev.target.value;
    setContactFormData((prev) => ({
      ...prev,
      message: message,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setContactFormData({ ...contactFormData, [name]: value });
  };

  const handleSendMessage = async () => {
    setLoading(true);
    const response = await saveContactInfo(contactFormData);

    const { success, message, data } = response;

    console.log(data);

    if (!success) {
      setLoading(false);
      console.log(message);
      return;
    }

    setLoading(false);
    setContactFormData(initialContactFormData);
  };

  return (
    <section className="container mx-auto">
      <div className="flex">
        {/* Map Area */}
        <div className="flex-1 my-10">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.7364888264196!2d36.81320672522229!3d-1.2783816763556086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f178b29827375%3A0xc2d7a4329db9f683!2sKenya%20International%20Theatre%20Festival%20(KITFest)!5e0!3m2!1sen!2sng!4v1716548944373!5m2!1sen!2sng"
            width="100%"
            height="100%"
            loading="lazy"
            className="rounded-l-lg"
          ></iframe>
        </div>

        {/* Form Input Area */}
        <div className="w-full md:max-w-[600px] my-10 bg-white dark:bg-darkGray p-3 md:p-20 rounded-r-lg shadow-md">
          <h1 className="text-3xl font-bold text-primary dark:text-slate-100 mb-3">
            Contact Us
          </h1>
          <p className="dark:text-slate-200">
            Get in touch with us or let us know how we can be of assistance.
          </p>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-5">
              {/* Full Name Input */}
              <div className="">
                <label
                  htmlFor="fullName"
                  className="text-dark font-semibold dark:text-gray text-sm"
                >
                  Full Name
                </label>{" "}
                <p className="text-gray dark:text-gray text-xs font-semibold mb-2">
                  Provide your full name i.e (John Doe)
                </p>
                <input
                  type="text"
                  name="fullName"
                  value={contactFormData.fullName}
                  onChange={handleInputChange}
                  className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-[15px]"
                />
              </div>

              {/* Email Address Input */}
              <div className="">
                <label
                  htmlFor="preferenceIcon"
                  className="text-dark font-semibold dark:text-gray text-sm"
                >
                  Email Address
                </label>{" "}
                <p className="text-gray dark:text-gray text-xs font-semibold mb-2">
                  Provide your email address i.e (example@gmail.com)
                </p>
                <input
                  type="email"
                  name="email"
                  value={contactFormData.email}
                  onChange={handleInputChange}
                  className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-[15px]"
                />
              </div>

              {/* Phone Number Input */}
              <div className="">
                <label
                  htmlFor="phone"
                  className="text-dark font-semibold dark:text-gray text-sm"
                >
                  Phone Number
                </label>{" "}
                <p className="text-gray dark:text-gray text-xs font-semibold mb-2">
                  Provide your phone number i.e (07********)
                </p>
                <input
                  type="phone"
                  name="phone"
                  value={contactFormData.phone}
                  onChange={handleInputChange}
                  className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-[15px]"
                />
              </div>

              {/* Subject Input */}
              <div className="">
                <label
                  htmlFor="subject"
                  className="text-dark font-semibold dark:text-gray text-sm"
                >
                  Subject
                </label>{" "}
                <p className="text-gray dark:text-gray text-xs font-semibold mb-2">
                  Provide your subject here...
                </p>
                <input
                  type="text"
                  name="subject"
                  value={contactFormData.subject}
                  onChange={handleInputChange}
                  className="w-full text-primary bg-[#F5F5F5] dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none text-[15px]"
                />
              </div>

              {/* Message Input */}
              <div className="">
                <label
                  htmlFor="message"
                  className="text-dark font-semibold dark:text-gray text-sm"
                >
                  Message
                </label>{" "}
                <p className="text-gray dark:text-gray text-xs font-semibold mb-2">
                  Enter your message body below
                </p>
                <MessageInput
                  value={contactFormData.message}
                  onChange={handleSetMessage}
                />
              </div>

              {/* Login Button */}
              <button
                onClick={handleSendMessage}
                className={`btn bg-primary text-slate-100 hover:bg-darkGray dark:text-white dark:bg-darkGray hover:border-primary py-2 px-5 md:px-8 rounded cursor-pointer transition ease-in-out delay-150 text-[18px] font-normal tracking-tighter w-full flex justify-center items-center dark:border dark:border-gray/30`}
              >
                {loading ? <Loader /> : "Send Message"}
              </button>
            </div>
          </div>

          {/* Debugging */}
          {/* <div className="text-gray text-xs mt-5">
            <pre>{JSON.stringify(contactFormData, null, 2)}</pre>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
