//David.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import DavidBanner from "../../assets/bannerImages/David-Banner.png";
import "./david.scss";

const DavidRoot = () => {
  const images = [{ src: DavidBanner, alt: "DavidBanner" }];

  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default DavidRoot;
