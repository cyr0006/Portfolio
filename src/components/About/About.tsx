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
          text="Software Engineer - Problem Solver - Critical Thinker"
          effect="focus"
          animateBy="words"
        />
        <TextType
          as="p"
          text={`I'm a final year Software Engineering (Honours) student at Monash University.\n\nMy approach to engineering is collaborative, incremental and rapidly iterative. The benefits of this approach are emergent in magnitudes greater than the sum of the whole. It is a design philosophy mirrored by many industry leaders, and one that is applicable not only to engineering.`}
          typingSpeed={1}
          loop={false}
          startOnVisible
        />
      </div>
    </div>
  );
};

export default About;
