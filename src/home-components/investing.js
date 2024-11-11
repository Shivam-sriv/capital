import Video from "react-responsive-video";
import { AnimationOnScroll } from "react-animation-on-scroll";
import V1 from "../img/video-img/v-1.webp";
import V2 from "../img/video-img/v-2.webp";
import V3 from "../img/video-img/v-3.webp";
import V4 from "../img/video-img/v-4.webp";
import V5 from "../img/video-img/v-5.webp";
import INVESTMAN from "../img/inventment.mp4";



function Investing() {
  return (
    <section className="investing-process text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h4 className="circle-program-top-text mb-2">
              A Seamless & User-Friendly Investor Experience
            </h4>
            <p className="text-center"></p>
          </div>
        </div>
        <div className="row pt-lg-5" id="mobile">
          <div className="col-md-12 col-lg-4 pb-lg-3">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <div className="video-border">
                <img
                  src={V1}
                  alt="#"
                  className="img-fluid"
                  width={180}
                  height={132}
                  loading="lazy"
                />
                <div className="video-title text-center">
                  <h4>
                    Create Investment <br />
                    Account
                  </h4>
                  <div className="v-border"></div>
                  <p>Signing up is quick and easy as 1,2,3.</p>
                </div>
              </div>
            </AnimationOnScroll>
          </div>

          <div className="col-md-12 col-lg-4 pb-lg-3">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <div className="video-border">
                <img
                  src={V2}
                  alt="#"
                  className="img-fluid"
                  width={180}
                  height={132}
                  loading="lazy"
                />
                <div className="video-title text-center">
                  <h4>Select Scheme</h4>
                  <div className="v-border"></div>
                  <p>
                    Scheme recommendations based on investor priorities and
                    superior Al logic.
                  </p>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="col-md-12 col-lg-4 pb-lg-3">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <div className="video-border">
                <img
                  src={V3}
                  alt="#"
                  className="img-fluid"
                  width={180}
                  height={132}
                  loading="lazy"
                />
                <div className="video-title text-center">
                  <h4>Invest</h4>
                  <div className="v-border"></div>
                  <p>A quick and straight- forward investment process.</p>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="col-md-12 col-lg-4 pb-lg-3">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <div className="video-border">
                <img
                  src={V4}
                  alt="#"
                  className="img-fluid"
                  width={180}
                  height={132}
                  loading="lazy"
                />
                <div className="video-title text-center">
                  <h4>Monitor Portfolio</h4>
                  <div className="v-border"></div>
                  <p>
                    Monitor your entire family's investments on one platform.
                  </p>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="col-md-12 col-lg-4">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <div className="video-border">
                <img
                  src={V5}
                  alt="#"
                  className="img-fluid"
                  width={180}
                  height={132}
                  loading="lazy"
                />
                <div className="video-title text-center">
                  <h4>Review Portfolio</h4>
                  <div className="v-border"></div>
                  <p>Biannual portfolio reviews to fish out bad investments.</p>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
        <div className="row" id="desktop">
          <div className="col-md-12" style={{ width: "100%", height: "auto" }}>
            <Video
              loop={false}
              mp4={INVESTMAN}
              preload="false"
              playsinline={true}
              
            />
          </div>
        </div>
        {/* <Button className="btn3" variant="outline-primary"> Get Started</Button>{' '} */}
      </div>
    </section>
  );
}

export default Investing;
