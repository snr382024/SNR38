//David.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate3 from "../../components/PageTemplate3/TemplateThree";

import DavidBanner from "../../assets/bannerImages/David-Banner.png";

// import Short1 from "./media/ShortImage.png";
// import Short2 from "./media/ShortImage.png";
import Short3 from "./media/ShortImage.png";
import Short4 from "./media/ShortImage.png";

import LongFront1 from "./media/LongImage.png";
// import LongBack1 from "./media/LongImage2.png";
import LongFront2 from "./media/LongImage2.png";
import LongBack2 from "./media/LongImage3.png";
import LongFront3 from "./media/LongImage3.png";
import LongBack3 from "./media/LongImage4.png";
import LongFront4 from "./media/LongImage4.png";
import LongBack4 from "./media/LongImage.png";

import DeannaTest1 from "./media2/test.png";
import DeannaTest2 from "./media2/Deanna petite look 1 detail shot.jpg";
import DeannaTest3 from "./media2/Deanna petite look 2 detail shot.jpg";





// import DavidVideo from "./media/video1.mp4";
import TestVideo from "./media2/Caitlin_Lookbook2.mp4";

import "./david.scss";

const DavidRoot = () => {
  const banner = [{ src: DavidBanner, alt: "DavidBanner" }];
  const collectionName = "DANDELION WINE";
  const designerName = "DAVID ROOT";

  const imageList = [
    { src: DeannaTest2, alt: "Short1" },
    { src: DeannaTest3, alt: "Short2" },
    { src: Short3, alt: "Short3" },
    { src: Short4, alt: "Short4" },
    { src: LongFront1, alt: "LongFront1" },
    { src: DeannaTest1, alt: "LongBack1" },
    { src: LongFront2, alt: "LongFront2" },
    { src: LongBack2, alt: "LongBack2" },
    { src: LongFront3, alt: "LongFront3" },
    { src: LongBack3, alt: "LongBack3" },
    { src: LongFront4, alt: "LongFront4" },
    { src: LongBack4, alt: "LongBack4" },
  ];

  const videoSource = TestVideo;

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate3 images={imageList} videoSrc={videoSource} />

    </div>
  );
};

export default DavidRoot;
