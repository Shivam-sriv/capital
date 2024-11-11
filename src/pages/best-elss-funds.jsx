import React from "react";
import Meta from "../best-elss-funds/meta";
import Header from "../best-elss-funds/header";
import RealityOrMyth from "../best-elss-funds/reality-or-myth";
import SelectBestElssFund from "../best-elss-funds/select-best-elss-fund";
import InvestingInElssFund from "../best-elss-funds/investing-in-elss-fund";
import BenifitsOfElssMutualFunds from "../best-elss-funds/benifits-of-elss-mutual-funds";
import SavigSchema from "../best-elss-funds/saving-schema";
import BestMutualFundIn2023 from "../best-elss-funds/best-mutual-fund-in-2023";
import AvoidMutualFund from "../best-elss-funds/avoid-mutual-fund";
import Faqs from "../best-elss-funds/faqs";

const ElssMutualFund = () => {
  
  return (
    <>
      <Meta/>
      <Header/>
      <RealityOrMyth />
      <SelectBestElssFund/>
      <InvestingInElssFund />
      <BenifitsOfElssMutualFunds/>
      <SavigSchema/>
      <BestMutualFundIn2023/>
      <AvoidMutualFund/>

      {/* ==================== Eaq Section Start ================== */}
     <Faqs/>
      {/* ====================  Eaq Section End ================== */}
    </>
  );
};
export default ElssMutualFund;
