import { AnimationOnScroll } from "react-animation-on-scroll";
import WEALTH from "../img/icon/wealth.webp"
import PUZZLE from "../img/icon/puzzle.webp";
import SelectAll from "../img/icon/select-all.webp";
import BUSINESSMAN from "../img/icon/businessman.webp";
import Inflation from "../img/icon/inflation.webp";
import APPS from "../img/icon/apps.webp";
import INTERESTRATE from "../img/icon/interest-rate.webp"
import MANAGEMENT from "../img/icon/management.webp";
import Gail from "../img/icon/gain.webp";

function Advantages() {
  return (
    <section className="bfc-advantage pt-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12  text-center">
            <h4 className="bfc-advantage-top-text mb-2">BFC Advantage</h4>
            <p className="pb-4 ">
              Invest smart! Give your investments the BFC Advantage
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <div className="bfc-adv-section">
                <div className="bfc-advantage-info">
                  <span className="bfc-adv-content">
                    <span className="bfc-adv-icon">
                      <img
                        src={WEALTH}
                        className="img-fluid bfc-adv-img"
                        width={70}
                        height={70}
                        loading="lazy"
                      />
                    </span>
                    <span className="bfc-adv-text">
                      <span className="bfc-adv-sub-text">
                        <span className="font-5 pb-3">
                          Periodic Portfolio Review <br />
                        </span>
                        Nothing's a certainty, not even the returns you earn.
                        That's why, twice a year, we give your portfolio a
                        much-needed health checkup and fish out the bad
                        investments.
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="col-md-12 col-lg-4">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <div className="bfc-adv-section">
                <div className="bfc-advantage-info">
                  <span className="bfc-adv-content">
                    <span className="bfc-adv-icon">
                      <img
                        src={PUZZLE}
                        className="img-fluid bfc-adv-img"
                        width={70}
                        height={70}
                        loading="lazy"
                      />
                    </span>
                    <span className="bfc-adv-text">
                      <span className="bfc-adv-sub-text">
                        <span className="font-5 pb-3">
                          Tailormade Solutions
                          <br />
                        </span>
                        The one size fits all approach doesn't usually work in
                        investing. Make informed financial decisions based on
                        the solutions tailored to complement your priorities.{" "}
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="col-md-12 col-lg-4">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <div className="bfc-adv-section">
                <div className="bfc-advantage-info">
                  <span className="bfc-adv-content">
                    <span className="bfc-adv-icon">
                      <img
                        src={SelectAll}
                        className="img-fluid bfc-adv-img"
                        width={70}
                        height={70}
                        loading="lazy"
                      />
                    </span>
                    <span className="bfc-adv-text">
                      <span className="bfc-adv-sub-text">
                        <span className="font-5 pb-3">
                          Algorithm-based Scheme Selection <br />
                        </span>
                        Invest in schemes shortlisted by our superior AI-driven
                        algorithm after factoring in mandatory quality, industry
                        parameters, and investor priorities.
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
          <hr />
          <div className="col-md-12 col-lg-4">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <div className="bfc-adv-section">
                <div className="bfc-advantage-info">
                  <span className="bfc-adv-content">
                    <span className="bfc-adv-icon">
                      <img
                        src={BUSINESSMAN}
                        className="img-fluid bfc-adv-img"
                        width={70}
                        height={70}
                        loading="lazy"
                      />
                    </span>
                    <span className="bfc-adv-text">
                      <span className="bfc-adv-sub-text">
                        <span className="font-5 pb-3">
                          Competent Wealth Managers <br />
                        </span>
                        We pick the best of talent from the industry as that's
                        what we want to offer each and every one of our clients
                        - The Best !{" "}
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="col-md-12 col-lg-4">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <div className="bfc-adv-section">
                <div className="bfc-advantage-info">
                  <span className="bfc-adv-content">
                    <span className="bfc-adv-icon">
                      <img
                        src={Inflation}
                        className="img-fluid bfc-adv-img"
                        width={70}
                        height={70}
                        loading="lazy"
                      />
                    </span>
                    <span className="bfc-adv-text">
                      <span className="bfc-adv-sub-text">
                        <span className="font-5 pb-3">
                          Regular Profit Booking <br />
                        </span>
                        We don't let market volatility erode our clients’
                        profits - By using internal parameters, we book profits
                        regularly.{" "}
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="col-md-12 col-lg-4">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <div className="bfc-adv-section">
                <div className="bfc-advantage-info">
                  <span className="bfc-adv-content">
                    <span className="bfc-adv-icon">
                      <img
                        src={APPS}
                        className="img-fluid bfc-adv-img"
                        width={70}
                        height={70}
                        loading="lazy"
                      />
                    </span>
                    <span className="bfc-adv-text">
                      <span className="bfc-adv-sub-text">
                        <span className="font-5 pb-3">
                          App with 3 S Benefits
                          <br />
                        </span>
                        Buy, Track & Sell Mutual Funds on the go with
                        <a
                          href="/download-app"
                          target="_blank"
                          className="text-bold text-primary"
                        >
                          {" "}
                          <u> PRODIGY Pro</u>{" "}
                        </a>{" "}
                        - BFC's Mobile App with 3 S benefits : Speed | Safety |
                        Simplicity.
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
          <hr />
          <div className="col-lg-4 col-md-12">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <div className="bfc-adv-section">
                <div className="bfc-advantage-info">
                  <span className="bfc-adv-content">
                    <span className="bfc-adv-icon">
                      <img
                        src={INTERESTRATE}
                        className="img-fluid bfc-adv-img"
                        width={70}
                        height={70}
                        loading="lazy"
                      />
                    </span>
                    <span className="bfc-adv-text">
                      <span className="bfc-adv-sub-text">
                        <span className="font-5 pb-3">
                          Capital Gain Immunization <br />
                        </span>
                        Not all profits are taxable. With access to the right
                        advice and the will to act on it, you can save more on
                        taxes than you initially thought.{" "}
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="col-lg-4 col-md-12">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <div className="bfc-adv-section">
                <div className="bfc-advantage-info">
                  <span className="bfc-adv-content">
                    <span className="bfc-adv-icon">
                      <img
                        src={MANAGEMENT}
                        className="img-fluid bfc-adv-img"
                        width={70}
                        height={70}
                        loading="lazy"
                      />
                    </span>
                    <span className="bfc-adv-text">
                      <span className="bfc-adv-sub-text">
                        <span className="font-5 pb-3">
                          Market Savvy Research Team <br />
                        </span>
                        A team that follows the markets with relentless
                        diligence and is alert to every spike and drop in the
                        charts, so you stay ahead of the curve at all times.
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="col-lg-4 col-md-12">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <div className="bfc-adv-section">
                <div className="bfc-advantage-info">
                  <span className="bfc-adv-content">
                    <span className="bfc-adv-icon">
                      <img
                        src={Gail}
                        className="img-fluid bfc-adv-img"
                        width={70}
                        height={70}
                        loading="lazy"
                      />
                    </span>
                    <span className="bfc-adv-text">
                      <span className="bfc-adv-sub-text">
                        <span className="font-5 pb-3">
                          Tactical Calls <br />
                        </span>
                        Gain access to the short-term calls our research team
                        offers and maximise your returns by investing in sectors
                        that are likely to attract profits in the near future.
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
