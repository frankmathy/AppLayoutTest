import "./RateGrid.css";
import DataElement from "./DataElement";

const RateGrid = () => {
  return (
    <div className="RateGrid">
      {Array.from(Array(50).keys()).map((no) => (
        <DataElement text={`Rate ${no + 1}`} />
      ))}
    </div>
  );
};

export default RateGrid;
