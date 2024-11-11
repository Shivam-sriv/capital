import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import USP from "../img/usp.png"
import BFCINNUMBER from "../img/bfc-in-number.png"

import { useEffect, useState } from "react";

function HomeHeader() {
  
  const [images, setImages] = useState([]);
  const urls = [USP, BFCINNUMBER];

  useEffect(() => {

    const preloadImages = async function () {
      const allPromises = urls.map(el => {
        return new Promise((resolve,reject) => {
          const img = new Image()
          img.src = el;
          img.onload = () => resolve(img);
          img.onerror= () => reject(new Error("Image is not loaded"));
        })    
      })

      try {
        const images = await Promise.allSettled(allPromises);
        // console.log(images)
        setImages(images);
      } catch (Err) {
        // console.log(Err)
      }
    }
   preloadImages()
  },[])

  return (
    <section className="home-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6" id="mobile">
            <Carousel interval={6000} controls={false} className="home-slider">
              <Carousel.Item>
                {images.length > 0 && (
                  <img
                    className="d-block w-100"
                    src={images[0].value.src}
                    alt="First slide"
                    width={312}
                    height={312}
                    loading="eager"
                    fetchpriority="high"
                    srcSet={`${USP} 480w`}
                    sizes="(max-width: 480px) 100vw,"
                  />
                )}
              </Carousel.Item>

              <Carousel.Item>
                {images.length > 0 && (
                  <img
                    className="d-block w-100"
                    src={images[1].value.src}
                    alt="Second slide"
                    width={312}
                    height={312}
                    loading="eager"
                    fetchpriority="high"
                    srcSet={`${BFCINNUMBER} 480w`}
                    sizes="(max-width: 480px) 100vw,"
                  />
                )}
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg-6 col-md-6 d-flex align-items-stretch header-content-wrapper">
            <div className="align-self-center">
              <div className="header-content">
                <h1 className="header-title">
                  Delivering Peace of Mind{" "}
                  <span className="sub-title">
                    <br /> Since 2 Decades{" "}
                  </span>
                </h1>
                <div className="header-description mb-24">
                  <p className="pb-lg-3">
                    Building investors' trust is one thing, maintaining it is
                    another. We strive for both, and that's why today, we are
                    the biggest mutual fund distributor in the region.
                  </p>
                </div>
              </div>
              <div className="pb-4">
                <Link to="/contact-us" target={"_blank"}>
                  <Button className="btn3" variant="outline-primary">
                    Reach Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6" id="desktop">
            <Carousel interval={6000} controls={false} className="home-slider">
              <Carousel.Item>
                {images.length > 0 && (
                  <img
                    className="d-block w-100"
                    src={images[0].value.src}
                    alt="First slide"
                    width={632}
                    height={632}
                    loading="eager"
                    fetchpriority="high"
                  />
                )}
              </Carousel.Item>
              <Carousel.Item>
                {images.length > 0 && (
                  <img
                    className="d-block w-100"
                    src={images[1].value.src}
                    alt="Second slide"
                    width={632}
                    height={632}
                    loading="eager"
                    fetchpriority="high"
                  />
                )}
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHeader;