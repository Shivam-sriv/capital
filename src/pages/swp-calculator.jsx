import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaHome, FaAngleRight } from "react-icons/fa";
import "chartkick/chart.js";
// import LoadingOverlay from "react-loading-overlay";
import "./styles.css";
import { Helmet } from "react-helmet";
import FD from "../img/fd.webp";
import { notify } from "./toastCreater";
import axios from "axios";


// const DarkBackground = function () {};

const SWP_Calculator = () => {
    const [monthlyWithdrawl, setMonthlyWithdrawl] = useState(10000);
    const [monthlyPercentage, setMonthlyPercentage] = useState(15.38);
    const [period, setPeriod] = useState(5);
    const [interestRate, setInterestRate] = useState(12);
    const [lumpsumAmount, setLumpsumAmount] = useState(65000);
    const [totalProfit, setTotalProfit] = useState("-1,71,778");
    const [totalWithdrawalAmount, setTotalWithdrawalAmount] = useState("6,00,000");
    const [totalBalanceAmount, setTotalBalanceAmount] = useState("-7,06,778");
    const [loader, setLoader] = useState("none");
    const [calculateCheck, setCalculateCheck] = useState(0);




    const sipCalculate = (e) => {
        e.preventDefault();
        if (monthlyWithdrawl < 500) {
            notify("warn", "Monthly Withrawl Amount should not be less than 500")
            return
        }
        if (period < 1) {
            notify("warn", "Period should not be less than 1")
            return
        }

        if (interestRate < 1) {
            notify("warn", "Interest Rate should not be less than 1")
            return
        }
        if (lumpsumAmount < 500) {
            notify("warn", "Lumpsum Amount should not be less than 500")
            return
        }
        setLoader("block");

        let reqbody = {
            monthlyWithdrawl,
            period,
            interestRate,
            lumpsum: lumpsumAmount
        }
        setLoader("block")
        const token = localStorage.getItem("token");
        axios.post("https://uat.bfccapital.com/prodigypro/api/calculators/swp", reqbody).then((res) => {

            document.getElementById('scroll').scrollIntoView(true);
            let options = { style: 'decimal', useGrouping: true, maximumFractionDigits: 2 };
            setTotalBalanceAmount(res.data?.data?.total_balance_amount.toLocaleString('en-IN', options))
            setTotalWithdrawalAmount(res.data?.data?.total_withdrawal_amount.toLocaleString('en-IN', options))
            setTotalProfit(res.data?.data?.total_profit.toLocaleString('en-IN'))
            window.scrollTo(500, 500);
        }).catch((err) => {
            if (err) {
                // toast.error("Sorry,Somthing went wrong..!!!");
            }
        })
        // setLoader("none")

        //  window.scrollTo(500, 500);
        setCalculateCheck(1)
        setLoader("none");
    }


    let incNum = () => {
        let perc = ((+monthlyWithdrawl + 500) * 100) / lumpsumAmount
        if (perc <= 100) {
            if (monthlyWithdrawl < 1000000) {
                setMonthlyWithdrawl(Number(monthlyWithdrawl) + 500);
                calculatePercentage(Number(monthlyWithdrawl) + 500, lumpsumAmount, null, 1)
            } else if (monthlyWithdrawl == 0) {
                setMonthlyWithdrawl(Number(monthlyWithdrawl) + 500);
                calculatePercentage(Number(monthlyWithdrawl) + 500, lumpsumAmount, null, 1)
            }
        } else {
            notify("warn", "Monthly Withdrawl Amount can not exceed Lumpsum Amount")
        }

    };
    let decNum = () => {
        if (monthlyWithdrawl >= 500) {
            setMonthlyWithdrawl(monthlyWithdrawl - 500);
            calculatePercentage(monthlyWithdrawl - 500, lumpsumAmount, null, 1)
        } else if (monthlyWithdrawl < 499) {
            calculatePercentage(0, lumpsumAmount, null, 1)
            setMonthlyWithdrawl(0);
        }
    };

    let incLumpsumAmount = () => {
        if (lumpsumAmount < 1000000) {
            setLumpsumAmount(Number(lumpsumAmount) + 500);
            calculatePercentage(monthlyWithdrawl, Number(lumpsumAmount) + 500 - 500, null, 2)
        } else if (lumpsumAmount == 0) {
            setLumpsumAmount(Number(lumpsumAmount) + 500);
            calculatePercentage(monthlyWithdrawl, Number(lumpsumAmount) + 500, null, 2)
        }
    };
    let decLumpsumAmount = () => {
        if (lumpsumAmount >= 500) {
            setLumpsumAmount(lumpsumAmount - 500);
            calculatePercentage(monthlyWithdrawl, lumpsumAmount - 500, null, 2)
        } else if (lumpsumAmount < 499) {
            calculatePercentage(monthlyWithdrawl, 0, null, 2)
            setLumpsumAmount(0);
        }
    };

    let incMonth = () => {
        if (period < 50) {
            setPeriod(Number(period) + 1);
        }
    };
    let decMonth = () => {
        if (period > 1) {
            setPeriod(period - 1);
        }
    };

    let incPer = () => {
        if (isNaN(interestRate)) {
            return setInterestRate(0);
        }
        if (interestRate < 50) {
            setInterestRate(Number(interestRate) + 0.5);
        }
    };
    let decPer = () => {
        if (interestRate > 1) {
            setInterestRate(interestRate - 0.5);
        }
    };

    let incMonthlyPer = () => {
        if (isNaN(monthlyPercentage)) {
            calculatePercentage(null, lumpsumAmount, 0, 3)
            return setMonthlyPercentage(0);
        }
        if (monthlyPercentage < 100) {
            calculatePercentage(null, lumpsumAmount, Number(monthlyPercentage) + 0.5, 3)
            setMonthlyPercentage(Number(monthlyPercentage) + 0.5);
        }
    };
    let decMonthlyPer = () => {
        if (monthlyPercentage > 1) {
            setMonthlyPercentage(monthlyPercentage - 0.5);
            calculatePercentage(null, lumpsumAmount, monthlyPercentage - 0.5, 3)
        }
    };

    const calculatePercentage = (result, amount, percentage, isMonthlyWithdrawl) => {
        if (isMonthlyWithdrawl === 1) {
            let perc = (result * 100) / amount
            console.log("ss", perc);
            setMonthlyPercentage(perc.toFixed(2))
        } else if (isMonthlyWithdrawl === 2) {
            let perc2 = (result * 100) / amount
            setMonthlyPercentage(perc2.toFixed(2))
        } else if (isMonthlyWithdrawl === 3) {
            let ress = (percentage / 100) * amount
            setMonthlyWithdrawl(ress.toFixed(2))
        }

    }
    return (
        <>
            <Helmet>
                <title>SWP Calculator: Calculate Maturity Value of Fixed Deposits</title>
                <meta
                    name="description"
                    content="SWP Calculator: Estimate the returns on your Fixed Deposits. Calculate how much money you need to invest to get desired maturity value over time."
                />
                <meta
                    name="keywords"
                    content="fd interest calculator, fd calculator, fixed deposit calculator, fixed deposit, fd interest rates, fixed deposit rates, fd rates, bank fd rates, fixed deposit interest rate, highest fd interest rates, best fd rates in india"
                />
                <link rel="canonical" href="https://bfccapital.com/fd-calculator" />
                {/* <script type="application/ld+json">{JSON.stringify(ldJson)}</script> */}
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

                                                <FaHome />
                                            </span>
                                        </a>
                                        <span className="r-icon">

                                            <FaAngleRight />
                                        </span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="breadcrumb-text">

                                                Planning & Solutions
                                            </span>
                                            <span className="r-icon">

                                                <FaAngleRight />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/swp-calculator">
                                            <span className="breadcrumb-text"> SWP Calculator </span>
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
                            <h1 className="pt-3 pb-1">SWP Calculator</h1>
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
                                                    <label for="m-saving" className="text-label fw-500 fs-14 py-2">
                                                        Monthly Withdrawl <span className="text-roboto">(₹)</span>
                                                    </label>
                                                    <div className="d-flex inputf transcard">
                                                        <img src={"https://bfc-prodigypro-assets.s3.ap-southeast-1.amazonaws.com/minus.png"} alt="" className="img-fluid max-27" onClick={decNum}></img>
                                                        <input type="text" className="form-control " name="m-saving" value={monthlyWithdrawl}
                                                            onChange={(e) => {
                                                                if (
                                                                    e.target.value >= 0 &&
                                                                    e.target.value <= lumpsumAmount
                                                                ) {
                                                                    if (e.target.value.includes(".")) {
                                                                        setMonthlyWithdrawl(
                                                                            Math.round(parseInt(e.target.value))
                                                                        );
                                                                        calculatePercentage(e.target.value, lumpsumAmount, null, 1)
                                                                    } else {
                                                                        setMonthlyWithdrawl(e.target.value != "" ? parseInt(e.target.value) : "");
                                                                        calculatePercentage(e.target.value, lumpsumAmount, null, 1)
                                                                    }
                                                                } else if (e.target.value > lumpsumAmount) {
                                                                    setMonthlyWithdrawl(lumpsumAmount);
                                                                    calculatePercentage(lumpsumAmount, lumpsumAmount, null, 1)
                                                                }
                                                            }} />
                                                        <img src={"https://bfc-prodigypro-assets.s3.ap-southeast-1.amazonaws.com/add.png"} alt="" className="img-fluid max-27" onClick={incNum}></img>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 text-center">
                                                    <label for="year" className="text-label fs-14 fw-500 py-2">
                                                        Period (Years)
                                                    </label>
                                                    <div className="d-flex inputf transcard">
                                                        <img src={"https://bfc-prodigypro-assets.s3.ap-southeast-1.amazonaws.com/minus.png"} alt="" className="img-fluid max-27" onClick={decMonth}></img>
                                                        <input type="text" className="form-control " name="year" value={period}
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
                                                                        setPeriod(e.target.value != "" ? parseInt(e.target.value) : "");
                                                                    }
                                                                } else if (e.target.value > 50) {
                                                                    setPeriod(50);
                                                                }
                                                            }} />

                                                        <img src={"https://bfc-prodigypro-assets.s3.ap-southeast-1.amazonaws.com/add.png"} alt="" className="img-fluid max-27" onClick={incMonth}></img>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 text-center">
                                                    <label for="return" className="text-label fw-500 fs-14 py-2">
                                                        Interest Rate  (% p.a)
                                                    </label>
                                                    <div className="d-flex inputf transcard">

                                                        <img src={"https://bfc-prodigypro-assets.s3.ap-southeast-1.amazonaws.com/minus.png"} alt="" className="img-fluid max-27" onClick={decPer} ></img>
                                                        <input type="text" className="form-control " name="return" value={interestRate}
                                                            onChange={(e) => {
                                                                if (
                                                                    e.target.value >= 0 &&
                                                                    e.target.value <= 50
                                                                ) {
                                                                    if (e.target.value.includes(".")) {
                                                                        let a = parseFloat(e.target.value);
                                                                        setInterestRate(
                                                                            parseFloat(a.toFixed(2))
                                                                        );
                                                                    } else {
                                                                        setInterestRate(e.target.value != "" ? parseInt(e.target.value) : "");
                                                                    }
                                                                } else {
                                                                    setInterestRate(50);
                                                                }
                                                            }} />
                                                        <img src={"https://bfc-prodigypro-assets.s3.ap-southeast-1.amazonaws.com/add.png"} alt="" className="img-fluid max-27" onClick={incPer}></img>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 text-center">
                                                    <label for="return" className="text-label fw-500 fs-14 py-2">
                                                        Lumpsum Amount
                                                    </label>
                                                    <div className="d-flex inputf transcard">

                                                        <img src={"https://bfc-prodigypro-assets.s3.ap-southeast-1.amazonaws.com/minus.png"} alt="" className="img-fluid max-27" onClick={decLumpsumAmount} ></img>
                                                        <input type="text" className="form-control " name="return" value={lumpsumAmount}
                                                            onChange={(e) => {
                                                                if (
                                                                    e.target.value >= monthlyWithdrawl &&
                                                                    e.target.value <= 10000000
                                                                ) {
                                                                    if (e.target.value.includes(".")) {
                                                                        setLumpsumAmount(
                                                                            Math.round(parseInt(e.target.value))
                                                                        );
                                                                        if (e.target.value > 0) {
                                                                            calculatePercentage(monthlyWithdrawl, e.target.value, null, 2)
                                                                        }
                                                                    } else {
                                                                        setLumpsumAmount(e.target.value != "" ? parseInt(e.target.value) : "");
                                                                        if (e.target.value > 0) {
                                                                            calculatePercentage(monthlyWithdrawl, e.target.value, null, 2)
                                                                        }
                                                                    }
                                                                } else if (e.target.value > 10000000) {
                                                                    setLumpsumAmount(10000000);
                                                                    calculatePercentage(monthlyWithdrawl, 10000000, null, 2)
                                                                } else if (e.target.value < monthlyWithdrawl) {
                                                                    setLumpsumAmount(monthlyWithdrawl);
                                                                    calculatePercentage(monthlyWithdrawl, monthlyWithdrawl, null, 2)
                                                                }
                                                            }} />
                                                        <img src={"https://bfc-prodigypro-assets.s3.ap-southeast-1.amazonaws.com/add.png"} alt="" className="img-fluid max-27" onClick={incLumpsumAmount}></img>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 text-center">
                                                <label for="return" className="text-label fw-500 fs-14 py-2">
                                                    Monthly Withdrawl  (% p.m)
                                                </label>
                                                <div className="d-flex inputf transcard">

                                                    <img src={"https://bfc-prodigypro-assets.s3.ap-southeast-1.amazonaws.com/minus.png"} alt="" className="img-fluid max-27" onClick={decMonthlyPer} ></img>
                                                    <input type="text" className="form-control " name="monthlyPercentage" value={monthlyPercentage}
                                                        onChange={(e) => {
                                                            let value = e.target.value.slice(0, e.target.value.indexOf('.') + 3)
                                                            if (0 <= e.target.value && e.target.value < 100) {
                                                                console.log("idnex of . ", value);
                                                                setMonthlyPercentage(value)
                                                                calculatePercentage(null, lumpsumAmount, value, 3)
                                                            } else {
                                                                setMonthlyPercentage(100)
                                                                calculatePercentage(null, lumpsumAmount, 100, 3)
                                                            }

                                                        }} />
                                                    <img src={"https://bfc-prodigypro-assets.s3.ap-southeast-1.amazonaws.com/add.png"} alt="" className="img-fluid max-27" onClick={incMonthlyPer}></img>
                                                </div>
                                            </div>
                                            <div className="col-md-12 pt-2 mt-1 text-lg-end text-center">
                                                <button className="btn-custom mt-3" onClick={(e) => sipCalculate(e)}>{calculateCheck == 0 ? "Calculate" : "Re-Calculate"} </button>
                                            </div>
                                        </section>
                                        <div className="row shadowc br-50 mx-lg-3" id="scroll">
                                <div className="col-md-4">
                                  <div className="result-content result-content-shadow">
                                    <ul className="text-center lst-none ps-0">
                                      <li className="pb-3">
                                        <div className="text-label fw-500 py-2">
                                          Total Balance Amount<span className="text-roboto">(₹)</span>
                                        </div>
                                        <div className="inputf transcard bg-white py-2">{totalBalanceAmount}</div>
                                      </li>
                                      <li className="pb-3">
                                        <div className="text-label fw-500 py-2">
                                          Total Withdrawal Amount<span className="text-roboto">(₹)</span>
                                        </div>
                                        <div className="inputf transcard bg-white py-2"> {totalWithdrawalAmount}</div>
                                      </li>
                                      <li className="pb-3">
                                        <div className="text-label fw-500 py-2">
                                          Total Profit<span className="text-roboto">(₹)</span>
                                        </div>
                                        <div className="inputf transcard bg-white py-2">  {totalProfit}</div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-8 mt-5">
                                  <div className="text-center">
                                    <img
                                      src={"https://bfc-prodigypro-assets.s3.ap-southeast-1.amazonaws.com/fds.png"}
                                      className="img-fluid mw-220"
                                      alt=""
                                    />
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
                                            Calculator ?
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
                                                Using the SWP Calculator is a simple process involving as
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
                                            FD Calculator ?
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
                                            Corporate FD
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
                                            <span className="faqs_greenDot"></span> FD vs Mutual Funds
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
export default SWP_Calculator;
