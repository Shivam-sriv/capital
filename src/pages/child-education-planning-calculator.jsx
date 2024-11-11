import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import minus from "../img/minus.webp";
import plus from "../img/add.webp";
import { FaHome, FaAngleRight } from "react-icons/fa";
import { getMachine, pmtvalue } from "./helper/calculatorHelper";
import { notify } from "./toastCreater";
import "chartkick/chart.js";
import {
  incThirty,
  decThirty,
  incTwentyFive,
  decTwentyFive,
  incTenCrore,
  decTenLakh,
  incTwenty,
  decTwenty,
  incPointFiveFifty,
  decPointFive,
} from "../helpers/validators";
import { Helmet } from "react-helmet";

// import LoadingOverlay from "react-loading-overlay";
import "./styles.css";
// import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// const DarkBackground = function () {}

const ChildEducationCalculator = () => {
 
    const [childAgeTOday, setChildAgeTOday] = useState(10);
    const [startCollegeAge, setStartCollegeAge] = useState(18);
    const [durationOfEducation, setDurationOfEducation] = useState(3);
    const [approxCurrentCost, setApproxCurrentCost] = useState(500000);
    const [expectedRateReturn, setExpectedRateReturn] = useState(12);
    const [expecetdInflation, setExpecetdInflation] = useState(6);
    const [totalAmtRequired, setTotalAmtRequired] = useState("21,43,644");
    const [lumpsum, setLumpsum] = useState("9,04,671");
    const [SipAmount, setSipAmount] = useState("13,781");
    const [loader, setLoader] = useState("none");
    const [calculateCheck, setCalculateCheck] = useState(0);


  const ldJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Child Education Planning ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Regardless of who you are, a businessman or a salaried individual, everyone needs to have a financial goal that accounts for their future responsibilities. Having a goal translates into a financially secure future, provided an investment strategy is outlined to achieve this goal. One of the major financial goals in your life is Child Education.",
        },
      },
      {
        "@type": "Question",
        name: "What is a Child Education Planning Calculator ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Child Education Planning Calculator is used for computing the amount an individual may require to fund his or her Child's Education. This online investment planner takes into account factors like the child’s present age, the age when he is likely to need that money, the rate of returns the investment is likely to fetch, and the inflation rate, among other things, to project the corpus required. Moreover, it also computes and projects the amount that needs to be invested to achieve the targeted corpus, be it every month, or as a one-time lumpsum investment.",
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



  const childCalculater = async (e) => {
    if (childAgeTOday < 1) {
      notify("warn", "Current age should not be less than 1");
      return;
    }
    if (startCollegeAge < 1) {
      notify("warn", "College age should not be less than 1");
      return;
    }
    if (childAgeTOday >= startCollegeAge) {
      notify(
        "warn",
        "Current age should not be greater than or equal to College age"
      );
      return;
    }
    if (durationOfEducation < 1) {
      notify("warn", "Duration of education should not be less than 1");
      return;
    }
    if (approxCurrentCost < 100) {
      notify(
        "warn",
        "Approx current cost per year should not be less than 100"
      );
      return;
    }
    if (expectedRateReturn < 1 || !expectedRateReturn) {
      notify("warn", "Expected rate of return should not be less than 1");
      return;
    }
    if (expecetdInflation < 1 || !expecetdInflation) {
      notify("warn", "Expected inflation rate should not be less than 1");
      return;
    }
    if (expecetdInflation === expectedRateReturn) {
      notify(
        "warn",
        "Expected rate of return and Expected inflation rate should not be same"
      );
      return;
    }

    setLoader("block");
    // const data = {
    //   childAge: childAgeTOday,
    //   collegeAtAge: startCollegeAge,
    //   educationTime: durationOfEducation,
    //   currentCost: approxCurrentCost,
    //   expReturnRate: expectedRateReturn,
    //   inflationRate: expecetdInflation,
    // };

    var yearleft = startCollegeAge - childAgeTOday;

    var rate = expectedRateReturn * 0.01;

    var i = 0.01 * expecetdInflation;

    var FV = approxCurrentCost * Math.pow(1 + i, yearleft);

    var er = expectedRateReturn * 0.01;
    var ei = expecetdInflation * 0.01;
    var Tot = (1 + er) / (1 + ei) - 1;
    var firstot = (1 + er) / (1 + er);
    var nomialRate = 12.0 * (Math.pow(1 + rate, 1 / 12.0) - 1);

    var postinfaltion = Tot * 100;

    var totalAmtRequired =
      FV * ((1 - Math.pow(1 + Tot, -durationOfEducation)) / Tot);

    var lumpsum = totalAmtRequired * (1 / Math.pow(1 + nomialRate, yearleft));
    var nominalRateMonthly = parseFloat((nomialRate / 12).toFixed(6));
    var monthleft = yearleft * 12;
    let newsipamt = await pmtvalue(
      nominalRateMonthly,
      monthleft,
      0,
      -Math.round(totalAmtRequired),
      0
    );

    // axios
    //   .post(baseUrl + "/calculators/education", data)
    //   .then((res) => {
    //     setSipAmount(res.data.sipAmount);
    //     setLumpsum(res.data.lumpsumAmount);
    //     setTotalAmtRequired(res.data.corpusAmount);
    //     setCalculateCheck(1)
    //     window.scrollTo(500, 500);
    //     setLoader("none");
    //   });
    setSipAmount(getMachine(Math.round(newsipamt)));
    setTotalAmtRequired(getMachine(Math.round(totalAmtRequired)));
    setLumpsum(getMachine(Math.round(lumpsum)));
    setLoader("none");
    setCalculateCheck(1);
    document.getElementById("scroll").scrollIntoView(true);
    setLoader("none");
  };


  return (
    <>
      <Helmet>
        <title>
          Child Education Planning Calculator| Child Education Cost Planning
        </title>
        <meta
          name="description"
          content="Child Education Planning Calculator helps to estimate the cost for those who are dreaming about their child's future education & plan a better future for their child."
        />
        <meta
          name="keywords"
          content="plan education,child future plan calculator,education planning,Child Plan,child education plan calculator,child education cost calculator,Child Education Plan,Child Plan in India,Child Investment Plans in India"
        />
        <link
          rel="canonical"
          href="https://bfccapital.com/child-education-planning-calculator"
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
                    <a href="/child-education-planning-calculator">
                      <span className="breadcrumb-text">
                        {" "}
                        Child Education Planning Calculator{" "}
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
              <h1 className="pt-3">Child Education Planning Calculator</h1>
            </div>
          </div>


          <div class=" mt-3 calculator">
            <div class="" role="tabpanel">
              <section>
                <div className="results pt-2">
                  <div className="shadow-pro br-50 px-4 pb-lg-5 pb-sm-5">
                    <section className="pt-lg-3 pb-lg-5 pb-sm-5">
                      <div className="row" id="marriage-1">
                        {/*first*/}

                        <div className="col-md-4 text-center">
                          <label
                            for="m-saving"
                            className="text-label font-weight-500 py-2 fs-15"
                          >
                            Child's age today (Years)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img
                              src={minus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={() =>
                                decTwentyFive(childAgeTOday, setChildAgeTOday)
                              }
                            ></img>
                            <input
                              type="text"
                              className="form-control"
                              name="m-saving"
                              value={childAgeTOday}
                              placeholder="0"
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 25
                                ) {
                                  if (e.target.value.includes(".")) {
                                    setChildAgeTOday(
                                      Math.round(parseInt(e.target.value))
                                    );
                                    // console.log(
                                    //   "with float ",
                                    //   parseInt(e.target.value)
                                    // );
                                  } else {
                                    setChildAgeTOday(e.target.value);
                                  }
                                } else if (e.target.value > 25) {
                                  setChildAgeTOday(25);
                                }
                              }}
                            />
                            <img
                              src={plus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={() =>
                                incTwentyFive(childAgeTOday, setChildAgeTOday)
                              }
                            ></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label
                            for="year"
                            className="text-label font-weight-500 py-2 fs-15"
                          >
                            Start college at age (Years)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img
                              src={minus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={() =>
                                decThirty(startCollegeAge, setStartCollegeAge)
                              }
                            ></img>
                            <input
                              type="text"
                              className="form-control"
                              name="year"
                              value={startCollegeAge}
                              placeholder="0"
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 30
                                ) {
                                  if (e.target.value.includes(".")) {
                                    setStartCollegeAge(
                                      Math.round(parseInt(e.target.value))
                                    );
                                    // console.log(
                                    //   "with float ",
                                    //   parseInt(e.target.value)
                                    // );
                                  } else {
                                    setStartCollegeAge(e.target.value);
                                  }
                                } else if (e.target.value > 30) {
                                  setStartCollegeAge(30);
                                }
                              }}
                            />
                            <img
                              src={plus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={() =>
                                incThirty(startCollegeAge, setStartCollegeAge)
                              }
                            ></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label
                            for="return"
                            className="text-label font-weight-500 py-2 fs-15"
                          >
                            Duration of education(Years)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img
                              src={minus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={() =>
                                decTwenty(
                                  durationOfEducation,
                                  setDurationOfEducation
                                )
                              }
                            ></img>
                            <input
                              type="text"
                              className="form-control"
                              name="return"
                              value={durationOfEducation}
                              placeholder="0"
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 20
                                ) {
                                  if (e.target.value.includes(".")) {
                                    setDurationOfEducation(
                                      Math.round(parseInt(e.target.value))
                                    );
                                    // console.log(
                                    //   "with float ",
                                    //   parseInt(e.target.value)
                                    // );
                                  } else {
                                    setDurationOfEducation(e.target.value);
                                  }
                                } else if (e.target.value > 20) {
                                  setDurationOfEducation(20);
                                }
                              }}
                            />

                            <img
                              src={plus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={() =>
                                incTwenty(
                                  durationOfEducation,
                                  setDurationOfEducation
                                )
                              }
                            ></img>
                          </div>
                        </div>
                      </div>

                      {/*second*/}

                      <div className="row">
                        <div className="col-md-4 text-center">
                          <label
                            for="m-saving"
                            className="text-label font-weight-500 py-2 fs-15"
                          >
                            Approx current cost per year(₹)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img
                              src={minus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={() =>
                                decTenLakh(
                                  approxCurrentCost,
                                  setApproxCurrentCost
                                )
                              }
                            ></img>
                            <input
                              type="text"
                              className="form-control"
                              name="m-saving"
                              value={approxCurrentCost}
                              placeholder="0"
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 100000000
                                ) {
                                  if (e.target.value.includes(".")) {
                                    setApproxCurrentCost(
                                      Math.round(parseInt(e.target.value))
                                    );
                                    // console.log(
                                    //   "with float ",
                                    //   parseInt(e.target.value)
                                    // );
                                  } else {
                                    setApproxCurrentCost(e.target.value);
                                  }
                                } else if (e.target.value > 100000000) {
                                  setApproxCurrentCost(100000000);
                                }
                              }}
                            />
                            <img
                              src={plus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={() =>
                                incTenCrore(
                                  approxCurrentCost,
                                  setApproxCurrentCost
                                )
                              }
                            ></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label
                            for="year"
                            className="text-label font-weight-500 py-2 fs-15"
                          >
                            Expected rate of return(%)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img
                              src={minus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={() =>
                                decPointFive(
                                  expectedRateReturn,
                                  setExpectedRateReturn
                                )
                              }
                            ></img>
                            <input
                              type="number"
                              className="form-control"
                              name="year"
                              value={expectedRateReturn}
                              placeholder="0"
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 50
                                ) {
                                  if (e.target.value.includes(".")) {
                                    let a = parseFloat(e.target.value);
                                    setExpectedRateReturn(
                                      parseFloat(a.toFixed(2))
                                    );
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
                                    setExpectedRateReturn(parseInt(a));
                                  }
                                } else {
                                  setExpectedRateReturn(50);
                                }
                              }}
                            />
                            <img
                              src={plus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={() =>
                                incPointFiveFifty(
                                  expectedRateReturn,
                                  setExpectedRateReturn
                                )
                              }
                            ></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label
                            for="return"
                            className="text-label font-weight-500 py-2 fs-15"
                          >
                            Expected inflation rate (% p.a)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img
                              src={minus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={() =>
                                decPointFive(
                                  expecetdInflation,
                                  setExpecetdInflation
                                )
                              }
                            ></img>
                            <input
                              type="number"
                              className="form-control"
                              name="return"
                              value={expecetdInflation}
                              placeholder="0"
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 50
                                ) {
                                  if (e.target.value.includes(".")) {
                                    let a = parseFloat(e.target.value);
                                    setExpecetdInflation(
                                      parseFloat(a.toFixed(2))
                                    );
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
                                    setExpecetdInflation(parseInt(a));
                                  }
                                } else {
                                  setExpecetdInflation(50);
                                }
                              }}
                            />
                            <img
                              src={plus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={() =>
                                incPointFiveFifty(
                                  expecetdInflation,
                                  setExpecetdInflation
                                )
                              }
                            ></img>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12  text-right mt-lg-4 text-xs-center">
                        <button
                          className="new-btn1 mt-1"
                          onClick={childCalculater}
                        >
                          {calculateCheck == 0 ? "Calculate" : "Re-Calculate"}
                        </button>
                      </div>
                    </section>
                    <div
                      className="row shadow-pro br-50 mx-lg-3 pt-lg-3"
                      id="scroll"
                    >
                      <div className="col-md-12 px-lg-5 px-sm-5 pt-lg-4">
                        <div className="col-md-12 result-title text-center mt-3">
                          <h3>Result</h3>
                        </div>
                        <div className="result-content col-md-12 text-center">
                          <div className="text-label font-weight-500 py-2">
                            Corpus required at start of college (₹)
                          </div>
                          <div className="inputf transcard bg-light-red py-2">
                            {totalAmtRequired}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 px-lg-5 px-sm-5 pt-lg-4">
                        <div className="col-md-12 result-title text-center mt-3">
                          <h3>Plan of action required</h3>
                        </div>
                        <div className="row result-content text-center">
                          <div className="col-md-5">
                            <div className="text-label font-weight-500 py-2">
                              One time investment (₹)
                            </div>
                            <div className="inputf transcard bg-light-red py-2">
                              {lumpsum}
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="text-label font-weight-500 py-2">
                              <strong className="text-black">OR</strong>
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div className="text-label font-weight-500 py-2">
                              Monthly investment (₹)
                            </div>
                            <div className="inputf transcard bg-light-red py-2">
                              {SipAmount}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row px-5 pt-4">
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
                      <span className="faqs_greenDot"></span> What is Child
                      Education Planning ?{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Regardless of who you are, a businessman or a salaried
                        individual, everyone needs to have a financial goal that
                        accounts for their future responsibilities. Having a
                        goal translates into a financially secure future,
                        provided an investment strategy is outlined to achieve
                        this goal. One of the major financial goals in your life
                        is Child Education.
                      </p>
                      <p>
                        Maybe you don’t see yourself getting married or settling
                        down anytime soon, but that does not mean that you
                        shouldn't plan for the future. Maybe your child has
                        already touched the age of 10 and now you are realizing
                        the need to plan for his/her education. Compounding
                        wealth takes time, and the sooner you start, the faster
                        you shall be able to enjoy the money saved, this is the
                        thumb rule. But it's nothing to worry about, as they
                        say, it's never too late to start.
                      </p>
                      <p>
                        Investing money in a Child Education Plan is a step in
                        the financially secure direction you are looking to move
                        in. This investment plan offers you the opportunity to
                        save the money you shall need years later, so you don’t
                        have to liquidate assets or avail loans when the need
                        arises, be it for paying for your Child's Education in
                        that prestigious college, or any other career move your
                        child or you may be considering.
                      </p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <span className="faqs_greenDot"></span> What is a Child
                      Education Planning Calculator ?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        A Child Education Planning Calculator is used for
                        computing the amount an individual may require to fund
                        his or her Child's Education. This online investment
                        planner takes into account factors like the child’s
                        present age, the age when he is likely to need that
                        money, the rate of returns the investment is likely to
                        fetch, and the inflation rate, among other things, to
                        project the corpus required. Moreover, it also computes
                        and projects the amount that needs to be invested to
                        achieve the targeted corpus, be it every month, or as a
                        one-time lumpsum investment.
                      </p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <span className="faqs_greenDot"></span> How should you
                      plan for your Child’s Education ?{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Education is one of the significant expenses that have
                        to be taken into account when planning your child’s
                        future. What makes the task difficult is the numerous
                        variables that have to be kept in mind before outlining
                        an investment strategy for fulfilling this purpose. The
                        escalating cost of education and the ever-growing
                        inflation index are two such factors. Also, none of us
                        know what line of education our child will end up
                        pursuing. This makes putting a number on the amount
                        needed extremely difficult.
                      </p>
                      <p>
                        Investing in a Child Education Plan helps build the
                        money you shall need to fund your child’s education. But
                        this needs to be done with great care and planning, as a
                        flawed investment strategy may cause you to miss your
                        targeted corpus. Also, the growth trajectory of the
                        investments made needs to be monitored round-the-clock,
                        to ensure that the returns fetched are in line with the
                        targeted corpus.
                      </p>
                      <p>
                        To finalise a suitable strategy, investors need to
                        discuss options with their wealth management consultant,
                        who shall do the research needed to identify their
                        investment risk profile and monetary obligations before
                        making a recommendation.
                      </p>
                      <p>
                        At BFC Capital, we pay the attention to detail required
                        to cater to your financial needs appropriately.
                        Investment options are recommended and customised to
                        match your requirements. Moreover, your investments are
                        subjected to relentless monitoring to avoid any
                        shortfall in the returns fetched.
                      </p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <span className="faqs_greenDot"></span> Best Child
                      Education Plans{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        The assurance of a secure future is the best gift
                        parents can give a child. But how do we ensure this ?
                        Investing money in the right products can get the job
                        done, most of us understand this, but which ones ? The
                        numerous options presently afloat in the financial
                        universe tend to leave guardians clueless about the
                        right investment choice.
                      </p>
                      <p>
                        There was a time when investing in FDs could get the job
                        done, but with fixed deposit interest rates plummeting
                        every other quarter, investors are faced with the risk
                        of falling short of the targeted corpus. The same is the
                        case with company fixed deposits. Yes, they offer
                        relatively higher returns, but they do not have the
                        potential to multiply the money infused, expeditiously.
                      </p>
                      <p>
                        Those thinking of investing in traditional insurance
                        plans are also faced with a similar dilemma. All these
                        investment options, although trusted and old, simply do
                        not possess the attributes needed to ensure a safe
                        future for your child. Parents, when investing money for
                        their child’s future, need to opt for products that can
                        grow expeditiously over the long term through
                        compounding, and have the potential to outrun the
                        inflation index.
                      </p>
                      <p>
                        The suitable course of action herein is to discuss
                        options with a certified financial planner, outline an
                        investment strategy in advance, and diversify
                        investments accordingly.
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
export default ChildEducationCalculator;
