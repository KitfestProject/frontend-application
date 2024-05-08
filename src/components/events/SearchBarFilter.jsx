import React from "react";
import { Link } from "react-router-dom";

const SearchBarFilter = ({ categories }) => {
  return (
    <div className="w-full md:w-[20%] bg-[#ffe3dc] rounded-md dark:bg-darkGray h-auto overflow-y-scroll">
      <div className="p-4">
        <div className="mb-4 pb-4 border-b border-white dark:border-darkBlueHover">
          <h3 className="text-xl font-[700] dark:text-slate-100">Filter</h3>
        </div>

        <div className="flex flex-col gap-4">
          {/* Filter by categories */}
          <div className="mb-2 pb-4 border-b border-white dark:border-darkBlueHover">
            <h4 className="text-base font-[700] dark:text-slate-100 mb-2">
              Categories
            </h4>
            <div className="flex flex-col gap-3">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 checkbox-container"
                >
                  <label
                    htmlFor={`terms{${index}}`}
                    className="dark:text-white"
                  >
                    <input
                      type="checkbox"
                      id={`terms{${index}}`}
                      name="terms"
                      className="w-5 h-5"
                    />
                    <span className="checkmark"></span>
                    {category.title}
                  </label>
                </div>
              ))}

              {/* See More */}
              <Link className="text-primary">Show More</Link>
            </div>
          </div>

          {/* Filter by Price */}
          <div className="mb-2 pb-4 border-b border-white dark:border-darkBlueHover">
            <h4 className="text-base font-[700] dark:text-slate-100 mb-2">
              Price
            </h4>

            <div className="flex justify-between">
              {/* Free Events */}
              <div className="flex items-center space-x-2 checkbox-container">
                <label htmlFor="free" className="dark:text-white">
                  <input
                    type="checkbox"
                    id="free"
                    name="terms"
                    className="w-5 h-5"
                  />
                  <span className="checkmark"></span>
                  Free
                </label>
              </div>

              {/* Paid Events */}
              <div className="flex items-center space-x-2 checkbox-container mr-10">
                <label htmlFor="paid" className="dark:text-white ">
                  <input
                    type="checkbox"
                    id="paid"
                    name="terms"
                    className="w-5 h-5"
                  />
                  <span className="checkmark"></span>
                  Paid
                </label>
              </div>
            </div>
          </div>

          {/* Filter by event date */}
          <div className="mb-2 pb-4 border-b border-white dark:border-darkBlueHover">
            <h4 className="text-base font-[700] dark:text-slate-100 mb-2">
              Event Date
            </h4>

            <div className="flex flex-col gap-2">
              {/* Today */}
              <div className="flex items-center space-x-2 checkbox-container mr-10">
                <label htmlFor="today" className="dark:text-white">
                  <input
                    type="checkbox"
                    id="today"
                    name="terms"
                    className="w-5 h-5"
                  />
                  <span className="checkmark"></span>
                  Today
                </label>
              </div>

              {/* Tomorrow */}
              <div className="flex items-center space-x-2 checkbox-container mr-10">
                <label htmlFor="tomorrow" className="dark:text-white">
                  <input
                    type="checkbox"
                    id="tomorrow"
                    name="terms"
                    className="w-5 h-5"
                  />
                  <span className="checkmark"></span>
                  Tomorrow
                </label>
              </div>

              {/* This Week */}
              <div className="flex items-center space-x-2 checkbox-container mr-10">
                <label htmlFor="this_Week" className="dark:text-white">
                  <input
                    type="checkbox"
                    id="this_Week"
                    name="terms"
                    className="w-5 h-5"
                  />
                  <span className="checkmark"></span>
                  This Week
                </label>
              </div>

              {/* This Month */}
              <div className="flex items-center space-x-2 checkbox-container mr-10">
                <label htmlFor="this_month" className="dark:text-white">
                  <input
                    type="checkbox"
                    id="this_month"
                    name="terms"
                    className="w-5 h-5"
                  />
                  <span className="checkmark"></span>
                  This Month
                </label>
              </div>
            </div>
          </div>

          {/* Filter by location */}
          <div className="mb-2 pb-4 border-b border-white dark:border-darkBlueHover">
            <h4 className="text-base font-[700] dark:text-slate-100 mb-2">
              Event Location
            </h4>

            <div className="flex flex-col gap-2">
              {/* Nairobi */}
              <div className="flex items-center space-x-2 checkbox-container mr-10">
                <label htmlFor="nairobi" className="dark:text-white">
                  <input
                    type="checkbox"
                    id="nairobi"
                    name="terms"
                    className="w-5 h-5"
                  />
                  <span className="checkmark"></span>
                  Nairobi
                </label>
              </div>

              {/* Kisumu */}
              <div className="flex items-center space-x-2 checkbox-container mr-10">
                <label htmlFor="kisumu" className="dark:text-white">
                  <input
                    type="checkbox"
                    id="kisumu"
                    name="terms"
                    className="w-5 h-5"
                  />
                  <span className="checkmark"></span>
                  Kisumu
                </label>
              </div>

              {/* Mombasa */}
              <div className="flex items-center space-x-2 checkbox-container mr-10">
                <label htmlFor="mombasa" className="dark:text-white">
                  <input
                    type="checkbox"
                    id="mombasa"
                    name="terms"
                    className="w-5 h-5"
                  />
                  <span className="checkmark"></span>
                  Mombasa
                </label>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center pb-4">
            <button className="bg-transparent py-2 px-5 rounded-md hover:bg-darkGray hover:text-slate-100">
              Clear All
            </button>
            <button className="bg-secondary text-white py-2 px-5 rounded-md hover:bg-darkGray">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBarFilter;
