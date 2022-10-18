import "./TradesList.css";
import DataElement from "./DataElement";

const TradesList = () => {
  return (
    <div className="TradesList">
      {Array.from(Array(50).keys()).map((no) => (
        <DataElement key={no} text={`Trade ${no + 1}`} />
      ))}
    </div>
  );
};

export default TradesList;
