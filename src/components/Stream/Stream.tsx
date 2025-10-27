import "./Stream.css";
import { motion } from "framer-motion";
import monash_logo from "../../assets/monash_logo.png";
import cardinia_logo from "../../assets/cardinia_logo.png";

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
    </>
  );
};

export default Stream;
