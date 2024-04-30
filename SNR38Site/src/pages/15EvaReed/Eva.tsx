//Eva.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate2 from "../../components/PageTemplate2/TemplateTwo";

import EvaBanner from "../../assets/bannerImages/Eva-Banner.png";

import Short1 from "./EvaMedia/ShortImage.png";
import Short2 from "./EvaMedia/ShortImage.png";
import Short3 from "./EvaMedia/ShortImage.png";
import Short4 from "./EvaMedia/ShortImage.png";

import Long1 from "./EvaMedia/LongImage.png";
import Long2 from "./EvaMedia/LongImage.png";

import Medium1 from "./EvaMedia/MediumImage.jpg";
import Medium2 from "./EvaMedia/MediumImage.jpg";
import Medium3 from "./EvaMedia/MediumImage.jpg";


import EvaVideo from "./EvaMedia/video1.mp4";

import "./eva.scss";

const EvaReed = () => {
  const banner = [{ src: EvaBanner, alt: "EvaBanner" }];
  const collectionName = "COLLECTION NAME";
  const designerName = "EVA REED";

  const imageList = [
    { src: Short1, alt: "Short1" }, //0
    { src: Short2, alt: "Short2" }, //1
    { src: Short3, alt: "Short3" }, //2
    { src: Short4, alt: "Short4" }, //3
    { src: Long1, alt: "Long1" }, //4
    { src: Long2, alt: "Long2" }, //5
    { src: Medium1, alt: "Medium1" }, //6
    { src: Medium2, alt: "Medium2" }, //7
    { src: Medium3, alt: "Medium3" }, //8
  ];

  const videoSource = EvaVideo;

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate2 images={imageList} videoSrc={videoSource} />
    </div>
  );
};

export default EvaReed;
