//Deanna.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import DeannaBanner from "../../assets/bannerImages/Deanna-Banner.png";
import "./deanna.scss";

const DeannaMcnally = () => {
  const images = [{ src: DeannaBanner, alt: "DeannaBanner" }];

  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default DeannaMcnally;
