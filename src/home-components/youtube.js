import React, { useState } from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import y1 from "../img/youtube/Best Tax Saving Investment Options in 2024.webp";
import y2 from "../img/youtube/Fixed Deposit Or Mutual Funds Which is Better.webp";
import y3 from "../img/youtube/Hindenburg Exposed.webp";
import y4 from "../img/youtube/Importance of Nominee & Nomination.webp";
import y5 from "../img/youtube/Large Cap vs Mid Cap vs Small Cap Where to Invest.webp";
import y6 from "../img/youtube/Mutual Fund SIP vs Stock SIP.webp";
import y7 from "../img/youtube/NPS Vatsalya Explained 2024.webp";
import y8 from "../img/youtube/Pharma Funds Explained.webp";
import y9 from "../img/youtube/SIP VS STP VS SWP.webp";
import y10 from "../img/youtube/Sectoral vs Thematic Funds.webp";
import y11 from "../img/youtube/Unified Pension Scheme.webp";
import y12 from "../img/youtube/Which is the Best Date for Your SIP .webp";
import y13 from "../img/youtube/y13.webp";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaYoutube } from 'react-icons/fa';

function Youtube() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [videoLink,setVideoLink] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = (url) => {
    setShow(true);
    setVideoLink(url)

  }
  return (

    <section className="pb-5">
      <div className="container ">
        <div className="row mt-4 mt-lg-0  flex-wrap-reverse">
         
          <div className="col-lg-6 col-md-12  text-center">

          <OwlCarousel
          className="owl-theme "
          loop
          margin={10}
          autoplaySpeed={2000}
          autoplay={true}
          responsiveClass={true}
          responsive={{
            0: { items: 1, nav: false },
            500: { items: 1, nav: false },
            768: { items: 1, nav: false },
            990: { items: 1, nav: false },
            1200: { items: 1, nav: false },
          }}
          dots={false}
          nav
        >   
         <div className="item">
            <div className="card-youtube">
              <img src={y13} alt="" className="img-fluid" />
              <div class="play-btn-here">
              <a className="play-btn" onClick={()=>handleShow("https://www.youtube.com/embed/RYcY-gjoMco?si=aA6Q1nhu4U6vRepb")} ><FaYoutube className='fa-2x '/></a>
              </div>
            </div>
          </div>       
          <div className="item">
            <div className="card-youtube">
              <img src={y1} alt="" className="img-fluid" />
              <div class="play-btn-here">
              <a className="play-btn" onClick={()=>handleShow("https://www.youtube.com/embed/m6gsXr-WgSA?si=iomMJZ0uoc7w_Cf-")} ><FaYoutube className='fa-2x '/></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card-youtube">
              <img src={y2} alt="" className="img-fluid"  />
              <div class="play-btn-here">
              <a className="play-btn" onClick={()=>handleShow("https://www.youtube.com/embed/1l9CKQS6wRs?si=fImYp-AhMfc2Cn5p")} ><FaYoutube className='fa-2x '/></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card-youtube">
              <img src={y3} alt="" className="img-fluid"  />
              <div class="play-btn-here">
              <a className="play-btn" onClick={()=>handleShow("https://www.youtube.com/embed/DL4I8dkyWDc?si=jLxrIWhx7Ta6CwvR")} ><FaYoutube className='fa-2x '/></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card-youtube">
              <img src={y4} alt="" className="img-fluid" />
              <div class="play-btn-here">
              <a className="play-btn" onClick={()=>handleShow("https://www.youtube.com/embed/oL2rkS0zdaA?si=S1SFJYuSAbpQENRc")} ><FaYoutube className='fa-2x '/></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card-youtube">
              <img src={y5} alt="" className="img-fluid" />
              <div class="play-btn-here">
              <a className="play-btn" onClick={()=>handleShow("https://www.youtube.com/embed/5FJ4oO-gFkQ?si=jAt4JBaDKx6HyL1S")} ><FaYoutube className='fa-2x '/></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card-youtube">
              <img src={y6} alt="" className="img-fluid" />
              <div class="play-btn-here">
              <a className="play-btn" onClick={()=>handleShow("https://www.youtube.com/embed/GWZBm8CCy9E?si=JUUn85nFJ9B7JOQ0")} ><FaYoutube className='fa-2x '/></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card-youtube">
              <img src={y7} alt="" className="img-fluid" />
              <div class="play-btn-here">
              <a className="play-btn" onClick={()=>handleShow("https://www.youtube.com/embed/v_uzqVvBt5s?si=iwQiCr0jFs2eCiPT")} ><FaYoutube className='fa-2x '/></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card-youtube">
              <img src={y8} alt="" className="img-fluid" />
              <div class="play-btn-here">
              <a className="play-btn" onClick={()=>handleShow("https://www.youtube.com/embed/tLqdzlQsMxM?si=djjn9yCqKtKsUNB6")} ><FaYoutube className='fa-2x '/></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card-youtube">
              <img src={y9} alt="" className="img-fluid" />
              <div class="play-btn-here">
              <a className="play-btn" onClick={()=>handleShow("https://www.youtube.com/embed/Cdjes8K0Y1c?si=7OqdFz7KD7f8PAek")} ><FaYoutube className='fa-2x '/></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card-youtube">
              <img src={y10} alt="" className="img-fluid" />
              <div class="play-btn-here">
              <a className="play-btn" onClick={()=>handleShow("https://www.youtube.com/embed/XzjcU9zu06M?si=2j42_0i5FBKJNZoo")} ><FaYoutube className='fa-2x '/></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card-youtube">
              <img src={y11} alt="" className="img-fluid" />
              <div class="play-btn-here">
              <a className="play-btn" onClick={()=>handleShow("https://www.youtube.com/embed/YmzwnWnUgr4?si=KAHHlAqFm7vZap8l")} ><FaYoutube className='fa-2x '/></a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card-youtube">
              <img src={y12} alt="" className="img-fluid" />
              <div class="play-btn-here">
              <a className="play-btn" onClick={()=>handleShow("https://www.youtube.com/embed/BAF31CobWYM?si=iNVribsHDjxq4Pmi")} ><FaYoutube className='fa-2x '/></a>
              </div>
            </div>
          </div>
         
        </OwlCarousel>

          </div>
          <div className="col-lg-6 col-md-12 align-self-center">
            <h4 className="bfc-advantage-top-text mb-2 pt-0 youtube-h3">Investment Simplified: Empowering You to Invest Wisely</h4>
            <p className="pb-4 text-justify">
            Join the BFC community to learn about investing, saving, and budgeting in the easiest ways possible!  Whether you're a seasoned investor or just figuring out your financial journey, dive in for treasured insights and expert advice. Get tips on mutual funds, saving, budgeting, and retirement planning. Take control of your financial future today!
            </p>
          </div>
        </div>

       
      </div>
     
      <Modal className='youtube-th' show={show} onHide={handleClose}  size="lg"  centered>
        <Modal.Header className='py-2' closeButton>
       
        </Modal.Header>
        <Modal.Body className='p-0'>

        <iframe width="100%" height="400" src={videoLink}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>

        </Modal.Body>
        
      </Modal>
    </section>


  )
}
export default Youtube;


