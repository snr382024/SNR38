//Sierra.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import SierraBanner from "../../assets/bannerImages/Sierra-Banner.png";
import "./sierra.scss";

const SierraWeissner = () => {
  const images = [{ src: SierraBanner, alt: "SierraBanner" }];

  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default SierraWeissner;
