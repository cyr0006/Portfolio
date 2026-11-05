import CrystalisedBall from "../CrystalisedBall/CrystalisedBall";
import "./CrystalBallDisplay.css";

const CrystalBallDisplay = () => {
  return (
    <div className="crystal-ball-slot">
      <CrystalisedBall preset="solar" theme="dark" size={0.7} />
    </div>
  );
};

export default CrystalBallDisplay;
