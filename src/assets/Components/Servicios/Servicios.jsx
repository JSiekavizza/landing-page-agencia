import React from "react";
import ImgTransformaM from "/image-transform.jpg";
import ImgStandOut from "/image-stand-out.jpg";
import ImgGraphicDesign from "/image-graphic-design.jpg";
import ImgPhotography from "/image-photography.jpg";

const Servicios = () => {
  return (
    <>
      <div className=" flex flex-col items-center lg:flex-row-reverse">
        <div className="bg-white  w-full">
          <img className="lg:w-full" src={ImgTransformaM}></img>
        </div>
        <div className="w-full">
          <div className="p-16">
            <h2 className="text-black font-titulo font-[900] text-6xl mb-5">
              Transforma tu marca
            </h2>
            <p className="font-display text-2xl text-gray leading-loose mb-5">
              Somos una agencia creativa de servicio completo que se especializa
              en ayudar a las marcas a crecer rápidamente. Involucre a sus
              clientes a través de imágenes atractivas que hacen la mayor parte
              del marketing por usted.
            </p>
            <button className="border border-y-8 border-b-subrayado border-x-0 border-t-0 p-3">
              Aprender más
            </button>
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center lg:flex-row">
        <div className="bg-white  w-full">
          <img className="lg:w-full" src={ImgStandOut}></img>
        </div>
        <div className="w-full">
          <div className="p-16">
            <h2 className="text-black font-titulo font-[900] text-6xl mb-5">
              Transforma tu marca
            </h2>
            <p className="font-display text-2xl text-gray leading-loose mb-5">
              Somos una agencia creativa de servicio completo que se especializa
              en ayudar a las marcas a crecer rápidamente. Involucre a sus
              clientes a través de imágenes atractivas que hacen la mayor parte
              del marketing por usted.
            </p>
            <button className="border border-y-8 border-b-subrayado border-x-0 border-t-0 p-3">
              Aprender más
            </button>
          </div>
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row">
        <div className="bg-white w-full">
          <div
            className="flex items-end justify-center bg-cover h-[520px]"
            style={{
              backgroundImage: `url(${ImgGraphicDesign})`,
            }}
          >
            <div className="flex flex-wrap items-center justify-center gap-5 p-10 ">
              <h2 className="font-titulo text-3xl text-green">
                Diseño Grafico
              </h2>
              <p className="font-display text-xl text-green text-center">
                Un gran diseño te hace memorable. Entregamos obras de arte que
                subrayan el mensaje de su marca y captan la atención de los
                clientes potenciales.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white w-full">
          <div
            className="flex items-end justify-center bg-cover h-[520px]"
            style={{
              backgroundImage: `url(${ImgPhotography})`,
            }}
          >
            <div className="flex flex-wrap items-center justify-center gap-5 p-10 ">
              <h2 className="font-titulo text-3xl text-blueTexto">
                Diseño Grafico
              </h2>
              <p className="font-display text-xl text-blueTexto text-center">
                Un gran diseño te hace memorable. Entregamos obras de arte que
                subrayan el mensaje de su marca y captan la atención de los
                clientes potenciales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicios;
