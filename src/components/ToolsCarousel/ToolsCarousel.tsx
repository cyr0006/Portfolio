import FlexCarousel from "../FlexCarousel/FlexCarousel";
import assembly_logo from "../../assets/assembly-svgrepo-com.svg";
import bash_logo from "../../assets/bash-icon-svgrepo-com.svg";
import cassandra_logo from "../../assets/cassandra-svgrepo-com.svg";
import cpp_logo from "../../assets/cpp-logo-svgrepo-com.svg";
import css_logo from "../../assets/css-svgrepo-com.svg";
import html_logo from "../../assets/html-5-svgrepo-com.svg";
import java_logo from "../../assets/java-logo-svgrepo-com.svg";
import matlab_logo from "../../assets/matlab-logo-svgrepo-com.svg";
import mongodb_logo from "../../assets/mongodb-logo-svgrepo-com.svg";
import neo4j_logo from "../../assets/neo4j-logo-svgrepo-com.svg";
import nodejs_logo from "../../assets/node-js-svgrepo-com.svg";
import python_logo from "../../assets/python-3-logo-svgrepo-com.svg";
import react_logo from "../../assets/react-javascript-js-framework-facebook-svgrepo-com.svg";
import sql_logo from "../../assets/sql-database-generic-svgrepo-com.svg";
import swift_logo from "../../assets/swift-svgrepo-com.svg";
import tailwind_logo from "../../assets/tailwind-svgrepo-com.svg";
import typescript_logo from "../../assets/typescript-logo-svgrepo-com.svg";
import vue_logo from "../../assets/vue-svgrepo-com.svg";
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
    title: "Node.js",
    subtitle: "For back-end functionality",
  },
  {
    src: python_logo,
    alt: "Python logo",
    title: "Python",
    subtitle: "For scripting and automation",
  },
  {
    src: typescript_logo,
    alt: "TypeScript logo",
    title: "TypeScript",
    subtitle: "For type-safe JavaScript at scale",
  },
  {
    src: java_logo,
    alt: "Java logo",
    title: "Java",
    subtitle: "For object-oriented, large-scale systems",
  },
  {
    src: vue_logo,
    alt: "Vue logo",
    title: "Vue",
    subtitle: "For reactive, component-based UIs",
  },
  {
    src: swift_logo,
    alt: "Swift logo",
    title: "Swift",
    subtitle: "For native iOS app development",
  },
  {
    src: matlab_logo,
    alt: "MATLAB logo",
    title: "MATLAB",
    subtitle: "For numerical computing and analysis",
  },
  {
    src: cpp_logo,
    alt: "C++ logo",
    title: "C++",
    subtitle: "For performance-critical applications",
  },
  {
    src: assembly_logo,
    alt: "Assembly logo",
    title: "Assembly",
    subtitle: "For low-level, hardware-adjacent programming",
  },
  {
    src: cassandra_logo,
    alt: "Cassandra logo",
    title: "Cassandra",
    subtitle: "For distributed, high-availability data",
  },
  {
    src: neo4j_logo,
    alt: "Neo4j logo",
    title: "Neo4j",
    subtitle: "For graph-based data modelling",
  },
  {
    src: sql_logo,
    alt: "SQL logo",
    title: "SQL",
    subtitle: "For structured relational queries",
  },
  {
    src: tailwind_logo,
    alt: "Tailwind CSS logo",
    title: "Tailwind",
    subtitle: "For fast, utility-first styling",
  },
  {
    src: html_logo,
    alt: "HTML5 logo",
    title: "HTML5",
    subtitle: "For structuring content on the web",
  },
  {
    src: css_logo,
    alt: "CSS logo",
    title: "CSS",
    subtitle: "For styling and layout",
  },
  {
    src: bash_logo,
    alt: "Bash logo",
    title: "Bash",
    subtitle: "For shell scripting and automation",
  },
];

const ToolsCarousel = () => {
  return (
    <div className="tools-carousel-slot">
      <FlexCarousel items={items} preset="liquid" fit="square" />
    </div>
  );
};

export default ToolsCarousel;
