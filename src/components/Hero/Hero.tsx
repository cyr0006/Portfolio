import "./Hero.css";
import r_arrow from "../../assets/r-arrow.png";

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
        <button className="btn">
          Explore More <img src={r_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
