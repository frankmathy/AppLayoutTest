import "react-tabs/style/react-tabs.css";
import "./TradingArea.css";
import RateGrid from "./RateGrid";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function TradingArea() {
  return (
    <div class="ScrollOn">
      <Tabs class="TradingAreaTabs">
        <TabList>
          <Tab>Market Rates</Tab>
          <Tab>Swap Grid</Tab>
        </TabList>
        <TabPanel class="ScrollOn">
          <RateGrid count={50} start={1} />
        </TabPanel>
        <TabPanel class="ScrollOn">
          <RateGrid count={20} start={60} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TradingArea;
