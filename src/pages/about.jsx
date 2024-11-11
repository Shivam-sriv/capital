import React from 'react'
import AboutPage from '../about-page/about-page-and-pillars';
import SalesAndMarketing from '../about-page/sales-and-marketing';
import CustomerSupport from '../about-page/customer-support';
import HrAndAccounts from '../about-page/hr-and-accounts';
import ResearchTeam from '../about-page/reasearch-team';
import DigitalMarketingTeam from '../about-page/digital-marketing-team';
import TechnicalSupport from '../about-page/technical-support';


const About = () => {

  return (
    <>
      <AboutPage />
      <SalesAndMarketing />
      <CustomerSupport />
      <HrAndAccounts />
      <ResearchTeam />
      <DigitalMarketingTeam />
      <TechnicalSupport />
    </>
  );
}
export default About;