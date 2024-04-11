//Aliah.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import AliahBanner from "../../assets/bannerImages/Aliah-Banner.png";
import "./aliah.scss";

const AliahChammoro = () => {
  const images = [{ src: AliahBanner, alt: "AliahBanner" }];

  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default AliahChammoro;
