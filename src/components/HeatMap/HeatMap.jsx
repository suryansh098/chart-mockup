import React from "react";
import ReactApexChart from "react-apexcharts";
import jsonData from "./ForecastPVYield.json";
// import jsonData from "./csvjson.json";

const HeatMap = () => {
  const dateArray = jsonData[0][""];
  const data = jsonData.slice(1);

  const zip = (a, b) => a.map((k, i) => ({ x: k, y: +b[i] }));

  const finalData = data.map((currData) => {
    const time = Object.keys(currData)[0];
    const values = currData[time];

    return {
      name: time,
      data: zip(dateArray, values),
    };
  });

  const options = {
    chart: {
      height: 1000,
      type: "heatmap",
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      type: "Date",
      labels: {
        show: true,
        align: "right",
        offsetY: 40,
      },
    },
    colors: ["#FF0000"],
  };

  return (
    <ReactApexChart
      options={options}
      series={finalData}
      type="heatmap"
      height={1000}
    />
  );
};

export default HeatMap;
