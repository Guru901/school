import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute-center">
      <div className="nav-top absolute-center">
        <div className="nav-top-menu-left">
          <ul className="nav-top-menu absolute-center">
            <li className="nav-top-menu-items cur-po">
              <Link to="/">Pay Fee Online</Link>
            </li>
            <li className="nav-top-menu-items cur-po">
              <Link to="/">Student Portal</Link>
            </li>
            <li className="nav-top-menu-items cur-po">
              <Link to="/">Parents’ Login</Link>
            </li>
            <li className="nav-top-menu-items cur-po">
              <Link to="/">Jobs</Link>
            </li>
            <li className="nav-top-menu-items cur-po">
              <Link to="/">Contact</Link>
            </li>
            <li className="nav-top-menu-items cur-po">
              <Link to="/">CBSE Circular</Link>
            </li>
          </ul>
        </div>
        <div className="nav-top-menu-right social-media-icon">
          <i className="ri-youtube-line social-media-icon"></i>
          <i className="ri-facebook-line social-media-icon"></i>
          <i className="ri-twitter-line social-media-icon"></i>
          <i className="ri-map-pin-line social-media-icon"></i>
        </div>
      </div>
      <div className="nav-bottom">
        <Link to="/">
          <img
            src="https://rpsjhalawar.com/images/WEB_LOGO.PNG"
            alt=""
            id="logo"
          />
        </Link>
        <ul className="nav-bottom-menu absolute-center">
          <li className="nav-bottom-menu-items cur-po">
            About us<i className="ri-arrow-down-s-line down-arrow"></i>
            <ul className="sub-menu">
              <li className="sub-menu-items">
                <Link to="/pmessage">Director Message</Link>
              </li>
              <li className="sub-menu-items">
                <Link to="/pmessage">Principal Message</Link>
              </li>
              <li className="sub-menu-items">
                <Link to="/mission">Vision & Mission</Link>
              </li>
              <li className="sub-menu-items">
                <Link to="/">What Sets Us Apart</Link>
              </li>
              <li className="sub-menu-items">
                <Link to="/">School Info</Link>
              </li>
              <li className="sub-menu-items">
                <Link to="/">Staff Details</Link>
              </li>
              <li className="sub-menu-items">
                <Link to="/infrastructure">Our Infrastructure</Link>
              </li>
            </ul>
          </li>
          <li className="nav-bottom-menu-items cur-po">
            Admissions<i className="ri-arrow-down-s-line down-arrow"></i>
            <ul className="sub-menu">
              <li className="sub-menu-items">
                <Link to="/">Admission Procedure</Link>
              </li>
              <li className="sub-menu-items">
                <Link to="/">Schdedule a Visit</Link>
              </li>
              <li className="sub-menu-items">
                <Link to="/">FAQ</Link>
              </li>
              <li className="sub-menu-items">
                <Link to="/">Fee Strucuture</Link>
              </li>
              <li className="sub-menu-items">
                <Link to="/">Admission Form</Link>
              </li>
              <li className="sub-menu-items">
                <Link to="/">Enquiry Form</Link>
              </li>
            </ul>
          </li>
          <li className="nav-bottom-menu-items cur-po">
            Academics<i className="ri-arrow-down-s-line down-arrow"></i>
            <ul className="sub-menu">
              <li className="sub-menu-items">
                <Link to="/">Lead School</Link>
              </li>
              <li className="sub-menu-items">
                <Link to="/">Curriculam & Syllabus</Link>
              </li>
              <li className="sub-menu-items">
                <Link to="/">Academic Calendar</Link>
              </li>
              <li className="sub-menu-items">
                <Link to="/">School Timings & Uniform</Link>
              </li>
            </ul>
          </li>
          <li className="nav-bottom-menu-items cur-po">
            Activities<i className="ri-arrow-down-s-line down-arrow"></i>
            <ul className="sub-menu">
              <li className="sub-menu-items">
                <Link to="/">Activities</Link>
              </li>
              <li className="sub-menu-items">
                <Link to="/">Tours</Link>
              </li>
              <li className="sub-menu-items">
                <Link to="/">News & Events</Link>
              </li>
            </ul>
          </li>
          <li className="nav-bottom-menu-items cur-po">
            Downloads<i className="ri-arrow-down-s-line down-arrow"></i>
            <ul className="sub-menu">
              <li className="sub-menu-items">
                <Link to="/">Curriculum Booklet</Link>
              </li>
              <li className="sub-menu-items">
                <Link to="/">Exam Time Table</Link>
              </li>
              <li className="sub-menu-items">
                <Link to="/">Assignments</Link>
              </li>
              <li className="sub-menu-items">
                <Link to="/">Notices</Link>
              </li>
              <li className="sub-menu-items">
                <Link to="/">Archieved</Link>
              </li>
              <li className="sub-menu-items">
                <Link to="/">SLC (TC)</Link>
              </li>
            </ul>
          </li>
        </ul>
        <button id="apply-now" className="cur-po">
          Apply Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
