import "./Programs.css";

import python_logo from "../../assets/python_logo.svg";
import java_logo from "../../assets/java_logo.svg";
import js_logo from "../../assets/js_logo.svg";
import matlab_logo from "../../assets/matlab_logo.svg";
import bash_logo from "../../assets/bash_logo.svg";
import react_logo from "../../assets/react_logo.svg";
import sql_logo from "../../assets/sql_logo.svg";
import cpp_logo from "../../assets/cpp_logo.svg";
import tw_logo from "../../assets/tw_logo.svg";
import cassandra_logo from "../../assets/cassandra_logo.svg";
import neo4j_logo from "../../assets/neo4j_logo.svg";
import mongodb_logo from "../../assets/mongodb_logo.svg";

import Spheres from "../Spheres/Spheres";

const Programs = () => {
  return (
    <>
      <div className="programs">
        <div className="program">
          <Spheres myDecal={python_logo} colour={"rgba(97, 171, 255, 1)"} />
        </div>
        <div className="program">
          <Spheres myDecal={java_logo} colour={"rgba(255, 100, 100, 1)"} />
        </div>

        <div className="program">
          <Spheres myDecal={js_logo} colour={"rgba(255, 200, 0, 1)"} />
        </div>

        <div className="program">
          <Spheres myDecal={bash_logo} colour={"rgba(100, 255, 100, 1)"} />
        </div>

        <div className="program">
          <Spheres myDecal={tw_logo} colour={"rgb(0, 188, 255)"} />
        </div>
        <div className="program">
          <Spheres myDecal={sql_logo} colour={"rgba(100, 100, 255, 1)"} />
        </div>

        <div className="program">
          <Spheres myDecal={react_logo} colour={"rgba(0, 255, 255, 1)"} />
        </div>
        <div className="program">
          <Spheres myDecal={matlab_logo} colour={"rgb(253, 132, 67)"} />
        </div>

        <div className="program">
          <Spheres myDecal={cpp_logo} colour={"rgb(0, 68, 130)"} />
        </div>
        <div className="program">
          <Spheres myDecal={cassandra_logo} colour={"rgb(186, 230, 250)"} />
        </div>
        <div className="program">
          <Spheres myDecal={neo4j_logo} colour={"rgb(1, 139, 255)"} />
        </div>

        <div className="program">
          <Spheres myDecal={mongodb_logo} colour={"rgb(70, 160, 55)"} />
        </div>
      </div>
    </>
  );
};

export default Programs;
