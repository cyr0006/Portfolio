import { Link } from "react-router-dom";
import "./Footer.css";
import ScrollToTop from "../../hooks/linkScroll";

const Footer = () => {
  return (
    <div className="footer container">
      <ul>
        <li>
          <Link to="/" onClick={ScrollToTop}>
            Home
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
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
