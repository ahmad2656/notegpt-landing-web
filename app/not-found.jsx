"use client";
import Lottie from "lottie-react";
import Container from "@mui/material/Container";
import notfoundone from "../app/assets/json/Page Not Found Animation.json";
import notfoundtwo from "../app/assets/json/Not Found.json";
import "./notfound.scss";
export default function NotFound() {
  return (
    <>
      <section className="not-found-section">
        <Container>
          <div className="not-found-layout">
            <Lottie
              animationData={notfoundone}
              loop={true}
              className="not-found-animated-vector"
            />
            <Lottie
              animationData={notfoundtwo}
              loop={true}
              className="not-found-animated-vector"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
