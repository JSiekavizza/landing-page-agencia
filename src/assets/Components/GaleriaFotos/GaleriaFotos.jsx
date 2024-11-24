import React from "react";
import ConoGaleria from "/image-gallery-cone.jpg";
import MilkGaleria from "/image-gallery-milkbottles.jpg";
import OrangeGaleria from "/image-gallery-orange.jpg";
import SugarcubesGaleria from "/image-gallery-sugarcubes.jpg";

const GaleriaFotos = () => {
  return (
    <div class="columns-2 gap-0">
      <img class="w-full object-cover aspect-video" src={ConoGaleria} />
      <img class="w-full object-cover aspect-video" src={MilkGaleria} />
      <img class="w-full object-cover aspect-video" src={OrangeGaleria} />
      <img class="w-full object-cover aspect-video" src={SugarcubesGaleria} />
    </div>
  );
};

export default GaleriaFotos;
