"use client";
import Image from "next/image";
import Link from "next/link";
import notegptlogo from "@/src/assets/png/notegpt logo.png";
import "./Navbar.scss";
import { useState, useEffect } from "react";
import {
  MdOutlineRoundaboutRight,
  MdOutlineFeaturedPlayList,
} from "react-icons/md";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi";
import { BsPatchQuestionFill } from "react-icons/bs";
import { MdOutlineTry } from "react-icons/md";
import { FaRobot } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();

    if (isOpen) {
      // Mobile: pehle menu close karo, phir scroll karo
      closeMenu();
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 70;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 300);
    } else {
      // Desktop: direct scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  const chatboot = () => {
    closeMenu();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        document.body.style.overflow = "";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <>
      <header className="header-layout">
        <div className="notelogo-layout">
          <Image src={notegptlogo} alt="Logo" id="notegptlogo" />
          <h2>Note Gpt</h2>
        </div>
        <div
          id="nav-icon1"
          className={isOpen ? "open" : ""}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <div
        className={`menu-overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      <nav className="navbar">
        <ul className={`unorder-list ${isOpen ? "open" : ""}`}>
          <div className="responsive-layout-notegpt-logo">
            <Image src={notegptlogo} alt="Logo" id="responsive-notegptlogo" />
            <h2>Note Gpt</h2>
          </div>
          <li className="nav-list">
            <Link
              className="nav-links"
              href="#home"
              onClick={(e) => handleNavigation(e, "home")}
            >
              <span>
                <HiOutlineHome className="nav-link-icons" />
              </span>
              Home
            </Link>
          </li>
          <li className="nav-list">
            <Link
              className="nav-links"
              href="#about"
              onClick={(e) => handleNavigation(e, "about")}
            >
              <span>
                <MdOutlineRoundaboutRight className="nav-link-icons" />
              </span>
              About
            </Link>
          </li>
          <li className="nav-list">
            <Link
              className="nav-links"
              href="#features"
              onClick={(e) => handleNavigation(e, "features")}
            >
              <span>
                <MdOutlineFeaturedPlayList className="nav-link-icons" />
              </span>
              Features
            </Link>
          </li>
          <li className="nav-list">
            <Link
              className="nav-links"
              href="#working"
              onClick={(e) => handleNavigation(e, "working")}
            >
              <span>
                <IoCodeWorkingSharp className="nav-link-icons" />
              </span>
              Working
            </Link>
          </li>
          <li className="nav-list">
            <Link
              className="nav-links"
              href="#faqs"
              onClick={(e) => handleNavigation(e, "faqs")}
            >
              <span>
                <BsPatchQuestionFill className="nav-link-icons" />
              </span>
              Faqs
            </Link>
          </li>
          <li className="nav-list">
            <Link
              className="nav-links"
              href="#try"
              onClick={(e) => handleNavigation(e, "try")}
            >
              <span>
                <MdOutlineTry className="nav-link-icons" />
              </span>
              Try Notegpt
            </Link>
          </li>
          <li className="nav-list">
            <Link onClick={chatboot} className="nav-links" href="/chatboots">
              <span>
                <FaRobot id="tbrobot" className="nav-link-icons" />
              </span>
              Chatboots
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
