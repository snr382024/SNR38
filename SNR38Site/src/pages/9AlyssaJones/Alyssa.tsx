//Alyssa.tsx

import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";

import AlyssaBanner from "../../assets/bannerImages/Alyssa-Banner.png";
import "./alyssa.scss";

const AlyssaJones = () => {
  const images = [{ src: AlyssaBanner, alt: "AlyssaBanner" }];

  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default AlyssaJones;
