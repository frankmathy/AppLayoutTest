import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import TradingArea from "./TradingArea";
import Charts from "./Charts";
import TradesList from "./TradesList";

function App() {
  return (
    <div className="App">
      <Header message="FX Trading Application" />
      <TradingArea />
      <Charts />
      <TradesList />
      <Footer message="(C) 2022 Bad Bank Inc." />
    </div>
  );
}

export default App;
