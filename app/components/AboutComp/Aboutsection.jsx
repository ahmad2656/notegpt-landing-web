import Image from "next/image";
import Container from "@mui/material/Container";
import robo from "@/src/assets/png/robo.png";
import BorderCard from "../BorderCard/BorderCard.jsx";
import "../../components/AboutComp/Aboutsection.scss";
export default function Aboutsection() {
  return (
    <>
      <section className="about-portion">
        <Container>
          <div className="heads-layout">
            <h2 className="infinite-text">
              One Platform Infinite
              <span id="possible-text">Possibilities.</span>
            </h2>
            <div className="border-card-layout">
              <BorderCard /> <Image src={robo} alt="" id="feature-robot-pic" />
            </div>
            <p className="notegpt-para">
              Stop juggling ten different subscriptions. NoteGPT gives you the
              most powerful AI models on earth, unified in one elegant
              interface.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
