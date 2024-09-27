import React, { useEffect } from "react";
import c from "../assets/logo/C.png";
import css from "../assets/logo/css.png";
import docker from "../assets/logo/docker.png";
import html from "../assets/logo/html.png";
import js from "../assets/logo/js.png";
import php from "../assets/logo/php.png";
import python from "../assets/logo/python.png";
import react from "../assets/logo/react.png";
import mongodb from "../assets/logo/mongodb.png";
import shell from "../assets/logo/shell.png";
import linux from "../assets/logo/linux.png";


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