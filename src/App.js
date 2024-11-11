import React, { lazy, useEffect, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
// import '../node_modules/react-modal-video/scss/modal-video.scss';
import "./css/style.css";
import "./css/responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Routes, Route, useLocation } from "react-router-dom";
import BackTopBack from "./component/back-to-top";
import Loader from "./loader/loader";
import DPDP_Act from "./pages/dpdp-act";


const Header = lazy(() => import("./pages/header"));
const Footer = lazy(() => import("./pages/footer"));
const Home = lazy(() => import("./pages/home"));
const MutualFund = lazy(() => import("./pages/mutual-fund"));
const SipCalculator = lazy(() => import("./pages/sip-calculator"));
const LumpsumCalculator = lazy(() => import("./pages/lumpsum-calculator"));
const BestMutualFund = lazy(() =>
  import("./pages/best-mutual-funds-to-invest-in-2024")
);
const ElssMutualFund = lazy(() => import("./pages/best-elss-funds"));
const SipPlans = lazy(() => import("./pages/best-sip-plans-to-invest"));
const TaxSaving = lazy(() => import("./pages/tax-saving-mutual-fund"));
const LumpsumInvestment = lazy(() =>
  import("./pages/best-mutual-fund-for-lumpsum-investment")
);
const About = lazy(() => import("./pages/about"));
const RetirementCalculator = lazy(() =>
  import("./pages/retirement-planning-calculator")
);
const SWPCalculator = lazy(() =>
  import("./pages/swp-calculator")
);
const ChildEducationCalculator = lazy(() =>
  import("./pages/child-education-planning-calculator")
);
const ChildMarriageCalculator = lazy(() =>
  import("./pages/child-marriage-planning-calculator")
);
const HomeLoanCalculator = lazy(() =>
  import("./pages/home-loan-emi-calculator")
);
const ElssCalculator = lazy(() => import("./pages/elss-calculator"));
const FdCalculator = lazy(() => import("./pages/fd-calculator"));
const MutualFundCalculator = lazy(() =>
  import("./pages/mutual-fund-calculator")
);
const Contact = lazy(() => import("./pages/contact-us"));
const DownloadApp = lazy(() => import("./pages/download-app"));
const Careers = lazy(() => import("./pages/careers"));
const WealthManager = lazy(() => import("./pages/wealth-manager"));
const Bdm = lazy(() => import("./pages/bdm"));
const VirtualRelationshipManager = lazy(() =>
  import("./pages/virtual-relationship-manager")
);
const RelationshipManager = lazy(() => import("./pages/relationship-manager"));
const Request_a_Callback = lazy(() => import("./pages/request-a-callback"));
const Privacy_Policy = lazy(() => import("./pages/privacy-policy"));
const TermCondition = lazy(() => import("./pages/term-conditions"));
const Legal_Disclaimer = lazy(() => import("./pages/legal-disclaimer"));

// import NewFundOffers from "./pages/new-fund-offers"

// import {BasicTabs} from "./pages/scheme-performance";
// import SchemePerformanceSingle from "./pages/scheme-performance-single"

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const isDPDPActPage = location.pathname === "/dpdpact";
  return (
    <>
        {!isDPDPActPage && <Header />}
      <ToastContainer />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/mutual-funds" element={<MutualFund />}></Route>
          <Route path="/sip-calculator" element={<SipCalculator />}></Route>
          <Route path="/swp-calculator" element={<SWPCalculator />}></Route>
          <Route
            path="/lumpsum-calculator"
            element={<LumpsumCalculator />}
          ></Route>
          <Route
            path="/retirement-planning-calculator"
            element={<RetirementCalculator />}
          ></Route>
          <Route
            path="/child-education-planning-calculator"
            element={<ChildEducationCalculator />}
          ></Route>
          <Route
            path="/child-marriage-planning-calculator"
            element={<ChildMarriageCalculator />}
          ></Route>
          <Route
            path="/home-loan-emi-calculator"
            element={<HomeLoanCalculator />}
          ></Route>
          <Route path="/elss-calculator" element={<ElssCalculator />}></Route>
          <Route path="/fd-calculator" element={<FdCalculator />}></Route>
          <Route
            path="/mutual-fund-calculator"
            element={<MutualFundCalculator />}
          ></Route>
          <Route
            path="/best-mutual-funds-to-invest-in-2024"
            element={<BestMutualFund />}
          ></Route>
          <Route path="/best-elss-funds" element={<ElssMutualFund />}></Route>
          <Route
            path="/best-sip-plans-to-invest"
            element={<SipPlans />}
          ></Route>
          <Route path="/tax-saving-mutual-fund" element={<TaxSaving />}></Route>
          <Route
            path="/best-mutual-fund-for-lumpsum-investment"
            element={<LumpsumInvestment />}
          ></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
          <Route path="/download-app" element={<DownloadApp />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/wealth-manager" element={<WealthManager />}></Route>
          <Route path="/bdm" element={<Bdm />}></Route>
          <Route
            path="/relationship-manager"
            element={<RelationshipManager />}
          ></Route>
          <Route
            path="/virtual-relationship-manager"
            element={<VirtualRelationshipManager />}
          ></Route>
          <Route
            path="/request-a-callback"
            element={<Request_a_Callback />}
          ></Route>
          <Route path="/privacy-policy" element={<Privacy_Policy />}></Route>
          <Route path="/legal-disclaimer" element={<Legal_Disclaimer />}></Route>
          {/* <Route path="/new-fund-offers" element={<NewFundOffers />}></Route> */}

          {/* <Route path="/scheme-performance" element={<BasicTabs/>}></Route>
        <Route path="/scheme-performance-single" element={<SchemePerformanceSingle/>}></Route> */}

          {/* <Route path="/*" element={Home} /> */}
          <Route path="*" element={<Home />} />

          <Route element={<TermCondition />} path="/term-condition" />
       <Route element={<DPDP_Act/> }path="/dpdpact"/>
       {/* <DPDP_Act path="/dpdpact" /> */}
        </Routes>

        <section className="back-to-top">
          <BackTopBack />
        </section>
        {!isDPDPActPage && <Footer />}
      </Suspense>
    </>
  );
};

export default App;
