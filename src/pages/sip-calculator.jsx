import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import minus from "../img/minus.webp";
import plus from "../img/add.webp";
import { FaHome, FaAngleRight } from "react-icons/fa";
import { LineChart } from "react-chartkick";
import "chartkick/chart.js";
import { notify } from "./toastCreater";
import { getMachine } from "./helper/calculatorHelper";
// import LoadingOverlay from "react-loading-overlay";
import "./styles.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const DarkBackground = function () {};

const SipCalculator = () => {
  const [monthlySavings, setMonthlySavings] = useState(10000);
  const [investmentPeriod, setInvestmentPeriod] = useState(5);
  const [expectedRateReturn, setExpectedRateReturn] = useState(10);
  const [totalSaving, setTotalSaving] = useState("6,00,000");
  const [gains, setGains] = useState("7,74,370");
  const [totalMonth, setTotalMonth] = useState(5);
  const [loader, setLoader] = useState("none");
  const [calculateCheck, setCalculateCheck] = useState(0);

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a Systematic Investment Plan ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Systematic Investment Plan, commonly known as SIP, is a mode of investment offered to individuals for investing in Mutual Funds. As the name suggests, it is a systematic way of investing fixed amounts in shortlisted mutual fund schemes, with the money getting credited into the scheme at pre-determined intervals; weekly, monthly, or quarterly, among others. Simply put, it is an automated way of investing based on already decided parameters, such as the SIP amount, frequency of payments, etc.",
        },
      },
      {
        "@type": "Question",
        name: "What is an SIP Calculator ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An SIP Calculator is a tool with the help of which you can get an idea on how much money you can accumulate over a period of time. All you have to do is to fill the suggested inputs like the duration of investment, the average rate of returns expected, and the amount you want to invest per month. Simply put, it is a calculator that helps you achieve your dreams.",
        },
      },
      {
        "@type": "Question",
        name: "How to choose the Right Scheme for SIP ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Shortlisting the best SIP plan to invest can be a hard task, simply because it involves taking into account too many factors, such as the individual’s risk appetite and the targeted investment horizon. Simply put, no two individuals have the same investment goals and priroties, therefore the recommended scheme would be different for each. This is why all investment decisions must be taken on the suggestion of a SEBI Registered Investment Advisor.",
        },
      },
    ],
  };

  const [data, setData] = useState([
    {
      name: "Market Value",
      data: {
        "0 Year": 0,
        "1 Year": 125665,
        "2 Year": 264469,
        "3 Year": 417818,
        "4 Year": 587225,
        "5 Year": 774370,
      },
    },
    {
      name: "Amount Invested",
      data: {
        "0 Year": 0,
        "1 Year": 120000,
        "2 Year": 240000,
        "3 Year": 360000,
        "4 Year": 480000,
        "5 Year": 600000,
      },
    },
  ]);

  const sipCalculate = (e) => {
    e.preventDefault();
    if (monthlySavings < 500) {
      notify("warn", "Amount should not be less than 500");
      return;
    }
    if (investmentPeriod < 1) {
      notify("warn", "Investment Period should not be less than 1");
      return;
    }
    if (expectedRateReturn < 1) {
      notify("warn", "Expected Rate of Return should not be less than 1");
      return;
    }
    setLoader("block");



    let monthlyRate = expectedRateReturn / 12 / 100;
    var months = investmentPeriod * 12;
    var futureValue = 0;
    // var futureValue = (monthlySavings  (1 + monthlyRate)  ((Math.pow((1 + monthlyRate), months)) - 1) / monthlyRate);
    var futureValue =
      (monthlySavings * (Math.pow(1 + monthlyRate, months) - 1)) / monthlyRate;

    var mainresults = futureValue.toFixed(2);
    var totalSaving = monthlySavings * months;
    var gains = (mainresults - monthlySavings * months).toFixed(2);
    var totalMonth = investmentPeriod;
    var a = parseInt(totalSaving);
    var g = parseInt(gains);
    var gainss = a + g;
    setTotalSaving(getMachine(Math.round(totalSaving)));
    setTotalMonth(getMachine(Math.round(totalMonth)));
    setGains(getMachine(Math.round(gainss)));
    document.getElementById("scroll").scrollIntoView(true);

    // var monthlyRate = expectedRateReturn / 12 / 100;

    let mainArray = [];
    let mainFirstObj = { name: " Amount Invested" };
    let mainSecondObj = { name: "Market Value" };
    let firstSubObj = {};
    let secondSubObj = {};
    if (parseInt(investmentPeriod) <= 50) {
      for (let i = 0; i < parseInt(investmentPeriod) + 1; i++) {
        if (i == 0) {
          firstSubObj[i + "Year"] = 0;
        } else {
          firstSubObj[i + "Year"] = (monthlySavings * i * 12).toFixed();
        }

        if (i == 0) {
          secondSubObj[i + "Year"] = 0;
        } else {
          // let marketData = monthlySavings * ((1 + monthlyRate) * ((Math.pow((1 + monthlyRate), i * 12)) - 1) / monthlyRate)
          let marketData =
            (monthlySavings * (Math.pow(1 + monthlyRate, i * 12) - 1)) /
            monthlyRate;
          let marketDataooo = marketData / 12; //(marketData + monthlySavings * i * 12)/ 12
          secondSubObj[i + "Year"] = (marketDataooo * 12).toFixed();
        }
      }
      mainFirstObj.data = firstSubObj;
      mainSecondObj.data = secondSubObj;
      mainArray.push(mainSecondObj);
      mainArray.push(mainFirstObj);
      setData(mainArray);

      //  window.scrollTo(500, 500);
      setCalculateCheck(1);
    }
  };

  let incNum = () => {
    if (monthlySavings < 1000000) {
      setMonthlySavings(Number(monthlySavings) + 500);
    } else if (monthlySavings == 0) {
      setMonthlySavings(Number(monthlySavings) + 500);
    }
  };
  let decNum = () => {
    if (monthlySavings >= 500) {
      setMonthlySavings(monthlySavings - 500);
    } else if (monthlySavings < 499) {
      setMonthlySavings(0);
    }
  };

  let incMonth = () => {
    if (investmentPeriod < 50) {
      setInvestmentPeriod(Number(investmentPeriod) + 1);
    }
  };
  let decMonth = () => {
    if (investmentPeriod > 1) {
      setInvestmentPeriod(investmentPeriod - 1);
    }
  };

  let incPer = () => {
    if (isNaN(expectedRateReturn)) {
      return setExpectedRateReturn(0);
    }
    if (expectedRateReturn < 50) {
      setExpectedRateReturn(Number(expectedRateReturn) + 0.5);
    }
  };
  let decPer = () => {
    if (expectedRateReturn > 1) {
      setExpectedRateReturn(expectedRateReturn - 0.5);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          SIP Calculator: Evaluate Best Mutual Funds Sip Returns to Invest
        </title>
        <meta
          name="description"
          content=" SIP Calculator: A tool to help you to Evaluate the future value of your potential returns on any Systematic Investment Plan with our SIP calculator."
        />
        <meta
          name="keywords"
          content="sip goal calculator,sip calculator,sip return calculator,sip calculator india,sip calculator online,monthly sip calculator,mf sip calculator,investment calculator india,best sip plans,best sip plans,sip investment calculator,sip scheme,sip returns,mutual fund sip return calculator,"
        />
        <link rel="canonical" href="https://bfccapital.com/sip-calculator" />

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
                    <a href="/sip-calculator">
                      <span className="breadcrumb-text"> SIP Calculator</span>
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
              <h1 className="pt-3">SIP Calculator</h1>
            </div>
          </div>
        </div>

        <div className="container plr-5 pb-lg-3 calculator">
          <div className="row">
            <div className="col-md-12">
              <div class="pb-lg-3">
                <div class="mt-lg-3">
                  <div class="" role="tabpanel">
                    <section>
                      <div className="results pt-lg-3">
                        <div className="shadow-pro br-50 px-lg-5 px-sm-5 pb-lg-5 pb-sm-5">
                          <section className="pt-lg-4 pb-lg-4">
                            <div className="row">
                              <div className="col-md-4 text-center">
                                <label
                                  for="m-saving"
                                  className="text-label font-weight-500 py-2"
                                >
                                  Monthly Savings(₹)
                                </label>
                                <div className="d-flex inputf transcard">
                                  <img
                                    src={minus}
                                    alt=""
                                    className="img-fluid max-27"
                                    onClick={decNum}
                                  ></img>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="m-saving"
                                    placeholder="0"
                                    value={monthlySavings}
                                    onChange={(e) => {
                                      if (
                                        e.target.value >= 0 &&
                                        e.target.value <= 1000000
                                      ) {
                                        if (e.target.value.includes(".")) {
                                          setMonthlySavings(
                                            Math.round(parseInt(e.target.value))
                                          );
                                        } else {
                                          setMonthlySavings(e.target.value);
                                        }
                                      } else if (e.target.value > 1000000) {
                                        setMonthlySavings(1000000);
                                      }
                                    }}
                                  />

                                  <img
                                    src={plus}
                                    alt=""
                                    className="img-fluid max-27"
                                    onClick={incNum}
                                  ></img>
                                </div>
                              </div>
                              <div className="col-md-4 text-center">
                                <label
                                  for="year"
                                  className="text-label font-weight-500 py-2"
                                >
                                  Investment Period (Years)
                                </label>
                                <div className="d-flex inputf transcard">
                                  <img
                                    src={minus}
                                    alt=""
                                    className="img-fluid max-27"
                                    onClick={decMonth}
                                  ></img>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="year"
                                    placeholder="0"
                                    value={investmentPeriod}
                                    onChange={(e) => {
                                      if (
                                        e.target.value >= 0 &&
                                        e.target.value <= 50
                                      ) {
                                        if (e.target.value.includes(".")) {
                                          setInvestmentPeriod(
                                            Math.round(parseInt(e.target.value))
                                          );
                                        } else {
                                          setInvestmentPeriod(e.target.value);
                                        }
                                      } else if (e.target.value > 50) {
                                        setInvestmentPeriod(50);
                                      }
                                    }}
                                  />
                                  <img
                                    src={plus}
                                    alt=""
                                    className="img-fluid max-27"
                                    onClick={incMonth}
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
                                    onClick={decPer}
                                  ></img>
                                  <input
                                    type="number"
                                    className="form-control"
                                    name="return"
                                    placeholder="0"
                                    value={expectedRateReturn}
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
                                        } else {
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
                                    onClick={incPer}
                                  ></img>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 pt-lg-3 pt-sm-4 pb-sm-4 mt-1 text-right text-xs-center">
                              <button
                                className="btn-custom mt-3"
                                onClick={(e) => sipCalculate(e)}
                              >
                                {calculateCheck == 0
                                  ? "Calculate"
                                  : "Re-Calculate"}{" "}
                              </button>
                            </div>
                          </section>
                          <div className="row shadow-pro br-50" id="scroll">
                            <div className="col-md-4 col-sm-12">
                              <div
                                className="result-content result-content-shadow-pro"
                                id="result"
                              >
                                <div className="result-title text-center">
                                  <h2>Result</h2>
                                </div>
                                <ul className="text-center">
                                  <li>
                                    <div className="text-label font-weight-500 py-2">
                                      Amount Invested(₹)
                                    </div>
                                    <div className="inputf transcard bg-white py-2">
                                      {totalSaving}
                                    </div>
                                  </li>
                                  <li>
                                    <div className="text-label font-weight-500 py-2">
                                      Period (Year)
                                    </div>
                                    <div className="inputf transcard bg-white py-2">
                                      {totalMonth}
                                    </div>
                                  </li>
                                  <li>
                                    <div className="text-label font-weight-500 py-2">
                                      Gains(₹)
                                    </div>
                                    <div className="inputf transcard bg-white py-2">
                                      {gains}
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-8 col-sm-12 py-lg-5">
                              <div className="pt-4">
                                <LineChart data={data} />
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
                      <span className="faqs_greenDot"></span> What is a
                      Systematic Investment Plan ?{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        A Systematic Investment Plan, commonly known as SIP, is
                        a mode of investment offered to individuals for
                        investing in Mutual Funds. As the name suggests, it is a
                        systematic way of investing fixed amounts in shortlisted
                        mutual fund schemes, with the money getting credited
                        into the scheme at pre-determined intervals; weekly,
                        monthly, or quarterly, among others. Simply put, it is
                        an automated way of investing based on already decided
                        parameters, such as the SIP amount, frequency of
                        payments, etc.
                      </p>
                      <p>
                        SIPs allow investors the freedom to invest in Mutual
                        Funds without burning a hole in their pockets. The
                        growing popularity of SIP investments is primarily
                        because the amount is invested in portions, which
                        neutralizes the effects of market volatility to a great
                        extent.
                      </p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <span className="faqs_greenDot"></span> What is an SIP
                      Calculator ?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        An SIP Calculator is a tool with the help of which you
                        can get an idea on how much money you can accumulate
                        over a period of time. All you have to do is to fill the
                        suggested inputs like the duration of investment, the
                        average rate of returns expected, and the amount you
                        want to invest per month. Simply put, it is a calculator
                        that helps you achieve your dreams.
                      </p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <span className="faqs_greenDot"></span> How does an SIP
                      Calculator work ?{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        As already established, the logic governing SIP
                        Calculators takes into account certain factors for
                        projecting returns. This includes the amount that is to
                        be invested, the duration of the investment or the
                        investment horizon as many know it, and the returns
                        expected by the investor, mostly annual.
                      </p>

                      <p>
                        The investor needs to fill in these details in their
                        respective fields to arrive at the final projection.
                        Upon hitting the “Calculate” button after entering these
                        values, the user can view the corpus his investment is
                        likely to compound into by the end of the investment
                        term.
                      </p>
                      <p>
                        Let's visualize this with the help of an example: Herein
                        the investor is looking to invest Rs. 4,000 every month
                        for as many as 10 years, with the expectation of
                        fetching an average rate of return of 10%. Upon entering
                        these values into the SIP Calculator, he shall arrive at
                        a maturity amount of Rs. 8,19,378, against a total
                        investment of Rs. 4,80,000. Any changes in the entered
                        values shall end up tweaking the final output. For
                        instance, if the expected rate of returns is escalated
                        by a mere 1%, from 10% to 11%, the final compounded
                        corpus shall jump to Rs. 8,68,000.
                      </p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <span className="faqs_greenDot"></span> Benefits of SIP
                      Calculator{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        SIP Calculators help investors arrive at the estimated
                        corpus their invested money may multiply into, at just a
                        mouse click. The freedom to compare outcomes helps
                        investors determine what they want. This clarity of
                        mindset is imperative when finalizing an investment
                        strategy. With the help of this Calculator an Investor
                        can check how changes in SIP Amount & SIP Tenure will
                        affect the Future Corpus.
                      </p>
                      <p>
                        Let us simplify this for you with the help of an
                        example. Let's assume an investor is looking to start an
                        SIP investment for buying a car worth Rs. 8,00,000 in 5
                        Years, but is not aware of how much to invest per month
                        and what rate it should grow at to ensure he reaches his
                        Goal. Consequently, he decides to check projections on
                        the SIP Calculator. Upon making the inputs needed, he
                        concludes that he shall have to invest Rs. 10,000 a
                        month for the next 5 years to raise the amount needed,
                        provided his investment fetches an average rate of
                        return of 12% per annum. Thus, using an SIP Calculator
                        provides a more organized and well-thought-out approach,
                        which consequently, translates into well-informed
                        decisions and helps investors achieve what they are
                        targeting.
                      </p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      {" "}
                      <span className="faqs_greenDot"></span> How to choose the
                      Right Scheme for SIP ?{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Shortlisting the best SIP plan to invest can be a hard
                        task, simply because it involves taking into account too
                        many factors, such as the individual’s risk appetite and
                        the targeted investment horizon. Simply put, no two
                        individuals have the same investment goals and
                        priroties, therefore the recommended scheme would be
                        different for each. This is why all investment decisions
                        must be taken on the suggestion of a SEBI Registered
                        Investment Advisor.
                      </p>
                      <p>
                        Only after properly diagnosing your risk appetite,
                        investment horizon and investment goals, your wealth
                        management consultant will be able to outline an
                        appropriate investment strategy, and suggest suitable
                        investment options.
                      </p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      {" "}
                      <span className="faqs_greenDot"></span> Why should one
                      review SIP Schemes every 6 months ?{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Much like your physical well-being, the overall health
                        of your investment portfolio and SIPs also needs to be
                        diagnosed for any ailments, largely because the
                        performance of the funds under your SIP may start to
                        vary over time. For instance, the top performer in an
                        asset class may be falling behind after starting off
                        well.
                      </p>
                      <p>
                        Yet, many of us refrain from tracking and reviewing the
                        performance of the schemes in our portfolios simply out
                        of laziness. It is also important that the time interval
                        between such reviews not be too long, as it may minimize
                        the accuracy of the diagnose. Reviews done too early, on
                        the other hand, may not be comprehensive, owing to the
                        lack of relevant data.
                      </p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                      {" "}
                      <span className="faqs_greenDot"></span> SIP in Fixed
                      income Schemes{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        SIPs in Fixed Income Schemes are relatively immune to
                        market fluctuations, as the corpus herein is diverted to
                        invest in bonds and debt securities that are
                        comparatively safer. This SIP plan is particularly
                        popular among those who have a conservative investment
                        risk profile, and therefore prefer keeping the invested
                        corpus intact.
                      </p>
                      <p>
                        SIPs done under fixed income schemes help provide
                        much-needed stability to investor portfolios in a
                        volatile market and simultaneously maintain their
                        liquidity. In simpler words, they help cushion
                        portfolios from the impact of equity market
                        fluctuations, thereby balancing the asset allocation.
                      </p>
                    </Accordion.Body>
                    <div className="faqs_btm_border"></div>
                  </Accordion.Item>
                  <Accordion.Item eventKey="7">
                    <Accordion.Header>
                      {" "}
                      <span className="faqs_greenDot"></span> Why everyone
                      should have at least 1 SIP ?{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Those looking to set aside a portion of their earnings
                        to ensure a secure future for themselves or their loved
                        ones, need to look no further than a Systematic
                        Investment Plan. Those still skeptical, however, need to
                        understand the many benefits SIPs offer. For starters,
                        SIPs are pocket friendly. They offer investors the
                        opportunity to compound wealth by parking small,
                        manageable amounts.
                      </p>
                      <p>
                        All the investors need to do is pass on necessary
                        instructions to their banks for automating their
                        investment, even if it is worth Rs. 500 a month. This
                        facility also makes them a very convenient investment
                        option. SIPs also provide Rupee Cost Averaging, a factor
                        which neutralises the effects of Market Volatility and
                        saves one from trying to time the Markets. SIPs also
                        install Financial Discipline as one has to plan his or
                        her Income and Expenses in a manner that they match the
                        SIP Amount Allocation.
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
export default SipCalculator;
