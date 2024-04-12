//Nicole.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import NicoleBanner from "../../assets/bannerImages/Nicole-Banner.png";
import "./nicole.scss";

const NicoleTasca = () => {
  const banner = [{ src: NicoleBanner, alt: "NicoleBanner" }];

  return (
    <div>
      <ImageCarousel images={banner} />
    </div>
  );
};

export default NicoleTasca;
