import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaLocationArrow, FaMapMarkedAlt, FaMapMarkerAlt, FaMobile, FaPhoneAlt, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Axios from 'axios';
import dateFormat from 'dateformat';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { toast } from 'react-toastify';
import globalUrl from '../CalculaterApiUrls/urls'
import { submitData } from "./Validations/contactUsValidation"
import twitterLogo from "../img/Twitter.png";
import CALLBACK from "../img/callback.webp"
import LOGO from "../img/logo.webp";
import BFCCAPITAL from  "../img/logo/bfc-capital-text.webp"
import FACEBOOK from "../img/facebook.webp";
import LINKEDIN from "../img/linkedin.webp";
import INSTAGRAM from "../img/instagram.webp";
import YOUTUBE from "../img/youtube.webp";

function Footer() {

  const [show, setShow] = useState(false);
  const [FullName, setFullName] = useState('');
  const [MobileNumber, setMobileNumber] = useState('');
  const [Email, setEmail] = useState(''); 
  const [Subject, setSubject] = useState('');
  const [Message, setMessage] = useState('');

  const [FullNameError, setFullNameError] = useState('');
  const [MobileNumberError, setMobileNumberError] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [SubjectError, setSubjectError] = useState('');
  const [showMsg, setShowMsg] = useState('');


  const handleClose = () => setShow(false);
  const handleCloseMsg = () => setShowMsg(false);
  const handleShow = () => setShow(true);
  const [isVarifiedError, setIsVarifiedError] = useState('');
  const [isVarified, setIsVarified] = useState(false);

  const [blogs, setBlogs] = useState([])

  // useEffect(() => {
  //   Axios.get('https://bfccapital.com/blog/wp-json/wp/v2/posts?per_page=2').then(res => {
  //     setBlogs(res.data)
  //   })

  // }, [])

  const handleForm = (e) => {

    e.preventDefault()
    const errorlength = submitData({ FullName, MobileNumber, Email, Subject, Message,isVarified }, { setFullNameError, setMobileNumberError, setEmailError, setSubjectError ,setIsVarifiedError})
    // console.log("errorlengthb", errorlength);
    if (errorlength == 0) {
      const data = { FullName, MobileNumber, Email, Subject, Message }
      axios.post(globalUrl.commonUrl + 'contact-us', data).then((res) => {
        setFullName('');
        setMobileNumber('');
        setEmail('');
        setSubject('');
        setMessage('');
        setShowMsg(true);
        setIsVarified(false)
        setShow(false)
      }).catch((err) => {
        if (err) {
          toast.error("Something went wrong...!!!");
        }
      })
    }

  }

  return (
    <>
      <section className="call-back">
        <ul className="ul-right">
          <li>
            <a href="javascript:void(0)" onClick={handleShow}>
              <img
                width={49}
                height={50}
                src={CALLBACK}
                className="mx-w img-fluid"
              />
              <span className="over-text1"> Request a Call back </span>
            </a>
          </li>
        </ul>

        <Modal centered show={show} onHide={handleClose}>
          <Modal.Body>
            <Form onSubmit={handleForm}>
              <Row className="mb-3">
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={FullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <small className="text-danger pull-left">
                    {!FullName ? FullNameError : ""}
                  </small>
                </Form.Group>
                <Form.Group controlId="formGridPassword">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={MobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    minLength="10"
                    maxlength="10"
                  />
                  <small className="text-danger pull-left">
                    {MobileNumberError}
                  </small>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Email ID</Form.Label>
                  <Form.Control
                    type="email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <small className="text-danger pull-left">
                    {!Email ? EmailError : ""}
                  </small>
                </Form.Group>
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    value={Subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <small className="text-danger pull-left">
                    {!Subject ? SubjectError : ""}
                  </small>
                </Form.Group>
              </Row>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={Message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="check" className="mb-3">
                      <div className="d-flex">
                        <span className=''><input type="checkbox" className="check " value={isVarified}
                          onChange={(e) => setIsVarified(e.target.checked)} /> </span><span className="fs-11 padding-5">I, hereby accord my consent to process my above mentioned personal data by BFC Capital Pvt. Ltd. for the purpose of customer support/product promotion, in accordance with the provisions of DPDP Act 2023. To know more <a href='/dpdpact' target='_blank'>click here.</a></span>
                       
                      </div>
                    <small className="text-danger ">{isVarifiedError}</small>
                    </Form.Group>
              <Modal.Footer>
                <Button
                  className="btn3"
                  variant="secondary"
                  onClick={handleClose}
                >
                  Close
                </Button>
                <Button className="btn3" type="submit" variant="primary">
                  Submit
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </section>
      <div className="container-fluid mt-lg-5 footer-shadow bg-footer">
        <footer className=" text-lg-start text-footer">
          <section className="bg-footer">
            <div className="container text-md-start mt-lg-5">
              <div className="row mt-3">
                <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-lg-4">
                  <div className="footer-logo d-flex">
                    <div className="img-logo">
                      <img
                        src={LOGO}
                        alt="logo"
                        className="img-fluid"
                        width={60}
                        height={54}
                      />
                    </div>
                    <div className="text-logo">
                      <img
                        src={BFCCAPITAL}
                        alt="logo"
                        className="img-fluid"
                        width={200}
                        height={60}
                      />
                    </div>
                  </div>
                  <p className="pt-4">
                    The largest distributor of mutual funds in the region, BFC
                    Capital is on track to become one of the biggest in the
                    nation. The company currently manages an AUM of over Rs.
                    9 billion+ and has a retail clientele of over 16,000
                    investors from 80 locations across India and the world.
                  </p>
                  <div className="footer-social-icon">
                    <ul className="footer-social pt-2">
                      <li className="social-icon">
                        <a
                          href="https://www.facebook.com/bfccapital/"
                          target="_blank"
                        >
                          <img
                            src={FACEBOOK}
                            className="img-fluid"
                            width={30}
                            height={30}
                          />
                        </a>
                      </li>
                      <li className="social-icon">
                        <a
                          href=" https://www.linkedin.com/company/bfccapitalpvtltd"
                          target="_blank"
                        >
                          <img
                            src={LINKEDIN}
                            className="img-fluid"
                            width={30}
                            height={30}
                          />
                        </a>
                      </li>
                      <li className="social-icon">
                        <a
                          href="https://instagram.com/bfccapitalpvtltd?igshid=Yzg5MTU1MDY="
                          target="_blank"
                        >
                          <img
                            src={INSTAGRAM}
                            className="img-fluid"
                            width={30}
                            height={30}
                          />
                        </a>
                      </li>
                      <li className="social-icon">
                        <a
                          href="https://twitter.com/BFCCapital?t=uEm_AvwxJ-ZYgOHCBOQUJg&s=09"
                          target="_blank"
                        >
                          <img
                            src={twitterLogo}
                            className="img-fluid"
                            width={30}
                            height={30}
                          />
                        </a>
                      </li>
                      <li className="social-icon">
                        <a
                          href="https://www.youtube.com/@bfccapitalpvtltd"
                          target="_blank"
                        >
                          <img
                            src={YOUTUBE}
                            className="img-fluid"
                            width={30}
                            height={30}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 mx-auto mb-lg-4 pt-2">
                  <h4 className="text-uppercase heading">QUICK LINKS</h4>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto hr-bottom" />
                  <p>
                    <Link
                      to="/best-mutual-funds-to-invest-in-2024"
                      className="text-footer foot-link"
                    >
                      Best Mutual Funds to Invest in 2024
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/best-elss-funds"
                      className="text-footer foot-link"
                    >
                      Best ELSS Funds
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/best-sip-plans-to-invest"
                      className="text-footer foot-link"
                    >
                      Best SIP Plans to Invest
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/tax-saving-mutual-fund"
                      className="text-footer foot-link"
                    >
                      Best Tax Saving Mutual Funds
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/best-mutual-fund-for-lumpsum-investment"
                      className="text-footer foot-link"
                    >
                      Best Mutual Fund for Lumpsum Investment
                    </Link>
                  </p>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-lg-4 pt-2">
                  <h4 className="text-uppercase heading">Company Info</h4>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto hr-bottom" />
                  <p className='mb-0'>
                    <span className="Address">
                      <FaMapMarkerAlt />
                    </span>
                    <a
                      href="https://goo.gl/maps/Ut3yYcCFsM6fKzTA6"
                      target="_blank"
                      className="text-footer foot-link"
                    >
                      BFC Capital Pvt Ltd <br /> CP-61, Viraj Khand, Gomti
                      Nagar, Lucknow, Uttar Pradesh 226010
                    </a>
                  </p>
                  <p><b>Hours:</b> Mon - Sat :- 09:30 am - 6:30 pm <br/>(Second & Fourth Saturday Closed)

</p>
                  <p>
                    <span>
                      <FaPhoneAlt />
                    </span>
                    <a
                      href="tel:05223514141"
                      target="_blank"
                      className="text-footer foot-link"
                    >
                      +91-522-3514141
                    </a>
                  </p>
                  <p>
                    <span>
                      <FaWhatsapp className="fa-lg" />
                    </span>
                    <a
                      href="https://wa.me/+917347700888"
                      target="_blank"
                      className="text-footer foot-link"
                    >
                      +91-7347700888
                    </a>
                  </p>
                  <p>
                    <span>
                      <FaEnvelope />
                    </span>
                    <a
                      href="https://mail.google.com/mail/u/0/?fs=1&to=customersupport@bfccapital.com&body=BODY&tf=cm"
                      target="_blank"
                      className="text-footer foot-link"
                    >
                      customersupport@bfccapital.com
                    </a>
                  </p>
                </div>
              {/*   <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-lg-4">
                  {
                   blogs.length > 0 ? blogs.map((val) => {

                      return <div className="footer-blog d-flex">
                        <div className="footer-blog-img">
                          <img src={val?.yoast_head_json?.og_image[0]?.url} className="img-fluid" />
                        </div>
                        <div className="footer-blog-content">
                          <h4> <a href={val?.yoast_head_json?.canonical} >{val?.title?.rendered}</a></h4>
                          <span>{dateFormat(val?.date, "mmmm dS, yyyy")}</span>
                        </div>
                      </div>
                    }):null
                  } 
                </div>*/}
              </div>
            </div>
            <hr/>
            <div className="text-center  card border-0 bg-footer">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-lg-6 ">
                    <h6 className='fs-sm-11'>
                      © {new Date().getFullYear()} Copyright: BFC Capital. All
                      Rights Reserved
                    </h6>
                  </div>
                  <div className="col-md-12 col-lg-6  privacy-list">
                   <ul className='d-flex justify-content-evenly ps-sm-0'>
                    <li><Link to="/privacy-policy" className='fs-6 fs-sm-11'>Privacy Policy</Link></li>
                    <li><Link to="/term-condition" className='fs-6 fs-sm-11'>Terms and Conditions </Link></li>
                    <li><Link to="/legal-disclaimer" className='fs-6 fs-sm-11'>Legal Disclaimer </Link></li>
                   </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </div>
      {/* <div className="bg-white">
<div className="container">
<div className="row pt-50 pb-2">
  <div className="col-md-12 footer-mutual-fund">
    <p>POPULAR MUTUAL FUNDS: &nbsp; <span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span> &nbsp; | &nbsp; <span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span></p>
  </div>
</div>
<div className="row pb-5">
  <div className="col-md-12 footer-mutual-fund">
    <p>MUTUAL FUNDS COMPANIES: &nbsp; <span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span> &nbsp; | &nbsp; <span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span>&nbsp; | &nbsp;<span> <Link to="/scheme-performance-single" target="_blank"> Lorem Ipsum is simply dummy text</Link></span></p>
  </div>
</div>
</div>
</div> */}
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <Modal centered show={showMsg} onHide={handleCloseMsg}>
                <Modal.Body>
                  <h2>ALL SET!</h2>
                  <p>Now just sit tight. You’ll hear from us soon.</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    className="btn3"
                    variant="outline-primary"
                    onClick={handleCloseMsg}
                  >
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Footer