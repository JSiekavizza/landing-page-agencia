import React from "react";
import Testimonio1 from "/image-emily.jpg";
import Testimonio2 from "/image-thomas.jpg";
import Testimonio3 from "/image-jennie.jpg";

const Testimonios = () => {
  return (
    <section class="text-gray-600 mt-16 lg:py-16">
      <h2 className="font-titulo font-[900] text-3xl text-gray text-center ">
        Testimonios de nuestros clientes
      </h2>
      <div class="container px-5 py-12 mx-auto lg:my-12">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 lg:mb-0 mb-6 ">
            <div class="h-full text-center">
              <img
                className="object-cover object-center rounded-full inline-block border-2 broder-gray"
                src={Testimonio1}
                alt="testimonio-emily"
              ></img>
              <p class="font-display font-bold text-gray leading-relaxed tracking-widest px-5 py-12">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 class="text-black font-titulo font-bold tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p class="text-gray font-semibold">Senior Product Designer</p>
            </div>
          </div>

          <div class="lg:w-1/3 lg:mb-0 mb-6 ">
            <div class="h-full text-center">
              <img
                className="object-cover object-center rounded-full inline-block border-2 broder-gray"
                src={Testimonio2}
                alt="testimonio-emily"
              ></img>
              <p class="font-display font-bold text-gray leading-relaxed tracking-widest px-5 py-12">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 class="text-black font-titulo font-bold tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p class="text-gray font-semibold">Senior Product Designer</p>
            </div>
          </div>

          <div class="lg:w-1/3 lg:mb-0 mb-6 ">
            <div class="h-full text-center">
              <img
                className="object-cover object-center rounded-full inline-block border-2 broder-gray"
                src={Testimonio3}
                alt="testimonio-emily"
              ></img>
              <p class="font-display font-bold text-gray leading-relaxed tracking-widest px-5 py-12">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 class="text-black font-titulo font-bold tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p class="text-gray font-semibold">Senior Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
