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
import globalUrl from  '../CalculaterApiUrls/urls'
import { submitData } from "./Validations/formValidate"
import JDRELATION from  "../img/jd/JD_Relationship_Manager.pdf"


const RelationshipManager = () => {
  const [show, setShow] = useState(false);
  const [Name, setName] = useState('');
  const [NameError, setNameError] = useState('');
  const [MobileError, setMobileError] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Email, setEmail] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [PostAppliedFor, setPostAppliedFor] = useState('Relationship Manager');
  const [PostAppliedForError, setPostAppliedForError] = useState('');
  const [CvError, setCvError] = useState('');
  const [Cv, setCv] = useState('');
  const [isVarifiedError, setIsVarifiedError] = useState('');
  const [isVarified, setIsVarified] = useState(false);
 
  const relationshipData = (e) => {
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
        setIsVarified(false)
        setShow(true);
        document.getElementById("fileControl").value = "";
    
      })

    }

  }

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

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
                        {" "}
                        <FaHome />
                      </span>
                    </a>
                    <span className="r-icon">
                      {" "}
                      <FaAngleRight />{" "}
                    </span>
                  </li>
                  <li>
                    <a href="/careers">
                      <span className="breadcrumb-text"> Career </span>
                      <span className="r-icon">
                        {" "}
                        <FaAngleRight />{" "}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/relationship-manager">
                      <span className="breadcrumb-text">
                        {" "}
                        Relationship Manager{" "}
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
                    <b>Position:-</b>
                  </span>{" "}
                  Relationship Manager
                </h2>
                <div className="job-desciption pt-40">
                  <h4 className="pb-3">Preface :</h4>
                  <p>
                    The RM will be required to move into the market and promote
                    services of the company,brief people about the utility of
                    our services and handle operational and technical issues of
                    our existing clientele.
                  </p>
                </div>
                <ToastContainer />

                <div className="job-desciption pt-30">
                  <h4 className="pb-3">Skills Required :</h4>
                  <p>
                    <b>&#x2022;</b> Convincing Skills | Analytical Skills |
                    Inter Personal Skills
                  </p>
                  <p>
                    <b>&#x2022;</b> Interest towards Sales & Field Activities
                  </p>
                  <p>
                    <b>&#x2022;</b> Self Motivated | Extrovert| Confident
                  </p>
                  <p>
                    <b>&#x2022;</b> Inclination towards Finance
                  </p>
                </div>
                <div className="job-desciption pt-50">
                  <h4 className="pb-lg-4  pb-sm-4">
                    <b>Job Location : </b>{" "}
                    <spn className="jd-subtext">Lucknow, Uttar Pradesh</spn>
                  </h4>
                  <h4 className="pb-lg-4  pb-sm-4">
                    <b>Address : </b>{" "}
                    <spn className="jd-subtext">
                      {" "}
                      CP-61 Viraj Khand, Gomti Nagar, Lucknow (UP)-226010
                    </spn>
                  </h4>
                  <h4 className="pb-lg-4  pb-sm-4">
                    <b>Vacancy Type : </b>
                    <spn className="jd-subtext">Full Time</spn>
                  </h4>
                  <h4 className="pb-lg-4  pb-sm-4">
                    <b>Package : </b>{" "}
                    <spn className="jd-subtext">Rs. 2 L to 3.5 L per annum</spn>
                  </h4>
                  <h4 className="pb-lg-4  pb-sm-4">
                    <b>Experience : </b>{" "}
                    <spn className="jd-subtext">Min Exp – 1 year +</spn>
                  </h4>
                  <h4 className="pb-lg-4  pb-sm-4">
                    <b>Qualification : </b>{" "}
                    <spn className="jd-subtext">
                      {" "}
                      Graduate / MBA in Marketing / Finance
                    </spn>
                  </h4>
                </div>
                <p className="resume pt-20">
                  You can send in your resume to{" "}
                  <span className="sub-text">
                    <a href="mailto:hrd@bfccapital.com">hrd@bfccapital.com</a>
                  </span>
                </p>
                <p className="sub-text-1">
                  <a href={JDRELATION} target="_blank">
                    Click here to view detailed JD
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="job-form result-content-shadow">
                <div className="contact-form-header">
                  <h2 className="pb-5">Apply for this job</h2>
                </div>

                <Form onSubmit={relationshipData}>
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
                    {" "}
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
export default RelationshipManager;