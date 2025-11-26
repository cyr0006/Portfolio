import "./Stream.css";
import { motion } from "framer-motion";
import monash_logo from "../../assets/monash_logo.png";
import cardinia_logo from "../../assets/cardinia_logo.png";
import Programs from "../Programs/Programs";

const Stream = () => {
  return (
    <>
      <div className="about-container">
        <section className="about-row">
          <div className="stream-line-l" />
          <div className="content-blocks-l">
            <h2>Qualifications</h2>
            <ul>
              <li>
                <motion.div
                  className="block"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3>Bachelor of Software Engineering (Honors)</h3>

                  <p>
                    Currently undertaking a bachelor of Software Engineering
                    (Honours) at Monash University, Clayton Campus. Upon the
                    completion of my course, I aim to professionally mog even
                    the most renouned engineers in the industry.
                  </p>
                </motion.div>
              </li>
            </ul>
          </div>
          <img src={monash_logo} className="monash_logo" />
        </section>
      </div>
      <div className="about-container">
        <section className="about-row">
          <div className="stream-line-r" />
          <img src={cardinia_logo} className="cardinia_logo" />
          <div className="content-blocks-r">
            <h2>Experience</h2>

            <ul>
              <li>
                <motion.div
                  className="block"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3>
                    Customer Support Officer - Cardinia Shire Council (2023 -
                    present)
                  </h3>
                  <p>
                    I am currently a member of Cardinia Shire Council Customer
                    Service team. This roles has allowed me to cultivate a
                    myriad of soft skills, which are invaluable in an team or
                    client facing environment.
                  </p>
                </motion.div>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className="about-container">
        <section className="about-row">
          <div className="stream-line-l" />
          <div className="content-blocks-l">
            <h2>Skills</h2>
            <motion.div
              className="block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="subheading">
                I have accumulated knowledge and experience with countless
                languages for all applications. These include:
              </h4>
              <ul className="nested-list">
                <li>Python</li>
                <li>Javascript</li>
                <li>Java</li>
                <li>SQL</li>
                <li>Assembly</li>
                <li>Shell Script</li>
                <li>C++</li>
                <li>MATLAB</li>
              </ul>
            </motion.div>

            <motion.div
              className="block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="subheading">Various Markup Languages</h4>
              <ul className="nested-list">
                <li>CSS (including Tailwind)</li>
                <li>HTML</li>
              </ul>
            </motion.div>

            <motion.div
              className="block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="subheading">Computer Science Fundamentals</h4>
              <ul className="nested-list">
                <li>
                  In depth knowledge of data structures/algorithms, discrete
                  mathematics and other fundamental concepts of computer
                  science.
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="subheading">Databases</h4>
              <ul className="nested-list">
                <li>
                  SQL and NoSQL; a comprehensive collection of associated
                  database tools (MongoDB, Cassandra, Neo4J etc)
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="subheading">DevOps and Tools</h4>
              <ul className="nested-list">
                <li>
                  Knowledge of software quality and security testing; including
                  through pipelining and CI/CD practices
                </li>
                <li>Use of Git and other version control tools</li>
                <li>
                  Use of Docker for production, staging, development, testing,
                  and CI workflows
                </li>
                <li>Use and configuration of VMware</li>
                <li>Use of Ubuntu Linux</li>
              </ul>
            </motion.div>

            <motion.div
              className="block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h4 className="subheading">
                Data, Analytics and Business Intelligence
              </h4>
              <ul className="nested-list">
                <li>
                  Microsoft ecosystem and Microsoft Office Suite of Products
                </li>
                <li>PowerBI</li>
              </ul>
            </motion.div>

            <motion.div
              className="block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="subheading">Other</h4>
              <ul className="nested-list">
                <li>
                  Experience working with a host of real-time enterprise systems
                  (including CRMs, receipting and accounting software)
                </li>
                <li>CAD using programs such as SolidWorks and Fusion360</li>
              </ul>
            </motion.div>
          </div>
        </section>
        <Programs />
      </div>
    </>
  );
};

export default Stream;
