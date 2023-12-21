import "../description/description.css";
import css from "../../assets/css.png";
import mypic from "/mypic.png?url";
import js from "../../assets/js.png";
import node from "../../assets/node.png";
import react from "../../assets/react.png";
import git from "../../assets/git.png";

function Description() {
  return (
    <div className="div-desc">
      <img className="mypic" src={mypic} alt="my-picture" />
      <h2 className="description-top">
          Web Developper in training, I am Thrilled to finally immerse myself in
          the career I've been passionate about for years.
      </h2>
      <div className="description-text">
        <div className="description-logo">
          <img src={css} alt="logo css" style={{ width: "75px" }} />
          <img src={js} alt="logo js" style={{ width: "75px" }} />
          <img src={node} alt="logo node" style={{ width: "75px" }} />
          <img src={react} alt="logo react" style={{ width: "75px" }} />
          <img src={git} alt="logo git" style={{ width: "75px" }} />
        </div>
        <p>
            As an aspiring front-end developer actively seeking an internship,
            my passion lies in crafting clean and efficient web interfaces.
            Embracing a minimalist design approach, I am committed to continuous
            learning and growth. My strength comes from a range of experiences,
            from basic showcase websites to early-stage web applications. Each
            project showcases not only my skills but also my dedication to
            evolving in this dynamic field. I invite you to explore my portfolio
            and consider me for an internship where I can contribute and further
            develop my skills.
        </p>
      </div>
    </div>
  );
}

export default Description;
