"use client";
import "../../components/FeaturesComp/Featuresection.scss";
import { FaImages } from "react-icons/fa";
import { LuSpeech } from "react-icons/lu";
import { TbBackground } from "react-icons/tb";
import { MdVideoLibrary } from "react-icons/md";
import { RiPresentationFill } from "react-icons/ri";
import { BsFillChatLeftTextFill, BsQuestionDiamondFill } from "react-icons/bs";
import { useRef, useEffect } from "react";
import { Container } from "@mui/material";
import Button from "../Btn/Button.jsx";
import Lottie from "lottie-react";
import aipicgenerate from "@/src/assets/json/pic.json";
import textspeech from "@/src/assets/json/Voice - Translate AI.json";
import presentation from "@/src/assets/json/Presentation.json";
import removebg from "@/src/assets/json/Remove Background animation.json";
import videogenerate from "@/src/assets/json/video production.json";
import summarizing from "@/src/assets/json/Notes animation.json";
import quiz from "@/src/assets/json/quiz animation.json";

const Featuresection = () => {
  const cardRefs = useRef([]);

  useEffect(() => {}, []);

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  const cards = [
    {
      id: 1,
      lotties: aipicgenerate,
      para: "Create breathtaking, high resolution AI generated artwork and photos from simple text descriptions.",
      picstyle: {
        height: "auto",
        width: "100%",
        maxWidth: "53rem",
        margin: "0 auto",
        position: "relative",
        right: "12rem",
      },
      icon: <FaImages className="iconrobo" />,
      fieldname: "Image Generator",
      links: "Generate Image",
      aitools: "https://notegpt.io/ai-image-editor",
    },
    {
      id: 2,
      lotties: textspeech,
      para: "Convert any text into ultra-realistic, natural-sounding audio in dozens of languages and voices instantly.",
      picstyle: {
        height: "auto",
        width: "100%",
        maxWidth: "33rem",
        margin: "0 auto",
        padding: "1rem 0",
        position: "relative",
        right: "12rem",
      },
      icon: <LuSpeech className="iconrobo" />,
      fieldname: "Text to Speech",
      links: "Generate Audio",
      aitools: "https://notegpt.io/text-to-speech",
    },
    {
      id: 3,
      lotties: presentation,
      para: "Convert your text into professional slides and smart notes with AI-powered summaries and bullet points.",
      picstyle: {
        height: "auto",
        width: "100%",
        maxWidth: "40rem",
        margin: "0 auto",
        position: "relative",
        right: "12rem",
      },
      icon: <RiPresentationFill className="iconrobo" />,
      fieldname: "Presentation Slides",
      links: "Generate Slides",
      aitools: "https://notegpt.io/ai-presentation-maker",
    },
    {
      id: 4,
      lotties: removebg,
      para: "Magically extract subjects from photos with pixel-perfect precision using our advanced AI segmentation.",
      picstyle: {
        height: "auto",
        width: "100%",
        maxWidth: "30rem",
        margin: "0 auto",
        position: "relative",
        right: "12rem",
      },
      icon: <TbBackground className="iconrobo" />,
      fieldname: "Remove Background",
      links: "Remove Pic Bg",
      aitools: "https://notegpt.io/ai-background-remover",
      position: "relative",
      right: "12rem",
    },
    {
      id: 5,
      lotties: videogenerate,
      para: "Turn your ideas into dynamic, captivating short videos complete with AI-generated scenes and transitions.",
      picstyle: {
        height: "auto",
        width: "100%",
        maxWidth: "40rem",
        margin: "0 auto",
        position: "relative",
        right: "12rem",
      },
      icon: <MdVideoLibrary className="iconrobo" />,
      fieldname: "Video Generator",
      links: "Generate Video",
      aitools: "https://notegpt.io/explainer-video-maker",
    },
    {
      id: 6,
      lotties: summarizing,
      para: "Instantly turn long content into clear concise summaries in seconds Save time and focus on what matters most learn faster study smarter.",
      picstyle: {
        height: "auto",
        width: "100%",
        maxWidth: "30rem",
        margin: "0 auto",
        position: "relative",
        right: "12rem",
      },
      icon: (
        <BsFillChatLeftTextFill className="iconrobo" id="suammarize-logo" />
      ),
      fieldname: "Text Summarizer",
      links: "Summarize Text",
      aitools: "https://notegpt.io/ai-text-summarizer",
    },
    {
      id: 7,
      lotties: quiz,
      para: "Generates custom quizzes from your notes or videos, helping you learn faster and study smarter by testing your knowledge automatically.",
      picstyle: {
        height: "auto",
        width: "100%",
        maxWidth: "45rem",
        margin: "0 auto",
        position: "relative",
        right: "12rem",
      },
      icon: <BsQuestionDiamondFill className="iconrobo" id="suammarize-logo" />,
      fieldname: "Quiz Generator",
      links: "Generate Quiz",
      aitools: "https://notegpt.io/ai-quiz-generator",
    },
  ];

  return (
    <>
      <section className="feature-card-portion">
        <Container>
          <div className="feature-card-layout">
            {cards.map((feature, index) => (
              <div key={feature.id}>
                <div
                  className={`lottie-layout ${index === 3 || index === 5 ? "lottietwo" : ""}`}
                >
                  <Lottie
                    animationData={feature.lotties}
                    loop={true}
                    className="lottie-animated-vector"
                    style={feature.picstyle}
                  />
                  <div>
                    <h2
                      className={`fieldnames ${index === 3 || index === 5 ? "twoheadings" : ""}`}
                    >
                      {feature.fieldname}
                    </h2>
                  </div>
                </div>
                <div className="card-text-layout">
                  <div
                    ref={(el) => (cardRefs.current[index] = el)}
                    className="card"
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    <span>{feature.icon}</span>
                    <p className="heading">{feature.para}</p>
                  </div>
                  <div>
                    <Button
                      ailinks={() => window.open(feature.aitools)}
                      link={feature.links}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Featuresection;
