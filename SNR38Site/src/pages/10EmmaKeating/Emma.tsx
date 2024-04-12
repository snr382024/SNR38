//Emma.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import EmmaBanner from "../../assets/bannerImages/Emma-Banner.png";
import "./emma.scss";

const EmmaKeating = () => {
  const banner = [{ src: EmmaBanner, alt: "EmmaBanner" }];

  return (
    <div>
      <ImageCarousel images={banner} />
    </div>
  );
};

export default EmmaKeating;
