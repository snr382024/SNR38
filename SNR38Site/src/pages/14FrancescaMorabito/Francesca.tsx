//Francesca.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import FrancescaBanner from "../../assets/bannerImages/Francesca-Banner.png";
import "./francesca.scss";

const FrancescaMorabito = () => {
  const banner = [{ src: FrancescaBanner, alt: "FrancescaBanner" }];

  return (
    <div>
      <ImageCarousel images={banner} />
    </div>
  );
};

export default FrancescaMorabito;
