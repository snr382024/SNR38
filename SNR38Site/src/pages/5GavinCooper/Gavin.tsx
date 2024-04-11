//Gavin.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import GavinBanner from "../../assets/bannerImages/Gavin-Banner.png";
import "./gavin.scss";

const GavinCooper = () => {
  const images = [{ src: GavinBanner, alt: "GavinBanner" }];

  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default GavinCooper;
