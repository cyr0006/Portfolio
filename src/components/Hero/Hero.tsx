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
          Your time is your currency, and wasting your's looking for that one
          particular bit of information is deeply inflationary.
        </p>
        <p>Click the button below to ask my AI Instead.</p>
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
