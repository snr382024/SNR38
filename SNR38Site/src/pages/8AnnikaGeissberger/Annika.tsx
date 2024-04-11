//Annika.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import AnnikaBanner from "../../assets/bannerImages/Annika-Banner.png";
import "./annika.scss";

const AnnikaGeissberger = () => {
  const images = [{ src: AnnikaBanner, alt: "AnnikaBanner" }];

  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default AnnikaGeissberger;