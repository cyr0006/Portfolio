import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About </Link>
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
