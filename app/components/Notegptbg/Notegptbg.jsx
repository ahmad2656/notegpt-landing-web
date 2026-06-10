import { Container } from "@mui/material";
import Image from "next/image";
import robofeature from "@/src/assets/image/latestgptss.jpeg";
import "../Notegptbg/Notegptbg.scss";
export default function Notegptbg() {
 return(
   <>
    <section className="nptegptbg-portion">
      <Container>
        <Image
          src={robofeature}
          alt=""
          id="feature-pic"
        />
      </Container>
    </section>
  </>
 )
}



