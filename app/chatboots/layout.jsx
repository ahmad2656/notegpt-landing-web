
"use client";
import Image from "next/image";
import { useEffect } from "react";
import robo from "../assets/png/geminir.png";
import textrobot from "../assets/png/chatbot.png";
import animatedrobo from "../assets/json/glassy ai.json";
import Lottie from "lottie-react";
import { PiSkipBackFill } from "react-icons/pi";
import Link from "next/link";
import { Container } from "@mui/material";
import "./layouts.scss";
import {
  Chatgpt,
  DeepSeek,
  Gemini,
  Claude,
} from "../../app/chatboots/ChatbootCards.jsx";

export const Headspic = () => {
  return (
    <>
      <div className="note-link-layout">
        <Link id="notegpt-link" href="/">
          <span>
            <PiSkipBackFill id="backup-arrow-notegpt" />
          </span>
          Notegpt
        </Link>
      </div>
      <section className="heads-bg-pic">
        <div className="chatboot-text-layout">
          <Image src={textrobot} alt="" id="chatbot-text-robot" />
          <h1 className="chatbot-text">C</h1>
          <h1 className="chatbot-text">H</h1>
          <h1 className="chatbot-text">A</h1>
          <h1 className="chatbot-text">T</h1>
          <h1 className="chatbot-text">B</h1>
          <h1 className="chatbot-text">O</h1>
          <h1 className="chatbot-text">O</h1>
          <h1 className="chatbot-text">T</h1>
          <h1 className="chatbot-text">S</h1>
        </div>
      </section>
    </>
  );
};

export default function ChatbootsLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Headspic />
      <section className="chatbot-cards-layout">
        <Container>
          <div className="chatbot-cards">
            <div className="div1">
              <Chatgpt />
            </div>
            <div className="div2">
              <Lottie
                animationData={animatedrobo}
                loop={true}
                className="ai-gemini-loader"
              />
              <Image src={robo} alt="" id="chatbot-robo" />
            </div>
            <div className="div3">
              <DeepSeek />
            </div>
            <div className="div4">
              <Gemini />
            </div>
            <div className="div5">
              <Claude />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
