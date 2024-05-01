//Gavin.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";

//3 collection
import PageTemplate5 from "../../components/PageTemplate5/TemplateFive";


import Short1 from "./GavinMedia/";
import Short2 from "./GavinMedia/";
import Short3 from "./GavinMedia/";
import Short4 from "./GavinMedia/";

import LongFront1 from "./GavinMedia/";
import LongBack1 from "./GavinMedia/";
import LongFront2 from "./GavinMedia/";
import LongBack2 from "./GavinMedia/";
import LongFront3 from "./GavinMedia/";
import LongBack3 from "./GavinMedia/";
import LongFront4 from "./GavinMedia/";
import LongBack4 from "./GavinMedia/";

import GavinVideo from "./GavinMedia/Caitlin_Lookbook2.mp4";

import GavinBanner from "../../assets/bannerImages/Gavin-Banner.png";
import "./gavin.scss";

const GavinCooper = () => {
  const banner = [{ src: GavinBanner, alt: "GavinBanner" }];
  const collectionName = "THE SWORD, AN ANTLER, AND BLOODSTAINED GLASS";
  const designerName = "GAVIN COOPER";

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

  const videoSource = GavinVideo;

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate5 images={imageList} videoSrc={videoSource} />
    </div>
  );
};

export default GavinCooper;
