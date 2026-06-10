"use client";
import "./StunningCard.scss";
import { FaDotCircle } from "react-icons/fa";
import Image from "next/image";
import chatbot from "../../../public/assets/png/chatbot.png";
import chatgpt from "../../../public/assets/png/chatgpt2.webp";
import deepseek from "../../../public/assets/png/deepseek2.webp";
import Lottie from "lottie-react";
import animatedvector from "../../assets/json/Artificial Intelligence.json";
export const Footerdtail = () => {
  return (
    <>
      <div className="stunning-card">
        <div className="notification">
          <div className="notiglow" />
          <div className="notiborderglow" />
          <h3 className="not-heads">
            <FaDotCircle className="list-icon" />
            AI Tools
          </h3>
          <li className="footer-detail">Smart Notes</li>
          <li className="footer-detail">Chat Assistant</li>
          <li className="footer-detail">Learn faster with AI</li>
          <li className="footer-detail">Summarize smarter</li>
        </div>
      </div>
    </>
  );
};

export const FooterCardPages = () => {
  return (
    <>
      <div className="stunning-card">
        <div className="notification">
          <div className="notiglow" />
          <div className="notiborderglow" />
          <h3 className="not-heads">
            <FaDotCircle className="list-icon" />
            Navigation
          </h3>
          <li className="footer-detail">Home</li>
          <li className="footer-detail">About</li>
          <li className="footer-detail">Features</li>
          <li className="footer-detail">Working</li>
          <li className="footer-detail">FAQs</li>
          <li className="footer-detail">Try Notegpt</li>
          <li className="footer-detail">Chatboots</li>
        </div>
      </div>
    </>
  );
};

export const Animatedvector = () => {
  return (
    <>
      <Lottie
        animationData={animatedvector}
        loop={true}
        className="ai-lottie-vector"
      />
    </>
  );
};

export const Chatboots = () => {
  return (
    <>
      <div className="chatbot-layout">
        <div>
          <Image
            src={chatgpt}
            alt=""
            onClick={() => window.open("https://chatgpt.com/")}
            className="chatbot-robot-logo"
          />
        </div>
        <div className="two-chatboots">
          <Image src={chatbot} alt="" id="mid-chatboot" />
        </div>

        <div className="two-chatboots">
          <Image
            src={deepseek}
            onClick={() => window.open("https://chat.deepseek.com/")}
            alt=""
            className="chatbot-robot-logo"
          />
        </div>
      </div>
    </>
  );
};

export default function StunningCard() {
  return (
    <>
      <div className="footer-chatboot-layout">
        <Footerdtail />
        <Chatboots />
      </div>
      <FooterCardPages />
      <Animatedvector />
    </>
  );
}
