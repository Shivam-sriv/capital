import VERTIKA from "../img/team/vertika.webp";
import VANSHIKA from "../img/team/vanshika.webp";

function CustomerSupport() {
  return (
    <div className="marketing-team-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center pt-lg-5">
            <h3>Operations</h3>
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
                    <img
                      src={VERTIKA}
                      className="img-fluid"
                      width={413}
                      height={413}
                    />
                  </div>
                  <div className="team-descrition">
                    <div className="team-overlay-text">
                      <p>
                        Vertika is a perfect fit for the operations team because
                        of her unwavering focus. She has developed into an
                        expert in investing procedures thanks to her curiosity
                        and desire to learn.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="pt-3">
                  <span className="sub-color"> Vertika Singh</span>
                </h2>
                <p className="pb-3">
                  <span className="profile-text">Sr. Manager- Operations</span>
                </p>
              </div>
            </div>
            <div className="col-md-4 pb-4">
              <div className="team-card">
                <div className="team-content">
                  <div class="team-content-overlay fadeIn-bottom"></div>
                  <div className="team-img">
                    <img
                      src={VANSHIKA}
                      className="img-fluid"
                      width={413}
                      height={413}
                    />
                  </div>
                  <div className="team-descrition">
                    <div className="team-overlay-text">
                      <p>
                        Vanshika is a voracious reader. And what does she read?
                        Regulatory guidelines, compliance norms, and process
                        updates. What draws her to read them? First, it's her
                        duty to stay current, and second, because she's a nerd
                        who can't stop learning.
                      </p>
                    </div>
                  </div>
                </div>
                <h2 className="pt-3">
                  <span className="sub-color"> Vanshika Gupta</span>
                </h2>
                <p className="pb-3">
                  <span className="profile-text"> Asst. Manager Operations</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomerSupport