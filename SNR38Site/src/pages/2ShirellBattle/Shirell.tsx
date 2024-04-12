// Shirell.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate1 from "../../components/PageTemplate1/TemplateOne";

import ShirellBanner from "../../assets/bannerImages/Shirell-Banner.jpeg";
import "./shirell.scss";

const ShirellBattle = () => {
  const images = [{ src: ShirellBanner, alt: "ShirellBanner" }];
  const collectionName = "ANCHORED TO MOVEMENT"; 
  const designerName = "SHIRELL BATTLE"; 

  return (
    <div>
      <ImageCarousel
        images={images}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate1 />
    </div>
  );
};

export default ShirellBattle;
