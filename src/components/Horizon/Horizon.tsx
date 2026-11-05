import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollExpand from "../ScrollExpand/ScrollExpand";
import codeImage from "../../assets/code.jpg";
import "./Horizon.css";

const Horizon = () => {
  return (
    <section className="horizon-section">
      <ScrollExpand
        src={codeImage}
        alt="Aryan Cyrus at his desk"
        title="Expand your horizons"
        titleFontSize="var(--horizon-text-size)"
        titleTextShadow="var(--horizon-text-shadow)"
        scrollHint="Scroll to explore"
        startWidth={70}
        startHeight={78}
        scrollDistance={0.6}
        holdDistance={0.1}
        useWindowScroll
      >
        <p className="horizon-copy">
          Beyond the code: thoughts on engineering, learning, and life.
        </p>
        <Link to="/musings">
          <motion.button
            type="submit"
            className="btn light-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Read My Musings
          </motion.button>
        </Link>
      </ScrollExpand>
    </section>
  );
};

export default Horizon;
