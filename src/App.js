import React from "react";

import ChartWrapper from "./components/ChartWrapper/ChartWrapper";
import LineChart from "./components/LineChart/LineChart";
import BarGraph from "./components/BarGraph/BarGraph";
import HeatMap from "./components/HeatMap/HeatMap";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/*Sheet-1 -> LineChart  */}
      <ChartWrapper title="Annual Electricity Demand">
        <LineChart />
      </ChartWrapper>

      {/* Sheet-2 BarGraph */}
      <ChartWrapper title="Renewable Potential">
        <BarGraph />
      </ChartWrapper>

      {/* Sheet-3 -> HeatMap */}
      <ChartWrapper title="Half Hourly Sum of Generation & Load">
        <HeatMap />
      </ChartWrapper>
    </div>
  );
}

export default App;
