import "./Stream.css";
import { motion } from "framer-motion";
import monash_logo from "../../assets/monash_logo.png";
import cardinia_logo from "../../assets/cardinia_logo.png";
import SkillsGraph from "../SkillsGraph/SkillsGraph";

const Stream = () => {
  return (
    <>
      <div className="about-container">
        <section className="about-row">
          <div className="stream-line-l" />
          <div className="content-blocks-l">
            <h2>Qualifications</h2>
            <motion.div
              className="block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3>Bachelor of Software Engineering (Honors)</h3>

              <p>
                Currently undertaking a bachelor of Software Engineering
                (Honours) at Monash University, Clayton Campus.
              </p>
            </motion.div>
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
            <motion.div
              className="block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3>
                Casual Customer Support Officer - Cardinia Shire Council (Oct
                2022 - Present)
              </h3>
              <ul className="nested-list">
                <li>
                  Resolve 60+ customer enquiries daily requiring interpretation
                  of Victorian building regulations, planning constraints, and
                  local laws while developing strong skills in breaking down
                  jargon for technical and non-technical stakeholders.
                </li>
                <li>
                  Coordinate with 20+ internal departments to deliver what
                  residents need to a high standard and within the designated
                  turnaround time for any given enquiry.
                </li>
                <li>
                  Maintain data accuracy and privacy compliance across
                  multiple enterprise CRM and receipting systems.
                </li>
                <li>
                  Guided customers through regulatory processes, reducing
                  escalation rate and improving first-contact resolution.
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
      </div>

      <div className="about-container">
        <section className="about-row">
          <div className="stream-line-l" />
          <div className="content-blocks-l">
            <h2>Skills</h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h4 className="subheading">Visualised</h4>
              <SkillsGraph />
            </motion.div>
            <motion.div
              className="block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="subheading">
                Languages, Frameworks and Concepts
              </h4>
              <ul className="nested-list">
                <li>
                  Python, JavaScript, TypeScript, Object Oriented languages
                  (e.g. Java), MATLAB, SQL, NoSQL (various), Assembly, Swift
                </li>
                <li>
                  Web frameworks: Vue, React, Tailwind, Vite, Express.js,
                  NextJS
                </li>
                <li>
                  Data Structures & Algorithms; experience covering dynamic
                  programming, graph algorithms, string/parity problems and
                  their applications.
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="subheading">Data & Analytics</h4>
              <ul className="nested-list">
                <li>
                  SQL and NoSQL (MongoDB, Cassandra, Neo4j, SQLite3, Postgres)
                </li>
                <li>Data warehouse design, OLAP, data cleaning</li>
              </ul>
            </motion.div>

            <motion.div
              className="block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="subheading">DevOps & Infrastructure</h4>
              <ul className="nested-list">
                <li>
                  Git/version control, Docker (dev/staging/prod/CI
                  workflows), CI/CD pipelines
                </li>
                <li>
                  Linux (Debian/Pi OS), VMware, self-hosted Raspberry Pi home
                  lab
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="subheading">
                Operating Systems & Computer Networks
              </h4>
              <ul className="nested-list">
                <li>Network configuration</li>
                <li>Linux (Debian/Pi OS)</li>
              </ul>
            </motion.div>

            <motion.div
              className="block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="subheading">Other Skills</h4>
              <ul className="nested-list">
                <li>Power BI, CAD (SolidWorks, Fusion360)</li>
                <li>
                  Enterprise CRM and accounting systems (production
                  environment experience)
                </li>
                <li>
                  Experience with architecting and configuring agentic AI
                  (LLMs, OCRs amongst others)
                </li>
                <li>
                  Daily use of GitHub Copilot in addition to agentic
                  reasoning for productivity.
                </li>
                <li>iOS / Apple ecosystem app development</li>
              </ul>
            </motion.div>
          </div>
        </section>
      </div>

    </>
  );
};

export default Stream;
