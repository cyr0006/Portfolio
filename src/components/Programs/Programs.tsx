import "./Programs.css";

import python_logo from "../../assets/python_logo.svg";
import java_logo from "../../assets/java_logo.svg";
import js_logo from "../../assets/js_logo.svg";
import matlab_logo from "../../assets/matlab_logo.svg";
import bash_logo from "../../assets/bash_logo.svg";
import react_logo from "../../assets/react_logo.svg";
import sql_logo from "../../assets/sql_logo.svg";
import assembly_logo from "../../assets/assembly-logo.png";
import cpp_logo from "../../assets/cpp_logo.svg";
import tw_logo from "../../assets/tw_logo.svg";
import cassandra_logo from "../../assets/cassandra_logo.svg";
import neo4j_logo from "../../assets/neo4j_logo.svg";
import mongodb_logo from "../../assets/mongodb_logo.svg";

import Spheres from "../Spheres/Spheres";
import { js } from "three/tsl";

const Programs = () => {
  return (
    <>
      <div className="programs">
        <div className="program">
          <Spheres myDecal={python_logo} />
        </div>

        <div className="program">
          <Spheres myDecal={java_logo} />
        </div>

        <div className="program">
          <Spheres myDecal={js_logo} />
        </div>

        <div className="program">
          <Spheres myDecal={bash_logo} />
        </div>

        <div className="program">
          <Spheres myDecal={tw_logo} />
        </div>
        <div className="program">
          <Spheres myDecal={sql_logo} />
        </div>

        <div className="program">
          <Spheres myDecal={react_logo} />
        </div>
        <div className="program">
          <Spheres myDecal={matlab_logo} />
        </div>

        <div className="program">
          <Spheres myDecal={cpp_logo} />
        </div>
        <div className="program">
          <Spheres myDecal={cassandra_logo} />
        </div>
        <div className="program">
          <Spheres myDecal={neo4j_logo} />
        </div>

        <div className="program">
          <Spheres myDecal={mongodb_logo} />
        </div>
      </div>
    </>
  );
};

export default Programs;
