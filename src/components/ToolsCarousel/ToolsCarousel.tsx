import FlexCarousel from "../FlexCarousel/FlexCarousel";
import react_logo from "../../assets/react_logo.svg";
import mongodb_logo from "../../assets/mongodb_logo.png";
import nodejs_logo from "../../assets/nodejs_logo.png";
import virtualbox_logo from "../../assets/virtualbox_logo.png";
import "./ToolsCarousel.css";

const items = [
  {
    src: react_logo,
    alt: "React logo",
    title: "React",
    subtitle: "For modern websites",
  },
  {
    src: mongodb_logo,
    alt: "MongoDB logo",
    title: "MongoDB",
    subtitle: "For managing high volume database",
  },
  {
    src: nodejs_logo,
    alt: "Node.js logo",
    title: "Node JS",
    subtitle: "For back-end functionality",
  },
  {
    src: virtualbox_logo,
    alt: "VirtualBox logo",
    title: "VirtualBox",
    subtitle: "For hardware specific VM testing",
  },
];

const ToolsCarousel = () => {
  return (
    <div className="tools-carousel-slot">
      <FlexCarousel items={items} preset="liquid" fit="natural" />
    </div>
  );
};

export default ToolsCarousel;
