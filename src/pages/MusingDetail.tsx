import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MusingDetailFeature from "../components/Musings/MusingDetail";

const MusingDetailPage = () => {
  return (
    <div>
      <Navbar />
      <div className="page-container" style={{ paddingTop: "140px" }}>
        <MusingDetailFeature />
      </div>
      <Footer />
    </div>
  );
};

export default MusingDetailPage;
