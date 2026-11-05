import "../About/About.css";
import acyrus3 from "../../assets/acyrus3.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import r_arrow from "../../assets/r-arrow.png";
import BlurText from "../BlurText/BlurText";
import Lanyard from "../Lanyard/Lanyard";

const AboutMain = () => {
  return (
    <div className="about">
      <div className="lanyard-slot">
        <Lanyard
          frontImage={acyrus3}
          frontLabel="Aryan Cyrus"
          backDetails={[
            "Aryan Cyrus",
            "Software Engineering (Hon)",
            "Monash University",
            "Professionally accredited genius",
          ]}
          backLink="https://acyrus.netlify.app/Aryan_Cyrus_Resume.pdf"
          cardColor="#160049"
          strapColor="wheat"
          metal="gold"
        />
        <span className="lanyard-hint">Tap to interact</span>
      </div>

      <div className="about-right">
        <h3>Aryan</h3>
        <BlurText
          as="h2"
          text="Software Engineer - Problem Solver - Critical Thinker"
          effect="focus"
          animateBy="words"
        />
        <p>
          My name is Aryan Cyrus. I am a final year student from Monash
          University. I am currently finishing my final year of Bachelor of
          Software Engineering (Hon).
        </p>
        <p>
          People often ask me "what would you do if not Software Engineering".
          At my core I like to solve problems; it's what I do. Engineering is
          just a conduit to express this.
        </p>
        <p>
          Worry not, there's more to me than degrees. Click below to read more.
        </p>
        <Link to="/about">
          <motion.button
            type="submit"
            className="btn light-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Read More
            <img src={r_arrow} alt="" />
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default AboutMain;
