import "./RateGrid.css";
import RatePanel from "./RatePanel";

const RateGrid = () => {
  return (
    <div className="RateGrid">
      {Array.from(Array(300).keys()).map((ccyPair) => (
        <RatePanel ccyPair="EUR/USD" />
      ))}
    </div>
  );
};

export default RateGrid;
