//Sierra.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate4 from "../../components/PageTemplate4/TemplateFour";

import SierraBanner from "../../assets/bannerImages/Sierra-Banner.png";

import Short1 from "./SierraMedia/ShortImage.png";
import Short2 from "./SierraMedia/ShortImage.png";
import Short3 from "./SierraMedia/ShortImage.png";
import Short4 from "./SierraMedia/ShortImage.png";

import LongFront1 from "./SierraMedia/LongImage.png";
import LongBack1 from "./SierraMedia/LongImage2.png";
import LongFront2 from "./SierraMedia/LongImage2.png";
import LongBack2 from "./SierraMedia/LongImage3.png";
import LongFront3 from "./SierraMedia/LongImage3.png";
import LongBack3 from "./SierraMedia/LongImage4.png";
import LongFront4 from "./SierraMedia/LongImage4.png";
import LongBack4 from "./SierraMedia/LongImage.png";

import SierraVideo from "./SierraMedia/video1.mp4";

import "./sierra.scss";

const SierraWeissner = () => {
  const banner = [{ src: SierraBanner, alt: "SierraBanner" }];
  const collectionName = "PERSEPHONE'S BLOOM";
  const designerName = "SIERRA WEISSNER";

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

  const videoSource = SierraVideo;

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate4 images={imageList} videoSrc={videoSource} />
    </div>
  );
};

export default SierraWeissner;
