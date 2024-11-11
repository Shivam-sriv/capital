import React from "react"
import { FaHome, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import BESTMUTUALFUND from "../img/Best-Mutual-Fund.webp"

function Header() {
  return (
    <>
      <div className="breadcrumb-nav">
        <div className="">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <ul className="d-flex">
                  <li>
                    <a href="/">
                      <span className="breadcrumb-icon bg-gradient-primary">
                        <FaHome />
                      </span>
                    </a>
                    <span className="r-icon">
                      <FaAngleRight />
                    </span>
                  </li>
                  <li>
                    <a href="/mutual-funds">
                      <span className="breadcrumb-text"> Mutual Funds </span>
                      <span className="r-icon">
                        <FaAngleRight />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/best-mutual-funds-to-invest-in-2024">
                      <span className="breadcrumb-text">
                        Best Mutual Funds to Invest in 2024{" "}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pt-lg-60 pt-sm-60 pb-4 bg-color">
        <div className="container">
          <div className="row">
            <div className="col-md-5" id="mobile">
              <div className="mutual-fund-img">
                <img
                  src={BESTMUTUALFUND}
                  className="img-fluid"
                  alt="Best Mutual Funds to Invest in 2024"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="mutual-fund-text">
                <h1>Best Mutual Funds to Invest in 2024</h1>
                <div className="pageTitleBorder"></div>
                <p>
                  Moving forward, we will list some schemes that have been doing
                  exceptionally well in their respective categories and also
                  educate you on what makes a good plan better. However,
                  investors should make note that no such projection is ever
                  absolute. Mutual Fund yields are dependent on market
                  trajectory and certain other economic factors and, therefore,
                  should be picked after proper professional consultation.
                </p>
                <div className="pt-3">
                  <Link
                    className="btn3"
                    to="https://prodigy-pro.bfccapital.com/login-with-option"
                    target="_blank"
                    variant="outline-primary"
                  >
                    Invest Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-5" id="desktop">
              <div className="mutual-fund-img">
                <img
                  src={BESTMUTUALFUND}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Header;