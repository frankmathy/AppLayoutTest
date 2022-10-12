import './MainArea.css';
import RateGrid from './RateGrid'
import TradesList from './TradesList'

function MainArea() {
  return (
    <div className="MainArea">
        <RateGrid/>
        <TradesList/>
    </div>
  );
}

export default MainArea;
