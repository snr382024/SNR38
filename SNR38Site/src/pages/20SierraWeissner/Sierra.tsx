//Sierra.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import SierraBanner from "../../assets/bannerImages/Sierra-Banner.png";
import "./sierra.scss";

const SierraWeissner = () => {
  const banner = [{ src: SierraBanner, alt: "SierraBanner" }];

  return (
    <div>
      <ImageCarousel images={banner} />
    </div>
  );
};

export default SierraWeissner;
