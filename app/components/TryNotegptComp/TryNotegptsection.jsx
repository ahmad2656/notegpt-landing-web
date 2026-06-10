import Image from "next/image";
import notegptmain from "../../assets/image/gptroboo.jpeg";
import notegptlogo from "../../assets/png/notegpt logo.png";
import Container from "@mui/material/Container";
import "../TryNotegptComp/TryNotegpt.scss";
import RotatingText from "../../RotatingText/RotatingText";
import { FaLink } from "react-icons/fa";
import Link from "next/link";
export default function TryNotegptsection() {
  return (
    <>
      <section className="try-notegpt-section">
        <Container>
          <div className="notegpt-link-section">
            <RotatingText
              texts={["Let's Explore", "More", "Notegpt", "Features"]}
              mainClassName="rotating-text-badge"
              staggerFrom="last"
              staggerDuration={0.03}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={4000}
            />
           
            <Image src={notegptmain} alt="Logo" id="trynotegptmain" />
             <div className="logo-link-section">
              <Image src={notegptlogo} alt="Logo" id="trynotegptlogo" />
              <Link
                href="https://www.notegpt.io"
                target="_blank"
                rel="noopener noreferrer"
                id="note-link"
              >
                <span>
                  <FaLink id="link-icon" />
                </span>
                Try Notegpt
              </Link>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
