import Accordion from "react-bootstrap/Accordion";

function Faqs() {
  return (
    <section className="fqa  mutual-fund-faq">
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
                    <span className="faqs_greenDot"></span> What is the minimum
                    investment duration (Lock-in Period) for ELSS Funds ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      ELSS Funds have a mandatory lock-in period of 3 years.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> Can the money
                    invested in ELSS Funds be withdrawn before 3 years ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      No, ELSS Funds do not offer investors the option to
                      withdraw before the lock-in period, i.e. 3 years.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> What are the options
                    for investing in the Best ELSS funds ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>There are three types of ELSS mutual funds:</p>
                    <p>
                      <b>A. Growth Option- </b>In the growth option, the
                      investment grows simultaneously, and the investors do not
                      earn dividends; they earn gains after redemption.
                    </p>
                    <p>
                      <b>B. Dividend Option- </b>The investor is entitled to
                      receive timely dividends under this option.
                    </p>
                    <p>
                      <b>C. Dividend Reinvestment Option- </b>This option allows
                      the investor to invest the dividends received back into
                      the scheme.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> Can investment in
                    ELSS Funds be made through a monthly SIP ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Yes, investors can make investments in ELSS Funds through
                      a monthly SIP.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> What is the minimum
                    amount that can be invested in ELSS FUNDS ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Investors can make an investment in ELSS Funds with a
                      minimum amount of Rs.100 through an SIP.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> Factors investors
                    must consider before investing in ELSS Funds.
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      There are a lot of factors that need to be considered when
                      investing in ELSS Funds, including the investor's risk
                      profile, risk appetite, investment objective and so on.
                      Investors must talk to their Mutual Fund Distributor to
                      identify the best mutual fund schemes.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> What are ELSS Funds
                    ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Equity-linked savings scheme (ELSS) is a mutual fund
                      category that offers tax rebates to investors under
                      Section 80C of the Income Tax Act. ELSS mutual funds are
                      investor favourites due to their high return potential.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> How are ELSS Funds
                    different from regular Mutual Funds ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Unlike other mutual funds, ELSS Funds are tax-saving
                      mutual funds eligible for tax deduction under Section 80C
                      of the Income Tax Act. Also, ELSS Funds have a mandatory
                      three-year lock-in period.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> How much tax can be
                    saved by investing in ELSS Funds ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Investors can save up to Rs.46,800 (tax deduction of up to
                      Rs. 1,50,000 under Section 80C of the Income Tax Act)
                      yearly on taxes by investing in ELSS Funds.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> Are ELSS Mutual
                    Funds risky ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      ELSS funds are slightly volatile since most investments
                      made in ELSS Funds are equity-linked, making them prone to
                      market fluctuations. However, the volatility can be
                      managed through active monitoring and by allowing the
                      investment sufficient time in the market.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> How to invest in
                    ELSS Mutual Funds online ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      You can invest in ELSS Funds the same way you invest in
                      other Mutual Fund schemes, and the easiest way to do this
                      is through the
                      <a
                        href="/download-app"
                        target="_blank"
                        className="text-bold text-primary"
                      >
                        <u> PRODIGY Pro</u>
                      </a>
                      app. The app is designed to help investors invest, track,
                      and monitor all of their funds.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="11">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> Do ELSS funds give
                    good returns? What is the average volume of returns under
                    ELSS Funds ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      On average, ELSS Funds can offer returns between 10-15 per
                      cent when held for long term.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="12">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> Why are ELSS schemes
                    considered the best tax-saving investment option ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      ELSS plans are the best tax-saving investment option
                      because they enjoy a tax rebate of up to Rs. 1,50,000,
                      saving Rs.46,800 yearly on taxes. Apart from this, the
                      LTCG (Long term Capital Gains) made under ELSS Funds are
                      also exempt up to a limit of Rs. 1,00,000.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="13">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> ELSS vs NPS: Which
                    is better to save tax and grow your wealth ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      ELSS funds are considered a better investment option
                      because they offer better returns than NPS investments.
                      Also, they have a mandatory lock-in of just three years,
                      whereas NPS investments are frozen for liquidation until
                      the investor hits 60 years of age.
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
  );
}

export default Faqs;
