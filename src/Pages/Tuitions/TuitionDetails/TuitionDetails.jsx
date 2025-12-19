import React from "react";
import { BiCategory } from "react-icons/bi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { MdSubject } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Link, useLoaderData } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const TuitionDetails = () => {
  const tuition = useLoaderData();
  const { _id } = tuition;
  const { user } = useAuth();
  console.log(tuition);

  return (
    <div className="w-11/12 mx-auto my-5 ">
      <div className="md:flex gap-8">
        <div className="flex-3 bg-white px-7 md:px-15 py-10 rounded-md mb-5 shadow-sm">
          <div className="mb-8">
            <h2 className="text-accent font-semibold text-3xl">
              Student Informations
            </h2>
          </div>
          {/* Informations */}
          <div className="grid md:grid-cols-3 gap-4 grid-cols-2">
            <div className="flex gap-2 items-start mb-5 ">
              <div className="mt-1 text-accent">
                <BiCategory />
              </div>
              <div>
                <h5 className="text-lg text-[#757575] font-primary font-medium mb-1">
                  Category
                </h5>
                <p className="text-md text-[#757575] font-primary">
                  {tuition.category}
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-start mb-5 ">
              <div className="mt-1 text-accent">
                <MdSubject />
              </div>
              <div>
                <h5 className="text-lg text-[#757575] font-primary font-medium mb-1">
                  Subject
                </h5>
                <p className="text-md text-[#757575] font-primary">
                  Bangla medium
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-start mb-5 ">
              <div className="mt-1 text-accent">
                <SlCalender />
              </div>
              <div>
                <h5 className="text-lg text-[#757575] font-primary font-medium mb-1">
                  Per Week
                </h5>
                <p className="text-md text-[#757575] font-primary">
                  Bangla medium
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-start mb-5 ">
              <div className="mt-1 text-accent">
                <BsGenderAmbiguous />
              </div>
              <div>
                <h5 className="text-lg text-[#757575] font-primary font-medium mb-1">
                  Tutor Gender
                </h5>
                <p className="text-md text-[#757575] font-primary">
                  Bangla medium
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-start mb-5 ">
              <div className="mt-1 text-accent">
                <FaRegMoneyBillAlt />
              </div>
              <div>
                <h5 className="text-lg text-[#757575] font-primary font-medium mb-1">
                  Salary
                </h5>
                <p className="text-md text-[#757575] font-primary">
                  Bangla medium
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-start mb-5 ">
              <div className="mt-1 text-accent">
                <IoIosTimer />
              </div>
              <div>
                <h5 className="text-lg text-[#757575] font-primary font-medium mb-1">
                  Tutoring Time
                </h5>
                <p className="text-md text-[#757575] font-primary">
                  Bangla medium
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-md h-fit p-10 space-y-3 shadow-sm">
          <div className="flex flex-col items-center ">
            <Link
              to="/contact"
              className="btn bg-black text-white border-black w-full"
            >
              Get Direction
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <button className="btn bg-accent text-white border-[#e5e5e5] w-full ">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitionDetails;
