import React from "react";
import "./templatethree.scss";

type TemplateThreeProps = {
  images: { src: string; alt: string }[];
  colors: string[];
  videoSrc: string;
};

const TemplateThree: React.FC<TemplateThreeProps> = ({
  images,
  colors,
  videoSrc,
}) => {
  return (
    <div className="template-three-container">
      <div className="column-first">
        <div className="image-cell">
          <img src={images[0].src} alt={images[0].alt} />
        </div>
      </div>
      <div className="column-video">
        <div className="video-container">
          <video src={videoSrc} loop autoPlay muted playsInline />
        </div>
      </div>
      <div className="column-third">
        <div className="image-cell">
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
      <div className="column-fourth">
        <div className="image-cell">
          <div className="square-image">
            <img src={images[2].src} alt={images[2].alt} />
          </div>
        </div>
        <div className="image-row">
          {images.slice(3, 5).map((image, index) => (
            <div key={index + 3} className="image-cell">
              <div className="rectangle-image">
                <img src={image.src} alt={image.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateThree;
