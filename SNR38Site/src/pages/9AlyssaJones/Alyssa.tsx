//Alyssa.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate3 from "../../components/PageTemplate3/TemplateThree";

import AlyssaBanner from "../../assets/bannerImages/Alyssa-Banner.png";

import Square1 from "./media/Square1.png";

import Rectangle1 from "./media/Rectangle1.png";
import Rectangle2 from "./media/Rectangle2.png";
import Rectangle3 from "./media/Rectangle3.png";
import Rectangle4 from "./media/Rectangle4.png";

import AlyssaVideo from "./media/video1.mp4";

import "./alyssa.scss";

const AlyssaJones = () => {
  const banner = [{ src: AlyssaBanner, alt: "AlyssaBanner" }];
  const collectionName = "THE TIES THAT BIND US";
  const designerName = "ALYSSA JONES";

  const imageList = [
    { src: Rectangle1, alt: "Rectangle1" },
    { src: Rectangle2, alt: "Rectangle2" },
    { src: Square1, alt: "Square1" },
    { src: Rectangle4, alt: "Rectangle3" },
    { src: Rectangle4, alt: "Rectangle4" },
  ];

  const colorList = ["#EA9520", "#191D24", "#BBB2AF", "#DC263D"];

  const videoSource = AlyssaVideo;

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate3
        images={imageList}
        colors={colorList}
        videoSrc={videoSource}
      />
    </div>
  );
};

export default AlyssaJones;
