//Gavin.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import GavinBanner from "../../assets/bannerImages/Gavin-Banner.png";
import "./gavin.scss";

const GavinCooper = () => {
  const banner = [{ src: GavinBanner, alt: "GavinBanner" }];
  const collectionName = "THE SWORD, AN ANTLER, AND BLOODSTAINED GLASS";
  const designerName = "GAVIN COOPER";

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />
    </div>
  );
};

export default GavinCooper;
