import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
      <footer className="footer">
          <ContentWrapper>
              <ul className="menuItems">
                  <li className="menuItem">Terms Of Use</li>
                  <li className="menuItem">Privacy-Policy</li>
                  <li className="menuItem">About</li>
                  <li className="menuItem">Blog</li>
                  <li className="menuItem">FAQ</li>
              </ul>
              <div className="infoText">
                  Welcome to YASHRAJFILMS, your ultimate destination for every detail about movies and TV shows. Whether you are looking for the latest releases, the classics, the top-rated or the most popular, we have it all for you! Browse through our extensive collection of genres, ratings, reviews and trailers to find your next binge-worthy show or your next favorite movie. YASHRAJFILMS is more than just a website, it is a revolutionary one-stop for all movie lovers who share their passion and opinions with each other. Join us today and discover the magic of cinema with YASHRAJFILMS.
              </div>
              <div className="socialIcons">
                  <span className="icon">
                      <FaFacebookF />
                  </span>
                  <span className="icon">
                      <FaInstagram />
                  </span>
                  <span className="icon">
                      <FaTwitter />
                  </span>
                  <span className="icon">
                      <FaLinkedin />
                  </span>
              </div>
          </ContentWrapper>
      </footer>
  );
};
export default Footer;
