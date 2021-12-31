import React, { useState, useEffect } from "react";
import { Chart, Tooltip, Axis, Interaction, Polygon } from "bizcharts";
import { csv } from "d3";

const HeatMap = () => {
  const [csvData, setCsvData] = useState([]);
  const [times, setTimes] = useState([]);
  const [dates,  setDates] = useState([]);

  const processCsv = (data) => {
    const timeArray = data.columns.slice(1);
    const rows = data.slice(0, 365);
    const dateArray = rows.map(row => row[""]);

    const newData = [];
    rows.forEach((row) => {
      const date = row[""];
      timeArray.forEach(time => {
        newData.push({
          date,
          time,
          value: +row[time],
        })
      })
    });

    setTimes(timeArray);
    setDates(dateArray);
    return newData;
  };

  useEffect(() => {
    const newData = csv("ForecastPVYield.csv").then(processCsv);
    setCsvData(newData);
  }, [csvData]);

  const scale = {
    time: {
      type: "cat",
      values: times,
    },
    date: {
      type: "cat",
      values: dates,
    },
    value: {
      nice: true,
    },
  };

  return (
    <Chart scale={scale} height={500} data={csvData} autoFit pure>
      <Axis
        name={"date"}
        title={null}
        grid={{
          alignTick: false,
          line: {
            style: {
              lineWidth: 1,
              lineDash: null,
              stroke: "#f0f0f0",
            },
          },
        }}
      />
      <Axis
        name={"time"}
        tickLine={null}
        grid={{
          alignTick: false,
          line: {
            style: {
              lineWidth: 1,
              lineDash: null,
              stroke: "#f0f0f0",
            },
          },
        }}
      />
      
      <Tooltip shared showMarkers={false} />
      <Polygon
        position={"date*time"}
        color={["value", "#BAE7FF-#1890FF-#0050B3"]}
        label={[
          "value",
          {
            offset: -2,
            style: {
              fill: "#fff",
              shadowBlur: 2,
              shadowColor: "rgba(0, 0, 0, .45)",
            },
          },
        ]}
        style={{
          lineWidth: 1,
          stroke: "#fff",
        }}
      ></Polygon>
      <Interaction type={"element-active"} />
    </Chart>
  );
};

export default HeatMap;
