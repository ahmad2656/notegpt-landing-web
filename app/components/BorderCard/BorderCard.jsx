import "../../components/BorderCard/BorderGlow.scss";
import { FaStar } from "react-icons/fa";
export default function BorderCard() {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-operation-card">
          <div className="card-content">
            <div className="card-animated-layout">
              <span>
                <FaStar className="two-circle-icons" />
              </span>
              <hr className="two-hr-line" />
              <h3 className="card-title">NoteGpt</h3>
              <hr className="two-hr-line" />
              <span>
                <FaStar className="two-circle-icons" />
              </span>
            </div>
            <p className="about-description">
              NoteGpt is a powerful AI tool design to summarize long content
              into the concise structured notes. It captures core ideas key
              details vocabulary and implicit questions from paragraphs articles
              or videos. Students and use it to save time and improve
              information retention. By transforming complex text into easy to
              review formats NoteGPT enhances learning and productivity
              efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
