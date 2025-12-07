import React from "react";

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
      <footer className="footer bg-[#2a1332] text-white px-10 py-4">
        <aside className="">
          <div>
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
          </div>
          <p className="font-secondary">
            eTuitionBD
            <br />A reliable and quality full tuition platform in Bangladesh.
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
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
