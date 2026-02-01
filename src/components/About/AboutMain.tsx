import "../About/About.css";
import acyrus1 from "../../assets/acyrus1.jpg";
import acyrus3 from "../../assets/acyrus3.jpg";
import acyrus4 from "../../assets/acyrus4.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import r_arrow from "../../assets/r-arrow.png";

const AboutMain = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img
          src={acyrus1}
          alt=""
          className="about-img"
          style={{ borderRadius: "10px" }}
        />
        <img
          src={acyrus4}
          alt=""
          className="about-img"
          style={{ borderRadius: "10px" }}
        />
        <img
          src={acyrus3}
          alt=""
          className="about-img"
          style={{ borderRadius: "10px" }}
        />
      </div>

      <div className="about-right">
        <h3>Aryan</h3>
        <h2>Software Engineer - Problem Solver - Critical Thinker</h2>
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
