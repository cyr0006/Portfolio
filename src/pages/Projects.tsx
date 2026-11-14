import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";

const ProjectsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Projects />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProjectsPage;
