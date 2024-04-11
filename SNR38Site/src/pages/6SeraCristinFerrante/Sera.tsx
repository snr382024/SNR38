//Sera.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import SeraBanner from "../../assets/bannerImages/Sera-Banner.png";
import "./sera.scss";

const SeraCristinFerrante = () => {
  const images = [{ src: SeraBanner, alt: "SeraBanner" }];

  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default SeraCristinFerrante;
