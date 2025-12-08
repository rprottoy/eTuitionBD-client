import React from "react";
import { Link } from "react-router";
import location from "../../assets/location.png";
import message from "../../assets/message.png";
import support from "../../assets/support.png";
import facebook from "../../assets/icons8-facebook-50.png";
import instagram from "../../assets/icons8-instagram-50.png";
import x from "../../assets/icons8-x-50.png";
import youtube from "../../assets/icons8-youtube-50.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-[#2a1332] text-white p-10 ">
        <nav className="font-secondary">
          <h6 className="footer-title font-primary">Services</h6>
          <a className="link link-hover">Tuitions</a>
          <a className="link link-hover">Tutors</a>
          <a className="link link-hover">Study Materials</a>
          <a className="link link-hover">Consultations</a>
        </nav>
        <nav className="font-secondary">
          <h6 className="footer-title font-primary">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav className="font-secondary ">
          <h6 className="footer-title font-primary">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer bg-[#2a1332] text-white px-10 py-4 flex justify-between">
        <aside className="">
          <Link to="/">
            {/* <img className="w-[250px]" src={logo} alt="" /> */}
            <h1 className="font-extrabold text-4xl font-primary">
              <span className="text-[#00b7a6]">e</span>
              <span className="text-[#cb6ce6]">T</span>
              <span className="text-[#38b6ff]">u</span>
              <span className="text-[#7ed957]">i</span>
              <span className="text-[#ff5757]">t</span>
              <span className="text-[#38b6ff]">i</span>
              <span className="text-[#004aad]">o</span>
              <span className="text-[#ffde59]">n</span>
              <span className="text-[#306417]">B</span>
              <span className="text-[#5ce1e6]">D</span>
            </h1>
          </Link>
          <p className="font-secondary">
            eTuitionBD
            <br />A reliable and quality full tuition platform in Bangladesh.
          </p>

          <div className="mt-5 space-y-3 font-secondary">
            <h6 className="font-semibold text-lg font-primary text-white">
              Contact Info
            </h6>
            <div className="flex items-center">
              <img className="w-4 h-4 mr-3" src={location} alt="location" />
              <p className="text-[#A9AEB3] font-medium">Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center">
              <img className="w-4 h-4 mr-3" src={message} alt="message box" />
              <p className="text-[#A9AEB3] font-medium">support@any.com</p>
            </div>
            <div className="flex items-center">
              <img className="w-4 h-4 mr-3" src={support} alt="support" />
              <p className="text-[#A9AEB3] font-medium">
                Phone:{" "}
                <span className="font-bold">( + 000 ) 000 0000 0000</span>
              </p>
            </div>
          </div>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            {/* Social links here */}
          </div>
        </nav>
        {/* Newsletter Section */}
        <form>
          <h6 className="font-semibold text-lg font-primary text-white">
            Subscribe Newsletter
          </h6>
          <fieldset className="w-80 font-secondary">
            <label className="text-[#A9AEB3] ">Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="example@email.com"
                className="input input-bordered join-item font-secondary"
              />
              <button className="btn border-accent border-2 join-item font-primary bg-accent hover:bg-[#222222] hover:border-[#222222] text-white shadow-none">
                SUBSCRIBE
              </button>
            </div>
          </fieldset>
        </form>
        {/* Social Links */}
        <div>
          <nav className="space-y-3">
            <h6 className=" font-semibold text-lg font-primary text-white">
              Social
            </h6>
            <div className="grid grid-flow-col gap-4">
              <a>
                <img className="w-6" src={facebook} alt="Facebook Icon" />
              </a>
              <a>
                <img className="w-6" src={instagram} alt="Instagram Icon" />
              </a>
              <a>
                <img className="w-6" src={x} alt="X Icon" />
              </a>
              <a>
                <img className="w-6" src={youtube} alt="Youtube Icon" />
              </a>
            </div>
          </nav>
        </div>
      </footer>
      {/* Copyright */}
      <footer className="footer sm:footer-horizontal footer-center bg-[#2a1332] text-white p-4 border-base-300 border-t">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            eTuitionBD
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
