//Shannon.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import ShannonBanner from "../../assets/bannerImages/Shannon-Banner.png";
import "./shannon.scss";

const ShannonKonecke = () => {
  const banner = [{ src: ShannonBanner, alt: "ShannonBanner" }];

  return (
    <div>
      <ImageCarousel images={banner} />
    </div>
  );
};

export default ShannonKonecke;
