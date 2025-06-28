import "../About/About.css";
import bust from "../../assets/bust.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={bust} alt="" className="about-img" />
      </div>

      <div className="about-right">
        <h3>Lorem Ipsum</h3>
        <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean
          nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui
          purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris
          eget neque at sem venenatis eleifend. Ut nonummy.
        </p>
      </div>
    </div>
  );
};

export default About;
