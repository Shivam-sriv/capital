import RAVI from "../img/team/Ravi-Sir.webp";
import MANOJ from "../img/team/manoj-sir.webp"

function HrAndAccounts() {
  return (
    <div className="marketing-team ">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center pt-lg-5">
            <h3>HR & Accounts </h3>
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
                    <img src={RAVI} className="img-fluid" />
                  </div>
                  <div className="team-descrition">
                    <div className="team-overlay-text">
                      <p>
                        Building a competent team requires an eye for talent.
                        Fortunately, we know just the guy. Identifying skills
                        comes to Ravi instinctually. Over the years, he has
                        introduced numerous amazing individuals to BFC Capital,
                        courtesy his innate ability to identify the right people
                        for the job.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="pt-3">
                  <span className="sub-color"> Ravi Singh </span>
                </h2>
                <p className="pb-3">
                  <span className="profile-text"> Sr. Manager- HR </span>{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4 pb-4">
              <div className="team-card">
                <div className="team-content">
                  <div class="team-content-overlay fadeIn-bottom"></div>
                  <div className="team-img">
                    <img src={MANOJ} className="img-fluid" />
                  </div>
                  <div className="team-descrition">
                    <div className="team-overlay-text">
                      <p>
                        Working balance sheets, prepping the payrolls and
                        keeping track of our liabilities and obligations has
                        been Manoj’s business since he set foot in our office
                        for the first time. He rightfully owns this set of
                        responsibilities, and that’s what makes him the asset he
                        is.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="pt-3">
                  <span className="sub-color"> Manoj Mishra </span>
                </h2>
                <p className="pb-3">
                  <span className="profile-text"> Sr. Manager- Accounts </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HrAndAccounts