//Madisyn.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";

//Change this banner to Madisyn when I acquire it
import MadisynBanner from "../../assets/bannerImages/Madisyn-Banner.png";
import "./madisyn.scss";

const MadisynMartinelli = () => {
  const banner = [{ src: MadisynBanner, alt: "MadisynBanner" }];

  return (
    <div>
      <ImageCarousel images={banner} />
    </div>
  );
};

export default MadisynMartinelli;
