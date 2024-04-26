//Natalie.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import NatalieBanner from "../../assets/bannerImages/Natalie-Banner.png";
import "./natalie.scss";

const NatalieSweeney = () => {
  const banner = [{ src: NatalieBanner, alt: "NatalieBanner" }];

  return (
    <div>
      <ImageCarousel images={banner} />
    </div>
  );
};

export default NatalieSweeney;
