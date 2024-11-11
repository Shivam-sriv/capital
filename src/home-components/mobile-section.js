import { AnimationOnScroll } from "react-animation-on-scroll";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import PHONE from "../img/phone.webp";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MobileSection() {
  const [images, setImages] = useState([]);
  const urls = [PHONE];

  useEffect(() => {
    const preloadImages = async function () {
      const allPromises = urls.map((el) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = el;
          img.onload = () => resolve(img);
          img.onerror = () => reject(new Error("Image is not loaded"));
        });
      });

      try {
        const images = await Promise.allSettled(allPromises);
        // console.log(images);
        setImages(images);
      } catch (Err) {
        // console.log(Err);
      }
    };
    preloadImages();
  }, []);

  return (
    <section id="download-app" className="download-app">
      <div className="container py-lg-5 ">
        <div className="row">
          <div className="col-12">
            <div className="download-inner">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12" id="mobile">
                  <div>
                    <AnimationOnScroll
                      animateIn="animate__zoomIn"
                      animateOut="animate__zoomIn"
                    >
                      <div className="download-inner-img">
                        {images.length > 0 && (
                          <img
                            src={images[0].value.src}
                            alt="#"
                            className="app-img img-fluid"
                            width={280}
                            height={275}
                            loading="lazy"
                          />
                        )}
                      </div>
                    </AnimationOnScroll>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="text-content animate__animated animate__fadeIn animate__delay-200ms pt-4">
                    <h2>Prodigy Pro</h2>
                    <h4 className="pb-lg-3">
                      A Quick, Simple & Paperless Investing Experience{" "}
                    </h4>

                    <p>
                      The quickest and safest way to invest in Mutual Funds.{" "}
                    </p>
                    <p>
                      Invest, manage and monitor your money from the comfort of
                      your home.
                    </p>
                    <p>
                      Hit the icon below to download.
                      <a href="https://prodigypro.co.in/" className="ps-2" target="_blank">Know More</a>
                    </p>
                  </div>
                  <div className="button mt-sm-5">
                    <a href="https://apps.apple.com/in/app/prodigy-pro-mutual-funds-sip/id1575700744" target="_blank" className="btn  animate__animated animate__zoomIn animate__delay-200ms" >< FaApple className='i apple' />App Store</a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.bfc_mf.prodigy_app"
                      target="_blank"
                      className="btn  animate__animated animate__zoomIn animate__delay-200ms"
                    >
                      <FaGooglePlay className="i" />
                      Google Play
                    </a>
                    {/* <a href="https://apps.apple.com/in/app/mf-prodigy/id1575700744" target="_blank" className="btn  animate__animated animate__zoomIn animate__delay-200ms" ><FaApple className='i' />App Store</a> */}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12" id="desktop">
                  <div className="app-mockup">
                    <AnimationOnScroll
                      animateIn="animate__zoomIn"
                      animateOut="animate__zoomIn"
                    >
                      {images.length > 0 && (
                        <img
                          src={images[0].value.src}
                          alt="#"
                          className="app-img img-fluid"
                          width={720}
                          height={707}
                          loading="lazy"
                        />
                      )}
                    </AnimationOnScroll>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileSection;
