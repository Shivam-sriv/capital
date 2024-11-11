import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaHome, FaAngleRight } from "react-icons/fa";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import globalUrl from '../CalculaterApiUrls/urls'
import { submitData } from "./Validations/contactUsValidation"
import CALL from "../img/call.webp"
import WHATSAPP from "../img/whatsapp.webp"
import GMAIL from "../img/gmail.webp"
import GOOGLE from "../img/google-maps.webp"
const About = () => {
  const [show, setShow] = useState(false);
  const [FullName, setFullName] = useState('');
  const [MobileNumber, setMobileNumber] = useState('');
  const [Email, setEmail] = useState('');
  const [Subject, setSubject] = useState('');
  const [Message, setMessage] = useState('');
  const [isVarified, setIsVarified] = useState(false);

  const [FullNameError, setFullNameError] = useState('');
  const [MobileNumberError, setMobileNumberError] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [SubjectError, setSubjectError] = useState('');
  const [isVarifiedError, setIsVarifiedError] = useState(false);

  const handleClose = () => setShow(false);

  const handleForm = (e) => {
    e.preventDefault()

    
    const errorlength = submitData({ FullName, MobileNumber, Email, Subject, Message,isVarified }, { setFullNameError, setMobileNumberError, setEmailError, setSubjectError,setIsVarifiedError })
    // console.log("errorlengthb",errorlength);

    if (errorlength == 0) {
      const data = { FullName, MobileNumber, Email, Subject, Message }
      axios.post(globalUrl.commonUrl + 'contact-us', data).then((res) => {
        setFullName('');
        setMobileNumber('');
        setEmail('');
        setSubject('');
        setMessage('');
        setIsVarified(false)
        setShow(true);

      }).catch((err) => {
        if (err) {
          toast.error("Sorry,Somthing went wrong..!!!");
        }
      })
    }
  }

  return (
    <>
      <div className="breadcrumb-nav btm-border">
        <div className="">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <ul className="d-flex">
                  <li><a href="/">
                    <span className="breadcrumb-icon bg-gradient-primary"> <FaHome /></span></a>
                    <span className="r-icon"> <FaAngleRight /> </span>
                  </li>
                  <li><a href="/contact-us">
                    <span className="breadcrumb-text"> Contact Us </span>
                  </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pt-40 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contact-header text-center">
                <h2>Contact<span className="sub-color"> Us</span></h2>
                <div className="contact-pageTitleBorder"></div>
              </div>
            </div>
          </div>
          <ToastContainer />

          <div className="contact-section pt-lg-4 pb-lg-4">
            <div className="row">
              <div className="col-md-5">
                <div className="contact-info result-content-shadow">
                  <h5>Customer Support</h5>
                  <div className="contact-Border"></div>
                  <p className="contact-img pb-2 pt-2"> <a href="tel:0522-3514141"> <img src={CALL} className="img-fluid" />  &nbsp;&nbsp;+91-522-3514141</a> </p>
                  <p className="contact-img pb-2"> <a href="https://wa.me/+917347700888" target="_blank"> <img src={WHATSAPP} className="img-fluid" /> &nbsp; +91-7347700888 </a> </p>
                  <p className="contact-img"> <a href="https://mail.google.com/mail/u/0/?fs=1&to=customersupport@bfccapital.com&body=BODY&tf=cm"> <img src={GMAIL} className="img-fluid" /> &nbsp;  customersupport@bfccapital.com </a>
                  </p>
                </div>
                <div className="contact-address result-content-shadow">
                  <h5>Address</h5>
                  <div className="contact-Border"></div>
                  <div className="d-flex">
                    <div className="address-img">
                      <p className="contact-img pt-2"> <img src={GOOGLE} className="img-fluid" /></p>
                    </div>
                    <div className="address-text">
                      <a href="https://goo.gl/maps/Ut3yYcCFsM6fKzTA6" target="_blank"> <p> CP-61, Viraj Khand, Gomti Nagar, Lucknow, Uttar Pradesh, 226010</p></a>
                      <p className='ps-3'><b>Hours:</b> Mon - Sat :- 09:30 am - 6:30 pm <br />(Second & Fourth Saturday Closed)

                      </p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-md-7">
                <div className="contact-form result-content-shadow">
                  <div className="contact-form-header">
                    <h2 className="pt-3">Submit a Query</h2>
                    <div className="contact-Border text-center"></div>
                  </div>
                  <Form onSubmit={handleForm}>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" value={FullName} onChange={(e) => setFullName(e.target.value)} />
                        <small className="text-danger pull-left">{!FullName ? FullNameError : ""}</small>

                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" value={MobileNumber} onChange={(e) => setMobileNumber(e.target.value)} minLength='10' maxlength='10' />
                        <small className="text-danger pull-left">{MobileNumberError}</small>

                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email ID</Form.Label>
                        <Form.Control type="email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                        <small className="text-danger pull-left">{!Email ? EmailError : ""}</small>
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Subject</Form.Label>
                        {/* <Form.Select>
                        <option>Select</option>
                        <option>BFC Client</option>
                        <option>Others</option>
                      </Form.Select> */}
                        <Form.Control type="text" value={Subject} onChange={(e) => setSubject(e.target.value)} />
                        <small className="text-danger pull-left">{!Subject ? SubjectError : ""}</small>
                      </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" value={Message} rows={3} onChange={(e) => setMessage(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="check" className="mb-3">
                      <div className="d-flex">
                        <span><input type="checkbox" className="check " value={isVarified}
                          onChange={(e) => setIsVarified(e.target.checked)} /> </span><span className="fs-11 padding-5">I, hereby accord my consent to process my above mentioned personal data by BFC Capital Pvt. Ltd. for the purpose of customer support/product promotion, in accordance with the provisions of DPDP Act 2023.<br/> To know more <a href='/dpdpact' target='_blank'>click here.</a></span>
                      </div>
                    <small className="text-danger ">{isVarifiedError}</small>
                    </Form.Group>
                    <Button className="btn3 mt-2" type='submit' variant="outline-primary" > Submit</Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="query-form pt-30 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-md-12 result-content-shadow">
              <div className="">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.619552235852!2d81.02063161485137!3d26.852050383153763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2e63c8d5997%3A0x33e9ebd3d6fdd310!2sBFC%20Capital%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1664454359460!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <Modal centered show={show} onHide={handleClose}>
                <Modal.Body>
                  <h2>ALL SET!</h2>
                  <p>Now just sit tight. You’ll hear from us soon.</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button className="btn3" variant="outline-primary" onClick={handleClose}>
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default About;
