import Navbar from "../components/Navbar/Navbar";
import Abt from "../components/About/About";
import Stream from "../components/Stream/Stream";
import Footer from "../components/Footer/Footer";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import CrystalBallDisplay from "../components/CrystalBallDisplay/CrystalBallDisplay";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Abt />
        <PhotoGallery />
        <CrystalBallDisplay />
        <Stream></Stream>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
