//Olivia.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate1 from "../../components/PageTemplate1/TemplateOne";


import OliviaShort1 from "./OliviaMedia/DSC01899.jpg";
import OliviaShort2 from "./OliviaMedia/DSC01965.jpg";
import OliviaShort3 from "./OliviaMedia/DSC02003.jpg";
import OliviaShort4 from "./OliviaMedia/DSC01934.jpg";

import OliviaLongFront1 from "./OliviaMedia/DSC018851.jpg";
import OliviaLongBack1 from "./OliviaMedia/ClareBackLegEdit.png";
import OliviaLongFront2 from "./OliviaMedia/DSC01960.jpg";
import OliviaLongBack2 from "./OliviaMedia/DSC01952.jpg";
import OliviaLongFront3 from "./OliviaMedia/DSC01999.jpg";
import OliviaLongBack3 from "./OliviaMedia/DSC01989.jpg";
import OliviaLongFront4 from "./OliviaMedia/LOOK 1 FRONT.png";
import OliviaLongBack4 from "./OliviaMedia/BACK .png";

import OliviaVideo from "./OliviaMedia/Caitlin_Lookbook2.mp4";


import OliviaBanner from "../../assets/bannerImages/Olivia-Banner.png";
import "./olivia.scss";

const  OliviaCavallero = () => {
  const banner = [{ src: OliviaBanner, alt: "OliviaBanner" }];
  const collectionName = "THE LEARNING CURVE";
  const designerName = "OLIVIA CAVALLERO";


  const imageList = [
    { src: OliviaShort1, alt: "Short1" },
    { src: OliviaShort2, alt: "Short2" },
    { src: OliviaShort3, alt: "Short3" },
    { src: OliviaShort4, alt: "Short4" },
    { src: OliviaLongFront1, alt: "LongFront1" },
    { src: OliviaLongBack1, alt: "LongBack1" },
    { src: OliviaLongFront2, alt: "LongFront2" },
    { src: OliviaLongBack2, alt: "LongBack2" },
    { src: OliviaLongFront3, alt: "LongFront3" },
    { src: OliviaLongBack3, alt: "LongBack3" },
    { src: OliviaLongFront4, alt: "LongFront4" },
    { src: OliviaLongBack4, alt: "LongBack4" },
  ];

  const videoSource = OliviaVideo;



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

export default OliviaCavallero;
