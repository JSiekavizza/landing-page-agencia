import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import BannerPrincipal from "/image-header.jpg";

const Banner = () => {
  return (
    <div className="object-fill">
      <div
        className="flex items-center justify-center bg-center  "
        style={{
          backgroundImage: `url(${BannerPrincipal})`,
        }}
      >
        <div className="flex flex-col gap-32 items-center  h-[780px] ">
          <div className="">
            <h2
              className=" text-white font-titulo font-[900] tracking-[.25em]
         text-6xl lg:text-7xl text-center"
            >
              WE ARE CREATIVES
            </h2>
          </div>
          <div className="text-white text-7xl relative">
            <FaArrowDownLong />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
