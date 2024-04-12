//Eva.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import EvaBanner from "../../assets/bannerImages/Eva-Banner.png";
import "./eva.scss";

const EvaReed = () => {
  const banner = [{ src: EvaBanner, alt: "EvaBanner" }];

  return (
    <div>
      <ImageCarousel images={banner} />
    </div>
  );
};

export default EvaReed;
