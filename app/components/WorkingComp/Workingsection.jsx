import "../../components/WorkingComp/Workingsection.scss";
import Lottie from "lottie-react";
import inputai from "@/src/assets/json/AI loading.json";
import ai from "@/src/assets/json/ai.json";
import aimachine from "@/src/assets/json/brain process.json";

export default function Workingsection() {
  const cards = [
    {
      id: 1,
      lottie: inputai,
      counter: "1",
      title: "Input Paste your text & prompt",
    },
    {
      id: 2,
      lottie: aimachine,
      counter: "2",
      title: "Process AI scans & thinks",
    },
    {
      id: 3,
      lottie: ai,
      counter: "3",
      title: "Output Get notes or image",
    },
  ];

  return (
    <>
      <div className="working-heads">
        <h2 id="work-head-text">
          How it
          <span id="work-text">Works</span>
        </h2>
      </div>
      <div className="cards-container">
        {cards.map((card) => (
          <div key={card.id} className="card-wrapper">
            <div className="ai-operation-card">
              <div className="lottie-wrapper">
                <Lottie
                  animationData={card.lottie}
                  loop={true}
                  className="lottie-fields-vector"
                />
              </div>
              <div className="counter-bg">
                <h2 className="counts">{card.counter}</h2>
              </div>
              <h3 className="card-title">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
