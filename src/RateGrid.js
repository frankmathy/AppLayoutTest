import "./RateGrid.css";
import DataElement from "./DataElement";

const RateGrid = (props) => {
  return (
    <div className="RateGrid">
      {Array.from(Array(props.count).keys()).map((no) => (
        <DataElement key={no} text={`Rate ${no + props.start}`} />
      ))}
    </div>
  );
};

export default RateGrid;
