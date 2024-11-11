import NITESH from "../img/team/nitesh.webp";
import AMULYA from "../img/team/amulya.webp";
import CHAYAN from "../img/team/chayan.webp";
import MANISH from "../img/team/manish.webp"
import SURBHI from "../img/team/Surbhi.webp";

function DigitalMarketingTeam() {
  return (
    <div className="marketing-team ">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center pt-lg-5">
            <h3>Digital Marketing Team</h3>
            <div className="contact-pageTitleBorder"></div>
          </div>
        </div>
      </div>
      <section className="pt-40 pb-20 marketing-team-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="vision-img">
                <img src={NITESH} className="img-fluid" />
              </div>
            </div>
            <div className="col-md-7 justify-content-end">
              <div className="vision-text">
                <h2 className="pb-4">
                  <span className="sub-color">Nitesh Rai</span>
                  <span className="profile-text">
                    ( Manager - DM )
                  </span>
                </h2>
                <p>
                  There are people who are passionate about what they do, and
                  then there’s Nitesh. He’ll practically spend nights deep
                  searching the internet, acquainting himself with latest SEO
                  protocols, studying demographics, identifying his target
                  audience and devising infallible digital marketing ideas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-40 pb-50 team">
        <div className="container text-center">
          <div className="row justify-content-around">
            <div className="col-md-4 pb-4">
              <div className="team-card">
                <div className="team-content">
                  <div class="team-content-overlay fadeIn-bottom"></div>
                  <div className="team-img">
                    <img src={AMULYA} className="img-fluid" />
                  </div>
                  <div className="team-descrition">
                    <div className="team-overlay-text">
                      <p>
                        Amulya’s inquisitive mind and research capabilities make
                        him the perfect fold for Nitesh. BFC Capital’s outreach
                        campaigns are so much more effective due to his will to
                        excel and unfazed resolve. On a personal front, he is a
                        foodie who doesn’t mind travelling miles to quench his
                        hunger for rare delicacies.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="pt-3">
                  <span className="sub-color"> Amulya Ratan</span>
                </h2>
                <p className="pb-3">
                  <span className="profile-text">
                  Asst. Manager - DM
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-4 pb-4">
              <div className="team-card">
                <div className="team-content">
                  <div class="team-content-overlay fadeIn-bottom"></div>
                  <div className="team-img">
                    <img src={CHAYAN} className="img-fluid" />
                  </div>
                  <div className="team-descrition">
                    <div className="team-overlay-text">
                      <p>
                        A successful digital campaign engages the audience
                        through content that pulls them, blogs, ad copies, AV
                        scripts and SEO-friendly material included. The creative
                        brilliance of Chayan, our content guy, makes it seem
                        much easier than it actually is. We also don’t mind his
                        poetry skills.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="pt-3">
                  <span className="sub-color"> Chayan Kochar</span>
                </h2>
                <p className="pb-3">
                  <span className="profile-text">
                  Sr. Content Producer
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
                    <img src={MANISH} className="img-fluid" />
                  </div>
                  <div className="team-descrition">
                    <div className="team-overlay-text">
                      <p>
                        Video content is an unavoidable part of digital
                        marketing campaigns. Luckily, we have Manish amidst our
                        ranks. He interprets the team’s creative vision and
                        transforms it into video bites, advertisements and insta
                        reels that pull the viewer to engage. Besides video
                        editing, he is also not shy about his acting skills.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="pt-3">
                  <span className="sub-color"> Manish Kumar </span>
                </h2>
                <p className="pb-3">
                  <span className="profile-text">VIDEO EDITOR & GRAPHIC ARTIST </span>
                </p>
              </div>
            </div>
            <div className="col-md-4 pb-4">
              <div className="team-card">
                <div className="team-content">
                  <div class="team-content-overlay fadeIn-bottom"></div>
                  <div className="team-img">
                    <img src={SURBHI} className="img-fluid" />
                  </div>
                  <div className="team-descrition">
                    <div className="team-overlay-text">
                      <p>
                        Flyers, brochures, creatives or print collateral, ask
                        and you shall receive. Long story short, Surabhi is our
                        in-house graphics wizard, and thankfully she’s damn good
                        at it. Those who know her personally also know that
                        she’s a brilliant artist. Obviously!
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="pt-3">
                  <span className="sub-color"> Surabhi Gupta </span>
                </h2>
                <p className="pb-3">
                  <span className="profile-text"> Sr. Graphic Designer</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DigitalMarketingTeam;