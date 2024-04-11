//Shannon.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import ShannonBanner from "../../assets/bannerImages/Shannon-Banner.png";
import "./shannon.scss";

const ShannonKonecke = () => {
  const images = [{ src: ShannonBanner, alt: "ShannonBanner" }];

  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default ShannonKonecke;
