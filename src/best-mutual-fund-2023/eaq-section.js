import Accordion from "react-bootstrap/Accordion";

function EaqSection() {
  return (
    <section className="fqa mutual-fund-faq">
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
                    <span className="faqs_greenDot"></span> What is the maturity
                    period in Mutual Funds ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Usually, mutual funds do not have a maturity period unless
                      one has invested in a closed-end scheme like FMPs.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> What is the minimum
                    amount that can be invested in Mutual Funds?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Investment in mutual funds can be made in two ways, i.e.
                      in a lump sum or through an SIP. However, the minimum
                      investment amount for both varies-
                    </p>
                    <p>
                      - The minimum investment amount via lump sum ranges
                      between Rs. 1,000 to Rs. 10,000, depending upon the
                      scheme.
                    </p>
                    <p>
                      - The minimum investment amount via an SIP is Rs. 100.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> How to track all
                    Mutual Fund investments at one platform?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Investors can track all their mutual fund investments on
                      the
                      <a
                        href="/download-app"
                        target="_blank"
                        className="text-bold text-primary"
                      >
                        
                        <u> PRODIGY Pro</u>
                      </a>
                      app. The app is designed to simplify mutual fund investing
                      and help investors track and manage their entire
                      portfolio. Investors can invest in mutual fund schemes on
                      the go with this app.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> How do you evaluate
                    Mutual Fund performance?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Investors can evaluate mutual fund performance by
                      analyzing various factors such as assessing previous
                      returns, comparing expense ratios, checking the fund
                      houses' compliance history, etc. For this, investors can
                      also seek help from an authorised mutual fund distributor.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> How do I withdraw
                    money from Mutual Funds?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      One can withdraw money from a mutual fund scheme by
                      submitting a request with their broker or distributor,
                      either online or physically. Also, the users of
                      <a
                        href="/download-app"
                        target="_blank"
                        className="text-bold text-primary"
                      >
                        
                        <u> PRODIGY Pro</u>
                      </a>
                      can submit redemption requests on the app in just a few
                      clicks.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> What are the types
                    of Mutual Funds available in India?
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="pb-2">
                      <p>
                        The mutual funds available in India are broadly
                        categorized based on structure, asset class, and
                        investment goals.
                      </p>
                      <p>
                        <b>Structure-based Categories</b>
                      </p>
                      <p>-Open-ended funds.</p>
                      <p>-Close-ended funds.</p>
                      <p>-Interval funds.</p>
                    </div>
                    <p>
                      <b>Asset Class-based Categories</b>
                    </p>
                    <p>-Equity funds.</p>
                    <p>-Debt funds.</p>
                    <p>-Hybrid funds.</p>
                    <p>-Solution-oriented funds.</p>
                    <p>
                      <b>Categorization based on investment goals</b>
                    </p>
                    <p>-Growth funds.</p>
                    <p>-Tax-saving funds (ELSS).</p>
                    <p>-Liquidity-based funds.</p>
                    <p>-Capital protection funds.</p>
                    <p>-Fixed-maturity funds.</p>
                    <p>-Pension funds.</p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> Are Mutual Funds
                    taxable?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <b>Equity Mutual Funds:</b>
                    </p>
                    <p>
                      Long-term gains (gains made after holding the investment
                      for at least 1 year) are tax-exempt up to Rs. 1 Lakh and
                      taxed at 10% for gains if the limit is breached.
                    </p>
                    <p>
                      Short-term gains (gains made within 1 year of holding the
                      investment) are taxed at 15%.
                    </p>
                    <p>
                      <b>Debt Mutual Funds:</b>
                    </p>
                    <p>
                      Gains made within 3 years of holding the investment
                      (Short-term gains) are taxed as per the investor's
                      applicable tax slab.
                    </p>
                    <p>
                      Gains made after 3 years of holding the investment
                      (Long-term gains) are taxed at 20% with indexation (a
                      computing method to accommodate inflation).
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> What is a lock-in
                    period?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      The lock-in period is the predetermined duration wherein
                      the amount invested in a mutual fund scheme is frozen. In
                      simple words, the investors cannot liquidate units from
                      the scheme they have invested in until the completion of
                      the lock-in period. At the moment, only tax-saving mutual
                      fund schemes come with a lock-in period (3 years).
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> What are the pros
                    and cons of Mutual Funds?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Mutual funds are a complicated asset class and have
                      several pros and cons. Listed below are some of them-
                    </p>
                    <p>
                      <b>Pros</b>
                    </p>
                    <p>- Professionally managed by asset managers.</p>
                    <p>
                      - Risk factor reduces due to automatic diversification.
                    </p>
                    <p>- Healthy Returns.</p>
                    <p>- Pocket-friendly Investment.</p>
                    <p>
                      <b>Cons</b>
                    </p>
                    <p>- Fluctuating returns.</p>
                    <p>- Less control on where money is invested.</p>
                    <p>- Regular evaluations may be required.</p>
                    <p>
                      - Involves costs like fund manager's fees, exit load on
                      early withdrawals, etc.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> Why invest in Mutual
                    Funds?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Investing in mutual funds helps in building wealth,
                      achieving a distant goal, retirement planning, or saving
                      tax. Mutual funds are a flexible asset class that has
                      multiple benefits.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> What is Net Asset
                    Value (NAV) in Mutual Funds?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      NAV is a fund's inherent per-unit value, AKA the unit
                      price of a mutual fund scheme. It is calculated by
                      dividing the fund's total asset value with its number of
                      units.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="11">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> Are Mutual Funds
                    safe or risky investments?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Mutual funds are considered relatively volatile because of
                      their vulnerability to market fluctuations. However, the
                      risk factor can easily be balanced out over the long term
                      through active supervision and professional management
                      making mutual funds a safe investment.
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

export default EaqSection;
