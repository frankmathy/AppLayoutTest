import "./App.css";
import HeaderFooter from "./HeaderFooter";
import MainArea from "./MainArea";

function App() {
  return (
    <div className="App">
      <HeaderFooter message="FX Trading Application" />
      <MainArea />
      <HeaderFooter message="(C) 2022 Bad Bank Inc." />
    </div>
  );
}

export default App;
