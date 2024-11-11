import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import minus from "../img/minus.webp";
import plus from "../img/add.webp";
import { FaHome, FaAngleRight } from "react-icons/fa";
import { Doughnut } from "react-chartjs-2";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArcElement, Chart } from "chart.js";
import { notify } from "./toastCreater";
import "./styles.css";
import { pmtvalue } from "./helper/calculatorHelper";
Chart.register(ArcElement);

function HomeLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(10);
  const [totalAmount, setTotalAmount] = useState("15,85,800");
  const [totalIntrest, setTotalIntrest] = useState("5,85,800");
  const [loan, setLoan] = useState("10,00,000");
  const [emi, setEmi] = useState("13,215");
  const [chartTotalIntrest, setChartTotalIntrest] = useState(585800);
  const [chatPrincipleAmount, setChartPrincipleAmount] = useState(1000000);
  const [calculateCheck, setCalculateCheck] = useState(0);

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a Home Loan EMI Calculator ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Home Loan EMI Calculator helps compute the EMI or monthly installments a potential home loan is likely to attract based on certain inputs provided by the user. The logic governing this online tool takes into account the inputs provided to deduce the desired projection.",
        },
      },
      {
        "@type": "Question",
        name: "How to use Home Loan EMI Calculator ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The logic governing Home Loan EMI Calculators takes into account certain factors to deduce the EMI payable post disbursement. These include the amount the user is looking to borrow for purchasing the house of his choice, the tenure he is looking to repay the loan in, and the rate of interest the outstanding is likely to attract.",
        },
      },
    ],
  };

  const data1 = {
    datasets: [
      {
        data: [chartTotalIntrest, chatPrincipleAmount],
        backgroundColor: ["#F06D70", "#97C5FB"],
      },
    ],
    labels: ["Total Interest", "Principle Amount"],
  };

  


  const loanEMiCalculater =async () => {
    if (loanAmount < 500) {
      notify("warn", "Amount should not be less than 500");
      return;
    }
    if (interestRate < 1) {
      notify("warn", "Enter Interest rate should not be less than 1");
      return;
    }
    if (tenure < 1) {
      notify("warn", "Tenure should not be less than 1");
      return;
    }
   


      let interestRatePercent = interestRate / 100;
      let yearlyInterestRatePercent = interestRatePercent / 12;
      yearlyInterestRatePercent = parseFloat(yearlyInterestRatePercent.toFixed(6))
      let yearlyTenure = tenure * 12

      let calculatedvlaues =await  pmtvalue(yearlyInterestRatePercent, yearlyTenure, -loanAmount, 0, 0)
      calculatedvlaues = parseFloat(calculatedvlaues)
      let totalAmount = calculatedvlaues * yearlyTenure;
      totalAmount = parseFloat(totalAmount)
      let totalInterest = totalAmount - loanAmount
      totalInterest = parseFloat(totalInterest)
      calculatedvlaues = calculatedvlaues
      setEmi(calculatedvlaues.toLocaleString('en-IN'))
      setLoan(loanAmount.toLocaleString('en-IN'));
        setTotalIntrest(totalInterest.toLocaleString('en-IN'));
        setTotalAmount(totalAmount.toLocaleString('en-IN'));
        window.scrollTo(500, 500);
        setChartTotalIntrest(totalInterest);
        setCalculateCheck(1);
        setChartPrincipleAmount(loanAmount);
      // return res.status(200).send({ success: true, msg: "Success", principalAmount: getMachine(loanAmount), monthlyEmiAmount: calculatedvlaues, totalAmount: getMachine(totalAmount), totalInterest: getMachine(totalInterest) })


      


  
  };

  // for Approx cost

  let incLoanAmount = () => {
    if (loanAmount < 50000000) {
      setLoanAmount(Number(loanAmount) + 500);
    } else if (loanAmount == 0) {
      setLoanAmount(Number(loanAmount) + 500);
    }
  };
  let decLoanAmount = () => {
    if (loanAmount >= 500) {
      setLoanAmount(loanAmount - 500);
    } else if (loanAmount < 499) {
      setLoanAmount(0);
    }
  };

  let incInterestRate = () => {
    if (isNaN(interestRate)) {
      return setInterestRate(0);
    }
    if (interestRate < 50) {
      setInterestRate((parseFloat(interestRate) + 0.05).toFixed(2));
      // console.log(interestRate);
    }
  };
  let decInterestRate = () => {
    if (interestRate > 1) {
      setInterestRate((parseFloat(interestRate) - 0.05).toFixed(2));
    }
  };

  let incTenure = () => {
    if (tenure < 50) {
      setTenure(Number(tenure) + 0.5);
    }
  };
  let decTenure = () => {
    if (tenure > 1) {
      setTenure(tenure - 0.5);
    }
  };

  return (
    <>
      <Helmet>
        <title>Home Loan EMI Calculator| Calculate Your Housing Loan EMI</title>
        <meta
          name="description"
          content=" Home Loan EMI Calculator| A Simple Housing Loan EMI Calculator Evaluates Interest & Amortization That Helps You Decide How Much You Should Borrow Loan Amount."
        />
        <meta
          name="keywords"
          content="mortgage loan emi calculator,home loan emi calculator,home loan calculator,housing loan emi calculator,house loan calculator,mortgage loan calculator,home loan interest calculator,home emi calculator,house emi calculator,home loan interest rate calculator,home loan prepayment calculatorloan,calculator home loan"
        />
        <link
          rel="canonical"
          href="https://bfccapital.com/home-loan-emi-calculator"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="All Financial Solutions - SIP |Mutual funds |Stocks |FD |Insurances "
        />
        <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
      </Helmet>

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
                    <a href="#">
                      <span className="breadcrumb-text">
                        {" "}
                        Planning & Solutions{" "}
                      </span>
                      <span className="r-icon">
                        {" "}
                        <FaAngleRight />{" "}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/home-loan-emi-calculator">
                      <span className="breadcrumb-text">
                        {" "}
                        Home Loan EMI Calculator{" "}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pt-lg-3 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center calculator-title">
              <h1 className="pt-lg-3 mt-3 pb-lg-4">Home Loan EMI Calculator</h1>
            </div>
          </div>

          <div class="mt-3 calculator">
            <div class="" role="tabpanel">
              <section>
                <div className="results">
                  <div className="shadow-pro br-50 px-4 pb-lg-5 pb-sm-5">
                    <section className="pt-lg-5 pb-sm-5 pb-lg-5">
                      <div className="row">
                        <div className="col-md-4 text-center">
                          <label
                            for="m-saving"
                            className="text-label font-weight-500 py-2"
                          >
                            Enter loan amount (₹)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img
                              src={minus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={decLoanAmount}
                            ></img>
                            <input
                              type="text"
                              className="form-control"
                              name="m-saving"
                              value={loanAmount}
                              placeholder="0"
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 50000000
                                ) {
                                  if (e.target.value.includes(".")) {
                                    setLoanAmount(
                                      Math.round(parseInt(e.target.value))
                                    );
                                    // console.log(
                                    //   "with float ",
                                    //   parseInt(e.target.value)
                                    // );
                                  } else {
                                    setLoanAmount(e.target.value);
                                  }
                                } else if (e.target.value > 50000000) {
                                  setLoanAmount(50000000);
                                }
                              }}
                            />
                            <img
                              src={plus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={incLoanAmount}
                            ></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label
                            for="year"
                            className="text-label font-weight-500 py-2 mt-1"
                          >
                            Enter Interest rate (%)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img
                              src={minus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={decInterestRate}
                            ></img>
                            <input
                              type="number"
                              className="form-control"
                              name="year"
                              value={interestRate}
                              placeholder="0"
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 50
                                ) {
                                  if (e.target.value.includes(".")) {
                                    let a = parseFloat(e.target.value);
                                    setInterestRate(parseFloat(a.toFixed(2)));
                                    // console.log(
                                    //   "with float ",
                                    //   parseFloat(e.target.value)
                                    // );
                                  } else {
                                    // console.log(
                                    //   "with int ",
                                    //   parseInt(e.target.value)
                                    // );
                                    let a = parseInt(e.target.value);
                                    setInterestRate(parseInt(a));
                                  }
                                } else {
                                  setInterestRate(50);
                                }
                              }}
                            />
                            <img
                              src={plus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={incInterestRate}
                            ></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label
                            for="return"
                            className="text-label font-weight-500 py-2"
                          >
                            Tenure (years)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img
                              src={minus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={decTenure}
                            ></img>
                            <input
                              type="text"
                              className="form-control"
                              name="return"
                              value={tenure}
                              placeholder="0"
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 50
                                ) {
                                  if (e.target.value.includes(".")) {
                                    setTenure(
                                      Math.round(parseInt(e.target.value))
                                    );
                                    // console.log(
                                    //   "with float ",
                                    //   parseInt(e.target.value)
                                    // );
                                  } else {
                                    setTenure(e.target.value);
                                  }
                                } else if (e.target.value > 50) {
                                  setTenure(50);
                                }
                              }}
                            />
                            <img
                              src={plus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={incTenure}
                            ></img>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 pt-lg-4 text-right text-xs-center">
                        <button
                          className="new-btn1 mt-3"
                          onClick={loanEMiCalculater}
                        >
                          {calculateCheck == 0 ? "Calculate" : "Re-Calculate"}
                        </button>
                      </div>
                    </section>
                    <div className="row shadow-pro br-50 mx-lg-3" id="result">
                      <div className="col-md-8 py-lg-5 mb-3" id="mobile">
                        <div className="pt-4 result-chart">
                          <Doughnut
                            className="chart"
                            data={data1}
                            options={{
                              responsive: true,
                              maintainAspectRatio: false,
                            }}
                            width={638}
                            height={341}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="result-content result-content-shadow-pro">
                          <div className="result-title text-center">
                            <h2>Result</h2>
                          </div>
                          <ul className="text-center">
                            <li>
                              <div className="text-label font-weight-500 py-2">
                                Your EMI (₹)
                              </div>
                              <div className="inputf transcard bg-white py-2">
                                {emi}
                              </div>
                            </li>
                            <li>
                              <div className="text-label font-weight-500 py-2">
                                Principal(₹)
                              </div>
                              <div className="inputf transcard bg-white py-2">
                                {loan}
                              </div>
                            </li>
                            <li>
                              <div className="text-label font-weight-500 py-2">
                                Total Interest(₹)
                              </div>
                              <div className="inputf transcard bg-white py-2">
                                {totalIntrest}
                              </div>
                            </li>
                            <li>
                              <div className="text-label font-weight-500 py-2">
                                Total Amount(₹)
                              </div>
                              <div className="inputf transcard bg-white py-2">
                                {totalAmount}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-8 py-lg-5" id="desktop">
                        <div className="pt-4 result-chart">
                          <Doughnut
                            className="chart"
                            data={data1}
                            options={{
                              responsive: true,
                              maintainAspectRatio: false,
                            }}
                            width={638}
                            height={341}
                          />
                          
                        </div>
                      </div>
                    </div>
                    <div className="row px-5 pt-lg-5 pt-sm-5">
                      <div className="col-md-12 text-right text-xs-center">
                        <Link
                          className="btn-custom"
                          to="https://prodigy-pro.bfccapital.com/login-with-option"
                          target="_blank"
                        >
                          Invest Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== Eaq Section Start ================== */}
      <section className="fqa pt-lg-3 mutual-fund-faq">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center pb-4">
              <h4 className="fqa-top-text mb-4 pt-3">FAQs</h4>
              <div className="contact-pageTitleBorder"></div>
            </div>
          </div>
          <div className="row shadowc">
            <div className="col-md-12">
              <div className="mutual-fund-faq-content">
                <Accordion>
                  <Accordion.Item eventKey="0" className="#">
                    <Accordion.Header>
                      <span className="faqs_greenDot"></span> What is a Home
                      Loan EMI Calculator ?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        A Home Loan EMI Calculator helps compute the EMI or
                        monthly installments a potential home loan is likely to
                        attract based on certain inputs provided by the user.
                        The logic governing this online tool takes into account
                        the inputs provided to deduce the desired projection.
                      </p>
                      <p>
                        The user can manipulate outcomes by shuffling between
                        permutations and combinations to arrive at a
                        pocket-friendly installment plan, based on which he or
                        she can run home loan comparisons, and consequently make
                        well-informed financial decisions.
                      </p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <span className="faqs_greenDot"></span> How does EMI
                      calculation help in planning a home purchase ?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        The EMI payable against a home loan is one of the
                        deciding factors behind shortlisting loan offers. An
                        advance estimation of this upcoming monthly liability
                        helps homebuyers make the financial arrangements needed.
                        This is where a Housing Loan EMI Calculator comes in
                        handy.
                      </p>
                      <p>
                        This online tool helps potential homebuyers compute the
                        liability availing a home loan is likely to attract and
                        the finances needed for it. Based on the estimations
                        provided, homebuyers can compare the loan offers
                        extended by banks to arrive at a repayment plan that
                        suits their needs and financial constraints.
                      </p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <span className="faqs_greenDot"></span>How much Home Loan
                      should one take ?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        "Herein, the right question to be asked is, “How much
                        can one afford ?” Usually, banks make sure that the EMI
                        payable against the loan availed does not exceed 40% of
                        the borrower’s monthly income. Borrowers should also
                        take note that their total outgo towards outstanding
                        loans should not go beyond 50% of their monthly income.
                        Besides this, the loan should be availed for the
                        shortest possible tenure.
                      </p>
                      <p>
                        The longer the tenure of a loan is, the lesser the
                        monthly installment amounts to. This proposition makes
                        opting for longer loan tenures very tempting. Borrowers
                        should, however, avoid falling into this trap, as longer
                        tenures attract higher interest rates.
                      </p>
                      <p>
                        Simply put, the longer the tenure of your home loan is,
                        the more compound interest you will end up paying the
                        banks, this is the universal logic governing the
                        relationship between loans and tenure."
                      </p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <span className="faqs_greenDot"></span>How to use Home
                      Loan EMI Calculator ?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        The logic governing Home Loan EMI Calculators takes into
                        account certain factors to deduce the EMI payable post
                        disbursement. These include the amount the user is
                        looking to borrow for purchasing the house of his
                        choice, the tenure he is looking to repay the loan in,
                        and the rate of interest the outstanding is likely to
                        attract.
                      </p>
                      <p>
                        The potential borrower needs to hit the “Calculate”
                        button after entering these values, following which the
                        estimated installment amount or the EMI payable against
                        the loan shall start reflecting. The user can shuffle
                        between permutations and combinations to arrive at an
                        acceptable outcome.
                      </p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default HomeLoanCalculator;
