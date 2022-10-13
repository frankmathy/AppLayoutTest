import "./RateGrid.css";
import DataElement from "./DataElement";

const RateGrid = () => {
  return (
    <div className="RateGrid">
      {Array.from(Array(300).keys()).map((no) => (
        <DataElement text={`Rate ${no}`} />
      ))}
    </div>
  );
};

export default RateGrid;
