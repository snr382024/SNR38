//Mo.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import MoBanner from "../../assets/bannerImages/Mo-Banner.png";
import "./mo.scss";

const MoWalsh = () => {
  const banner = [{ src: MoBanner, alt: "MoBanner" }];

  return (
    <div>
      <ImageCarousel images={banner} />
    </div>
  );
};

export default MoWalsh;
