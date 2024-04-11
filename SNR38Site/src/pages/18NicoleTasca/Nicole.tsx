//Nicole.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import NicoleBanner from "../../assets/bannerImages/Nicole-Banner.png";
import "./nicole.scss";

const NicoleTasca = () => {
  const images = [{ src: NicoleBanner, alt: "NicoleBanner" }];

  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default NicoleTasca;
