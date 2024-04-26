// Shirell.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate1 from "../../components/PageTemplate1/TemplateOne";

import ShirellBanner from "../../assets/bannerImages/Shirell-Banner.jpeg";

import Short1 from "./media/ShortImage.png";
import Short2 from "./media/ShortImage.png";
import Short3 from "./media/ShortImage.png";
import Short4 from "./media/ShortImage.png";

import LongFront1 from "./media/LongImage.png";
import LongBack1 from "./media/LongImage2.png";
import LongFront2 from "./media/LongImage2.png";
import LongBack2 from "./media/LongImage3.png";
import LongFront3 from "./media/LongImage3.png";
import LongBack3 from "./media/LongImage4.png";
import LongFront4 from "./media/LongImage4.png";
import LongBack4 from "./media/LongImage.png";

import ShirellVideo from "./media/video1.mp4";


import "./shirell.scss";

const ShirellBattle = () => {
  const banner = [{ src: ShirellBanner, alt: "ShirellBanner" }];
  const collectionName = "ANCHORED TO MOVEMENT";
  const designerName = "SHIRELL BATTLE";

  const imageList = [
    { src: Short1, alt: "Short1" },
    { src: Short2, alt: "Short2" },
    { src: Short3, alt: "Short3" },
    { src: Short4, alt: "Short4" },
    { src: LongFront1, alt: "LongFront1" },
    { src: LongBack1, alt: "LongBack1" },
    { src: LongFront2, alt: "LongFront2" },
    { src: LongBack2, alt: "LongBack2" },
    { src: LongFront3, alt: "LongFront3" },
    { src: LongBack3, alt: "LongBack3" },
    { src: LongFront4, alt: "LongFront4" },
    { src: LongBack4, alt: "LongBack4" },
  ];

  const videoSource = ShirellVideo;

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate1 images={imageList} videoSrc={videoSource} />
    </div>
  );
};

export default ShirellBattle;
