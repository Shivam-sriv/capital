import { AnimationOnScroll } from "react-animation-on-scroll";
import Button from "react-bootstrap/Button";
import EX2 from "../img/experts/2.webp";
import EX3 from "../img/experts/3.webp";
import EX4 from "../img/experts/4.webp";
import EX5 from "../img/experts/5.webp";
import EX6 from "../img/experts/6.webp";
import WHATSAPP from "../img/whatsapp.webp"
import GMAIL from "../img/gmail.webp";

function TalkToOurExperts() {
  return (
    <section className="contact">
      <div className="container">
        <div className="row flex-wrap-reverse py-3">
          

          <div className="col-12 mt-4 mt-lg-0 col-md-5 d-flex align-items-stretch contact-content-wrapper">
            <div className="align-self-center">
              <AnimationOnScroll animateIn="animate__zoomIn">
                <div className="contact-content">
                  <h1 className="contact-title">Talk to Our Experts</h1>
                  <p className="contact-description">
                    <a href="tel:05223514141" className="number">
                      +91-522-3514141
                    </a>
                  </p>
                  <p className="contact-whatapps">
                    <a href="https://wa.me/+917347700888" target="_blank">
                      <img
                        src={WHATSAPP}
                        className="img-fluid"
                        loading="lazy"
                      />{" "}
                      &nbsp; +91-7347700888
                    </a>
                  </p>
                  <p className="contact-whatapps">
                    <a href="https://mail.google.com/mail/u/0/?fs=1&to=customersupport@bfccapital.com&body=BODY&tf=cm">
                      <img src={GMAIL} className="img-fluid" loading="lazy" />
                      &nbsp; customersupport@bfccapital.com
                    </a>
                  </p>
                  <p className="contact-description pb-3">
                    Money matters are serious business.
                    <br />
                    Don’t take them lightly. Reach out to our <br />
                    experts and make informed financial decisions.
                  </p>
                </div>
                <div className="pt-2 pb-2">
                  <a
                    href="https://prodigy-pro.bfccapital.com/login-with-option"
                    target={"_blank"}
                  >
                    <Button className="btn3" variant="outline-primary">
                      Invest Now
                    </Button>
                  </a>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
          <div className="col-12 col-md-7 ">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <div className="row justify-content-center">
                <div className="col-4 pb-3">
                  <div className="contact-image desktop-contact">
                    <img src={EX2} className="img-fluid" loading="lazy" />
                  </div>
                </div>
                <div className="col-4 pb-3">
                  <div className="contact-image desktop-contact">
                    <img src={EX3} className="img-fluid" loading="lazy" />
                  </div>
                </div>
                {/* <div className="col-4">
                  <div className="contact-image desktop-contact">
                    <img src={EX4} className="img-fluid" loading="lazy" />
                  </div>
                </div>*/}
              </div> 
              <div className=" row justify-content-center">
                <div className="col-4">
                  <div className="contact-image desktop-contact">
                    <img src={EX4} className="img-fluid" loading="lazy" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="contact-image desktop-contact">
                    <img src={EX5} className="img-fluid" loading="lazy" />
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TalkToOurExperts;
