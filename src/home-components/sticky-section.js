import { AnimationOnScroll } from "react-animation-on-scroll";
import {
  FaRupeeSign,
  FaCity,
  FaSmile,
  FaUserPlus,
  FaUserTie,
  FaPlus,
} from "react-icons/fa";
import CountUp from "react-countup";
import Carousel from "react-bootstrap/Carousel";
import LOGO from "../img/logo.webp";
import CREDENTIAL from "../img/credential/credential-1.webp";
import CREDENTIAL2 from "../img/credential/credential-2.webp";
import CREDENTIAL3 from "../img/credential/credential-3.webp";
import I06 from "../img/i06xx2I.webp"
import l5AK from "../img/l5AkSHd.webp"
import ANAND from "../img/Anand-Murti-Srivastava.webp";
import VIJENDRA from "../img/Virendra-Chandra-Singhal.webp"
import NEERAJSINGH from "../img/Neerja-Singh.webp"

function StickySection() {
  return (
    <section className="stiky">
      <article>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title-section"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="sidebar-section show-bg-image">
                <div className="sidebar-item sticky-top">
                  <div className="sidebar-content">
                    <img
                      src={LOGO}
                      className="img-fluid"
                      width={125}
                      height={112}
                      loading="lazy"
                    />
                    <h2 className="sidebar-heading pb-4">Why Choose Us?</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="content-section">
                <div className="row justify-content-end">
                  <div className="col-md-12 text-center text-lg-start">
                    <h3>01</h3>
                    <h2>BFC in Numbers!</h2>
                    <p>We haven't come this far to only come this far </p>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-6">
                    <AnimationOnScroll animateIn="animate__zoomIn">
                      <div className="content d-flex">
                        <div className="icon">
                          <span>
                            <FaRupeeSign />
                          </span>
                        </div>
                        <div className="content">
                          <h2>
                            <CountUp decimals={0} end={9} duration={7} />{" "}
                            Billion{" "}
                          </h2>
                          <span className="bfc-number-pluse-icon">
                            <FaPlus />
                          </span>
                          <p>Assets Under Management</p>
                        </div>
                      </div>
                    </AnimationOnScroll>
                  </div>
                  <div className="col-md-6">
                    <AnimationOnScroll animateIn="animate__zoomIn">
                      <div className="content d-flex">
                        <div className="icon">
                          <span>
                            <FaCity />
                          </span>
                        </div>
                        <div className="content">
                          <h2>
                            <CountUp end={80} duration={7} />
                          </h2>
                          <span className="bfc-number-pluse-icon">
                            <FaPlus />
                          </span>
                          <p>Cities</p>
                        </div>
                      </div>
                    </AnimationOnScroll>
                  </div>
                  <div className="col-md-6">
                    <AnimationOnScroll animateIn="animate__zoomIn">
                      <div className="content d-flex">
                        <div className="icon">
                          <span>
                            <FaRupeeSign />
                          </span>
                        </div>
                        <div className="content">
                          <h2>
                            <CountUp end={300} duration={7} /> Million
                          </h2>
                          <span className="bfc-number-pluse-icon">
                            <FaPlus />
                          </span>
                          <p>Assets in PMS</p>
                        </div>
                      </div>
                    </AnimationOnScroll>
                  </div>
                  <div className="col-md-6">
                    <AnimationOnScroll animateIn="animate__zoomIn">
                      <div className="content d-flex">
                        <div className="icon">
                          <span>
                            <FaSmile />
                          </span>
                        </div>
                        <div className="content">
                          <h2>
                            <CountUp end={100} duration={7} />
                          </h2>
                          <span className="bfc-number-pluse-icon">
                            <FaPlus />
                          </span>
                          <p>Institutional Client Base</p>
                        </div>
                      </div>
                    </AnimationOnScroll>
                  </div>
                  <div className="col-md-6">
                    <AnimationOnScroll animateIn="animate__zoomIn">
                      <div className="content d-flex">
                        <div className="icon">
                          <span>
                            <FaUserPlus />
                          </span>
                        </div>
                        <div className="content">
                          <h2>
                            <CountUp end={16000} duration={7} />
                          </h2>
                          <span className="bfc-number-pluse-icon">
                            <FaPlus />
                          </span>
                          <p>Retail Client Base</p>
                        </div>
                      </div>
                    </AnimationOnScroll>
                  </div>
                  <div className="col-md-6">
                    <AnimationOnScroll animateIn="animate__zoomIn">
                      <div className="content d-flex">
                        <div className="icon">
                          <span>
                            <FaUserTie />
                          </span>
                        </div>
                        <div className="content">
                          <h2>
                            <CountUp end={22} duration={7} />
                          </h2>
                          <span className="bfc-number-pluse-icon">
                            <FaPlus />
                          </span>
                          <p>Managers</p>
                        </div>
                      </div>
                    </AnimationOnScroll>
                  </div>
                </div>
                <hr></hr>
                {/* ====================  Bfc Credentials Section End ================== */}
                <div className="content-section-2">
                  <div className="row">
                    <div className="col-md-12 text-center text-lg-start">
                      <h3>02</h3>
                      <h2>Our Credentials!</h2>
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col-md-12">
                      <AnimationOnScroll animateIn="animate__zoomIn">
                        <div className="cred-content d-flex">
                          <div className="cred-img ">
                            <img
                              src={CREDENTIAL}
                              className="img-fluid"
                              width={163}
                              height={66}
                              loading="lazy"
                            />
                          </div>
                          <div className="cred-text pt-2">
                            <h5>AMFI Registered Mutual Fund Distributor</h5>
                            <p>ARN : 21399,  <span style={{paddingLeft:"5px"}}>    Date of initial Registration : 31-July-2004,</span>  <span>Current validity of ARN : 29-July-2026</span></p>
                           
                          </div>
                        </div>
                      </AnimationOnScroll>
                    </div>
                    <hr />
                    <div className="col-md-12 ">
                      <AnimationOnScroll animateIn="animate__zoomIn">
                        <div className="cred-content d-flex">
                          <div className="cred-img ">
                            <img
                              src={CREDENTIAL2}
                              className="img-fluid"
                              width={163}
                              height={66}
                              loading="lazy"
                            />
                          </div>
                          <div className="cred-text pt-2">
                            <h5>BSE Registered Mutual Fund Distributor</h5>
                            <p> No : 39180</p>
                          </div>
                        </div>
                      </AnimationOnScroll>
                    </div>
                    <hr />
                    <div className="col-md-12">
                      <AnimationOnScroll animateIn="animate__zoomIn">
                        <div className="cred-content d-flex">
                          <div className="cred-img ">
                            <img
                              src={CREDENTIAL3}
                              className="img-fluid"
                              width={163}
                              height={66}
                              loading="lazy"
                            />
                          </div>
                          <div className="cred-text pt-2">
                            <h5>NSE Registered Mutual Fund Distributor</h5>
                            <p>No : MFS21399</p>
                          </div>
                        </div>
                      </AnimationOnScroll>
                    </div>
                  </div>
                </div>
                <hr />
                {/* ====================  Credential Section End ================== */}
                <div className="content-section-2">
                  <div className="row">
                    <div className="col-md-12 text-center text-lg-start">
                      <h3>03</h3>
                      <h2>Testimonials</h2>
                      <p>Here’s what our clients have to say about us</p>
                    </div>
                  </div>
                  <Carousel controls={false} className="testimonial">
                    <Carousel.Item>
                      <div className="testimonial pb-5">
                        <div className="row justify-content-center">
                          <div className="col-md-12">
                            <div className="testi-card">
                              <p className="post">
                                <span>
                                  <img
                                    className="quote-img"
                                    src={I06}
                                    width={20}
                                    height={25}
                                    loading="lazy"
                                  />
                                </span>
                                <span className="post-txt">
                                  I am delighted with BFC Capital’s services. It
                                  is refreshing to be associated with a company
                                  that keeps its client’s needs, and priorities
                                  ahead of other things. What impressed me was
                                  the way my Wealth Manager took care of my
                                  finances. She also provides regular updates
                                  and is available to answer any queries I have.
                                  I am particularly pleased with the advice
                                  offered on retirement planning, wherein a
                                  fixed income route was recommended.
                                  Transitioning into retirement will be much
                                  easier, thanks to the guidance offered.
                                </span>
                                <span>
                                  <img
                                    className="nice-img"
                                    src={l5AK}
                                    width={20}
                                    height={25}
                                    loading="lazy"
                                  />
                                </span>
                              </p>
                            </div>
                            <div className="arrow-down"></div>
                            <div className="row d-flex justify-content-center">
                              <div className="">
                                <img
                                  className="profile-pic fit-image"
                                  src={ANAND}
                                  width={120}
                                  height={120}
                                  loading="lazy"
                                />
                                <span className="profile-name">
                                  Mr. Anand Murti Srivastava
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="testimonial pb-5">
                        <div className="row justify-content-center">
                          <div className="col-md-12">
                            <div className="testi-card">
                              <p className="post">
                                <span>
                                  <img
                                    className="quote-img"
                                    src={I06}
                                    width={20}
                                    height={25}
                                    loading="lazy"
                                  />
                                </span>
                                <span className="post-txt">
                                  I have been a client of BFC Capital since
                                  2011. Before this, I was into equity trading
                                  and faced huge losses due to the lack of
                                  proper advice. Also, I did not have any
                                  specific goal for investing. There were times
                                  when my portfolio was churned just for
                                  brokerage. At BFC Capital, my Wealth Manager
                                  understood my needs and guided me to invest as
                                  per my goals. My portfolio was structured
                                  keeping my interests in mind and therefore
                                  blossomed well.{" "}
                                </span>
                                <span>
                                  <img
                                    className="nice-img"
                                    src={l5AK}
                                    width={20}
                                    height={25}
                                    loading="lazy"
                                  />
                                </span>
                              </p>
                            </div>
                            <div className="arrow-down"></div>
                            <div className="row d-flex justify-content-center">
                              <div className="">
                                <img
                                  className="profile-pic fit-image"
                                  src={VIJENDRA}
                                  width={120}
                                  height={120}
                                  loading="lazy"
                                />
                                <span className="profile-name">
                                  Mr. Virendra Chandra Singhal{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="testimonial pb-5">
                        <div className="row justify-content-center">
                          <div className="col-md-12">
                            <div className="testi-card">
                              <p className="post">
                                <span>
                                  <img
                                    className="quote-img"
                                    src={I06}
                                    width={20}
                                    height={25}
                                    loading="lazy"
                                  />
                                </span>
                                <span className="post-txt">
                                  BFC Capital has been my financial advisor for
                                  more than 2 years, and throughout this tenure,
                                  they have maintained great market awareness.
                                  What impressed me is the way my Wealth Manager
                                  streamlined the planning process to customize
                                  a financial plan that suited my profile and
                                  needs. <br /> She monitors my investments
                                  around the year and suggests necessary
                                  changes, if and when needed, for my benefit.
                                </span>
                                <span>
                                  <img
                                    className="nice-img"
                                    src={l5AK}
                                    width={20}
                                    height={25}
                                    loading="lazy"
                                  />
                                </span>
                              </p>
                            </div>
                            <div className="arrow-down"></div>
                            <div className="row d-flex justify-content-center">
                              <div className="">
                                <img
                                  className="profile-pic fit-image"
                                  src={NEERAJSINGH}
                                  width={120}
                                  height={120}
                                  loading="lazy"
                                />
                                <span className="profile-name">
                                  Dr. Neerja Singh{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default StickySection;
