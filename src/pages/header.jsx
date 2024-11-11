import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import { Link } from 'react-router-dom'
import BFCLOGO from "../img/logo/bfc-logo.webp";
import SIPICON from "../img/menu-icon/sip.webp";
import RETIREMENT from "../img/menu-icon/retirement.webp";
import EDUCATION from "../img/menu-icon/education.webp";
import MARRIAGE from "../img/menu-icon/marriage.webp"
import EMI from "../img/menu-icon/emi.webp"
import ELSS from "../img/menu-icon/elss.webp";
import FD from "../img/menu-icon/fd.webp"
import MUTUAL from "../img/menu-icon/mutual.webp";

const Header = () => {
  const [arrow,setArrow] = useState("")
  

  function hideIcon () {
   if(window.innerWidth < 700 ){
       const element = document.getElementsByClassName("navbar-toggler")[0];
      element.click()
   }
  }

  

  return (
    <>
      <Navbar expand="lg" sticky="top" className="custom-shadow">
        <Container fluid>
          <Navbar.Brand to="/">
            <Link to="/">
              <img src={BFCLOGO} alt="logo" height={58} width={200} className="img-fluid logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-around"
          >
            <ul className="navbar-nav main-menu ml-auto ">
              <li onClick={hideIcon}>
                <Link to="/">Home</Link>
              </li>
              <li className="menu_has_children">
                <Link to="/mutual-funds">Mutual Funds</Link>

                <ul className="sub-menu">
                  <li onClick={hideIcon}>
                    <Link to="/best-mutual-funds-to-invest-in-2024">
                      Best Mutual Funds to Invest in 2024
                    </Link>
                  </li>
                  <li onClick={hideIcon}>
                    <Link to="/best-elss-funds">Best ELSS Funds</Link>
                  </li>
                  <li onClick={hideIcon}>
                    <Link to="/best-sip-plans-to-invest">
                      Best SIP Plans to Invest
                    </Link>
                  </li>
                  <li onClick={hideIcon}>
                    <Link to="/tax-saving-mutual-fund">
                      Best Tax Saving Mutual Funds
                    </Link>
                  </li>
                  <li onClick={hideIcon}>
                    <Link to="/best-mutual-fund-for-lumpsum-investment">
                      Best Mutual Fund for Lumpsum Investment
                    </Link>
                  </li>
                  {/* <li><Link to="/new-fund-offers">New Fund Offers</Link></li> */}
                  {/* <li><Link to="/scheme-performance">Scheme Performance</Link></li> */}
                </ul>
              </li>
              <li onClick={hideIcon}>
                <Link to="/about-us">About</Link>
              </li>
              <li className="menu_has_children">
                <Link to="#">Planning & Solutions</Link>
                <ul className="sub-menu">
                  <li onClick={hideIcon}>
                    <Link to="/sip-calculator">
                      <img src={SIPICON} className="img-fluid menu-icon" />
                      &nbsp; SIP Calculator
                    </Link>
                  </li>
                  <li onClick={hideIcon}>
                    <Link to="/retirement-planning-calculator">
                      <img src={RETIREMENT} className="img-fluid menu-icon" />
                      &nbsp; Retirement Planning
                    </Link>
                  </li>
                  <li onClick={hideIcon}>
                    <Link to="/child-education-planning-calculator">
                      <img src={EDUCATION} className="img-fluid menu-icon" />
                      &nbsp; Child Education Planning
                    </Link>
                  </li>
                  <li onClick={hideIcon}>
                    <Link to="/child-marriage-planning-calculator">
                      <img src={MARRIAGE} className="img-fluid menu-icon" />
                      &nbsp; Child Marriage Planning
                    </Link>
                  </li>
                  <li onClick={hideIcon}>
                    <Link to="/home-loan-emi-calculator">
                      <img src={EMI} className="img-fluid menu-icon" />
                      &nbsp; Home Loan EMI Calculator
                    </Link>
                  </li>
                  <li onClick={hideIcon}>
                    <Link to="/lumpsum-calculator">
                      <img src={SIPICON} className="img-fluid menu-icon" />
                      &nbsp; Lumpsum Calculator
                    </Link>
                  </li>
                  <li onClick={hideIcon}>
                    <Link to="/elss-calculator">
                      <img src={ELSS} className="img-fluid menu-icon" />
                      &nbsp; ELSS Calculator
                    </Link>
                  </li>
                  <li onClick={hideIcon}>
                    <Link to="/fd-calculator">
                      <img src={FD} className="img-fluid menu-icon" />
                      &nbsp; FD Calculator
                    </Link>
                  </li>
                  <li onClick={hideIcon}>
                    <Link to="/mutual-fund-calculator">
                      <img src={MUTUAL} className="img-fluid menu-icon" />
                      &nbsp; Mutual Fund Calculator
                    </Link>
                  </li>
                  <li onClick={hideIcon}>
                    <Link to="/swp-calculator">
                      <img src={"https://bfc-prodigypro-assets.s3.ap-southeast-1.amazonaws.com/swp.png"} className="img-fluid menu-icon" />
                      &nbsp; SWP Calculator
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="https://bfccapital.com/blog/" target="_blank">
                  Blogs
                </Link>
              </li>
              <li onClick={hideIcon}>
                <Link to="/contact-us">Reach Us</Link>
              </li>
              <li onClick={hideIcon}>
                <Link to="/careers">Career</Link>
              </li>
              <li onClick={hideIcon}>
                <Link to="/download-app">Download App</Link>
              </li>
              {/* <li><Link to="https://bfccapital.com/prodigypro/" target={"_blank"}><span className="btn-show">Login</span> </Link></li> */}
              <li>
                <Link
                  to="https://prodigy-pro.bfccapital.com"
                  target={"_blank"}
                >
                  <span className="btn-show">Login</span>
                </Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
