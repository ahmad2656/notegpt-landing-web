"use client";
import LineWaves from "../../LineWaves/LineWaves";
import "../../page.scss";

export default function Headsection() {
  return (
    <section className="home-sec">
      <div className="line-waves-wrapper">
        <LineWaves
          speed={0.3}
          innerLineCount={32}
          outerLineCount={36}
          warpIntensity={1}
          rotation={-45}
          edgeFadeWidth={0}
          colorCycleSpeed={1}
          brightness={0.2}
          color1="#5a15f9"
          color2="#5d23fb"
          color3="#411f6b"
          enableMouseInteraction
          mouseInfluence={2}
        />
      </div>
      <div className="home-content">
        <h2 className="heading-texts">The All-In-One AI</h2>
        <video
          className="notegpt-video"
          controls={false}
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/video/animatedai.mp4" type="video/mp4" />
        </video>
        <h2 className="heading-texts">Productivity Suite</h2>
      </div>
    </section>
  );
}
