import React from "react";
import photo from "../../../assets/Cover1.png";

const Login = () => {
  return (
    <div className="max-w-11/12 mx-auto flex items-center">
      <div className="flex-1 ">
        <h2>Login Page</h2>
      </div>
      {/* image */}
      <div className="flex-1 bg-base-300">
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default Login;
