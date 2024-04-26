//Olivia.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import OliviaBanner from "../../assets/bannerImages/Olivia-Banner.png";
import "./olivia.scss";

const  OliviaCavallero = () => {
  const banner = [{ src: OliviaBanner, alt: "OliviaBanner" }];

  return (
    <div>
      <ImageCarousel images={banner} />
    </div>
  );
};

export default OliviaCavallero;
