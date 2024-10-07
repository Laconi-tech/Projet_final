import React from "react";
import triangleBg from "../assets/Triangle.mp4";

const Top = () => {
    function openDescription() {
        console.log("click openDescription !! => ");
        const popup = document.createElement('div');
        popup.id = 'containerPopup';
        popup.innerHTML = `
          <div id="contentPopup" class="contentPopupDescription">
            <button id="closePopup">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.82004 0.312269C1.40368 -0.10409 0.728629 -0.10409 0.31227 0.312269C-0.10409 0.728629 -0.10409 1.40368 0.312269 1.82004L7.73223 9.24L0.312276 16.66C-0.104083 17.0763 -0.104083 17.7514 0.312276 18.1677C0.728635 18.5841 1.40369 18.5841 1.82005 18.1677L9.24 10.7478L16.5737 18.0815C16.9901 18.4979 17.6652 18.4979 18.0815 18.0815C18.4979 17.6652 18.4979 16.9901 18.0815 16.5737L10.7478 9.24L18.0815 1.90625C18.4979 1.48989 18.4979 0.814838 18.0815 0.398479C17.6652 -0.0178807 16.9901 -0.0178808 16.5737 0.398479L9.24 7.73223L1.82004 0.312269Z"
                  fill="#A2A2A2"
                />
              </svg>
            </button>

            <h1>QUI JE SUIS ?</h1>

            <p id="Top_PopupText">Je suis Nicolas, développeur web full-stack. Passionné par le design réactif et les interfaces utilisateur fluides,
             j’ai travaillé sur plusieurs projets que ce soit en solo ou en équipes utilisant Trello comme outil de gestion 
             et une méthodologie Agile pour l'organisation. J’aime résoudre des problèmes complexes et créer des solutions 
             efficaces en utilisant des technologies modernes comme les frameworks React ou laravel ou simplement des languages 
             comme Javascript ou PHP. Mon objectif est de continuer à améliorer mes compétences et de travailler sur des projets 
             innovants qui transforment les idées de mes futures clients en réalités concrètes.</p>
        
          </div>
        `;
        
        // Ajouter la popup au DOM
        document.body.insertAdjacentElement("beforeend", popup);
    
        // Ajouter l'événement onClick au bouton de fermeture
        const closeButton = document.getElementById('closePopup');
        if (closeButton) {
          closeButton.addEventListener('click', ClosePopup);
        }
    
        // Ajouter l'écouteur pour fermer la popup en cliquant à l'extérieur
        document.addEventListener('click', handleClickOutside);
       
        console.log("Popup affichée !");
    }

    function ClosePopup() {
        const popupElement = document.getElementById('containerPopup');
        if (popupElement) {
          document.body.removeChild(popupElement);
          document.removeEventListener('click', handleClickOutside); // Retire l'écouteur quand la popup est fermée
          console.log('Popup fermée');
        }
      }
    
      function handleClickOutside(event) {
        const popupElement = document.getElementById('contentPopup');
        if (event.target.id === "containerPopup" ) {
          ClosePopup(); // Si le clic est à l'extérieur de contentPopup, on ferme la popup
        }
        console.log(event.target.id)
      }

    return (
        <div id="Top">
            <video src={triangleBg} autoPlay loop muted id="videoBg" />
            <div id="Top_Content">
                <div id="Top_Text">
                    <button id="Top_Button" type="button" onClick={openDescription}><h1 id="Top_Title">Qui Je Suis ?</h1></button>
                </div>
            </div>
        </div>
    )
}

export default Top;