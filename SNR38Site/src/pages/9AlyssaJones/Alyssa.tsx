//Alyssa.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";

import AlyssaBanner from "../../assets/bannerImages/Alyssa-Banner.png";
import "./alyssa.scss";

const AlyssaJones = () => {
  const banner = [{ src: AlyssaBanner, alt: "AlyssaBanner" }];
  const collectionName = "THE TIES THAT BIND US";
  const designerName = "ALYSSA JONES";


  return (
    <ImageCarousel
    images={banner}
    collectionName={collectionName}
    designerName={designerName}
  />
  );
};

export default AlyssaJones;
