"use client";
import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const workingRef = useRef(null);
  const faqRef = useRef(null);
  const tryRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      const element = ref.current;
      const navbarHeight = 70; // Navbar ki height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <ScrollContext.Provider
      value={{
        homeRef,
        aboutRef,
        featuresRef,
        workingRef,
        faqRef,
        tryRef,
        scrollToSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
}
