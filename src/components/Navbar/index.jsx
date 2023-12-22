import React, { useRef, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  const navBottomMenuRef = useRef(null);
  const navTopMenuRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const isNavBottomMenuClick =
        navBottomMenuRef.current &&
        navBottomMenuRef.current.contains(event.target);
      const isNavTopMenuClick =
        navTopMenuRef.current && navTopMenuRef.current.contains(event.target);

      if (!isNavBottomMenuClick && !isNavTopMenuClick) {
        closeMenus();
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const closeMenus = () => {
    const navBottomMenu = document.querySelector(".nav-bottom-menu");
    const navTopMenu = document.querySelector(".nav-top-menu");

    if (navBottomMenu) {
      navBottomMenu.classList.remove("menu-open");
    }

    if (navTopMenu) {
      navTopMenu.classList.remove("menu-open-top");
      const blahh = document.querySelector(".blahh");
      blahh.style.paddingBottom = "2rem";
      blahh.style.paddingTop = "2rem";
    }
  };

  const menuOpen = () => {
    const navBottomMenu = document.querySelector(".nav-bottom-menu");
    if (navBottomMenu) {
      navBottomMenu.classList.toggle("menu-open");
    }
  };

  const menuOpenTop = () => {
    const navTopMenu = document.querySelector(".nav-top-menu");
    if (navTopMenu) {
      navTopMenu.classList.toggle("menu-open-top");
    }
    const blahh = document.querySelector(".blahh");
    blahh.style.paddingBottom = "2rem";
    blahh.style.paddingTop = "2rem";
  };
  return (
    <nav className="absolute-center" ref={navBottomMenuRef}>
      <div className="nav-top absolute-center" ref={navTopMenuRef}>
        <div className="nav-top-menu-left absolute-center">
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
          <RiMenu2Line size={20} className="blahh" onClick={menuOpenTop} />
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
                <Link to="/dmessage">Director Message</Link>
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
        <div>
          <RiMenu2Line size={20} className="blah" onClick={menuOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
