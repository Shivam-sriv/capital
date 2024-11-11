import Accordion from "react-bootstrap/Accordion";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Eaq() {
  return (
    <section className="fqa pt-30 pb-30 home-faq">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center pb-lg-4">
            <h4 className="fqa-top-text mb-4 pt-3">
              Frequently Asked Questions
            </h4>
            {/* <p className="mb-5">We have conducted 200+ presentations on Financial Planning. Check out some prominent ones here</p> */}
          </div>
        </div>
        <AnimationOnScroll animateIn="animate__zoomIn">
          <Accordion>
            <div className="row">
              <div className="col-md-7">
                <Accordion.Item eventKey="0" className="#">
                  <Accordion.Header>
                    Why should I associate with BFC and not with a Leading Bank
                    or Mutual Fund Distributor ?{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    Promoting Mutual Funds or any other third-party financial
                    product is an extended task for banks. They usually leverage
                    the investor confidence they enjoy and make extra revenue by
                    selling such products. BFC Capital works on the philosophy
                    of providing customised financial solutions instead of
                    selling a financial product for want of revenue. On the
                    basis of this, we, over the last 20-odd years, have built a
                    twelve thousand-strong retail client base. We try to provide
                    our clients with insights to protect them from any probable
                    financial harm and give them the support necessary to make
                    informed investment decisions. We understand that money
                    matters are sensitive and give our investors the personal
                    care they deserve, from periodic portfolio reviews to
                    financial solutions tailored to match investor obligations.
                    This is why today, we are one of the leading wealth
                    management companies in the region.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    BFC does not have an office in my city. How will things
                    function smoothly ?{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    The recent pandemic era has ushered a new world which is
                    more comfortable doing things from home. Investments are no
                    exception to this. BFC Capital believes in moving with the
                    times, and thanks to this belief, we are presently servicing
                    clients in more than 25 cities across India and abroad
                    through{" "}
                    <a
                      href="/download-app"
                      target="_blank"
                      className="text-bold text-primary"
                    >
                      <u> PRODIGY Pro</u>
                    </a>
                    , a versatile digital platform designed for facilitating
                    investments over the internet. The app has multifaceted
                    encryption to secure all investor transactions and data.
                    Also, we have at our disposal a team of competent
                    technicians, coders and programmers to ensure a hassle-free
                    experience for our investors. Besides this,{" "}
                    <a
                      href="/download-app"
                      target="_blank"
                      className="text-bold text-primary"
                    >
                      <u> PRODIGY Pro</u>
                    </a>
                    comprises features and services aimed at investor ease, such
                    as one-click redemption and real-time monitoring of
                    transactions and portfolios. In addition to this, there is a
                    support team available at a call/e-mail’s distance.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    If I invest with BFC, does my money go to them or some other
                    company ?
                  </Accordion.Header>
                  <Accordion.Body>
                    BFC Capital is an intermediary facilitating
                    investment-related transactions. Although we help monitor
                    and manage our clients' investments, we do not have access
                    to the money they invest. The industry structure does not
                    leave any scope for mismanagement of funds, meaning the
                    money invested from an investor's bank account is
                    automatically credited in the respective fund/scheme's
                    account and vice-versa, with no scope for third-party
                    intrusion.
                  </Accordion.Body>
                </Accordion.Item>
              </div>
              <div className="col-md-5">
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Who all can invest with BFC ?
                  </Accordion.Header>
                  <Accordion.Body>
                    BFC Capital offers client-centric services and insights to
                    each of its clients, from a housewife looking to invest the
                    savings she pockets to a young professional planning his
                    first car. Long story short, we have something for people
                    from all walks of life. The only things you need to start
                    investing are a valid ID (Aadhaar & PAN) and a functional
                    bank account.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    How would my service requests and issues get resolved ?{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    Clients at BFC Capital are assigned qualified relationship
                    managers to provide all kind of support. For investor ease,
                    we have designed a twin-layer response funnel, wherein the
                    investors can reach out to their RMs through WhatsApp or
                    over call to resolve their issues. Additionally, they can
                    report the issue by shooting a mail to
                    customersupport@bfccapital.com. Usually, there is a response
                    time of 24 working hours.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    How can I check my Portfolio ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Investors can check the real-time status of their entire
                    household's accounts by accessing the "Portfolio" option on{" "}
                    <a
                      href="/download-app"
                      target="_blank"
                      className="text-bold text-primary"
                    >
                      <u> PRODIGY Pro</u>
                    </a>
                    . Additionally, they can contact their relationship manager
                    over call or via WhatsApp and demand a detailed account
                    statement.
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            </div>
          </Accordion>
        </AnimationOnScroll>
      </div>
    </section>
  );
}

export default Eaq;
