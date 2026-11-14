import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MusingsFeature from "../components/Musings/Musings";

const Musings = () => {
  return (
    <div>
      <Navbar />
      <div className="page-container" style={{ paddingTop: "140px" }}>
        <MusingsFeature />
      </div>
      <Footer />
    </div>
  );
};

export default Musings;
