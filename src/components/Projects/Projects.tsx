import "./Projects.css";
import BlurText from "../BlurText/BlurText";
import InfiniteMenu from "../InfiniteMenu";
import projects from "./projectData";

const Projects = () => {
  return (
    <div>
      <div className="projects-title">
        <h3>Projects</h3>
        <BlurText
          as="h2"
          text="A Few Things I've Built"
          effect="focus"
          animateBy="words"
        />
      </div>
      <div className="projects-menu">
        <InfiniteMenu items={projects} accentColor="#f5deb3" />
      </div>
    </div>
  );
};

export default Projects;
