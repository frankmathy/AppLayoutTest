import "./RatePanel.css";

const RatePanel = (props) => {
  const { ccyPair } = props;
  return (
    <div class="RatePanel">
      <span class="RateSpan">{ccyPair}</span>
    </div>
  );
};

export default RatePanel;
