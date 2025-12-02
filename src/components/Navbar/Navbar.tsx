import "./Navbar.css";
import logo from "../../assets/Aryan Logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, scale } from "framer-motion";
import ScrollToTop from "../../hooks/linkScroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <Link to="/" className="logo-link" onClick={ScrollToTop}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="/" onClick={ScrollToTop}>
            Home{" "}
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={ScrollToTop}>
            About{" "}
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 2150, behavior: "smooth" });
              toggleMenu();
            }}
          >
            <motion.button
              type="submit"
              className="btn light-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Contact
            </motion.button>
          </Link>
        </li>
      </ul>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-list"
        viewBox="0 0 16 16"
        onClick={toggleMenu}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </motion.svg>
    </nav>
  );
};

export default Navbar;
