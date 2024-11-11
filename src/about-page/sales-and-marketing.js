import TUSAR from "../img/team/Tusar-Sir.webp"
import DIPTI from "../img/team/dipti-maam.webp";
import VIKAS from "../img/team/Vikash-Shah.webp";
import SAGUN from "../img/team/sagun-sir.webp";

function SalesAndMarketing() {
  return (
    <div className="marketing-team">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center pt-lg-5">
            <h3>Sales & Marketing </h3>
            <div className="contact-pageTitleBorder"></div>
          </div>
        </div>
      </div>
      <section className="pt-40 pb-20 team">
        <div className="container text-center">
          <div className="row justify-content-around">
            <div className="col-md-4 pb-4">
              <div className="team-card">
                <div className="team-content">
                  <div class="team-content-overlay fadeIn-bottom"></div>
                  <div className="team-img">
                    <img src={TUSAR} className="img-fluid" />
                  </div>
                  <div className="team-descrition">
                    <div className="team-overlay-text">
                      <p>
                        Tushar studies markets—not because it's his profession,
                        but because he enjoys doing so. Because of this, he is
                        the one people turn to for market insights. He likes to
                        play cricket and watch Bollywood movies on a personal
                        level.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="pt-3">
                  <span className="sub-color"> Tushar Gupta </span>
                </h2>
                <p className="pb-3">
                  <span className="profile-text"> Sr. AVP Wealth </span>
                </p>
              </div>
            </div>
            <div className="col-md-4 pb-4">
              <div className="team-card">
                <div className="team-content">
                  <div class="team-content-overlay fadeIn-bottom"></div>
                  <div className="team-img">
                    <img src={DIPTI} className="img-fluid" />
                  </div>
                  <div className="team-descrition">
                    <div className="team-overlay-text">
                      <p>
                        For those who don't know her, Deepti is a cheerful
                        individual with a perpetual smile. If you're in severe
                        need of financial advice, there's a strong chance you'll
                        run into her. She is an expert at formulating flawless
                        investing strategies and is an avid reader.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="pt-3">
                  <span className="sub-color"> Deepti Bansal </span>
                </h2>
                <p className="pb-3">
                  <span className="profile-text"> Sr. AVP Wealth </span>
                </p>
              </div>
            </div>
            <div className="row justify-content-around">
              <div className="col-md-4 pb-4">
                <div className="team-card">
                  <div className="team-content">
                    <div class="team-content-overlay fadeIn-bottom"></div>
                    <div className="team-img">
                      <img src={VIKAS} className="img-fluid" />
                    </div>
                    <div className="team-descrition">
                      <div className="team-overlay-text">
                        <p>
                          Vikas is a seasoned wealth management campaigner and
                          an indispensable member of Team BFC. Also, he is a
                          master when it comes to multitasking. Balancing a
                          portfolio, resolving a query, managing an event,
                          consider it done. Also, he is not half bad at hitting
                          musical notes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <h2 className="pt-3">
                    <span className="sub-color"> Vikas Kumar Sah </span>
                  </h2>
                  <p className="pb-3">
                    <span className="profile-text"> AVP - Wealth </span>{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4 pb-4">
                <div className="team-card">
                  <div className="team-content">
                    <div class="team-content-overlay fadeIn-bottom"></div>
                    <div className="team-img">
                      <img src={SAGUN} className="img-fluid" />
                    </div>
                    <div className="team-descrition">
                      <div className="team-overlay-text">
                        <p>
                          Sagun is an optimist who relentlessly drives his team
                          forward. Each member of his team is prepared to go out
                          on a limb to realise his vision, courtesy his innate
                          drive to succeed. Apart from that, he is a fitness
                          enthusiast who enjoys working out in the gym.
                        </p>
                      </div>
                    </div>
                  </div>
                  <h2 className="pt-3">
                    <span className="sub-color"> Sagun Balram </span>
                  </h2>
                  <p className="pb-3">
                    <span className="profile-text"> AVP - Wealth</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SalesAndMarketing