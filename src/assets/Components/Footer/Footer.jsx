import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-greenClaro grid justify-center">
      <div className="p-16">
        <h1 className="font-display font-extrabold text-green text-3xl text-center">
          sunnyside
        </h1>
        <div className="flex justify-around text-center w-80">
          <ul>
            <li>Quienes Somos</li>
          </ul>
          <ul>
            <li>Servicios</li>
          </ul>
          <ul>
            <li>Proyectos</li>
          </ul>
        </div>
        <div className="flex justify-between p-4 w-80">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
          <FaPinterest />
        </div>
      </div>
    </div>
  );
};

export default Footer;
