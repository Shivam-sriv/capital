import { FaHome, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import BestSIPINVEST from "../img/Best-SIP-Plan-to-Invest.webp"

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
                    <a href="/best-sip-plans-to-invest">
                      <span className="breadcrumb-text">
                        Best SIP Plans to Invest
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
                  src={BestSIPINVEST}
                  className="img-fluid"
                  alt="Best SIP Plans to Invest"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="mutual-fund-text">
                <h1>Best SIP Plans to Invest</h1>
                <div className="pageTitleBorder"></div>
                <p>
                  Looking for the Best SIP Plans to invest can be a very tall
                  order, especially for the layman, simply because doing so
                  requires a special know-how of the underlying funds, among
                  other aspects of the financial universe. Let’s dive in and
                  discuss the many myths that accompany this asset class and the
                  mistakes investors make when shortlisting SIPs for investment.
                </p>
                <div className="pt-3">
                  <Link
                    className="btn3"
                    variant="outline-primary"
                    to="https://prodigy-pro.bfccapital.com/login-with-option"
                    target="_blank"
                  >
                    Invest Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-5" id="desktop">
              <div className="mutual-fund-img">
                <img src={BestSIPINVEST} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
