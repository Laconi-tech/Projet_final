import GitHubLogo from "../assets/Link&Cv/github.png";
import CvLogo from "../assets/Link&Cv/cv.png";
import LinkdinLogo from "../assets/Link&Cv/linkdin.png";
import CV from "../assets/Link&Cv/CVPortfolio.pdf";

const LinkBanner = () => {
    function OpenGithub() {
        window.open("https://github.com/Laconi-tech");
    }

    function OpenLinkdin() {
        window.open("https://github.com/Laconi-tech");
    }

    function OpenCv() {
        document.getElementById('LinkBanner_a').click();
    }

    return (
        <div id="LinkBanner">
            <div className="LinkBanner_div">
                <img src={GitHubLogo} alt="GithubLogo" className="LinkBanner_Img" onClick={OpenGithub}/> 
                <p className="LinkBanner_p">Github</p>
            </div>
            <div className="LinkBanner_div">
                <img src={CvLogo} alt="CvLogo" className="LinkBanner_Img" onClick={OpenCv}/>
                <p className="LinkBanner_p">Mon CV</p>
            </div>
            <div className="LinkBanner_div">
                <img src={LinkdinLogo} alt="LinkdinLogo" className="LinkBanner_Img" onClick={OpenLinkdin}/>
                <p className="LinkBanner_p">Linkdin</p>
            </div>
            <a id="LinkBanner_a" href={CV} download={CV}></a>
        </div>
    )
}

export default LinkBanner;