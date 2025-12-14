import React from "react";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="w-full bg-base-200 mb-30">
        <div>
          <h2 className="text-[#2d3748] text-center font-primary font-bold text-3xl md:text-4xl py-10">
            Why Choose <span className="text-accent">Us</span>
          </h2>
        </div>
        <div className="py-10 md:max-w-10/12 mx-auto text-white ">
          <div className="">
            <div className="  md:grid md:grid-cols-4">
              <div className="space-y-2 text-center p-4 flex flex-col items-center md:w-[300px] h-fit border-r  border-gray-500">
                <img
                  className="rounded-full w-25 brightness-90"
                  src=""
                  alt=""
                />
                <h3 className="font-primary font-semibold text-xl text-[#2d3748]">
                  Easy Booking
                </h3>
                <p className="font-secondary text-[#757575]">
                  Book your car in minutes—simple search, transparent pricing,
                  instant confirmation, and flexible pickup options.
                </p>
              </div>
              <div className="space-y-2 text-center p-4 flex flex-col items-center md:w-[300px] h-fit border-r border-gray-500">
                <img
                  className="rounded-full w-25 brightness-90"
                  src=""
                  alt=""
                />
                <h3 className="font-primary font-semibold text-xl text-[#2d3748]">
                  Affordable Rates
                </h3>
                <p className="font-secondary text-[#757575]">
                  Enjoy budget-friendly rates with no hidden fees—compare
                  options, unlock discounts, and save on every rental.
                </p>
              </div>
              <div className="space-y-2 text-center p-4 flex flex-col items-center md:w-[300px] h-fit border-r border-gray-500">
                <img
                  className="rounded-full w-25 brightness-80"
                  src=""
                  alt=""
                />
                <h3 className="font-primary font-semibold text-xl text-[#2d3748]">
                  Trusted Providers
                </h3>
                <p className="font-secondary text-[#757575]">
                  Rent with confidence—vetted partners, verified reviews, and
                  secure payments ensure reliable rides every time.
                </p>
              </div>
              <div className="space-y-2 text-center p-4 flex flex-col items-center md:w-[300px] h-fit ">
                <img
                  className="rounded-full w-25 brightness-90"
                  src=""
                  alt=""
                />
                <h3 className="font-primary font-semibold text-xl text-[#2d3748]">
                  24/7 Support
                </h3>
                <p className="font-secondary text-[#757575]">
                  Book your car in minutes—simple search, transparent pricing,
                  instant confirmation, and flexible pickup options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
