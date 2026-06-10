"use client";
import Loader from "../app/loading.jsx";
import { useScroll } from "../app/components/context/ScrollContext";
import Headsection from "../app/components/HomeComp/Headsection";
import Featuresection from "../app/components/FeaturesComp/Featuresection";
import Faqsection from "../app/components/FaqsComp/Faqsection";
import Aboutsection from "../app/components/AboutComp/Aboutsection";
import Workingsection from "../app/components/WorkingComp/Workingsection";
import TryNotegptsection from "../app/components/TryNotegptComp/TryNotegptsection";

export default function Home() {
  const { homeRef, faqRef, featuresRef, aboutRef, workingRef,tryRef } = useScroll();

  return (
    <Loader>
      <div ref={homeRef} id="home">
        <Headsection />
      </div>
      <div ref={aboutRef} id="about">
        <Aboutsection />
      </div>
      <div ref={featuresRef} id="features">
        <Featuresection />
      </div>
      <div ref={faqRef} id="faqs">
        <Faqsection />
      </div>
      <div ref={workingRef} id="working">
        <Workingsection />
      </div>
      <div ref={tryRef} id="try">
      <TryNotegptsection />
      </div>
    </Loader>
  );
}
