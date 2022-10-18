import "./DataElement.css";

const DataElement = (props) => {
  const { text } = props;
  return (
    <div className="RatePanel">
      <span className="RateSpan">{text}</span>
    </div>
  );
};

export default DataElement;
