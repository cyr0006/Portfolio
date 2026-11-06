import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Musings = () => {
  return (
    <div>
      <Navbar />
      <div
        className="page-container"
        style={{ paddingTop: "140px", minHeight: "60vh", textAlign: "center" }}
      >
        <h1 style={{ color: "wheat", fontWeight: 600, fontSize: "40px" }}>
          Musings
        </h1>
        <p
          style={{
            color: "white",
            maxWidth: "600px",
            margin: "20px auto",
            lineHeight: 1.5,
          }}
        >
          A collection of thoughts on engineering, learning, and life. More
          coming soon.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Musings;
