"use client";
import "./StylishCard.scss";
import Image from "next/image";
import Toolbtn from "../components/Toolbtn/Toolbtn";
import { FaStar } from "react-icons/fa6";

const StylishCard = ({
  aitoolslogo,
  toolsname,
  toolsdescription,
  toolsfeatureone,
  toolsfeaturetwo,
  toolsfeaturethree,
  toollinks,
  navlinks,
  imagestyle = false,
  claudestyle = false,
  geministyle = false,
}) => {
  return (
    <div className="ai-card-wrapper">
      <div className="ai-card-container">
        <div className="ai-card">
          <div className="neural-grid"></div>

          <div className="particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>

          <div className="ai-card-content">
            <Image
              src={aitoolslogo}
              alt=""
              className={`${imagestyle ? "picstyles" : ""}${claudestyle ? "claudestyle" : ""} ${geministyle ? "geministyle" : ""}} `}
            />
            <h2 className="tool-head-name">{toolsname}</h2>
            <p className="tool-details">{toolsdescription}</p>

            <li className="features-chatboots">
              <span>
                <FaStar className="feature-star-icon" />
              </span>
              {toolsfeatureone}
            </li>
            <li className="features-chatboots">
              <span>
                <FaStar className="feature-star-icon" />
              </span>
              {toolsfeaturetwo}
            </li>
            <li className="features-chatboots">
              <span>
                <FaStar className="feature-star-icon" />
              </span>
              {toolsfeaturethree}
            </li>
            <Toolbtn
              className="tool-btn"
              linkbtn={toollinks}
              linkss={navlinks}
            ></Toolbtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylishCard;
