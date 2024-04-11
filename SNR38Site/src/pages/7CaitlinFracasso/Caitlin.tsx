//Caitlin.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import CaitlinBanner from "../../assets/bannerImages/Caitlin-Banner.png";
import "./caitlin.scss";

const  CaitlinFracasso = () => {
  const images = [{ src: CaitlinBanner, alt: "CaitlinBanner" }];

  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default CaitlinFracasso;