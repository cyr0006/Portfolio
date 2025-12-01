import "./Hero.css";
import r_arrow from "../../assets/r-arrow.png";
import { motion, scale } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Welcome</h1>
        <p>
          Looking for that one particular bit of information in a sea of
          details? My AI-powered chat tool is here to help! Just ask, and let
          the AI do the rest.
        </p>
        <p>Click the button below to ask my AI anything!.</p>
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
