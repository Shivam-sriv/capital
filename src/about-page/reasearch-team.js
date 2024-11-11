import AKASH from "../img/team/akash-sir.webp";
import KAVYA from "../img/team/kavya.webp"
import UTTAM from "../img/team/Uttam.webp";
import HARSHIT from "../img/team/Harshit.webp"

function ResearchTeam() {
  return (
    <div className="marketing-team-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center pt-lg-5">
            <h3>Research Team </h3>
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
                    <img src={AKASH} className="img-fluid" />
                  </div>
                  <div className="team-descrition">
                    <div className="team-overlay-text">
                      <p>
                        Akash is as book-smart as they come. The amount of info
                        he can digest is just unbelievable. That's why he is our
                        go-to guy when some digging around needs to be done, be
                        it for investment purposes or otherwise. Besides this,
                        he loves playing PC games and snooker.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="pt-3">
                  <span className="sub-color"> Akash Gupta</span>
                </h2>
                <p className="pb-3">
                  <span className="profile-text">
                    Sr. Manager- Reasearch & Analysis
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-4 pb-4">
              <div className="team-card">
                <div className="team-content">
                  <div class="team-content-overlay fadeIn-bottom"></div>
                  <div className="team-img">
                    <img src={KAVYA} className="img-fluid" />
                  </div>
                  <div className="team-descrition">
                    <div className="team-overlay-text">
                      <p>
                        Kavya is incorrigible when it comes to stocks and
                        markets- she has to know every listed stock, even if it
                        means researching tons of material. Honestly, we’re
                        happy she does all this work. However, sometimes we hope
                        she gives it a rest and returns to the books she loves
                        so much.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="pt-3">
                  <span className="sub-color"> Kavya Mehrotra </span>
                </h2>
                <p className="pb-3">
                  <span className="profile-text">
                    Asst. Manager - Research & Analysis
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-md-4 pb-4">
              <div className="team-card">
                <div className="team-content">
                  <div class="team-content-overlay fadeIn-bottom"></div>
                  <div className="team-img">
                    <img src={UTTAM} className="img-fluid" />
                  </div>
                  <div className="team-descrition">
                    <div className="team-overlay-text">
                      <p>
                        Uttam, we cannot think of a more apt name for someone so
                        bent on achieving perfection. Be it researching company
                        performances or balancing portfolios, Uttam knows how to
                        get the job done in the neatest way possible.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="pt-3">
                  <span className="sub-color"> Uttam Kumar Singh </span>
                </h2>
                <p className="pb-3">
                  <span className="profile-text">
                  Equity Dealer
                  </span>
                </p>
              </div>
            </div>
            {/* <div className="col-md-4 pb-4">
              <div className="team-card">
                <div className="team-content">
                  <div class="team-content-overlay fadeIn-bottom"></div>
                  <div className="team-img">
                    <img src={HARSHIT} className="img-fluid" />
                  </div>
                  <div className="team-descrition">
                    <div className="team-overlay-text">
                      <p>
                        Harshit is our in-house problem-solving wizard. Given
                        the number of logistical issues prevalent in the wealth
                        management space, having a genius at our beck and call
                        is like a breath of fresh air. Did we mention he is also
                        a brilliant guitarist? Well, now you know.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="pt-3">
                  <span className="sub-color"> Harshit Tiwari</span>
                </h2>
                <p className="pb-3">
                  <span className="profile-text"> Asst. Manager - Product</span>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResearchTeam;