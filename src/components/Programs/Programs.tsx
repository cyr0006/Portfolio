import "./Programs.css";

import python_logo from "../../assets/python_logo.png";
import java_logo from "../../assets/java_logo.png";
import js_logo from "../../assets/js-logo.png";
import html_logo from "../../assets/html-logo.png";
import css_logo from "../../assets/css-logo.png";
import react_logo from "../../assets/react-logo.png";
import sql_logo from "../../assets/sql-logo.png";
import assembly_logo from "../../assets/assembly-logo.png";
import cpp_logo from "../../assets/cpp-logo.png";

import Spheres from "../Spheres/Spheres";

const Programs = () => {
  return (
    <>
      <div className="programs">
        <div className="program">
          <Spheres />
        </div>

        <div className="program">
          <Spheres />
        </div>

        <div className="program">
          <Spheres />
        </div>
      </div>

      <div className="programs">
        <div className="program">
          <Spheres />
        </div>

        <div className="program">
          <Spheres />
        </div>

        <div className="program">
          <Spheres />
        </div>
      </div>

      <div className="programs">
        <div className="program">
          <Spheres />
        </div>

        <div className="program">
          <Spheres />
        </div>

        <div className="program">
          <Spheres />
        </div>
      </div>
    </>
  );
};

export default Programs;
