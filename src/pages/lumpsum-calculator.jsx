import React,{useState} from "react";
import Accordion from "react-bootstrap/Accordion";
import minus from "../img/minus.webp";
import plus from "../img/add.webp";
import { FaHome, FaAngleRight } from "react-icons/fa";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import "./styles.css";
import { Helmet } from "react-helmet";
import { notify } from "./toastCreater";
import { getMachine } from "./helper/calculatorHelper";
import {ArcElement,Chart} from "chart.js"
Chart.register(ArcElement);

const LumpsumCalculator = () => {
  

    const [investment, setInvestment] = useState(1000);
    const [period, setPeriod] = useState(10);
    const [expectedRateRetuen, setExpectedRateRetuen] = useState(3);
    const [lumpsums, setLumpsums] = useState("1,343");
    const [sgains, setSgains] = useState("343");
    const [resultnvestment, setResultnvestment] = useState(1000);

    const [chartPresentValue, setChartPresentValue] = useState(1343);
    const [chartGain, setChartGain] = useState(343);
    const [loader, setLoader] = useState("none");
    const [calculateCheck, setCalculateCheck] = useState(0);

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a Lumpsum Calculator ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Lumpsum Calculator is an online tool used for computing the corpus one-time mutual fund investments may compound into overtime. Investors can use this tool to compute their investments’ returns at varying time intervals like 1-year, 3-years, 5-years, etc. The logic governing this tool takes into account the amount parked in the investment, the average rate of return the investor is expecting, and the investment tenure to fetch the desired projection.",
        },
      },
      {
        "@type": "Question",
        name: "How does a Mutual Fund Lumpsum Calculator help you ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lumpsum Calculators are used to compute the corpus an investment may compound into over the opted tenure of investment.",
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


  


  const data = {
    datasets: [
      {
        data: [chartPresentValue, chartGain],
        backgroundColor: ["#F06D70", "#97C5FB"],
      },
    ],
    labels: ["Present Value", "Gain"],
  };

  const lumpsumCalculate = () => {
    if (investment < 500) {
      notify("warn", "Investment should not be less than 500");
      return;
    }
    if (period < 1) {
      notify("warn", "Period should not be less than 1");
      return;
    }
    if (expectedRateRetuen < 1) {
      notify("warn", "Expected Rate of Return should not be less than 1");
      return;
    }
    setLoader("block");
    

    var i = expectedRateRetuen / 100 / 12;

    var lumpsums = investment * Math.pow(1 + expectedRateRetuen / 100, period);
    var lumpsum = parseInt(lumpsums).toFixed();
    var gains = lumpsum - investment;
    setResultnvestment(getMachine(investment));
    setLumpsums(getMachine(lumpsum));
    setSgains(getMachine(gains));
    window.scrollTo(500, 500);
    setCalculateCheck(1);
    setLoader("none");
    setChartPresentValue(investment);
    setChartGain(gains);
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

  let incPeriod = () => {
    if (period < 50) {
      setPeriod(Number(period) + 1);
    }
  };
  let decPeriod = () => {
    if (period > 1) {
      setPeriod(period - 1);
    }
  };

  let incExpectedRateRetuen = () => {
    if (isNaN(expectedRateRetuen)) {
      return setExpectedRateRetuen(0);
    }
    if (expectedRateRetuen < 50) {
      setExpectedRateRetuen(Number(expectedRateRetuen) + 0.5);
    }
  };
  let decExpectedRateRetuen = () => {
    if (expectedRateRetuen > 1) {
      setExpectedRateRetuen(expectedRateRetuen - 0.5);
    }
  };



  return (
    <>
      <Helmet>
        <title>Lumpsum calculator: Calculate Your ROI in Mutual Funds</title>
        <meta
          name="description"
          content=" Lumpsum calculator - One of the best investments in Mutual Funds is lumpsum. Lumpsum calculator helps to estimate the future value returns of your Investment."
        />
        <meta
          name="keywords"
          content="lumpsum,lumpsum calculator,sip lumpsum calculator,mutual fund lumpsum calculator,lumpsum sip calculator,lump sum amount,lump sum investment calculator,lumpsum mutual fund calculator,lump sum calculation,best fund for lumpsum investment,best mutual funds for lumpsum investment"
        />
        <link
          rel="canonical"
          href="https://bfccapital.com/lumpsum-calculator"
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
                    <a href="/lumpsum-calculator">
                      <span className="breadcrumb-text">
                        {" "}
                        Lumpsum Calculator
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
              <h1 className="pt-3 pb-lg-4">Lumpsum Calculator</h1>
            </div>
          </div>
          <div class=" mt-3 calculator">
            <div class="" role="tabpanel">
              <section>
                <div className="results">
                  <div className="shadow-pro br-50 px-4 pb-5">
                    <section className="pt-lg-5 pb-lg-5 pt-sm-5 pb-sm-5">
                      <div className="row">
                        <div className="col-md-4 text-center">
                          <label
                            for="m-saving"
                            className="text-label font-weight-500 py-2"
                          >
                            Investment(₹)
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
                                    setInvestment(
                                      e.target.value != ""
                                        ? parseInt(e.target.value)
                                        : ""
                                    );
                                  }
                                } else if (e.target.value > 10000000) {
                                  setInvestment(10000000);
                                }
                              }}
                              name="m-saving"
                            />
                            <img
                              src={plus}
                              alt=""
                              onClick={incInvestment}
                              className="img-fluid max-27"
                            ></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label
                            for="year"
                            className="text-label font-weight-500 py-2"
                          >
                            Period (Years)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img
                              src={minus}
                              alt=""
                              onClick={decPeriod}
                              className="img-fluid max-27"
                            ></img>
                            <input
                              type="text"
                              className="form-control"
                              value={period}
                              placeholder="0"
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 50
                                ) {
                                  if (e.target.value.includes(".")) {
                                    setPeriod(
                                      Math.round(parseInt(e.target.value))
                                    );
                                  } else {
                                    setPeriod(
                                      e.target.value != ""
                                        ? parseInt(e.target.value)
                                        : ""
                                    );
                                  }
                                } else if (e.target.value > 50) {
                                  setPeriod(50);
                                }
                              }}
                              name="year"
                            />
                            <img
                              src={plus}
                              alt=""
                              onClick={incPeriod}
                              className="img-fluid max-27"
                            ></img>
                          </div>
                        </div>
                        <div className="col-md-4 text-center">
                          <label
                            for="return"
                            className="text-label font-weight-500 py-2"
                          >
                            Expected Rate of Return (% p.a)
                          </label>
                          <div className="d-flex inputf transcard">
                            <img
                              src={minus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={decExpectedRateRetuen}
                            ></img>
                            <input
                              type="number"
                              className="form-control"
                              value={expectedRateRetuen}
                              placeholder="0"
                              onChange={(e) => {
                                if (
                                  e.target.value >= 0 &&
                                  e.target.value <= 50
                                ) {
                                  if (e.target.value.includes(".")) {
                                    let a = parseFloat(e.target.value);
                                    setExpectedRateRetuen(
                                      parseFloat(a.toFixed(2))
                                    );
                                  } else {
                                    setExpectedRateRetuen(
                                      e.target.value != ""
                                        ? parseInt(e.target.value)
                                        : ""
                                    );
                                  }
                                } else {
                                  setExpectedRateRetuen(50);
                                }
                              }}
                              name="return"
                            />
                            <img
                              src={plus}
                              alt=""
                              className="img-fluid max-27"
                              onClick={incExpectedRateRetuen}
                            ></img>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 pt-2 mt-1 text-right text-xs-center">
                        <button
                          className="new-btn1 mt-lg-3"
                          onClick={lumpsumCalculate}
                        >
                          {calculateCheck == 0 ? "Calculate" : "Re-Calculate"}
                        </button>
                      </div>
                    </section>
                    <div className="row shadow-pro br-50 mx-lg-3" id="result">
                      <div className="col-md-8 pt-lg-5" id="mobile">
                        <div className="pt-4 pb-2">
                          {/* <Doughnut
                            className="chart"
                            data={data}
                            options={{
                              responsive: true,
                              maintainAspectRatio: false,
                            }}
                            width={638}
                            height={341}
                          /> */}

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
                                Present Value(₹)
                              </div>
                              <div className="inputf transcard bg-white py-2">
                                {resultnvestment}
                              </div>
                            </li>
                            <li>
                              <div className="text-label font-weight-500 py-2">
                                Gain(₹)
                              </div>
                              <div className="inputf transcard bg-white py-2">
                                {sgains}
                              </div>
                            </li>
                            <li>
                              <div className="text-label font-weight-500 py-2">
                                Future Value(₹)
                              </div>
                              <div className="inputf transcard bg-white py-2">
                                {lumpsums}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-8 pt-lg-5" id="desktop">
                        <div className="pt-4" >
                          <Doughnut
                            className="chart"
                            data={data}
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
      <section className="fqa pt-lg-3  mutual-fund-faq">
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
                      <span className="faqs_greenDot"></span> What is a Lumpsum
                      Calculator ?{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        A Lumpsum Calculator is an online tool used for
                        computing the corpus one-time mutual fund investments
                        may compound into overtime. Investors can use this tool
                        to compute their investments’ returns at varying time
                        intervals like 1-year, 3-years, 5-years, etc. The logic
                        governing this tool takes into account the amount parked
                        in the investment, the average rate of return the
                        investor is expecting, and the investment tenure to
                        fetch the desired projection.
                      </p>
                      <p>
                        Using this tool is a practice encouraged among
                        investors, as it helps them get a better picture of the
                        end result, and consequently make better and
                        well-informed financial decisions.
                      </p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <span className="faqs_greenDot"></span> How does a Mutual
                      Fund Lumpsum Calculator help you ?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        "As already discussed, Lumpsum Calculators are used to
                        compute the corpus an investment may compound into over
                        the opted tenure of investment. Now, let’s try and
                        understand the significance of such estimations with the
                        help of the example listed below. Let’s assume herein
                        the investor is looking to invest money with the intent
                        of buying a house 15 years from today.
                      </p>
                      <p>
                        He presently has Rs. 5,00,000 in hand, which he chooses
                        to invest in a mutual fund, that may draw returns at the
                        rate of 12%. To plan ahead, he needs to know what this
                        investment shall compound into. Consequently, he feeds
                        certain figures in the Lumpsum Calculator, namely the
                        investment amount, the tenure of investment, and the
                        expected rate of return.
                      </p>
                      <p>
                        Upon hitting “Calculate”, the tool computes the values
                        to arrive at a compounded approximate value of Rs.
                        27,36,000. This projection shall allow the investor to
                        entertain the idea of buying something close to this
                        value and if need be, make additional lumpsum
                        investments at intermittent intervals to achieve the
                        final corpus he/she may be targeting."
                      </p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <span className="faqs_greenDot"></span> What are the
                      benefits/advantages of Lumpsum Mutual Fund Investments ?{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Lumpsum Mutual Fund Investments are apt for individuals
                        who wish to make investments in mutual funds in one shot
                        i.e. without the involvement of an instalment plan.
                        Lumpsum investments are simpler as compared to other
                        modes of investment as they allow you to invest as per
                        your convenience and fund availability.
                      </p>
                      <p>
                        The freedom to invest at time intervals of your choice,
                        based on fund availability, makes investing in a lumpsum
                        the preferred mode of parking funds for many
                        individuals. The returns fetched herein are
                        tax-efficient, which coupled with the absence of a
                        lock-in period, a favorable aspect of open-ended mutual
                        funds, makes investing money in one go a very tempting
                        and liquid option.
                      </p>
                      <p>
                        Besides, there is no upper limit to the amount that can
                        be invested in mutual funds in a lumpsum, so you can
                        keep parking all the money you wish to without a worry
                        in the world. However, those still reluctant, need to
                        understand that the money sitting in their savings bank
                        account shall never grow beyond a certain point, as it
                        simply cannot fetch returns equalling the inflation
                        rate.
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
export default LumpsumCalculator;
