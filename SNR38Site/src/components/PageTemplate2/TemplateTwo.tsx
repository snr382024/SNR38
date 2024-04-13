// TemaplteTwo.tsx

import React from "react";
import "./templatetwo.scss";

type TemplateTwoProps = {
  images: { src: string; alt: string }[];
  colors: string[];
  videoSrc: string;
};

const TemplateTwo: React.FC<TemplateTwoProps> = ({
  images,
  colors,
  videoSrc,
}) => {
  return (
    <div className="template-two-container">
      <div className="first-image-wrapper">
        <div className="column-type1">
          <div className="rectangle-style1">
            <img src={images[0].src} alt={images[0].alt} />
          </div>
        </div>
      </div>

      <div className="video-wrapper">
        <div className="column-type2">
          <div className="video-style">
            <video src={videoSrc} loop autoPlay muted playsInline />
          </div>
        </div>
      </div>

      <div className="second-image-wrapper">
        <div className="column-type3">
          <div className="rectangle-style2">
            <img src={images[1].src} alt={images[1].alt} />
          </div>
          <div className="color-style">
            <div className="color-row">
              <div
                className="color1"
                style={{ backgroundColor: colors[0] }}
              ></div>
              <div
                className="color2"
                style={{ backgroundColor: colors[1] }}
              ></div>
            </div>
            <div className="color-row">
              <div
                className="color3"
                style={{ backgroundColor: colors[2] }}
              ></div>
              <div
                className="color4"
                style={{ backgroundColor: colors[3] }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="thrid-image-wrapper">
        <div className="column-type4">
          <div className="top-column">
            <div className="square-style">
              <img src={images[2].src} alt={images[2].alt} />
            </div>
          </div>
          <div className="bottom-column">
            <div className="rectangle-style4">
              <img src={images[3].src} alt={images[3].alt} />
            </div>
            <div className="rectangle-style4">
              <img src={images[4].src} alt={images[4].alt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateTwo;
