import Orbiters from "../Orbiters";
import CrystalisedBall from "../CrystalisedBall/CrystalisedBall";
import "./CrystalBallDisplay.css";

const ORBIT_PARAGRAPHS = [
  "I take pride in being exceptionally multidimensional. Alongside my degree, I've spent 4 years at Cardinia Shire Council translating technical problems for non-technical people; balancing the best interests of residents with regulatory due process, privacy constraints and organisational efficiency.",
  "I live by action and agency; suboptimal action beats optimal thought. This is why I enjoy building and architecting systems end-to-end. This is apparent via my personal projects, many of which are publicly visible on my website and GitHub.",
  "I have what I can only describe as mindset of improvement, learning and problem solving. It is a lifestyle. An obsession. A philosophy that has held me in good stead through the years.",
];

const CrystalBallDisplay = () => {
  return (
    <div className="crystal-ball-display">
      {/* A single ball instance, positioned by CSS: absolutely centered
          over the orbit on desktop, a normal-flow block above the text
          stack on mobile (see the media query in CrystalBallDisplay.css). */}
      <div className="crystal-ball-anchor">
        <div className="crystal-ball-slot">
          <CrystalisedBall preset="solar" theme="dark" size={0.7} />
        </div>
      </div>

      <Orbiters
        className="crystal-ball-orbit"
        items={ORBIT_PARAGRAPHS.map((text) => ({
          content: (
            <div className="orbit-chip">
              <p>{text}</p>
            </div>
          ),
        }))}
        shape="ellipse"
        radiusX={620}
        radiusY={460}
        itemSize={460}
        itemAspect={1.6}
        itemRadius={18}
        duration={55}
        depth={0.3}
        rotation={0}
        hoverScale={1.05}
        hoverSpeed={0.15}
        draggable
        intro
      />

      <div className="crystal-ball-mobile-stack">
        {ORBIT_PARAGRAPHS.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default CrystalBallDisplay;
