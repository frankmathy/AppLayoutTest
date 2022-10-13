import "./RatesChartsWrapper.css";
import RateGrid from "./RateGrid";
import Charts from "./Charts";

function RatesChartsWrapper() {
  return (
    <div className="RatesChartsWrapper">
      <RateGrid />
      <Charts />
    </div>
  );
}

export default RatesChartsWrapper;
