import "./Navbar.css";
import logo from "../../assets/Aryan Cyrus.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          <button className="btn">Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
