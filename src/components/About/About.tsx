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
        <p>
          I'm a final year Software Engineering (Honours) student at Monash University. 
          <br></br><br></br>
          My approach to engineering is collaborative, incremental and rapidly iterative. The benefits of this approach are emergent in magnitudes greater than the sum of the whole. It is a design philosophy mirrored by many industry leaders, and one that is applicable not only to engineering. 
          I take pride in being exceptionally multidimensional. Alongside my degree, I've spent 4 years at Cardinia Shire Council translating technical problems for non-technical people; balancing the best interests of residents with regulatory due process, privacy constraints and organisational efficiency. 
          I live by action and agency; suboptimal action beats optimal thought. This is why I enjoy building and architecting systems end-to-end. This is apparent via my personal projects, many of which are publicly visible on my website and GitHub. 
          I have what I can only describe as mindset of improvement, learning and problem solving. It is a lifestyle. An obsession. A philosophy that has held me in good stead through the years
        </p>
      </div>
    </div>
  );
};

export default About;
