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
import { submitData } from "./Validations/formValidate"

const Bdm = () => {
  const [show, setShow] = useState(false);
  const [Name, setName] = useState('');
  const [NameError, setNameError] = useState('');
  const [MobileError, setMobileError] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Email, setEmail] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [PostAppliedFor, setPostAppliedFor] = useState('Business Development Manager');
  const [PostAppliedForError, setPostAppliedForError] = useState('');
  const [Cv, setCv] = useState('');
  const [CvError, setCvError] = useState('');
  const [isVarifiedError, setIsVarifiedError] = useState('');
  const [isVarified, setIsVarified] = useState(false);

  const vertualRelationship = (e) => {
    e.preventDefault();
    const errorlength = submitData({ Name, Mobile, Email, PostAppliedFor,Cv,isVarified}, { setNameError, setEmailError, setMobileError, setPostAppliedForError,setCvError,setIsVarifiedError})
    if(errorlength==0){
      // console.log("raj");
      const formData = new FormData()
      formData.append('Name', Name)
      formData.append('Mobile', Mobile)
      formData.append('Email', Email)
      formData.append('PostAppliedFor', PostAppliedFor)
      formData.append('Cv', Cv)
      // console.log("formData", formData);
      axios.post(globalUrl.commonUrl+'career', formData).then((res) => {
        
        setName('');
        setMobile('');
        setEmail('');
        setPostAppliedFor('');
        setCv('');
        setShow(true);
        setIsVarified(false)
        document.getElementById("fileControl").value = "";
    
      })
    }
  }

  const handleClose = () => setShow(false);

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
                    <a href="/careers">
                      <span className="breadcrumb-text"> Career </span>
                      <span className="r-icon">
                        
                        <FaAngleRight />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/bdm">
                      <span className="breadcrumb-text">
                      Business Development Manager
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pt-40 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="job-header ">
                <h2>
                  <span className="sub-color">
                    <b>Position :-</b>
                  </span>
                      Business Development Manager (BDM)
                </h2>
                {/* <p className="sub-text-1">Note: Female candidates Only</p> */}
                <div className="job-desciption pt-40">
                  <h4 className="pb-3">Who Are We?</h4>
                  <p>
                  Group BFC has in its fold companies operating across domains. BFC Capital, the group's wealth management arm, has served clients for over 20-odd years. Besides this, the group's publishing endeavor, BFC Publications has been successfully turning writers into authors, consequently leaving a lasting imprint on the country's literary space. The group is also home to BFC Softtech, an IT company handling in-house and external projects. 
                  </p>
                  <p>
                  The group is ever-expanding and stays on the lookout to invest in potentially fruitful avenues; case-in-point, BFC Content, the group's latest foray into content creation and broadcasting.
                  </p>
                </div>
                <div className="job-desciption ">
                  <h4 className="pb-3">BFC Capital</h4>
                  <p>
                  BFC Capital is a premier wealth management company that has been treading India's wealth space for a good 20-odd years, serving and handholding corporate and retail clients in their wealth-building efforts. 
                  </p>
                  <p>
                  We are the second-largest Mutual Funds distributor in Uttar Pradesh, with a wide range of offerings, from Corporate Investment Planning to Treasury Planning and Financial Planning. We, as of now, are overseeing and managing an AUM worth more than Rs. 9 billion, with over 16,000 retail and 150+ institutional clients under our wing. 
                  </p>
                  <p>In a recent Silicon India article, we were identified as "One of the Top 20 Most Promising Wealth Management Consultants" of the country.</p>
                </div>
                <div className="job-desciption ">
                  <h4 className="pb-3">What Are We Looking For?</h4>
                  <div className="job-desciption ">
                  <h6 className="pb-lg-3  pb-sm-3">
                    <span className='fw-bold'>Role : </span>
                    <spn className="">
                    Business Development Manager
                    </spn>
                  </h6>
                  <h6 className="pb-lg-3  pb-sm-3">
                    <b>Job Location  : </b>
                    <spn className="">
                      
                    Lucknow (Uttar Pradesh)
                    </spn>
                  </h6>
                  <h6 className="pb-lg-3  pb-sm-3">
                    <b>Minimum Qualification  : </b>
                    <spn className="">Graduation</spn>
                  </h6>
                  <h6 className="pb-lg-3  pb-sm-3">
                    <b>Minimum Experience  : </b>
                    <spn className="">
                    Nil
                    </spn>
                  </h6>
                  
                </div>
                </div>
                <ToastContainer />

                <div className="job-desciption">
                  <h4 className="pb-3">Responsibilities : </h4>
                  <p>
                    <b>&#x2022;</b> 	Marketing Campaigns
                  </p>
                  <p>
                    <b>&#x2022;</b> Generating Leads for Revenue Team
                  </p>
                  <p>
                    <b>&#x2022;</b> 	Planning and Executing Marketing Activities
                  </p>
                  <p>
                    <b>&#x2022;</b> Tapping Various Segments 
                  </p>
                  <p>
                    <b>&#x2022;</b> Creating Brand Awareness 
                  </p>
                  <p>
                    <b>&#x2022;</b> 	Corporate visits
                  </p>
                </div>
                <div className="job-desciption ">
                  <h4 className="pb-3">Why Join Us?</h4>
                  <p>
                  We're assuming you may have apprehensions about associating with a company with a modest footprint; it's understandable. That said, working with us has its advantages. For starters, BFC Capital is known for providing its employees a better work-life balance with facilities like five days working. Also, we try to keep the day-to-day functioning as stress-free as possible; this is one of the prominent reasons for our low attrition rates.  
                  </p>
                  <p>
                  Yes, there are times when our workforce is working against the clock, scampering to meet the goals they've set themselves, but rarely do we let failures define them. Most times, failure is a by-product of poor planning and execution; we get it. This is why all our team leaders and vertical heads are actively involved, providing real-time support and guidance to their subordinates. We have a young and diverse work culture, allowing each team member to function as per their individual style and take a breather every now and then by participating in team outings.
                  </p>
                  
                </div>
                <div className="job-desciption">
                  <h4 className="pb-3">Benefits & Perks : </h4>
                  <p>
                    <b>&#x2022;</b> 		On Job Training
                  </p>
                  <p>
                    <b>&#x2022;</b>	Team Outings
                  </p>
                  <p>
                    <b>&#x2022;</b> 		Soft Skills Training
                  </p>
                  <p>
                    <b>&#x2022;</b>	Attractive Variables for Meeting Milestones
                  </p>
                
                </div>
                <div className="job-desciption">
                  <h4 className="pb-3">Skill set Required : </h4>
                  <p>
                    <b>&#x2022;</b> Convincing Skills | Analytical Skills | Inter Personal Skills
                  </p>
                  <p>
                    <b>&#x2022;</b>	Must be Presentable
                  </p>
                  <p>
                    <b>&#x2022;</b> Must own a Bike / Car
                  </p>
                  <p>
                    <b>&#x2022;</b>	Infallible Communication Skills
                  </p>
                
                </div>
                <div className="job-desciption ">
                  <h4 className="pb-3">What We Give You</h4>
                  <div className="job-desciption ">
                  <h6 className="pb-lg-3  pb-sm-3">
                    <span className='fw-bold'>Package : </span>
                    <span className="">
                    INR 3 L to 6 L per annum (Fixed)
                    </span>
                  </h6>
                  <h6 className="pb-lg-3  pb-sm-3">
                    <b>Annual Appraisal </b>
                    <span className="">
                      
                  
                    </span>
                  </h6>
                  <h6 className="pb-lg-3  pb-sm-3">
                    <b>Company Website :  </b>
                    <span className=""><a href="">https://bfccapital.com</a></span>
                  </h6>
                  <h6 className="pb-lg-3  pb-sm-3">
                    <b>Contact Details_HR   : </b>
                    <span className="">
                     hrd@bfccapital.com
                    </span>
                  </h6>
                  
                </div>
                </div>
             
               
              </div>
            </div>
            <div className="col-md-6">
              <div className="job-form result-content-shadow">
                <div className="contact-form-header">
                  <h2 className="pb-5">Apply for this job</h2>
                </div>

                <Form onSubmit={vertualRelationship}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <small className="text-danger pull-left">
                        {!Name ? NameError : ""}
                      </small>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        type="text"
                        value={Mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        minLength="10"
                        maxlength="10"
                      />
                      <small className="text-danger pull-left">
                        {MobileError}
                      </small>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
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
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Post Applied For?</Form.Label>
                      <Form.Control
                        type="text"
                        value={PostAppliedFor}
                        onChange={(e) => setPostAppliedFor(e.target.value)}
                      />
                      <small className="text-danger pull-left">
                        {!PostAppliedFor ? PostAppliedForError : ""}
                      </small>
                    </Form.Group>
                  </Row>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload Resume/CV</Form.Label>
                    <Form.Control
                      type="file"
                      id="fileControl"
                      name="Cv"
                      accept='.pdf'
                      onChange={(e) => setCv(e.target.files[0])}
                    />
                    <small className="text-danger pull-left">
                      {!Cv ? CvError : ""}
                    </small>
                  </Form.Group>
                  <Form.Group controlId="check" className="mb-3">
                      <div className="d-flex">
                        <span className=''><input type="checkbox" className="check " value={isVarified}
                          onChange={(e) => setIsVarified(e.target.checked)} /> </span><span className="fs-11 padding-5">I, hereby accord my consent to process my above mentioned personal data by BFC Capital Pvt. Ltd. for the purpose of employment, in accordance with the provisions of DPDP Act 2023.  </span>
                      </div>
                    <small className="text-danger ">{isVarifiedError}</small>
                    </Form.Group>
                  <Button
                    className="btn3 mt-3"
                    type="submit"
                    variant="outline-primary"
                  >
                    
                    Submit
                  </Button>
                </Form>
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
                  <h2>Thank you for reaching out to us!</h2>
                  <p>
                    Your request has been received and acknowledged at our
                    end.Our HR Department will get in touch with you shortly.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    className="btn3"
                    variant="outline-primary"
                    onClick={handleClose}
                  >
                    Close
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
export default Bdm;