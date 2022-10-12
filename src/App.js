import "./App.css";
import HeaderFooter from "./HeaderFooter";
import MainArea from "./MainArea";
import Charts from "./Charts";

function App() {
  return (
    <div className="App">
      <HeaderFooter message="FX Trading Application" />
      <MainArea />
      <Charts />
      <HeaderFooter message="(C) 2022 Bad Bank Inc." />
    </div>
  );
}

export default App;
