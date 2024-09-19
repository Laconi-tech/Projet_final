import React from "react";
import triangleBg from "../assets/Triangle.mp4";

const Top = () => {
    function openDescription() {
        console.log("click openDescription !! => ");
    }
    return (
        <div id="Top">
            <video src={triangleBg} autoPlay loop muted id="videoBg" />
            <div id="Top_Content">
                <div id="Top_Text">
                    <button id="Top_Button" type="button" onClick={openDescription}><h1 id="Top_Title">Qui Je Suis ?</h1></button>
                    {/* <h1 id="Top_Title">En savoir plus ?</h1> */}
                </div>
            </div>
        </div>
    )
}

export default Top;