import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-blue flex items-center justify-center lg:justify-between p-5 h-40">
      <div className="mx-3 flex items-center justify-center lg:justify-between">
        <h1 className="font-display font-extrabold text-white text-3xl">
          sunnyside
        </h1>

        {/* Icono de menú o cerrar dependiendo del estado */}
        <div
          className="text-white text-3xl lg:hidden cursor-pointer ml-5"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <MdClose className="transition duration-300 ease-in-out" />
          ) : (
            <MdMenu className="transition duration-300 ease-in-out" />
          )}
        </div>
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      <div
        className={`${
          isOpen ? "block" : "hidden "
        } lg:block transition-all duration-300 ease-in-out`}
      >
        <ul className=" flex lg:flex-row space-x-4 lg:space-y-0 lg:space-x-8 text-white text-lg">
          <li className="hover:text-gray-300 cursor-pointer">Inicio</li>
          <li className="hover:text-gray-300 cursor-pointer">Quienes somos</li>
          <li className="hover:text-gray-300 cursor-pointer">Servicios</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
