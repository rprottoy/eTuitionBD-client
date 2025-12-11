import React from "react";
import photo from "../../../assets/Cover1.png";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import UseAuth from "../../../Hooks/useAuth";
import axios from "axios";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, signInGoogle, updateUserProfile } = UseAuth();

  const handleRegister = (data) => {
    // console.log(data);
    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);

        const formData = new FormData();
        formData.append("image", profileImg);
        const imageApiUrl = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_Image_Host
        }`;

        axios.post(imageApiUrl, formData).then((res) => {
          console.log(res);

          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
            phoneNumber: data.phoneNumber,
            role: data.role,
          };
          updateUserProfile(userProfile)
            .then(() => {
              console.log("User profile updated successfully");
              navigate(location?.state || "/");
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((res) => {
        res.user.role === "Student";
        // console.log(res.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" md:flex items-center py-20">
      <div className="flex-1 w-11/12 mx-auto md:w-0">
        <div className="md:px-50 py-8">
          <h2 className="font-bold text-4xl font-primary">
            <span className="text-accent ">Create</span>{" "}
            <span className="text-[#2d3748]">an</span>{" "}
            <span className="text-accent">Account</span>
          </h2>
          <p className="font-secondary font-medium text-[#757575] text-2xl mt-1.5">
            Lets get started a new journey!!!
          </p>
        </div>
        <div className="md:px-50 ">
          <form onSubmit={handleSubmit(handleRegister)} className="">
            <fieldset className="fieldset  ">
              {/* Name */}
              <label className="label ">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input w-full"
                placeholder="Name"
              />
              {/* Email */}
              <label className="label ">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input w-full"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Email is required</p>
              )}

              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                className="input w-full"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  Password must be at least 6 characters or longer
                </p>
              )}

              {/* Photo */}

              <label className="label">Photo</label>
              <input
                type="file"
                {...register("photo")}
                className="file-input file-input-md w-full"
                placeholder="Your photo"
              />

              {/* Role Selection */}
              <label className="label">Role Selection</label>
              <select
                className="input w-full"
                {...register("role", { required: true })}
              >
                <option value="">Select a role</option>
                <option value="Tutor">Tutor</option>
                <option value="Student">Student</option>
              </select>
              {/* Phone */}
              <label className="label ">Phone</label>
              <input
                type="number"
                {...register("phoneNumber", { required: true })}
                className="input w-full"
                placeholder="Phone Number"
              />

              <button className="btn bg-accent text-white font-primary font-bold mt-4 hover:bg-[#2d3748] hover:border-[#2d3748]">
                Register
              </button>
            </fieldset>
          </form>
          <div>
            <h4 className="text-center my-2 text-md font-secondary font-extrabold text-[#757575]">
              OR
            </h4>

            {/* Google */}
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-white text-black border-[#e5e5e5] w-full border shadow mb-5"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
          <div>
            <p>
              Already have an account?{" "}
              <Link state={location.state} className="text-accent" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* image */}
      <div className=" flex-1 bg-base-300">
        <img className="" src={photo} alt="" />
      </div>
    </div>
  );
};

export default Register;
