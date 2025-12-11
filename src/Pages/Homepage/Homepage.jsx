import React from "react";
import Banner from "../../Components/Banner/Banner";
import ConnectWithUs from "../../Components/ConnectWithUs/ConnectWithUs";
import FeaturedInstructor from "../../Components/FeaturedInstructor/FeaturedInstructor";
import TuitionPost from "../../Components/TuitionPost/TuitionPost";

const Homepage = () => {
  return (
    <div className="space-y-15">
      <Banner></Banner>
      <TuitionPost></TuitionPost>
      <ConnectWithUs></ConnectWithUs>
      <FeaturedInstructor></FeaturedInstructor>
    </div>
  );
};

export default Homepage;
