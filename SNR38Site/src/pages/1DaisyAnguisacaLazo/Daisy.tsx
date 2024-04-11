//Daisy.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import DaisyBanner from "../../assets/bannerImages/Daisy-Banner.png";
import "./daisy.scss";

const DaisyAnguisacaLazo = () => {
  const images = [{ src: DaisyBanner, alt: "DaisyBanner" }];

  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default DaisyAnguisacaLazo;
