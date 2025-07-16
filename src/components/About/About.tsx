import "../About/About.css";
import bust from "../../assets/bust.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={bust} alt="" className="about-img" />
      </div>

      <div className="about-right">
        <h3>Aryan</h3>
        <h2>Software Engineer - Problem Solver - Critical Thinker</h2>
        <p>
          My name is Aryan. I am a final year student from Monash Univeristy. I
          am currently finishing my final year of Bachelor of Software
          Engineering (Hon).
        </p>
        <p>
          People often ask me "what would you do if not Software Engineering".
          My answer speaks to the core of who I am. At my core I like to solve
          problems; it's what I do. Engineering is just a conduit to express
          what I love.
        </p>
        <p>
          Worry not, there's more to me than degrees and these cool JSX
          properties. Click below to read more.
        </p>
      </div>
    </div>
  );
};

export default About;
