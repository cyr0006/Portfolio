import "../About/About.css";
import BlurText from "../BlurText/BlurText";
import TextType from "../TypeText/TypeText";
const About = () => {
  return (
    <div className="about">
      <div className="about-right about-solo">
        <h3>Aryan</h3>
        <BlurText
          as="h2"
          text="Software Engineer - Problem Solver - Critical Thinker"
          effect="focus"
          animateBy="words"
        />
        <TextType
          as="p"
          text={`My name is Aryan Cyrus. I am a final year student from Monash University. I am currently finishing my final year of Bachelor of Software Engineering (Hon).\n\nPeople often ask me "what would you do if not Software Engineering". At my core I like to solve problems; it's what I do. Engineering is just a conduit to express this.`}
          typingSpeed={20}
          loop={false}
          startOnVisible
        />
      </div>
    </div>
  );
};

export default About;
