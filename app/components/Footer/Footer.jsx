"use client";
import StunningCard from "../StunningCard/StunningCard";
import { Container } from "@mui/material";
import notegptlogo from "../../assets/png/notegpt logo.png";
import Image from "next/image";
import "./Footer.scss";

export const FooterLastDescription = () => {
  return (
    <>
      <div className="footer-line"></div>
      <div className="flex-last-layout">
        <li className="last-descriptions">©2026 NoteGPT</li>
        <li className="last-descriptions">www.notegpt.ai</li>
        <li className="last-descriptions">AI learning all rights reserved</li>
      </div>
    </>
  );
};

export default function Footer() {
  return (
    <>
      <section className="footer-main">
        <Container>
          <div className="description-footer-layout">
            <div className="note-footer-layout">
              <Image src={notegptlogo} alt="Logo" id="notefooter-logo" />
              <h2 id="note-footer-text">Note Gpt</h2>
            </div>
            <p id="note-paragraph">
              NoteGPT is an AI-powered tool that helps users quickly summarize
              videos, PDFs, web pages, articles, and other content. It uses
              artificial intelligence to extract key points, generate notes, and
              create concise summaries. The platform is designed to improve
              learning, research, and productivity by saving time and making
              information easier to understand. It is popular among students,
              professionals, and content creators who need fast access to
              important insights.
            </p>
          </div>
          <div className="footer-flex-layout">
            <StunningCard />
          </div>
          <FooterLastDescription />
        </Container>
      </section>
    </>
  );
}
