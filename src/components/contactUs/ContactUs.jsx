import React from "react";
import { PrimaryButton } from "../../components";

const ContactUs = () => {
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
        <div className="max-w-[600px] my-10 bg-white dark:bg-darkGray p-20 rounded-r-lg shadow-md">
          <h1 className="text-3xl font-bold text-primary dark:text-slate-100 mb-3">Contact Us</h1>
          <p className="dark:text-slate-200">
            Get in touch with us or let us know how we can be of assistance.
          </p>

          <form className="mt-10">
            <div className="grid grid-cols-1 gap-6">
              {/* Full Name Input */}
              <div className="mb-2">
                <label
                  htmlFor="fullName"
                  className="block font-semibold dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full px-2 py-3 border-b border-primary focus:outline-none dark:border-slate-500 dark:bg-dark dark:text-white font-light placeholder:dark:text-slate-600"
                  placeholder="Provide your full name"
                />
              </div>

              {/* Username or email input */}
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block font-semibold dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-2 py-3 border-b border-primary focus:outline-none dark:border-slate-500 dark:bg-dark dark:text-white font-light placeholder:dark:text-slate-600"
                  placeholder="Example: email@gmail.com"
                />
              </div>

              {/* Phone Number Input */}
              <div className="mb-3">
                <label
                  htmlFor="phoneNumber"
                  className="block font-semibold dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="phone"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="w-full px-2 py-3 border-b border-primary focus:outline-none dark:border-slate-500 dark:bg-dark dark:text-white font-light placeholder:dark:text-slate-600"
                  placeholder="Provide your phone number"
                />
              </div>

              {/* Subject Input */}
              <div className="mb-2">
                <label
                  htmlFor="subject"
                  className="block font-semibold dark:text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-2 py-3 border-b border-primary focus:outline-none dark:border-slate-500 dark:bg-dark dark:text-white font-light placeholder:dark:text-slate-600"
                  placeholder="Provide a subject"
                />
              </div>

              {/* Message Input */}
              <div className="mb-3">
                <label
                  htmlFor="message"
                  className="block font-semibold dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-2 py-3 border-b border-primary focus:outline-none dark:border-slate-500 dark:bg-dark dark:text-white font-light placeholder:dark:text-slate-600"
                  placeholder="Enter your message"
                />
              </div>

              {/* Login Button */}
              <PrimaryButton
                title="Send Message"
                classes="w-full flex justify-center items-center"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
