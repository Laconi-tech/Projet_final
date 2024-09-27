import React from "react";
import logo from "../assets/logo/logo.png";
import mail from "../assets/logo/mail.png";

const AlwaysOnTop = () => {
    function OpenContactMe() {
        console.log("click OpenContactMe !! => ");
    }
    return (
        <div id="AlwaysOnTop">
            <div id="AlwaysOnTop_LogoContainer">
                <img src={logo} id="AlwaysOnTop_Logo" alt="logo"></img>
            </div>

            <div id="AlwaysOnTop_ButtonContainer">
                <button id="AlwaysOnTop_Button" type="button" onClick={OpenContactMe}><img src={mail} id="AlwaysOnTop_Mail" alt="logo_mail"></img></button>
            </div>
        </div>
    )
}

export default AlwaysOnTop;