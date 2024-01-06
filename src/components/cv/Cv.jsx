import "./cv.css";
import cv from "/cv.pdf";

function Cv() {
  return (
    <>
      <div className="Cv-title" id="CV">
        <h3 className="h3-contact">Alix CARLHANT</h3>
        <p className="cv-job">
          <strong>WEB DEVELOPPER</strong>
        </p>
        <p className="cv-mobility">Grand-Est, Open to mobility</p>
        <p className="cv-number">
          <strong> 07 66 87 89 18 </strong>
        </p>
      </div>
      <div className="cv-cv">
          <p>CV</p>
          <a href={cv} target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </div>
      <div>
        <div className="mail-cv">
          <p>alix.carlhant.pro@gmail.com</p>
          <a href="mailto:alix.carlhant.pro@gmail.com" target="_blank" rel="noopener noreferrer"> Contact Me</a>
        </div>
        <div className="networks-cv">
          <p>Social Networks</p>
          <a href="https://www.linkedin.com/in/alix-carlhant-427064291/ "target="_blank" rel="noopener noreferrer">
            Linkedin
          </a>
          <a href="https://github.com/Halicksse" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
      </div>
    </>
  );
}

export default Cv;
