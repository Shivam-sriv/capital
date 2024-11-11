import React, { useEffect, Suspense } from "react";
import Loader from "../loader/loader";
import Youtube from "../home-components/youtube";
const  MetaData = React.lazy(() => import("../home-components/meta-data")); ;
const  HomeHeader =  React.lazy(() => import("../home-components/header"));
const  Advantages = React.lazy(() => import("../home-components/advantage"));
const  Investing  = React.lazy(() => import("../home-components/investing"));
const  MobileSection = React.lazy(() => import("../home-components/mobile-section"));
const  StickySection = React.lazy(() => import("../home-components/sticky-section"));
const  CircleProgram =React.lazy(() => import("../home-components/circle-program"));
const  Eaq = React.lazy(() => import("../home-components/Eaq"));
const  TalkToOurExperts  = React.lazy(() => import("../home-components/talk-to-our-experts"));


function Home() {
  // useEffect(() => {
  //   document.querySelector(".css-a6be9g").loop = false;
  // },[]);


  return (
    <Suspense fallback={<Loader/>}>
      <MetaData />
      {/* ====================  Slider  Section Start ================== */}
      <HomeHeader />
      {/* ==================== Slider Section End ================== */}

       {/* ====================  youtube channel  Section Start ================== */}

      <Youtube/>
      {/* ==================== youtube channel Section End ================== */}



      {/* ====================  Bfc Advantage Section  Start ================== */}
      <Advantages />
      {/* ====================  Bfc Advantage Section End ================== */}
      {/* ====================  investing-process Section Start ================== */}
      <Investing />
      {/* ====================  investing-process Section End ================== */}
      {/* ====================  Mobile App Section Start ================== */}
       <MobileSection/>
      {/* ====================  Mobile App Section End ================== */}
      {/* ====================  Sticky Section  Start ================== */}

      {/* ====================  Sticky Section End ================== */}
      <StickySection/>
      {/* ====================  Circle Program Section Start ================== */}
      <CircleProgram/>
      {/* ====================  Circle Program Section End ================== */}

      {/* ==================== Eaq Section Start ================== */}
        <Eaq/>
      {/* ====================  Eaq Section End ================== */}
      {/* ====================  Talk to Our Experts Section Start ================== */}
          <TalkToOurExperts/>
      {/* ==================== Talk to Our Experts Section End ================== */}

      
    </Suspense>
  );
}
export default Home;
