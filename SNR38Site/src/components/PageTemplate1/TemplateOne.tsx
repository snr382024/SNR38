import React from "react";
import "./templateone.scss";

import LongImage from "./media/LongImage.png";
import LongImage2 from "./media/LongImage2.png";
import LongImage3 from "./media/LongImage3.png";
import LongImage4 from "./media/LongImage4.png";

import ShortImage from "./media/ShortImage.png";

import Video1 from "./media/video1.mp4";

const TemplateOne: React.FC = () => {
  return (
    <div className="template-one-container">
      <div className="image-wrapper">
        <div className="image-column">
          <div className="square">
            <img src={ShortImage} alt="Square Image" />
          </div>
          <div className="rectangle">
            <img src={LongImage} alt="Rectangle Image" />
          </div>
        </div>
        <div className="image-column">
          <div className="rectangle">
            <img src={LongImage2} alt="Rectangle Image" />
          </div>
          <div className="square">
            <img src={ShortImage} alt="Square Image" />
          </div>
        </div>
        <div className="image-column">
          <div className="square">
            <img src={ShortImage} alt="Square Image" />
          </div>
          <div className="rectangle">
            <img src={LongImage3} alt="Rectangle Image" />
          </div>
        </div>
        <div className="image-column">
          <div className="rectangle">
            <img src={LongImage4} alt="Rectangle Image" />
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
