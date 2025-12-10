import React from "react";
import Banner from "../../Components/Banner/Banner";
import ConnectWithUs from "../../Components/ConnectWithUs/ConnectWithUs";
import FeaturedInstructor from "../../Components/FeaturedInstructor/FeaturedInstructor";

const Homepage = () => {
  return (
    <div className="space-y-15">
      <Banner></Banner>
      <ConnectWithUs></ConnectWithUs>
      <FeaturedInstructor></FeaturedInstructor>
    </div>
  );
};

export default Homepage;
