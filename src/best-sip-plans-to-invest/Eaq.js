import Accordion from "react-bootstrap/Accordion";

function Eaq() {
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
                    <span className="faqs_greenDot"></span> What is the minimum
                    duration to invest in SIP ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Systematic Investment Plans (SIP) do not have any minimum
                      duration.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> SIP vs. Recurring
                    Deposits: Which is better ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Recurring Deposits are a good option for those who have a
                      short-term goal, are happy with limited returns and want
                      to avoid any volatility. These are not suitable for
                      long-term goals as returns remain limited. SIPs, on the
                      other hand, are suitable for short & long-term goals both
                      as mutual funds offer a whole universe of schemes suitable
                      for all kinds of tenures.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> Is KYC necessary to
                    invest in SIP Mutual funds ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Yes, KYC is necessary to invest in SIP mutual funds. All
                      investors must be KYC compliant to start investing in
                      mutual funds.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> How do you evaluate
                    mutual fund performance ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Investors can evaluate mutual fund performance by
                      analyzing previous returns, comparing expense ratios,
                      checking the fund houses' compliance history, etc. For
                      this, investors can also seek help from an authorised
                      Mutual Fund Distributor.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> Are SIPs taxable ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Long-term gains made through SIPs are taxable at 10 per
                      cent if the gains breach the Rs. 1,00,000 ceiling. Gains
                      made over the long-term, i.e. after one year, are
                      long-term capital gains. Such gains, if less than Rs.
                      1,00,000, are tax exempted. Also, short-term capital gains
                      made through SIPs are taxed at a flat 15 per cent,
                      irrespective of the investor's income tax slab.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> How much money is
                    needed to start an SIP investment ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      SIPs are one of the most convenient ways of investing in
                      mutual funds. Investors can start investing in an SIP with
                      a minimum monthly contribution of Rs.100.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> Are Mutual Funds
                    taxable ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Yes, mutual funds are taxable for both long as well as
                      short-term gains. However, gains made after a duration of
                      one year, termed as long-term gains, are exempt up to a
                      limit of Rs. 1 lakh and are taxed at a rate of 10 per cent
                      if the limit exceeds. Also, profits made before one year,
                      termed short-term gains, are taxable at a rate of 15
                      percent.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> Is SIP a good
                    investment option ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Yes, SIP is a good investment option, as it is ideal for
                      compounding wealth over time and is quite pocket-friendly.
                      It is considered one of the best investment options for
                      mid to long-term wealth creation.
                    </p>
                  </Accordion.Body>
                  <div className="faqs_btm_border"></div>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    <span className="faqs_greenDot"></span> What is Rupee Cost
                    Averaging ?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      One of the inherent features of SIPs is rupee cost
                      averaging. The feature helps individuals to invest a
                      predetermined amount of money at regular intervals
                      irrespective of the market volatility, allowing them to
                      purchase additional units in a dipping market, bringing
                      down the average per unit cost in the long run.
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

export default Eaq;
