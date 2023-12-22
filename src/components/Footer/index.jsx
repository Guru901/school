import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const Footer = () => {
  return (
    <footer className="absolute-center">
      <h1 id="footer-title">The Academy Community</h1>
      <p id="footer-title-des">Share your Academy pride with the world!</p>
      <div className="social-icons">
        <i className="ri-map-pin-fill social-icon"></i>
        <i className="ri-youtube-fill social-icon"></i>
        <i className="ri-mail-fill social-icon"></i>
        <i className="ri-facebook-fill social-icon"></i>
        <i className="ri-twitter-fill social-icon"></i>
      </div>
      <div className="footer-list-fb-wrapper absolute-center">
        <div className="footer-list-container absolute-center">
          <ul className="footer-list list-1">
            <li className="footer-list-items">
              <i className="ri-arrow-drop-right-line right-arr-icon"></i>
              <p>About us</p>
            </li>
            <li className="footer-list-items">
              <i className="ri-arrow-drop-right-line right-arr-icon"></i>
              <p>Infrastructure</p>
            </li>
            <li className="footer-list-items">
              <i className="ri-arrow-drop-right-line right-arr-icon"></i>
              <p>Video Gallery</p>
            </li>
            <li className="footer-list-items">
              <i className="ri-arrow-drop-right-line right-arr-icon"></i>
              <p>Jobs</p>
            </li>
            <li className="footer-list-items">
              <i className="ri-arrow-drop-right-line right-arr-icon"></i>
              <p>CBSE Circular</p>
            </li>
          </ul>
          <ul className="footer-list list-2">
            <li className="footer-list-items">
              <i className="ri-arrow-drop-right-line right-arr-icon"></i>
              <p>View Prospectus</p>
            </li>
            <li className="footer-list-items">
              <i className="ri-arrow-drop-right-line right-arr-icon"></i>
              <p>International Admission</p>
            </li>
            <li className="footer-list-items">
              <i className="ri-arrow-drop-right-line right-arr-icon"></i>
              <p>Age Criteria</p>
            </li>
            <li className="footer-list-items">
              <i className="ri-arrow-drop-right-line right-arr-icon"></i>
              <p>General Instructions for Admission</p>
            </li>
          </ul>
        </div>
        <div className="fb-conatiner">
          {/* <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frpsjhalawar%2F&amp;tabs=timeline&amp;width=250&amp;height=350&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
            width="250"
            height="350"
            style="border: none; overflow: hidden"
            scrolling="no"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe> */}
        </div>
      </div>
    </footer >
  )
}

export default Footer