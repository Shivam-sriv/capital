import React from "react";
import Meta from "../best-mutual-fund-2023/meta-data";
import Header from "../best-mutual-fund-2023/header";
import RealityOrMyth from "../best-mutual-fund-2023/reality-or-myth";
import HowToSelectBestMutualFunds from "../best-mutual-fund-2023/how-to-select-best-mutual-funds";
import HowToInvestBestMutual from "../best-mutual-fund-2023/how-to-invest-in-the-best-mutual";
import BenifitsOfInvesting from "../best-mutual-fund-2023/benifits-of-investing";
import SystematicInvestment from "../best-mutual-fund-2023/systamatic-investment";
import LumbsumInvestment from "../best-mutual-fund-2023/lumbsum-investment";
import BestPerformingFund from "../best-mutual-fund-2023/best-performing-fund";
import LongTermFunds from "../best-mutual-fund-2023/long-term-funds";
import RiskInMutualFunds from "../best-mutual-fund-2023/risk-in-mutual-funds";
import EaqSection from "../best-mutual-fund-2023/eaq-section";
import AvoidBestMutualFunds from "../best-mutual-fund-2023/avoid-best-mutual-funds";
const BestMutualFund = () => {

  return (
    <>
      <Meta />

      <Header />

      <RealityOrMyth />

      <HowToSelectBestMutualFunds />

      <HowToInvestBestMutual />

      <BenifitsOfInvesting />

      <SystematicInvestment />

      <LumbsumInvestment />

      <BestPerformingFund />

      <LongTermFunds />

      <RiskInMutualFunds />
      <AvoidBestMutualFunds />

      {/* ==================== Eaq Section Start ================== */}

      <EaqSection />

      {/* ====================  Eaq Section End ================== */}
    </>
  );
};
export default BestMutualFund;
