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
        <div className="lanyard-stage">
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
        </div>
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
          Welcome to the Aryan Cyrus experience. I am currently finishing my final year of Bachelor of
          Software Engineering (Hon) at Monash University.
        </p>
        <p>
          I have what I can only describe as mindset of improvement, learning and problem solving. It is a lifestyle. An obsession. A philosophy that has held me in good stead through the years
        </p>
        <p>
          You know you want to know more, click below to make it happen.  
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
