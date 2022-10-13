import "./MainArea.css";
import RatesChartsWrapper from "./RatesChartsWrapper";
import TradesList from "./TradesList";

function MainArea() {
  return (
    <div className="MainArea">
      <RatesChartsWrapper />
      <TradesList />
    </div>
  );
}

export default MainArea;
