import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import minus from "../img/minus.webp";
import plus from "../img/add.webp";
import { FaHome, FaAngleRight } from "react-icons/fa";
import "chartkick/chart.js";
import Select from "react-select";
// import LoadingOverlay from "react-loading-overlay";
import "./styles.css";
import { Helmet } from "react-helmet";
import FD from "../img/fd.webp";
import { notify } from "./toastCreater";
import { getMachine } from "./helper/calculatorHelper";


// const DarkBackground = function () {};

const FD_Calculator = () => {
  const [requestShow, setRequestShow] = useState(false);
  const [messages, setMessages] = useState("Query regarding FDs");
  const [investment, setInvestment] = useState(100000);
  const [investmentDuration, setInvestmentDuration] = useState(5);
  const [interestRate, setInterestRate] = useState(6);
  const [compoundingPeriod, setCompoundingPeriod] = useState(12);
  const [maturity, setMaturity] = useState("1,34,885");
  const [loader, setLoader] = useState("none");
  const [calculateCheck, setCalculateCheck] = useState(0);
  const period = [
    { value: 12, label: "Monthly" },
    { value: 4, label: "Quarterly" },
    { value: 2, label: "Half Yearly" },
    { value: 1, label: "Yearly" },
  ];

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an FD Calculator ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Fixed Deposit Calculator, commonly known as FD Calculator, is an online tool used for computing the amount a fixed deposit investment is likely to grow into upon maturity. The logic governing this tool takes into account certain factors that have to be fed into it by the user for arriving at the estimated interest the investment shall fetch over time.",
        },
      },
      {
        "@type": "Question",
        name: "How to Use FD Calculator ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Using the FD Calculator is a simple process involving as little as three steps. The user needs to start by feeding into the calculator, the amount he is looking to invest. Thereafter he needs to enter the fixed deposit interest rate he is expecting to fetch, followed by the duration of the investment. Once the user hits the “Calculate” button after making these inputs, the estimated maturity value of the investment shall be displayed on the screen, along with the total interest earned by the investment.",
        },
      },
      {
        "@type": "Question",
        name: "",
        acceptedAnswer: {
          "@type": "Answer",
          text: "",
        },
      },
    ],
  };

  const FDcalculate = () => {
    if (investment < 500) {
      notify("warn", "Investment Amount should not be less than 500");
      return;
    }
    if (investmentDuration < 1) {
      notify("warn", "Investment Duration should not be less than 1");
      return;
    }
    if (interestRate < 1 || !interestRate) {
      notify("warn", "Interest Rate should not be less than 1");
      return;
    }
    if (!compoundingPeriod) {
      notify("warn", "Please select Compounding Period");
      return;
    }

    setLoader("block");

    var p = investment;
    var t = investmentDuration;
    var r = interestRate;
    var n = compoundingPeriod;
    var pric = p;
    var amt = "";
    var inest = "";
    for (var i = 1; i <= t; i++) {
      var val1 = 1 + r / (100 * n);
      var val2 = (1 * n) / 1;
      amt = pric * Math.pow(val1, val2);
      inest = amt - pric;
      pric = amt.toFixed(0);
    }

    setMaturity(getMachine(Math.round(amt)));
    window.scrollTo(500, 500);
    setCalculateCheck(1);
    setLoader("none");
  };

  let incInvestment = () => {
    if (investment < 10000000) {
      setInvestment(Number(investment) + 500);
    } else if (investment == 0) {
      setInvestment(Number(investment) + 500);
    }
  };
  let decInvestment = () => {
    if (investment >= 500) {
      setInvestment(investment - 500);
    } else if (investment < 499) {
      setInvestment(0);
    }
  };

  let incInvestmentDuration = () => {
    if (investmentDuration < 100) {
      setInvestmentDuration(Number(investmentDuration) + 1);
    }
  };
  let decInvestmentDuration = () => {
    if (investmentDuration > 1) {
      setInvestmentDuration(investmentDuration - 1);
    }
  };

  let incInterestRate = () => {
    if (interestRate) {
      if (isNaN(interestRate)) {
        return setInterestRate(1);
      }
      if (interestRate < 20) {
        setInterestRate((parseFloat(interestRate) + 0.05).toFixed(2));
      }
    } else {
      setInterestRate(0.05);
    }
  };
  let decInterestRate = () => {
    if (interestRate > 1) {
      setInterestRate((parseFloat(interestRate) - 0.05).toFixed(2));
    }
  };

  return (
    <>
      <Helmet>
        <title>FD Calculator: Calculate Maturity Value of Fixed Deposits</title>
        <meta
          name="description"
          content="FD Calculator: Estimate the returns on your Fixed Deposits. Calculate how much money you need to invest to get desired maturity value over time."
        />
        <meta
          name="keywords"
          content="fd interest calculator, fd calculator, fixed deposit calculator, fixed deposit, fd interest rates, fixed deposit rates, fd rates, bank fd rates, fixed deposit interest rate, highest fd interest rates, best fd rates in india"
        />
        <link rel="canonical" href="https://bfccapital.com/fd-calculator" />
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
                    <a href="/fd-calculator">
                      <span className="breadcrumb-text"> FD Calculator </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pt-3 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center calculator-title">
              <h1 className="pt-3 pb-1">FD Calculator</h1>
            </div>
          </div>
      
          <div class=" mt-3 calculator">
            <div class="" role="tabpanel">
              <section>
                <div className="results">
                  <div className="shadow-pro br-50 px-4 p-lg-5">
                    <section className="pt-4 pb-4">
                      <div className="row">
                        <div className="col-md-3 text-center">
                          <label
                            for="m-saving"
                            className="text-label font-weight-500 py-2"
                          >
                            Investment Amount(₹)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img
                              src={minus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={decInvestment}
                            ></img>
                            <input
                              type="text"
                              className="form-control"
                              name="m-saving"
                              value={investment}
                              placeholder="0"
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 10000000
                                ) {
                                  if (e.target.value.includes(".")) {
                                    setInvestment(
                                      Math.round(parseInt(e.target.value))
                                    );
                                  } else {
                                    setInvestment(e.target.value);
                                  }
                                } else if (e.target.value > 10000000) {
                                  setInvestment(10000000);
                                }
                              }}
                            />
                            <img
                              src={plus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={incInvestment}
                            ></img>
                          </div>
                        </div>
                        <div className="col-md-3 text-center">
                          <label
                            for="m-saving"
                            className="text-label font-weight-500 py-2"
                          >
                            Investment Duration(Years)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img
                              src={minus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={decInvestmentDuration}
                            ></img>
                            <input
                              type="text"
                              className="form-control"
                              name="m-saving"
                              value={investmentDuration}
                              placeholder="0"
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 100
                                ) {
                                  if (e.target.value.includes(".")) {
                                    setInvestmentDuration(
                                      Math.round(parseInt(e.target.value))
                                    );
                                  } else {
                                    setInvestmentDuration(e.target.value);
                                  }
                                } else if (e.target.value > 100) {
                                  setInvestmentDuration(100);
                                }
                              }}
                            />
                            <img
                              src={plus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={incInvestmentDuration}
                            ></img>
                          </div>
                        </div>
                        <div className="col-md-3 text-center">
                          <label
                            for="year"
                            className="text-label font-weight-500 py-2"
                          >
                            Interest Rate (%)
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
                                  e.target.value <= 20
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
                                  setInterestRate(20);
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
                        <div className="col-md-3 text-center">
                          <label
                            for="return"
                            className="text-label font-weight-500 py-2"
                          >
                            Compounding Period
                          </label>
                          <Select
                            className="inputf transcard border-custom"
                            options={period}
                            placeholder="Monthly"
                            onChange={(e) => setCompoundingPeriod(e.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12 pt-lg-4 text-right text-xs-center">
                        <button className="new-btn1 mt-3" onClick={FDcalculate}>
                          {calculateCheck == 0 ? "Calculate" : "Re-Calculate"}
                        </button>
                      </div>
                    </section>
                    <div
                      className="row shadow-pro br-50 mx-lg-3 p-lg-5"
                      id="result"
                    >
                      <div className="col-md-4">
                        <div className="result-content">
                          <div className="result-title text-center">
                            <h2 className="pt-2">Result</h2>
                          </div>
                          <ul className="text-center">
                            <li>
                              <div className="text-label font-weight-500 py-2 mt-lg-5">
                                Maturity Value(₹)
                              </div>
                              <div className="inputf transcard bg-light-red py-2">
                                {maturity}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="text-center">
                          <img src={FD} className="img-fluid mx-wd" />
                        </div>
                      </div>
                    </div>
                    <div className="row px-5 pt-4"></div>
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
                      <span className="faqs_greenDot"></span> What is an FD
                      Calculator ?{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        A Fixed Deposit Calculator, commonly known as FD
                        Calculator, is an online tool used for computing the
                        amount a fixed deposit investment is likely to grow into
                        upon maturity. The logic governing this tool takes into
                        account certain factors that have to be fed into it by
                        the user for arriving at the estimated interest the
                        investment shall fetch over time.
                      </p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <span className="faqs_greenDot"></span> How to Use FD
                      Calculator ?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Using the FD Calculator is a simple process involving as
                        little as three steps. The user needs to start by
                        feeding into the calculator, the amount he is looking to
                        invest. Thereafter he needs to enter the fixed deposit
                        interest rate he is expecting to fetch, followed by the
                        duration of the investment. Once the user hits the
                        “Calculate” button after making these inputs, the
                        estimated maturity value of the investment shall be
                        displayed on the screen, along with the total interest
                        earned by the investment.
                      </p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <span className="faqs_greenDot"></span> Why should you use
                      FD Calculator ?{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        FD Calculators compute complex calculations with ease,
                        which helps investors save a lot of time and effort. The
                        accuracy of the projections provided by this online
                        financial planner, gives investors the freedom to
                        compare FD schemes without much hassle. Since fixed
                        deposit interest rates tend to depend upon the tenure of
                        investment, comparing projections in advance helps
                        potential investors determine the investment tenure that
                        fetches returns that are in line with their financial
                        goals.
                      </p>
                      <p>
                        Simply put, these projections give investors the clarity
                        needed for planning their expenses years in advance,
                        which, in turn, allows them to manage their immediate
                        finances more efficiently.
                      </p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <span className="faqs_greenDot"></span> Bank FD vs
                      Corporate FD{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Both Bank and Company Fixed Deposits work on similar
                        principles and cook the money invested over time to
                        fetch the desired returns. Also, they are governed by
                        similar tax provisions. However, certain underlying
                        differences set the two asset classes apart. For
                        starters, Bank FDs are offered for investment by banks,
                        as the name suggests, whereas Company Fixed Deposits
                        function under non-banking entities and companies.
                      </p>
                      <p>
                        Also, company FDs have a minimum mandatory lock-in of
                        three months, which is absent in the case of traditional
                        fixed deposits. Regardless, they tend to offer higher
                        returns when compared with Bank FDs, which is an added
                        advantage given the fact that additional returns have
                        the potential to multiply, and consequently compound
                        into a surplus corpus.
                      </p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      <span className="faqs_greenDot"></span> FD vs Mutual Funds{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Before the pros and cons of investing in FDs and Mutual
                        Funds are weighed and elaborated upon, investors should
                        understand that none of these are bad investments,
                        provided they fit into our scheme of things.
                      </p>
                      <p>
                        Fixed Deposits offer investors the cushion of an assured
                        rate of return albeit on the lower end, whereas mutual
                        fund investments, although likely to surpass fixed
                        deposit interest rates, do not put a number on the
                        returns offered. Instead, they leverage the power of
                        compounding to grow expeditiously over the long term.
                      </p>
                      <p>
                        Tax liability is another factor that sets the two asset
                        classes apart. The interest earned through FDs in a
                        financial year, beyond a certain threshold, attracts tax
                        levies, whereas the gains made through mutual fund
                        investments are tax-free up to a certain limit.
                        Moreover, the provisions accompanying premature
                        withdrawals differ in both these asset classes.
                      </p>
                      <p>
                        Firstly, there is no provision for partial withdrawal in
                        FDs. The investor can liquidate the fixed deposit
                        prematurely to raise instantaneous cash if need be.
                        Doing so, however, attracts a levy that eats into the
                        interest earned by the investment. Mutual funds, on the
                        other hand, attract a nominal exit load upon
                        liquidation. Following the completion of the first year,
                        this levy turns obsolete, making withdrawals free of
                        charge.
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
};
export default FD_Calculator;
