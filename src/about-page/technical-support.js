import PALLAVIMAM from "../img/team/Pallavi-Ma'am.webp";
import VIVEKSIR from "../img/team/vivek.webp"
import NAVNEETSIR from "../img/team/Navneet.webp";
import TLCHIRANSHUSIR from "../img/team/Chitranshu.webp";
import ABHISHEKGURUJI from "../img/team/abhishek.webp";

function TechnicalSupport() {
  return (
    <div className="marketing-team-bg  mb-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center pt-lg-5">
            <h3>Technical Support Team </h3>
            <div className="contact-pageTitleBorder"></div>
          </div>
        </div>
      </div>
      <section className="pt-40 pb-50 team">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4 pb-4">
              <div className="team-card">
                <div className="team-content">
                  <div class="team-content-overlay fadeIn-bottom"></div>
                  <div className="team-img">
                    <img src={PALLAVIMAM} className="img-fluid" />
                  </div>
                  <div className="team-descrition">
                    <div className="team-overlay-text">
                      <p>
                        The never-ending cues of coding that keep our app and
                        website functioning are a language Pallavi understands.
                        To us, however, they're no different than random
                        graffiti. Yes, she's a lifesaver. God knows what we'd do
                        without her.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="pt-3">
                  <span className="sub-color"> Pallavi Singh</span>
                </h2>
                <p className="pb-3">
                  <span className="profile-text"> Sr. Web Developer </span>
                </p>
              </div>
            </div>
            <div className="col-md-4 pb-4">
              <div className="team-card">
                <div className="team-content">
                  <div class="team-content-overlay fadeIn-bottom"></div>
                  <div className="team-img">
                    <img src={VIVEKSIR} className="img-fluid" />
                  </div>
                  <div className="team-descrition">
                    <div className="team-overlay-text">
                      <p>
                        Maintaining a digital presence means ensuring the
                        systems function appropriately around the year. We’re so
                        thankful for having someone as dependable as Vivek at
                        our disposal. Besides being a whiz at cleaning bugs and
                        real-time troubleshooting, Vivek is also a gadget geek.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="pt-3">
                  <span className="sub-color"> Vivek Kumar </span>
                </h2>
                <p className="pb-3">
                  <span className="profile-text"> Sr. Web Developer</span>{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4 pb-4">
              <div className="team-card">
                <div className="team-content">
                  <div class="team-content-overlay fadeIn-bottom"></div>
                  <div className="team-img">
                    <img src={NAVNEETSIR} className="img-fluid" />
                  </div>
                  <div className="team-descrition">
                    <div className="team-overlay-text">
                      <p>
                        Despite his young age, Navneet is an asset for Team BFC.
                        Why? Because he is a multi-tasker, who champions meeting
                        deadlines. You name it: coding, troubleshooting or
                        designing, the boy will deliver, no questions asked.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="pt-3">
                  <span className="sub-color"> Navneet Singh</span>
                </h2>
                <p className="pb-3">
                  <span className="profile-text"> Sr. Web Developer </span>{" "}
                </p>
              </div>
            </div>

            <div className="col-md-4 pb-4">
              <div className="team-card">
                <div className="team-content">
                  <div class="team-content-overlay fadeIn-bottom"></div>
                  <div className="team-img">
                    <img src={TLCHIRANSHUSIR} className="img-fluid" />
                  </div>
                  <div className="team-descrition">
                    <div className="team-overlay-text">
                      <p>
                        Offering technical assistance to Team BFC's clients
                        across platforms is a consuming errand, something
                        Chitranshu does so well that he makes it look
                        effortless. Of course, he is a man of multifaceted
                        competencies. How else would he make it happen?
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="pt-3">
                  <span className="sub-color"> Chitranshu Srivastava</span>
                </h2>
                <p className="pb-3">
                  <span className="profile-text"> Sr. Web Developer </span>
                </p>
              </div>
            </div>
            <div className="col-md-4 pb-4">
              <div className="team-card">
                <div className="team-content">
                  <div class="team-content-overlay fadeIn-bottom"></div>
                  <div className="team-img">
                    <img src={ABHISHEKGURUJI} className="img-fluid" />
                  </div>
                  <div className="team-descrition">
                    <div className="team-overlay-text">
                      <p>
                        A jack of all trades and master of coding, that's
                        perhaps the best way to articulate Abhishek's abilities.
                        Also, he is an ace swimmer and a reasonably good
                        guitarist who doesn't mind strumming a tune or two when
                        in the right company.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="pt-3">
                  <span className="sub-color"> Abhishek Sahu</span>
                </h2>
                <p className="pb-3">
                  <span className="profile-text"> Sr. Software Engineer</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechnicalSupport