//Daisy.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";

//Change this banner to Daisy when I acquire it
import DaisyBanner from "../../assets/bannerImages/Deanna-Banner.png";
import "./daisy.scss";

const DaisyAnguisacaLazo = () => {
  const banner = [{ src: DaisyBanner, alt: "DaisyBanner" }];

  return (
    <div>
      <ImageCarousel images={banner} />
    </div>
  );
};

export default DaisyAnguisacaLazo;
