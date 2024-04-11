//Deanna.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import DeannaBanner1 from "../../assets/bannerImages/Deanna-Banner.png";
import "./deanna.scss";

const MainPage = () => {
  const images = [{ src: DeannaBanner1, alt: "DeannaBanner" }];

  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default MainPage;
