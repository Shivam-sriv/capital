import { FaHome, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import BESTELSSFUND from "../img/Best-ELSS-Fund.webp"

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
                    <a href="/best-elss-funds">
                      <span className="breadcrumb-text">Best ELSS Funds </span>
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
                  src={BESTELSSFUND}
                  className="img-fluid"
                  alt="Best ELSS Funds"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="mutual-fund-elss-text pt-60">
                <h1>Best ELSS Funds</h1>
                <div className="pageTitleBorder"></div>
                <p>
                  Let’s just start by understanding the basics of ELSS funds. In
                  simple terms, ELSS funds are Mutual Funds that offer tax
                  benefits under Section 80C of the Income Tax Act. As mandated
                  by regulatory bodies, they invest a majority of their
                  accumulated corpus in equity or equity-related instruments.
                  What makes this asset class desirable is its tendency to
                  deliver healthy returns. However, given the volatility equity
                  markets are subjected to, certain dos and don’ts have to be
                  kept in mind before infusing capital in this asset class.
                  Let’s find those out.
                </p>
                <div className="">
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
                <img src={BESTELSSFUND} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
