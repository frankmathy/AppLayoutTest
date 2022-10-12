import "./TradesList.css";
import RatePanel from "./RatePanel";

const TradesList = () => {
  return (
    <div className="TradesList">
      {Array.from(Array(50).keys()).map((ccyPair) => (
        <RatePanel ccyPair="Trade" />
      ))}
    </div>
  );
};

export default TradesList;
