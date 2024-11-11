import { Helmet } from "react-helmet";
import { FaAngleRight, FaHome } from "react-icons/fa";
import ABOUTIMAGE from "../img/about.webp";
import VIKASSIR from "../img/Vikas-Sir.webp";

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>
          BFC Capital: Best Financial management & Wealth Investment solutions
        </title>
        <meta
          name="description"
          content="BFC Capital is a SEBI-registered Wealth Management Company. The company is headquartered in Lucknow and provides services across all financial products."
        />
        <meta
          name="keywords"
          content="investment planner, financial planning, financial consultant, personal financial planner, financial services, financial company, personal financial, personal financial planning, personal finance management, strategic financial management, Financial Planning, wealth managers, wealth advisor"
        />
        <link rel="canonical" href="https://bfccapital.com/about-us" />
      </Helmet>

      <div className="breadcrumb-nav btm-border">
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
                    <a href="/about">
                      <span className="breadcrumb-text"> About Us </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pb-30">
        <div className="container">
          <div className="row">
            <div className="col-md-6" id="mobile">
              <div className="about-img">
                <img
                  src={ABOUTIMAGE}
                  alt="loading"
                  className="img-fluid"
                  width={300}
                  height={298}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-page-text">
                <h1>
                  About <span className="sub-color">Us</span>
                </h1>
                <div className="pageTitleBorder"></div>
                <p>
                  BFC Capital has been providing financial services and products
                  to its clients for over two decades. Currently, the company
                  has over 16,000 retail clients and manages an AUM of more than
                  Rs. 9 Billion+. Because we understand the importance of
                  financial matters, additional efforts are put in to assess all
                  clients' financial obligations, aspirations, and risk profiles
                  before laying out a plan to help them achieve the kind of
                  wealth they desire.
                </p>
                <p>
                  BFC Capital operates under a precise mechanism designed to
                  facilitate real-time monitoring and manoeuvring of
                  investments. In addition, each client's portfolio is
                  scrutinised for bad investments twice a year to rebalance the
                  weight of all underlying assets and maintain the desired level
                  of risk distribution.
                </p>
              </div>
            </div>
            <div className="col-md-6" id="desktop">
              <div className="about-img">
                <img
                  src={ABOUTIMAGE}
                  alt="BFC Capital Team"
                  className="img-fluid"
                  width={632}
                  height={627}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-70 pb-30 mutual-fund-faq about marketing-team-bg">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <div className="mutual-fund-text">
                <h2>
                  Our <span className="sub-color">Pillars</span>
                </h2>
                <div className="contact-pageTitleBorder"></div>
                <p>
                  Each member of Team BFC is placed at a critical vantage point
                  to ensure relentless compliance of processes and to safeguard
                  our clients’ investments from harm. Doing so, however, is an
                  unforgiving pursuit that requires flawless teamwork starting
                  from the top. Read on to figure out the pillars that make it
                  happen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-80 pb-20 mutual-fund-faq">
        <div className="container">
          <div className="row">
            <div className="col-md-5" id="mobile">
              <div className="vision-img">
                <img
                  src={VIKASSIR}
                  className="img-fluid"
                  width={368}
                  height={365}
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="mutual-fund-text">
                <h2 className="pb-4">
                  <span className="sub-color">Vikas Singh</span>
                  <span className="profile-text"> ( Vice President )</span>
                </h2>
                <p>
                  A laser-sharp focus, a proactive intellect, and a reassuring
                  demeanour are required when managing a team as dynamic and
                  diverse as Team BFC. Fortunately for us, Vikas is all of that
                  and more. In his words, it's more about the will and less
                  about the skill. We couldn't agree more!
                </p>
              </div>
            </div>
            <div className="col-md-5" id="desktop">
              <div className="vision-img">
                <img
                  src={VIKASSIR}
                  className="img-fluid"
                  width={512}
                  height={508}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
