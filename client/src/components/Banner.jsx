import React, { useEffect } from "react";
import c from "../assets/C.png";
import css from "../assets/css.png";
import docker from "../assets/docker.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import php from "../assets/php.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import mongodb from "../assets/mongodb.png";
import shell from "../assets/shell.png";
import linux from "../assets/linux.png";


const Banner = () => {
    useEffect(() => {
        const bannerLogo = document.querySelector(".logos-slide");
        if (bannerLogo) {
            const copy = bannerLogo.cloneNode(true);
            document.querySelector(".logos").appendChild(copy);
        }
    }, []);
    return (
        <div className="logos">
            <div className="logos-slide">
            <img src={c} alt="C logo" />
            <img src={css} alt="CSS logo" />
            <img src={docker} alt="Docker logo" />
            <img src={html} alt="HTML logo" />
            <img src={js} alt="JavaScript logo" />
            <img src={php} alt="PHP logo" />
            <img src={python} alt="Python logo" />
            <img src={react} alt="React logo" />
            <img src={mongodb} alt="mongodb logo" />
            <img src={shell} alt="shell logo" />
            <img src={linux} alt="CSS logo" />
            </div>
        </div>
    )
}

export default Banner;