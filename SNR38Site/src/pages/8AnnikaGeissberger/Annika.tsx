//Annika.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";


//Change this banner to Daisy when I acquire it
import AnnikaBanner from "../../assets/bannerImages/Annika-Banner.png";
import "./annika.scss";

const AnnikaGeissberger = () => {
  const banner = [{ src: AnnikaBanner, alt: "AnnikaBanner" }];

  return (
    <div>
      <ImageCarousel images={banner} />
    </div>
  );
};

export default AnnikaGeissberger;
