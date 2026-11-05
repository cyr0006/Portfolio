import "./Hero.css";
import r_arrow from "../../assets/r-arrow.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TextType from "../TypeText/TypeText";
import BlurText from "../BlurText/BlurText";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <BlurText
          as="h1" 
          text="Welcome to the Aryan Cyrus Experience"
          effect="focus"
          animateBy="words"
        />
        <TextType
          as="p"
          text={`Looking for that one particular bit of information in a sea of details? My AI-powered chat tool is here to help! Just ask, and let the AI do the rest.\n\nClick the button below to ask my AI anything!.`}
          typingSpeed={10}
          loop={false}
          startOnVisible
        />
        <Link to="/chat">
          <motion.button
            type="submit"
            className="btn light-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get Started
            <img src={r_arrow} alt="" />
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
