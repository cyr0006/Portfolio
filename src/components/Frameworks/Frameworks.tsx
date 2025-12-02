import "../Frameworks/Frameworks.css";
import { motion, scale } from "framer-motion";

import react_logo from "../../assets/react-logo.png";
import mongodb_logo from "../../assets/mongodb_logo.png";
import nodejs_logo from "../../assets/nodejs_logo.png";
import virtualbox_logo from "../../assets/virtualbox_logo.png";
import { useRef } from "react";

const Frameworks = () => {
  const slider = useRef<HTMLUListElement>(null);
  const txRef = useRef(0);
  const totalSlides = 4;
  const slideWidth = 100 / totalSlides;

  const slideFwd = () => {
    if (txRef.current > -(100 - slideWidth - slideWidth)) {
      txRef.current -= slideWidth;
    }
    slider.current!.style.transform = `translateX(${txRef.current}%)`;
    console.log(txRef.current);
  };
  const slideBwd = () => {
    if (txRef.current < 0) {
      txRef.current += slideWidth;
    }
    slider.current!.style.transform = `translateX(${txRef.current}%)`;
    console.log(txRef.current);
  };

  return (
    <div className="Frameworks">
      <button onClick={slideFwd} className="x-button right">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="wheat"
          viewBox="0 0 16 16"
          className="bi bi-arrow-right-circle"
          whileHover={{ scale: 1.2, opacity: 0.8 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <path
            fillRule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
          />
        </motion.svg>
      </button>
      <button
        onClick={slideBwd}
        className="x-button left"
        style={{
          background: "none",
          border: "none",
          padding: 0,
          margin: 0,
          cursor: "pointer",
        }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="wheat"
          viewBox="0 0 16 16"
          className="bi bi-arrow-left-circle"
          whileHover={{ scale: 1.2, opacity: 0.8 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <path
            fillRule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
          />
        </motion.svg>
      </button>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="skill-info">
                <img src={react_logo} alt="" className="react_logo" />
                <div>
                  <h3>React</h3>
                  <span>For modern websites</span>
                </div>
              </div>
              <p>
                Create up-to-date, responsive and aesthetic websites with react.
                No more webpages from 2005. Welcome to 2025.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="skill-info">
                <img src={mongodb_logo} alt="" className="mongodb_logo" />
                <div>
                  <h3>MongoDB</h3>
                  <span>For managing high volume database</span>
                </div>
              </div>
              <p>
                MongoDB is a flexible NoSQL database that stores data in
                documents, supports scalability, schema-less design, and
                powerful queries.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="skill-info">
                <img src={nodejs_logo} alt="" className="nodejs_logo" />
                <div>
                  <h3>Node JS</h3>
                  <span>For back-end functionality</span>
                </div>
              </div>

              <p>
                Whether it's web servers, APIs, or databases. Node.js not only
                delivers, but does so quickly and at scale.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="skill-info">
                <img src={virtualbox_logo} alt="" className="virtualbox_logo" />
                <div>
                  <h3>Victualbox</h3>
                  <span>For hardware specific VM testing</span>
                </div>
              </div>

              <p>
                Virtual box - saves developers from the terrible ordeal of
                needing a Mac OS device for testing. VM-ware is a critical tool
                I use to test functionality across a diverse array of
                environments.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Frameworks;
