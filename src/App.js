import './App.css';
import HeaderFooter from './HeaderFooter';
import RateGrid from './RateGrid'

function App() {
  return (
    <div className="App">
      <HeaderFooter message="FX Trading Application"/>
      <RateGrid/>
      <HeaderFooter message="(C) 2022 Bad Bank Inc."/>
    </div>
  );
}

export default App;
