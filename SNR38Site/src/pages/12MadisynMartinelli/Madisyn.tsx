//Madisyn.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import MadisynBanner from "../../assets/bannerImages/Madisyn-Banner.png";
import "./madisyn.scss";

const MadisynMartinelli = () => {
  const images = [{ src: MadisynBanner, alt: "MadisynBanner" }];

  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default MadisynMartinelli;
