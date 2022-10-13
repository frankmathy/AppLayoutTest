import "./DataElement.css";

const DataElement = (props) => {
  const { text } = props;
  return (
    <div class="RatePanel">
      <span class="RateSpan">{text}</span>
    </div>
  );
};

export default DataElement;
