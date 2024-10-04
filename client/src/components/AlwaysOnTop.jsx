import React from "react";
import logo from "../assets/logo/logo.png";
import mail from "../assets/logo/mail.png";
import emailjs from "emailjs-com";

const AlwaysOnTop = () => {
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

  function sendEmail(event) {
    event.preventDefault();

    const emailSentOk = document.createElement('h1');
    emailSentOk.id = 'emailSentOk';
    emailSentOk.innerText = 'Mail envoyé ✅';

    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      event.target,
      import.meta.env.VITE_EMAIL_USER_ID
    )
    .then((result) => {
      console.log('Email sent OK', result);
      document.getElementById("contactForm").replaceWith(emailSentOk);
    })
    .catch(error => {
      console.log("Email sent KO", error);
    })
  }

  function OpenContactMe() {
    const popup = document.createElement('div');
    popup.id = 'containerPopup';
    popup.innerHTML = `
      <div id="contentPopup">
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
    
        <h1 id="contactForm_titre">Me contacter par Mail</h1>
    
        <form id="contactForm">
            <label for="name">Nom:</label>
            <input type="text" id="contactForm_name" name="user_name" required>

            <label for="email">Email:</label>
            <input type="email" id="contactForm_email" name="user_email" required>

            <label for="message">Message:</label>
            <textarea id="contactForm_message" name="message" rows="5" required></textarea>

            <button type="submit">Envoyer</button>
        </form>
    
      </div>
    `;

    // const emailSentOk = document.createElement('h1');
    // emailSentOk.id = 'emailSentOk';
    // emailSentOk.innerText = 'Mail envoyé ✅';

    
    // Ajouter la popup au DOM
    document.body.insertAdjacentElement("beforeend", popup);

    // Ajouter l'événement onClick au bouton de fermeture
    const closeButton = document.getElementById('closePopup');
    if (closeButton) {
      closeButton.addEventListener('click', ClosePopup);
    }

    // Ajouter l'écouteur pour fermer la popup en cliquant à l'extérieur
    document.addEventListener('click', handleClickOutside);

    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', sendEmail); // Liaison de l'événement submit à sendEmail
    }

    console.log("Popup affichée !");
  }

  return (
    <div id="AlwaysOnTop">
      <div id="AlwaysOnTop_LogoContainer">
        <img src={logo} id="AlwaysOnTop_Logo" alt="logo" />
      </div>

      <div id="AlwaysOnTop_ButtonContainer">
        <button
          id="AlwaysOnTop_Button"
          type="button"
          onClick={OpenContactMe}
        >
          <img src={mail} id="AlwaysOnTop_Mail" alt="logo_mail" />
        </button>
      </div>
    </div>
  );
};

export default AlwaysOnTop;

