//Deanna.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import DeannaBanner from "../../assets/bannerImages/Deanna-Banner.png";
import "./deanna.scss";

const DeannaMcnally = () => {
  const banner = [{ src: DeannaBanner, alt: "DeannaBanner" }];

  return (
    <div>
      <ImageCarousel images={banner} />
    </div>
  );
};

export default DeannaMcnally;
