//TemplateOnce.tsx

import React, { useState } from "react";
import "./templateone.scss";

import LongImage from "./media/LongImage.png";
import LongImage2 from "./media/LongImage2.png";
import LongImage3 from "./media/LongImage3.png";
import LongImage4 from "./media/LongImage4.png";

import ShortImage from "./media/ShortImage.png";
import Video1 from "./media/video1.mp4";

const TemplateOne: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState([false, false, false, false]);

  const handleFlip = (index: number) => {
    const flippedStates = [...isFlipped];
    flippedStates[index] = !flippedStates[index];
    setIsFlipped(flippedStates);
  };

  return (
    <div className="template-one-container">
      <div className="image-wrapper">
        <div className="column-type1">
          <div className="square">
            <img src={ShortImage} alt="Square Image" />
          </div>
          <div className="rectangle" onClick={() => handleFlip(0)}>
            <div className={`flip-container ${isFlipped[0] ? "flipped" : ""}`}>
              <div className="flipper">
                <div className="front">
                  <img src={LongImage} alt="Front of the Dress" />
                </div>
                <div className="back">
                  <img src={LongImage2} alt="Back of the Dress" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column-type2">
          <div className="rectangle" onClick={() => handleFlip(1)}>
            <div className={`flip-container ${isFlipped[1] ? "flipped" : ""}`}>
              <div className="flipper">
                <div className="front">
                  <img src={LongImage2} alt="Front of the Dress" />
                </div>
                <div className="back">
                  <img src={LongImage3} alt="Back of the Dress" />
                </div>
              </div>
            </div>
          </div>
          <div className="square">
            <img src={ShortImage} alt="Square Image" />
          </div>
        </div>
        <div className="column-type1">
          <div className="square">
            <img src={ShortImage} alt="Square Image" />
          </div>
          <div className="rectangle" onClick={() => handleFlip(2)}>
            <div className={`flip-container ${isFlipped[2] ? "flipped" : ""}`}>
              <div className="flipper">
                <div className="front">
                  <img src={LongImage3} alt="Front of the Dress" />
                </div>
                <div className="back">
                  <img src={LongImage4} alt="Back of the Dress" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column-type2">
          <div className="rectangle" onClick={() => handleFlip(3)}>
            <div className={`flip-container ${isFlipped[3] ? "flipped" : ""}`}>
              <div className="flipper">
                <div className="front">
                  <img src={LongImage4} alt="Front of the Dress" />
                </div>
                <div className="back">
                  <img src={LongImage} alt="Back of the Dress" />
                </div>
              </div>
            </div>
          </div>
          <div className="square">
            <img src={ShortImage} alt="Square Image" />
          </div>
        </div>
      </div>
      <div className="video-container">
        <video src={Video1} loop autoPlay muted playsInline />
      </div>
    </div>
  );
};

export default TemplateOne;
