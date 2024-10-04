const Popup = () => {
    return (
        <div id="containerPopup">
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
            
                <h1 id="kam248191_titre">TITRE DE LA POPUP</h1>
            
                <p className="kam248191_content">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Est voluptatum harum a voluptatem quae, iste doloremque similique perspiciatis sequi minus mollitia aperiam neque quis,
                tempore omnis pariatur necessitatibus et quidem.</p>
            </div>
        </div>

    )
}

export default Popup;