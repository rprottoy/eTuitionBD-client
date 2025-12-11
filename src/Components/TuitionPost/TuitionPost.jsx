import React from "react";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaRegMoneyBillAlt, FaTransgender } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";
import { MdSubject } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const TuitionPost = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 ">
        {/* 1st card */}
        <div className="rounded-lg p-7 bg-base-200">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-2xl font-medium font-primary text-[#2d3748]">
              Class 8
            </h4>
            <p className="text-[#757575] text-xl">Job Id: </p>
          </div>
          <div className="mb-5">
            <p className="flex items-center gap-2 text-xl font-medium text-[#2d3748]">
              <span>
                <FaLocationDot />
              </span>{" "}
              Location
            </p>
          </div>
          {/* subject, per week etc */}
          <div className=" grid md:grid-cols-3 grid-cols-2 justify-between">
            <div className="mb-5 ">
              <div className="flex items-start gap-2">
                <div className="mt-1 text-accent">
                  <MdSubject />
                </div>
                <div>
                  <h4 className="text-lg text-[#757575] font-primary font-medium mb-1">
                    Subject
                  </h4>
                  <p className="text-md text-[#757575] font-primary ">Maths</p>
                </div>
              </div>
            </div>
            {/* 2nd */}
            <div className="mb-5 ">
              <div className="flex items-start gap-2">
                <div className="mt-1 text-accent">
                  <SlCalender />
                </div>
                <div>
                  <h4 className="text-lg text-[#757575] font-primary font-medium mb-1">
                    Per Week
                  </h4>
                  <p className="text-md text-[#757575] font-primary ">4 Days</p>
                </div>
              </div>
            </div>
            {/* 3rd */}
            <div className="mb-5">
              <div className="flex items-start gap-2">
                <div className="mt-1 text-accent">
                  <BsGenderAmbiguous />
                </div>
                <div>
                  <h4 className="text-lg text-[#757575] font-primary font-medium mb-1">
                    Tutor Gender
                  </h4>
                  <p className="text-md text-[#757575] font-primary ">Female</p>
                </div>
              </div>
            </div>
            {/* 4th */}
            <div className="mb-5">
              <div className="flex items-start gap-2">
                <div className="mt-1 text-accent">
                  <FaRegMoneyBillAlt />
                </div>
                <div>
                  <h4 className="text-lg text-[#757575] font-primary font-medium mb-1">
                    Salary
                  </h4>
                  <p className="text-md text-[#757575] font-primary ">
                    4000 Taka
                  </p>
                </div>
              </div>
            </div>
            {/* 5th */}
            <div className="mb-5">
              <div className="flex items-start gap-2">
                <div className="mt-1 text-accent">
                  <IoIosTimer />
                </div>
                <div>
                  <h4 className="text-lg text-[#757575] font-primary font-medium mb-1">
                    Tutoring Time
                  </h4>
                  <p className="text-md text-[#757575] font-primary ">4 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 1st card end */}
      </div>
    </div>
  );
};

export default TuitionPost;
