import React, { useEffect, useState } from "react";
import Section1 from "../our-app/section1";
import Section2 from "../our-app/section2";

const DownloadApp = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    setScrollPosition(scrollPosition);
  };

  return (
    <>
      <Section1 />
      <Section2 scrollPosition={scrollPosition} />
    </>
  );
};
export default DownloadApp;
