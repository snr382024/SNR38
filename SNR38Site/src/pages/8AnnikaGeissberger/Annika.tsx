//Annika.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";


//Change this banner to Daisy when I acquire it
import AnnikaBanner from "../../assets/bannerImages/Deanna-Banner.png";
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
