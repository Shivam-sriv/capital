import { FaHome, FaAngleRight } from "react-icons/fa";
import AppStore from "../img/app-store.webp";
import PlayStore from "../img/play-store.webp"

function Section1() {
  return (
    <>
      <div className="breadcrumb-nav btm-border">
        <div className="">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <ul className="d-flex">
                  <li>
                    <a href="/">
                      <span className="breadcrumb-icon bg-gradient-primary">
                        <FaHome />
                      </span>
                    </a>
                    <span className="r-icon">
                      <FaAngleRight />
                    </span>
                  </li>
                  <li>
                    <a href="/download-app">
                      <span className="breadcrumb-text"> Download App</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className="download-apps bg-col pt-20"
        id="download"
        // className={scrollPosition < 150 ? "download-apps d-none" : "download-apps bg-col pt-40"}
        // ref={ref}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="download-text pt-1">
                <h3>Prodigy Pro – The smart way to invest</h3>
              </div>
            </div>
            <div className="col-md-6 pr-60" id="desktop">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 pb-lg-4">
                    <div className="download-btn">
                      <div className="header-text pt-lg-2">
                        <h5>Download our app</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="download-btn ">
                      <div className="android-btn px-lg-3 d-flex">
                        <a href="https://apps.apple.com/in/app/prodigy-pro-mutual-funds-sip/id1575700744" target="_blank"><img src={AppStore} className="img-fluid  download-btn-img" /> </a>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.bfc_mf.prodigy_app"
                          target="_blank"
                          className="ms-3"
                        >
                          <img
                            src={PlayStore}
                            className="img-fluid  download-btn-img"
                          />
                        </a>
                      </div>
                      {/* <div className="ios-btn">
                        <a href="https://apps.apple.com/in/app/mf-prodigy/id1575700744" target="_blank"><img src="../assets/img/play-store.webp" className="img-fluid  download-btn-img" /></a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" id="mobile">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="download-btn">
                      <div className="android-btn px-lg-3 d-flex">
                        <a href="https://apps.apple.com/in/app/prodigy-pro-mutual-funds-sip/id1575700744" target="_blank"><img src={AppStore} className="img-fluid  download-btn-img" /> </a>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.bfc_mf.prodigy_app"
                          target="_blank"
                          className="ms-3"
                        >
                          <img
                            src={PlayStore}
                            className="img-fluid  download-btn-img"
                          />
                        </a>
                      </div>
                      {/* <div className="ios-btn">
                        <a href="https://apps.apple.com/in/app/mf-prodigy/id1575700744" target="_blank"><img src="../assets/img/play-store.webp" className="img-fluid  download-btn-img" /></a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1