import React from "react";
import Meta from "../best-sip-plans-to-invest/meta";
import Header from "../best-sip-plans-to-invest/header";
import RealityOrMyth from "../best-sip-plans-to-invest/reality-or-myth";
import HowMutualFundsWork from "../best-sip-plans-to-invest/how-mutual-funds-work";
import SelectBestSipPlans from "../best-sip-plans-to-invest/select-best-sip-plans";
import InvestInBestSipPlans from "../best-sip-plans-to-invest/invest-in-best-sip-plans";
import BenifitsOfInvestingFunds from "../best-sip-plans-to-invest/benifits-of-investing-funds";
import BestSipPlansToInvestIn2023 from "../best-sip-plans-to-invest/best-sip-plans-to-invest-in-2023";
import AvoidFunds from "../best-sip-plans-to-invest/avoid-funds";
import Eaq from "../best-sip-plans-to-invest/Eaq";
const SipPlans = () => {
  

  return (
    <>
  
      <Meta />
      <Header/>
      <RealityOrMyth/>
      <HowMutualFundsWork/>
      <SelectBestSipPlans/>
      <InvestInBestSipPlans />
       <BenifitsOfInvestingFunds/>
      <BestSipPlansToInvestIn2023/>
      <AvoidFunds/>
      
     
      {/* ==================== Eaq Section Start ================== */}
      <Eaq/>
      {/* ====================  Eaq Section End ================== */}
    </>
  );
};
export default SipPlans;
