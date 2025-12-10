import React from "react";
import tutor from "../../assets/470144693_9264558626941552_1336338024377071556_n.jpg";

const FeaturedInstructor = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="mt-10 text-center space-y-3 ">
        <h2 className="font-bold md:text-5xl text-4xl font-primary text-[#121212]">
          Our Featured <span className="text-accent">Instructors</span>
        </h2>
        <h3 className="font-secondary font-medium text-[#757575] text-3xl">
          Every Instructor is Professional and Highly Qualified
        </h3>
      </div>
      <div className="mt-10">
        <div className="md:w-[320px] w-full border border-gray-300 bg-white">
          <img
            className="object-center object-cover h-[250px] md:w-[320px] w-full rounded-lg p-2"
            src={tutor}
            alt=""
          />
          <div className="text-center space-y-1">
            <h3 className="font-semibold text-2xl font-primary text-[#121212]">
              Resalat Al Samin
            </h3>
            <p className="font-medium font-secondary text-lg text-[#757575]">
              Location
            </p>
            <div className="space-y-2">
              <div className="flex justify-between items-center px-4 font-medium text-[#757575]">
                <p>Mobile:</p>
                <p>+000 0000 0000</p>
              </div>
              <div className="flex justify-between items-center px-4 font-medium text-[#757575]">
                <p>Qualification:</p>
                <p>BSC/BUET</p>
              </div>
              <div className="flex justify-between items-center px-4 font-medium text-[#757575]">
                <p>Mobile:</p>
                <p>+000 0000 0000</p>
              </div>
            </div>
          </div>
        </div>
        {/* Extra cards starts from here */}
        <div className="md:w-[320px] w-full border border-gray-300 bg-white">
          <img
            className="object-center object-cover h-[250px] md:w-[320px] w-full rounded-lg p-2"
            src={tutor}
            alt=""
          />
          <div className="text-center space-y-1">
            <h3 className="font-semibold text-2xl font-primary text-[#121212]">
              Resalat Al Samin
            </h3>
            <p className="font-medium font-secondary text-lg text-[#757575]">
              Location
            </p>
            <div className="space-y-2">
              <div className="flex justify-between items-center px-4 font-medium text-[#757575]">
                <p>Mobile:</p>
                <p>+000 0000 0000</p>
              </div>
              <div className="flex justify-between items-center px-4 font-medium text-[#757575]">
                <p>Qualification:</p>
                <p>BSC/BUET</p>
              </div>
              <div className="flex justify-between items-center px-4 font-medium text-[#757575]">
                <p>Mobile:</p>
                <p>+000 0000 0000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[320px] w-full border border-gray-300 bg-white">
          <img
            className="object-center object-cover h-[250px] md:w-[320px] w-full rounded-lg p-2"
            src={tutor}
            alt=""
          />
          <div className="text-center space-y-1">
            <h3 className="font-semibold text-2xl font-primary text-[#121212]">
              Resalat Al Samin
            </h3>
            <p className="font-medium font-secondary text-lg text-[#757575]">
              Location
            </p>
            <div className="space-y-2">
              <div className="flex justify-between items-center px-4 font-medium text-[#757575]">
                <p>Mobile:</p>
                <p>+000 0000 0000</p>
              </div>
              <div className="flex justify-between items-center px-4 font-medium text-[#757575]">
                <p>Qualification:</p>
                <p>BSC/BUET</p>
              </div>
              <div className="flex justify-between items-center px-4 font-medium text-[#757575]">
                <p>Mobile:</p>
                <p>+000 0000 0000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[320px] w-full border border-gray-300 bg-white">
          <img
            className="object-center object-cover h-[250px] md:w-[320px] w-full rounded-lg p-2"
            src={tutor}
            alt=""
          />
          <div className="text-center space-y-1">
            <h3 className="font-semibold text-2xl font-primary text-[#121212]">
              Resalat Al Samin
            </h3>
            <p className="font-medium font-secondary text-lg text-[#757575]">
              Location
            </p>
            <div className="space-y-2">
              <div className="flex justify-between items-center px-4 font-medium text-[#757575]">
                <p>Mobile:</p>
                <p>+000 0000 0000</p>
              </div>
              <div className="flex justify-between items-center px-4 font-medium text-[#757575]">
                <p>Qualification:</p>
                <p>BSC/BUET</p>
              </div>
              <div className="flex justify-between items-center px-4 font-medium text-[#757575]">
                <p>Mobile:</p>
                <p>+000 0000 0000</p>
              </div>
            </div>
          </div>
        </div>
        {/* Extra car end above div */}
      </div>
    </div>
  );
};

export default FeaturedInstructor;
