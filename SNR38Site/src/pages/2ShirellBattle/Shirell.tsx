//Shirell.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import ShirellBanner from "../../assets/bannerImages/Shirell-Banner.jpeg";
import "./shirell.scss";

const ShirellBattle = () => {
  const images = [{ src: ShirellBanner, alt: "ShirellBanner" }];

  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default ShirellBattle;
