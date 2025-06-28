import "./Hero.css";
import r_arrow from "../../assets/r-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Loren Ipsum</h1>
        <p>
          lLoren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod
          tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin
          venian, quis nostrun exercitationen ullan corporis suscipit
          laboriosan, nisi ut aliquid ex ea connodi consequatur.
        </p>
        <button className="btn">
          Explore More <img src={r_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
