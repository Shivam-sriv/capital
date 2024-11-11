import React from 'react'
import { Link } from 'react-router-dom'
import BFCLOGO from "../img/logo/bfc-logo.webp";

const DPDP_Act = () => {
  return (
     <section class="container-fluid  custom-shodow agriment  mb-4">
    <div class="container-fluid  bg-img">
      <div class="row justify-content-between boder-btm">
        <div class="col-md-6 col-lg-3 col-12 mb-1 text-left text-smc-center">
        <a href="/">
              <img src={BFCLOGO} alt="logo" height={58} width={200} className="img-fluid logo" />
            </a>
        </div>
        <div class="col-md-6 col-12 col-lg-8 mb-1 align-self-center">
          <div class="agriment-title text-right text-smc-center ">
            <h2>Processing of Personal Data</h2>
          </div>
        </div>
      </div>
      <div id="first-page">
        <div class="row mt-5 mb-5">
          <div class="col-md-12">
            
            <div class="agriment-title bg mb-3">
              <h2>Details of Processing</h2>
            </div>
            <ul>
             
              <li class="mb-3">The Personal data of a data principal may be processed by the BFC Capital Pvt. Ltd. (“the Company”) regarding sending intimation(s) related to any new investment product launch or any other regulatory/market update. The Personal data may also be processed by “the company” for marketing and general awareness related to any financial/investment product & related educational purposes. This personal data may also be processed to give update(s) to the Data Principal regarding transaction updates/intimations related to investments any of the financial product(s) in which Data principal has invested on intend to invest.</li>
            
            </ul>
          </div>
          <div class="col-md-12">
            
            <div class="agriment-title bg mb-3">
              <h2>Purpose of processing</h2>
            </div>
            <ul>
             
              <li class="mb-3">Sending messages, e-mails, calls for the purpose of KYC, update on opening/processing of Investment account on stock exchange platforms, investment transactions, educational & marketing information. </li>
            
            </ul>
          </div>
          <div class="col-md-12">
            
            <div class="agriment-title bg mb-3">
              <h2>Categories of personal data being processed</h2>
            </div>
            <ul>
             
              <li class="mb-3">Name, email, phone number, PAN, AADHAR, Bank Account details, Address etc.</li>
            
            </ul>
          </div>
          <div class="col-md-12">
            
            <div class="agriment-title bg mb-3">
              <h2>Duration of processing</h2>
            </div>
            <ul>
             
              <li class="mb-3">The Company shall process the data until the consent is withdrawn or it is required to cease the processing as per the requirements of any relevant law.</li>
            
            </ul>
          </div>
          <div class="col-md-12">
            
            <div class="agriment-title bg mb-3">
              <h2>Your Rights</h2>
            </div>
            <ul>
            <li class="mb-3">You have the right to:</li>
</ul>
          <ul class="grid-on-ul ps-sm-0">
              <li>- Withdraw your consent at any time</li>
              <li>- Request access to your personal data</li>
              <li>- Request correction or rectification of your personal data</li>
              <li>- Request erasure or deletion of your personal data</li>
              <li>- Object to processing of your personal data</li>
              <li>- Right to Nominate </li>
</ul>
          </div>
          <div class="col-md-12">
            
            <div class="agriment-title bg mb-3">
              <h2>Contact Us</h2>
            </div>
            <ul className='ps-sm-0'>
             
              <li class="mb-3">If you have any questions or concerns regarding the processing of your personal data, please do not hesitate to contact us at  <a href="https://mail.google.com/mail/u/0/?fs=1&to=dtataprotectionbfc@gmail.com&body=BODY&tf=cm"
                      target="_blank"
                      className="">dtataprotectionbfc@gmail.com</a></li>
              <li class="mb-3">Data Protection Officer: Ms. Vertika Singh has been appointed as Data Protection Officer for the compliance of the DPDP Act 2023. She can be contacted on above mentioned mail-id for any query/ concern/ grievance related to protection/ processing/ erase/ correction of your personal data.  </li>
            
            </ul>
          </div>
    
        </div>
        
      </div>
    </div>
  </section>

  )
}

export default DPDP_Act