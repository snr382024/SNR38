//Aliah.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate3 from "../../components/PageTemplate3/TemplateThree";

import Short1 from "./AliahMedia/Aliah - Look Red Puff - Detail.png";
import Short2 from "./AliahMedia/AliahLastLookDetail.png";
import Short3 from "./AliahMedia/AliahRedDressDetail.png";
import Short4 from "./AliahMedia/AliahRuffleTopDetail.png";

import LongFront1 from "./AliahMedia/Aliah - Look Red Puff - Front.png";
import LongBack1 from "./AliahMedia/Aliah - Look Red Puff - Side Pose.png";
import LongFront2 from "./AliahMedia/AliahLastLookFront.png";
import LongBack2 from "./AliahMedia/AliahLastLookBack.png";
import LongFront3 from "./AliahMedia/AliahRedDressFront.png";
import LongBack3 from "./AliahMedia/AliahRedDressBack.png";
import LongFront4 from "./AliahMedia/AliahRuffleTopFront.png";
import LongBack4 from "./AliahMedia/AliahRuffleTopBack.png";

import AliahVideo from "./AliahMedia/Caitlin_Lookbook2.mp4";


import AliahBanner from "../../assets/bannerImages/Aliah-Banner.png";
import "./aliah.scss";

const AliahChammoro = () => {
  const banner = [{ src: AliahBanner, alt: "AliahBanner" }];
  const collectionName = "LOVE IN ALL FORMS";
  const designerName = "ALIAH CHAMMORO";

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

  const videoSource = AliahVideo;

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

export default AliahChammoro;
