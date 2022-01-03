import React from "react";
import { Chart, Geom, Axis, Tooltip, Legend, Annotation } from "bizcharts";
import data from "./data.json";

const LineChart = () => {
  const scale = {
    totalElectricityConsumption: {
      type: "linear",
      min: 200000000,
      max: 300000000,
      // for specifying custom lines
      // ticks: [200000000, 250000000, 300000000]
    },
    year: {
      range: [0, 1],
    },
  };

  return (
    <Chart height={500} data={data} autoFit scale={scale}>
      <Legend />
      <Axis name="year" />
      <Axis
        name="totalElectricityConsumption"
        label={{
          formatter: (val) =>
            `${val.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,")} kWh`,
        }}
      />
      <Tooltip showCrosshairs shared />
      <Geom
        type="line"
        tooltip={[
          "totalElectricityConsumption*localAuthority",
          (value, name) => {
            return {
              value: `${value
                .toFixed(0)
                .toString()
                .replace(/(\d)(?=(\d{3})+$)/g, "$1,")} kWh`,
              name,
            };
          },
        ]}
        position="year*totalElectricityConsumption"
        size={2}
        color={"localAuthority"}
      />
      <Geom
        type="point"
        tooltip={false}
        position="year*totalElectricityConsumption"
        size={4}
        shape={"circle"}
        color={"localAuthority"}
        style={{
          stroke: "#fff",
          lineWidth: 1,
        }}
      />
      <Annotation.Text
        position={["50%", "50%"]}
        alignX="middle"
        alignY="middle"
        html={`<div style="color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;">项目总数<br><span style="color:red;font-size:2.5em;">${200}</span></div>`}
      />
    </Chart>
  );
};

export default LineChart;
