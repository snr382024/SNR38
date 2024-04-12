//Alyssa.tsx

import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";

import AlyssaBanner from "../../assets/bannerImages/Alyssa-Banner.png";
import "./alyssa.scss";

const AlyssaJones = () => {
  const banner = [{ src: AlyssaBanner, alt: "AlyssaBanner" }];

  return (
    <div>
      <ImageCarousel images={banner} />
    </div>
  );
};

export default AlyssaJones;
