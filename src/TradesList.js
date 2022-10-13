import "./TradesList.css";
import DataElement from "./DataElement";

const TradesList = () => {
  return (
    <div className="TradesList">
      {Array.from(Array(50).keys()).map((no) => (
        <DataElement text={`Trade ${no}`} />
      ))}
    </div>
  );
};

export default TradesList;
