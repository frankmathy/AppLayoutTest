import "react-tabs/style/react-tabs.css";
import "./TradingArea.css";
import RateGrid from "./RateGrid";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function TradingArea() {
  return (
    <Tabs className="TradingAreaTabs">
      <TabList>
        <Tab>Market Rates</Tab>
        <Tab>Swap Grid</Tab>
      </TabList>
      <TabPanel className="ScrollY">
        <RateGrid count={50} start={1} />
      </TabPanel>
      <TabPanel className="ScrollY">
        <RateGrid count={20} start={60} />
      </TabPanel>
    </Tabs>
  );
}

export default TradingArea;
