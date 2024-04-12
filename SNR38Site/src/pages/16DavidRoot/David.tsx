//David.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import DavidBanner from "../../assets/bannerImages/David-Banner.png";
import "./david.scss";

const DavidRoot = () => {
  const banner = [{ src: DavidBanner, alt: "DavidBanner" }];

  return (
    <div>
      <ImageCarousel images={banner} />
    </div>
  );
};

export default DavidRoot;
