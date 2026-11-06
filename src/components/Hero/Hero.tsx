import "./Hero.css";
import r_arrow from "../../assets/r-arrow.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TextType from "../TypeText/TypeText";
import BlurText from "../BlurText/BlurText";
import DotGrid from "../DotGrid/DotGrid";

const Hero = () => {
  return (
    <div className="hero container">
      <DotGrid
        style={{ position: "absolute", inset: 0, zIndex: 1 }}
        baseColor="#4a3f6b"
        activeColor="#f5deb3"
        proximity={160}
        shockRadius={300}
        glow={0.7}
      />
      <div className="hero-text hero-panel">
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
