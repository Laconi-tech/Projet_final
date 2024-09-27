import React from "react";

import ecommerceImg from "../assets/screen/Ecommerce.png";
import html5gImg from "../assets/screen/HTML5G.png";
import mdsImg from "../assets/screen/MDS.jpg";
import morpionImg from "../assets/screen/Morpion.png";
import skycrapperImg from "../assets/screen/skycrapper.png";
import survivaImg from "../assets/screen/Surviva.png";
import godotImg from "../assets/screen/godot.png";
import randoImg from "../assets/screen/rando.jpg";

const Projets = () => {
  return (
    <div id="Projets">
      <h1>Mes Projets : </h1>
      {/* <div id="Projets_Carroussel">
                <div id="Projet_eCommerce">
                    <img src={ecommerceImg} alt="E-commerce" className="Projet"/>
                    <p>E-commerce</p>
                </div>

                    <img src={html5gImg} alt="HTML5G" className="Projet"/>

                    <img src={mdsImg} alt="MDS" className="Projet"/>

                    <img src={morpionImg} alt="Morpion" className="Projet"/>

                    <img src={skycrapperImg} alt="Skycrapper" className="Projet"/>

                    <img src={survivaImg} alt="Surviva" className="Projet"/>
            </div> */}
      <div id="Projets_Carroussel">
        <div className="Projet_div">
          <img src={ecommerceImg} alt="E-commerce" className="Projet" />
          <a className="Projet_text" href="https://github.com/Laconi-tech/E-commerce" target="_blank">E-commerce</a>
        </div>

        <div className="Projet_div">
          <img src={randoImg} alt="HTML5G" className="Projet" />
          <a className="Projet_text" href="https://github.com/Laconi-tech/Surviva"target="_blank">Surviva</a>
        </div>

        <div className="Projet_div">
            <img src={mdsImg} alt="MDS" className="Projet" />
          <a className="Projet_text" href="https://github.com/Laconi-tech/My_drivingSchool"target="_blank">MDS</a>
        </div>

        <div className="Projet_div">
        <img src={morpionImg} alt="Morpion" className="Projet" />
          <a className="Projet_text" href="https://github.com/Laconi-tech/Morpion"target="_blank">Morpion</a>
        </div>

        <div className="Projet_div">
        <img src={skycrapperImg} alt="Skycrapper" className="Projet" />
          <a className="Projet_text" href="https://github.com/Laconi-tech/Skyscrapers-Solver"target="_blank">Skycrapper</a>
        </div>

        <div className="Projet_div">
        <img src={godotImg} alt="Godot" className="Projet" />
          <a className="Projet_text" href="https://github.com/Laconi-tech/GodotGame"target="_blank">Godot Game</a>
        </div>
      </div>
    </div>
  );
};

export default Projets;
