//Emma.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import EmmaBanner from "../../assets/bannerImages/Emma-Banner.png";
import "./emma.scss";

const EmmaKeating = () => {
  const images = [{ src: EmmaBanner, alt: "EmmaBanner" }];

  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default EmmaKeating;
