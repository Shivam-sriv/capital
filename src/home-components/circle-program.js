import Carousel from "react-bootstrap/Carousel";
import NTPC from "../img/NTPC.webp"
import PWD from "../img/PWD.webp";
import LMRC from "../img/LMRC-1.webp";

function CircleProgram() {
  return (
    <section className="circle-program-bg pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="circle-program-top-text mb-3">
              Quality Circle Programmes
            </h4>
            <p className="text-center">
              An honest attempt to educate investors on the Dos and Don'ts of
              investing.
            </p>
          </div>
        </div>
      </div>
      <div className="circle-program">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Carousel interval={4000} controls={false}>
                <Carousel.Item className="pt-3 pb-2">
                  <div className="row justify-content-center">
                    <div className="col-md-12">
                      <div className="circle-program-item d-md-flex">
                        <div
                          className="circle-program-img"
                          style={{
                            backgroundImage: `url(${NTPC})`,
                            width: "100%",
                            height: "auto",
                            
                          }}
                        ></div>
                        <div className="circle-program-content  p-4 py-xl-5 px-xl-5 d-flex align-items-center">
                          <div className="circle-program-desc w-100">
                            <h2 className="pb-4">
                              Best Mutual Funds - Reality or Myth?
                            </h2>
                            <p>
                              Is there a thing called “The Best Mutual Fund
                              Scheme?” Can an investor identify it once and then
                              returns will follow year after year? Or do the
                              “Best Mutual Funds” keep changing? These and
                              several other myths were busted in our session
                              with NTPC employees.
                            </p>
                            <p className="pb-2">
                              <span className="circle-program-p">Venue: </span>
                              NTPC
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="pt-3 pb-2 animate__fadeOutDown">
                  <div className="row justify-content-center">
                    <div className="col-md-12">
                      <div className="circle-program-item d-md-flex">
                        <div
                          className="circle-program-img"
                          style={{
                            backgroundImage: `url(${PWD})`,
                            width: "100%",
                            height: "auto",
                          }}
                        ></div>
                        <div className="circle-program-content p-4 py-xl-5 px-xl-5 d-flex align-items-center">
                          <div className="circle-program-desc w-100">
                            <h2 className="pb-4">
                              Retirement Planning - Sar Utha Ke Jiyo
                            </h2>
                            <p>
                              Most people start planning for retirement too late
                              or end up planning for less than what they
                              actually need. Loans can be availed for child
                              education or marriage but no entity offers a loan
                              for retirement. These and several other key
                              aspects were covered when we sat down with the
                              employees of PWD.
                            </p>
                            <p className="pb-2">
                              <span className="circle-program-p">Venue: </span>
                              PWD
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="pt-3 pb-2 animate__fadeOutDown">
                  <div className="row justify-content-center">
                    <div className="col-md-12">
                      <div className="circle-program-item d-md-flex">
                        <div
                          className="circle-program-img"
                          style={{
                            backgroundImage: `url(${LMRC})`,
                            width: "100%",
                            height: "auto",
                          }}
                        ></div>
                        <div className="circle-program-content p-4 py-xl-5 px-xl-5 d-flex align-items-center">
                          <div className="circle-program-desc w-100">
                            <h2 className="pb-4">
                              SIP - Kari Nahi To Pachtaoge
                            </h2>
                            <p>
                              In this session, we briefed the members of Lucknow
                              Metro Rail Corporation (LMRC) on what an SIP
                              actually is, why they need to start one, when
                              should one start and stop parking funds in a
                              particular scheme, where to invest and how to
                              start. We also told them how a small SIP can turn
                              into a huge corpus through the power of
                              compounding.
                            </p>
                            <p className="pb-2">
                              <span className="circle-program-p">Venue: </span>
                              LMRC
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CircleProgram