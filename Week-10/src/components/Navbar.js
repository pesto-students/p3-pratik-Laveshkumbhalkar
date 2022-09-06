
import React, { useState } from "react";
import './navbar.css';
import ImportShortener from "./ImportShortener";
import LinkResult from './LinkResult';

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin
} from "react-icons/ai";


const Navbar = () => {

    const [inputValue, setInputValue] = useState("");
    
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>L</span>avesh<span>K</span>umbhalkar
          </h2>
        </div>

        <div className="menu-link">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">SERVICES</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://in.linkedin.com/in/lavesh-kumbhalkar-533529115">
                <AiFillLinkedin className="linkedin" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/lavesh_developer/">
                <AiFillInstagram className="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/LAVESHKUMBHALKAR">
                <AiFillFacebook className="facebook" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="hero-section">
              <ImportShortener setInputValue={ setInputValue } />
              <LinkResult inputValue={ inputValue } />
              
      </section>
    </>
  );
};

export default Navbar;
